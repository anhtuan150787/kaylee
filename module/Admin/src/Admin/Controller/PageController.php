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

use Admin\Form\Page;

class PageController extends AbstractActionController
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

        $model = $this->getServiceLocator()->get('PageModel');

        $records = $model->fetchAll();
        $records->setCurrentPageNumber($this->params()->fromQuery('page', 1));
        $records->setItemCountPerPage(20);

        $view->setVariables(['records' => $records, 'status' => $this->status]);

        return $view;
    }

    public function addAction()
    {
        $actionTitle = 'Thêm';
        $view = new ViewModel();
        $form = new Page();
        $form->init();

        $model = $this->getServiceLocator()->get('PageModel');

        if ($this->getRequest()->isPost()) {
            $form->setData($this->getRequest()->getPost());

            if ($form->isValid()) {
                $input = array();
                $input['page_title'] = $this->params()->fromPost('page_title');
                $input['page_content'] = $this->params()->fromPost('page_content');
                $input['page_status'] = $this->params()->fromPost('page_status');
                $model->save($input);

                $this->flashMessenger()->addMessage('Thêm thành công.');
                $this->redirect()->toRoute('admin/page');
            }
        }

        $form->get('page_status')->setOptions(array('value_options' => $this->status));

        $data['form'] = $form;

        $view->setVariables(['form' => $form, 'actionTitle' => $actionTitle]);
        $view->setTemplate('admin/page/form.phtml');

        return $view;
    }

    public function editAction()
    {
        $actionTitle = 'Cập nhật';
        $view = new ViewModel();
        $form = new Page();
        $form->init();

        $model = $this->getServiceLocator()->get('PageModel');
        $id = $this->params()->fromQuery('id');
        $record = $model->fetchRow($id);

        if ($this->getRequest()->isPost()) {
            $form->setData($this->getRequest()->getPost());

            if ($form->isValid()) {
                $input = array();
                $input['page_title'] = $this->params()->fromPost('page_title');
                $input['page_content'] = $this->params()->fromPost('page_content');
                $input['page_status'] = $this->params()->fromPost('page_status');
                $model->save($input, $id);

                $this->flashMessenger()->addMessage('Cập nhật thành công.');
                $this->redirect()->toRoute('admin/page');
            }
        }

        $form->bind($record);

        $form->get('page_status')->setOptions(array('value_options' => $this->status));
        $form->get('submit')->setAttributes(array('value' => 'Cập nhật'));

        $data['form'] = $form;

        $view->setVariables(['form' => $form, 'record' => $record, 'actionTitle' => $actionTitle]);
        $view->setTemplate('admin/page/form.phtml');

        return $view;
    }

    public function deleteAction()
    {
        $id     = $this->params()->fromQuery('id');
        $model  = $this->getServiceLocator()->get('PageModel');

        $model->delete($id);

        $this->flashMessenger()->addMessage('Xóa thành công');
        $this->redirect()->toRoute('admin/page');

        return $this->response();
    }
}
