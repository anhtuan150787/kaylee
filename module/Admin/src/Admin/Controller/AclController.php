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

use Admin\Form\Acl;

class AclController extends AbstractActionController
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

        $model = $this->getServiceLocator()->get('AclModel');

        $records = $model->getAclList();

        $view->setVariables(['records' => $records, 'status' => $this->status]);

        return $view;
    }

    public function addAction()
    {
        $actionTitle = 'Thêm';
        $view = new ViewModel();
        $form = new Acl();
        $form->init();

        $model = $this->getServiceLocator()->get('AclModel');

        if ($this->getRequest()->isPost()) {

            $form->setData($this->getRequest()->getPost());

            if ($form->isValid()) {
                $input = array();
                $input['acl_module']        = $this->params()->fromPost('acl_module');
                $input['acl_controller']    = $this->params()->fromPost('acl_controller');
                $input['acl_action']        = $this->params()->fromPost('acl_action');
                $input['acl_status']        = $this->params()->fromPost('acl_status');
                $input['acl_name']          = $this->params()->fromPost('acl_name');
                $input['acl_parent']        = $this->params()->fromPost('acl_parent');
                $model->save($input);

                $this->flashMessenger()->addMessage('Thêm thành công.');
                $this->redirect()->toRoute('admin/acl');
            }
        }

        $aclRoot = $model->getAclRoot();
        $optionsAclRoot = array(0 => '--- Gốc ---');
        foreach ($aclRoot as $k => $v) {
            $optionsAclRoot[$v['acl_id']] = str_repeat('__', $v['acl_level']) . ' ' . $v['acl_name'];
        }
        $form->get('acl_parent')->setOptions(array('value_options' => $optionsAclRoot));
        $form->get('acl_status')->setOptions(array('value_options' => $this->status));

        $data['form'] = $form;

        $view->setVariables(['form' => $form, 'actionTitle' => $actionTitle]);
        $view->setTemplate('admin/acl/form.phtml');

        return $view;
    }

    public function editAction()
    {
        $actionTitle = 'Cập nhật';
        $view = new ViewModel();
        $form = new Acl();
        $form->init();

        $model = $this->getServiceLocator()->get('AclModel');
        $id = $this->params()->fromQuery('id');
        $record = $model->fetchRow($id);

        if ($this->getRequest()->isPost()) {

            $form->setData($this->getRequest()->getPost());

            if ($form->isValid()) {
                $input = array();
                $input['acl_module']        = $this->params()->fromPost('acl_module');
                $input['acl_controller']    = $this->params()->fromPost('acl_controller');
                $input['acl_action']        = $this->params()->fromPost('acl_action');
                $input['acl_status']        = $this->params()->fromPost('acl_status');
                $input['acl_name']          = $this->params()->fromPost('acl_name');
                $input['acl_parent']        = $this->params()->fromPost('acl_parent');
                $model->save($input, $id);

                $this->flashMessenger()->addMessage('Cập nhật thành công.');
                $this->redirect()->toRoute('admin/acl');
            }
        }

        $form->bind($record);

        $aclRoot = $model->getAclRoot();
        $optionsAclRoot = array(0 => '--- Gốc ---');
        foreach ($aclRoot as $k => $v) {
            $optionsAclRoot[$v['acl_id']] = str_repeat('__', $v['acl_level']) . ' ' . $v['acl_name'];
        }
        $form->get('acl_parent')->setOptions(array('value_options' => $optionsAclRoot));
        $form->get('acl_status')->setOptions(array('value_options' => $this->status));
        $form->get('submit')->setAttributes(array('value' => 'Cập nhật'));

        $data['form'] = $form;

        $view->setVariables(['form' => $form, 'actionTitle' => $actionTitle]);
        $view->setTemplate('admin/acl/form.phtml');

        return $view;
    }

    public function deleteAction()
    {
        $id     = $this->params()->fromQuery('id');
        $model  = $this->getServiceLocator()->get('AclModel');

        $model->delete($id);

        $this->flashMessenger()->addMessage('Xóa thành công');
        $this->redirect()->toRoute('admin/acl');

        return $this->response();
    }
}
