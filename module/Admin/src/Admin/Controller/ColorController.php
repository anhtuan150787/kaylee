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
use Zend\Session\Container;
use Zend\View\Model\ViewModel;

use Admin\Form\Color;

class ColorController extends AbstractActionController
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

        $model = $this->getServiceLocator()->get('ColorModel');

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
        $form = new Color();
        $form->init();

        $uploadService = $this->getServiceLocator()->get('upload_file');
        $model = $this->getServiceLocator()->get('ColorModel');

        if ($this->getRequest()->isPost()) {
            $pictureInfo = $this->params()->fromFiles('color_picture');
            if (!empty($pictureInfo) && $pictureInfo['name'] != '') {
                $postData = array_merge_recursive($this->getRequest()->getPost()->toArray(), $this->getRequest()->getFiles()->toArray());
            } else {
                $postData = $this->getRequest()->getPost();
            }
            $form->setData($postData);

            if ($form->isValid()) {

                $pictureNewName = '';
                if (!empty($pictureInfo) && $pictureInfo['name'] != '') {
                    $uploadService->setPath('public/pictures');
                    $uploadService->setFile($pictureInfo['name']);
                    $uploadService->setPrefix('color_');
                    $uploadService->upload();
                    $pictureNewName = $uploadService->getNewFile();
                }

                $input = array();
                $input['color_name'] = $this->params()->fromPost('color_name');
                $input['color_status'] = $this->params()->fromPost('color_status');
                $input['color_picture'] = $pictureNewName;
                $model->save($input);

                $this->flashMessenger()->addMessage('Thêm thành công.');
                $this->redirect()->toRoute('admin/color');
            }
        }

        $form->get('color_status')->setOptions(array('value_options' => $this->status));

        $data['form'] = $form;

        $view->setVariables(['form' => $form, 'actionTitle' => $actionTitle]);
        $view->setTemplate('admin/color/form.phtml');

        return $view;
    }

    public function editAction()
    {
        $actionTitle = 'Cập nhật';
        $view = new ViewModel();
        $form = new Color();
        $form->init();

        $uploadService = $this->getServiceLocator()->get('upload_file');
        $model = $this->getServiceLocator()->get('ColorModel');

        $id = $this->params()->fromQuery('id');
        $record = $model->fetchRow($id);

        if ($this->getRequest()->isPost()) {

            $pictureInfo = $this->params()->fromFiles('color_picture');
            if (!empty($pictureInfo) && $pictureInfo['name'] != '') {
                $postData = array_merge_recursive($this->getRequest()->getPost()->toArray(), $this->getRequest()->getFiles()->toArray());
            } else {
                $postData = $this->getRequest()->getPost();
            }
            $form->setData($postData);

            if ($form->isValid()) {

                $input = array();

                if (!empty($pictureInfo) && $pictureInfo['name'] != '') {
                    $uploadService->setPath('public/pictures');
                    $uploadService->setFile($pictureInfo['name']);
                    $uploadService->setPrefix('color_');
                    $uploadService->upload();

                    unlink('public/pictures/' . $record['color_picture']);

                    $input['color_picture'] = $uploadService->getNewFile();
                }
                $input['color_name'] = $this->params()->fromPost('color_name');
                $input['color_status'] = $this->params()->fromPost('color_status');
                $model->save($input, $id);

                $this->flashMessenger()->addMessage('Cập nhật thành công.');
                $this->redirect()->toRoute('admin/color');
            }
        }

        $form->bind($record);

        $form->get('color_status')->setOptions(array('value_options' => $this->status));
        $form->get('submit')->setAttributes(array('value' => 'Cập nhật'));

        $data['form'] = $form;

        $view->setVariables(['form' => $form, 'record' => $record, 'actionTitle' => $actionTitle, 'id' => $id]);
        $view->setTemplate('admin/color/form.phtml');

        return $view;
    }

    public function deleteAction()
    {
        $id     = $this->params()->fromQuery('id');
        $model  = $this->getServiceLocator()->get('ColorModel');
        $record = $model->fetchRow($id);

        $model->delete($id);
        unlink('public/pictures/' . $record['color_picture']);

        $this->flashMessenger()->addMessage('Xóa thành công');
        $this->redirect()->toRoute('admin/color');

        return $this->response();
    }

    public function deletePictureAction()
    {
        $id     = $this->params()->fromPost('id');
        $model  = $this->getServiceLocator()->get('ColorModel');
        $record = $model->fetchRow($id);

        unlink('public/pictures/' . $record['color_picture']);

        $params                     = array();
        $params['color_picture']     = null;
        $model->save($params, $id);

        echo json_encode(array('return' => 1));

        return $this->response;
    }
}
