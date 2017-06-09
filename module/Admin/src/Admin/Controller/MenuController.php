<?php
/**
 * Zend Framework (http://framework.zend.com/)
 *
 * @link      http://github.com/zendframework/ZendSkeletonApplication for the canonical source repository
 * @copyright Copyright (c) 2005-2015 Zend Technologies USA Inc. (http://www.zend.com)
 * @license   http://framework.zend.com/license/new-bsd New BSD License
 */

namespace Admin\Controller;

use Zend\Mvc\Controller\AbstractActionController;
use Zend\View\Model\ViewModel;

use Admin\Form\Menu;

class MenuController extends AbstractActionController
{
    private $status;

    public function __construct()
    {
        $this->status = [
            '1' => 'Kích hoạt',
            '0' => 'Tạm dừng',
        ];
    }
    public function indexAction()
    {
        $view = new ViewModel();

        $model = $this->getServiceLocator()->get('MenuModel');

        $records = $model->getMenuList();

        $view->setVariables(['records' => $records, 'status' => $this->status]);

        return $view;
    }

    public function addAction()
    {
        $actionTitle = 'Thêm';
        $view = new ViewModel();
        $form = new Menu();
        $form->init();

        $model = $this->getServiceLocator()->get('MenuModel');

        if ($this->getRequest()->isPost()) {

            $form->setData($this->getRequest()->getPost());

            if ($form->isValid()) {
                $input = array();
                $input['menu_name']          = $this->params()->fromPost('menu_name');
                $input['menu_parent']        = $this->params()->fromPost('menu_parent');
                $input['menu_status']        = $this->params()->fromPost('menu_status');
                $input['menu_url']        = $this->params()->fromPost('menu_url');
                $model->save($input);

                $this->flashMessenger()->addMessage('Thêm thành công.');
                $this->redirect()->toRoute('admin/menu');
            }
        }

        $menuRoot = $model->getMenuRoot();
        $optionsMenuRoot = array(0 => '--- Gốc ---');
        foreach ($menuRoot as $k => $v) {
            $optionsMenuRoot[$v['menu_id']] = str_repeat('__', $v['menu_level']) . ' ' . $v['menu_name'];
        }
        $form->get('menu_parent')->setOptions(array('value_options' => $optionsMenuRoot));
        $form->get('menu_status')->setOptions(array('value_options' => $this->status));

        $data['form'] = $form;

        $view->setVariables(['form' => $form, 'actionTitle' => $actionTitle]);
        $view->setTemplate('admin/menu/form.phtml');

        return $view;
    }

    public function editAction()
    {
        $actionTitle = 'Cập nhật';
        $view = new ViewModel();
        $form = new Menu();
        $form->init();

        $model = $this->getServiceLocator()->get('MenuModel');
        $id = $this->params()->fromQuery('id');
        $record = $model->fetchRow($id);

        if ($this->getRequest()->isPost()) {

            $form->setData($this->getRequest()->getPost());

            if ($form->isValid()) {
                $input = array();
                $input['menu_name']          = $this->params()->fromPost('menu_name');
                $input['menu_parent']        = $this->params()->fromPost('menu_parent');
                $input['menu_status']        = $this->params()->fromPost('menu_status');
                $input['menu_url']        = $this->params()->fromPost('menu_url');
                $model->save($input, $id);

                $this->flashMessenger()->addMessage('Cập nhật thành công.');
                $this->redirect()->toRoute('admin/menu');
            }
        }

        $form->bind($record);

        $menuRoot = $model->getMenuRoot();
        $optionsMenuRoot = array(0 => '--- Gốc ---');
        foreach ($menuRoot as $k => $v) {
            $optionsMenuRoot[$v['menu_id']] = str_repeat('__', $v['menu_level']) . ' ' . $v['menu_name'];
        }
        $form->get('menu_parent')->setOptions(array('value_options' => $optionsMenuRoot));
        $form->get('menu_status')->setOptions(array('value_options' => $this->status));
        $form->get('submit')->setAttributes(array('value' => 'Cập nhật'));

        $data['form'] = $form;

        $view->setVariables(['form' => $form, 'actionTitle' => $actionTitle]);
        $view->setTemplate('admin/menu/form.phtml');

        return $view;
    }

    public function deleteAction()
    {
        $id     = $this->params()->fromQuery('id');
        $model  = $this->getServiceLocator()->get('MenuModel');

        $model->delete($id);

        $this->flashMessenger()->addMessage('Xóa thành công');
        $this->redirect()->toRoute('admin/menu');

        return $this->response();
    }
}
