<?php
/**
 * Zend Framework (http://framework.zend.com/)
 *
 * @link      http://github.com/zendframework/ZendSkeletonApplication for the canonical source repository
 * @copyright Copyright (c) 2005-2015 Zend Technologies USA Inc. (http://www.zend.com)
 * @license   http://framework.zend.com/license/new-bsd New BSD License
 */

namespace Admin\Controller;

use Admin\Form\GroupAdminAcl;
use Zend\Mvc\Controller\AbstractActionController;
use Zend\View\Model\ViewModel;

use Admin\Form\GroupAdmin;


class GroupAdminController extends AbstractActionController
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

        $model = $this->getServiceLocator()->get('GroupAdminModel');

        $records = $model->fetchList();
        $records->setCurrentPageNumber($this->params()->fromQuery('page', 1));
        $records->setItemCountPerPage(20);

        $view->setVariables(['records' => $records, 'status' => $this->status]);

        return $view;
    }

    public function addAction()
    {
        $actionTitle = 'Thêm';
        $view = new ViewModel();
        $form = new GroupAdmin();
        $form->init();

        $model = $this->getServiceLocator()->get('GroupAdminModel');

        if ($this->getRequest()->isPost()) {

            $form->setData($this->getRequest()->getPost());

            if ($form->isValid()) {
                $input = array();
                $input['group_admin_name']          = $this->params()->fromPost('group_admin_name');
                $input['group_admin_status']        = $this->params()->fromPost('group_admin_status');
                $model->save($input);

                $this->flashMessenger()->addMessage('Thêm thành công.');
                $this->redirect()->toRoute('admin/group-admin');
            }
        }

        $form->get('group_admin_status')->setOptions(array('value_options' => $this->status));
        $data['form'] = $form;

        $view->setVariables(['form' => $form, 'actionTitle' => $actionTitle]);
        $view->setTemplate('admin/group-admin/form.phtml');

        return $view;
    }

    public function editAction()
    {
        $actionTitle = 'Cập nhật';
        $view = new ViewModel();
        $form = new GroupAdmin();
        $form->init();

        $model = $this->getServiceLocator()->get('GroupAdminModel');
        $id = $this->params()->fromQuery('id');
        $record = $model->fetchRow($id);

        if ($this->getRequest()->isPost()) {

            $form->setData($this->getRequest()->getPost());

            if ($form->isValid()) {
                $input = array();
                $input['group_admin_name']          = $this->params()->fromPost('group_admin_name');
                $input['group_admin_status']        = $this->params()->fromPost('group_admin_status');
                $model->save($input, $id);

                $this->flashMessenger()->addMessage('Cập nhật thành công.');
                $this->redirect()->toRoute('admin/group-admin');
            }
        }

        $form->bind($record);
        $form->get('submit')->setAttributes(array('value' => 'Cập nhật'));
        $form->get('group_admin_status')->setOptions(array('value_options' => $this->status));
        $data['form'] = $form;

        $view->setVariables(['form' => $form, 'actionTitle' => $actionTitle]);
        $view->setTemplate('admin/group-admin/form.phtml');

        return $view;
    }

    public function deleteAction()
    {
        $id     = $this->params()->fromQuery('id');
        $model  = $this->getServiceLocator()->get('GroupAdminModel');

        $model->delete($id);

        $this->flashMessenger()->addMessage('Xóa thành công');
        $this->redirect()->toRoute('admin/group-admin');

        return $this->response();
    }

    public function aclAction()
    {
        $view = new ViewModel();
        $form =  new GroupAdminAcl();

        $menuModel  = $this->getServiceLocator()->get('MenuModel');
        $groupMenuModel = $this->getServiceLocator()->get('GroupMenuModel');

        $aclModel = $this->getServiceLocator()->get('AclModel');
        $groupAclModel = $this->getServiceLocator()->get('GroupAclModel');

        $id = $this->params()->fromQuery('id');

        if ($this->getRequest()->isPost()) {
            $menus = $this->params()->fromPost('menu');
            $acls = $this->params()->fromPost('acl');

            $groupMenuModel->saveWhere(['group_menu_status' => 0], ['group_admin_id' => $id]);
            foreach($menus as $k => $v) {
                $checkExist = $groupMenuModel->checkExistMenu($id, $k);

                if ($checkExist > 0) {
                    $groupMenuModel->saveWhere(['group_menu_status' => $v], ['group_admin_id' => $id, 'menu_id' => $k]);
                } else {
                    $groupMenuModel->save(['group_admin_id' => $id, 'menu_id' => $k, 'group_menu_status' => $v]);
                }
            }

            $groupAclModel->saveWhere(['group_acl_status' => 0], ['group_admin_id' => $id]);
            foreach($acls as $k => $v) {
                $checkExist = $groupAclModel->checkExistAcl($id, $k);

                if ($checkExist > 0) {
                    $groupAclModel->saveWhere(['group_acl_status' => $v], ['group_admin_id' => $id, 'acl_id' => $k]);
                } else {
                    $groupAclModel->save(['group_admin_id' => $id, 'acl_id' => $k, 'group_acl_status' => $v]);
                }
            }



            $this->flashMessenger()->addMessage('Cập nhật quyền thành công');
            $this->redirect()->toRoute('admin/group-admin');
        }

        $groupMenuResults = $groupMenuModel->getGroupMenu($id);
        $groupMenus = [];
        foreach($groupMenuResults as $v) {
            $groupMenus[$v['menu_id']] = $v;
        }
        $menus = $menuModel->getMenuList();

        $groupAclResults = $groupAclModel->getGroupAcl($id);
        $groupAcls = [];
        foreach($groupAclResults as $v) {
            $groupAcls[$v['acl_id']] = $v;
        }
        $acls = $aclModel->getAclList();


        $view->setVariables([
            'groupMenus' => $groupMenus,
            'menus' => $menus,
            'groupAcls' => $groupAcls,
            'acls' => $acls,
            'form' => $form,
        ]);

        return $view;
    }
}
