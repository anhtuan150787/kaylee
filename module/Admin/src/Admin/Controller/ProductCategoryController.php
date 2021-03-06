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

use Admin\Form\ProductCategory;

class ProductCategoryController extends AbstractActionController
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

        $model = $this->getServiceLocator()->get('ProductCategoryModel');

        $records = $model->getProductCategoryList();

        $view->setVariables(['records' => $records, 'status' => $this->status]);

        return $view;
    }

    public function addAction()
    {
        $actionTitle = 'Thêm';
        $view = new ViewModel();
        $form = new ProductCategory();
        $form->init();

        $model = $this->getServiceLocator()->get('ProductCategoryModel');

        if ($this->getRequest()->isPost()) {

            $form->setData($this->getRequest()->getPost());

            if ($form->isValid()) {
                $input = array();
                $input['product_category_name']    = $this->params()->fromPost('product_category_name');
                $input['product_category_parent']  = $this->params()->fromPost('product_category_parent');
                $input['product_category_status']  = $this->params()->fromPost('product_category_status');
                $model->save($input);

                $this->flashMessenger()->addMessage('Thêm thành công.');
                $this->redirect()->toRoute('admin/product-category');
            }
        }

        $ProductRoot = $model->getProductCategoryList();
        $optionsProductCategory = array(0 => '--- Gốc ---');
        foreach ($ProductRoot as $k => $v) {
            $optionsProductCategory[$v['product_category_id']] = str_repeat('__', $v['product_category_level']) . ' ' . $v['product_category_name'];
        }
        $form->get('product_category_parent')->setOptions(array('value_options' => $optionsProductCategory));
        $form->get('product_category_status')->setOptions(array('value_options' => $this->status));

        $data['form'] = $form;

        $view->setVariables(['form' => $form, 'actionTitle' => $actionTitle]);
        $view->setTemplate('admin/product-category/form.phtml');

        return $view;
    }

    public function editAction()
    {
        $actionTitle = 'Cập nhật';
        $view = new ViewModel();
        $form = new ProductCategory();
        $form->init();

        $model = $this->getServiceLocator()->get('ProductCategoryModel');
        $id = $this->params()->fromQuery('id');
        $record = $model->fetchRow($id);

        if ($this->getRequest()->isPost()) {

            $form->setData($this->getRequest()->getPost());

            if ($form->isValid()) {
                $input = array();
                $input['product_category_name']    = $this->params()->fromPost('product_category_name');
                $input['product_category_parent']  = $this->params()->fromPost('product_category_parent');
                $input['product_category_status']  = $this->params()->fromPost('product_category_status');
                $model->save($input, $id);

                $this->flashMessenger()->addMessage('Cập nhật thành công.');
                $this->redirect()->toRoute('admin/product-category');
            }
        }

        $form->bind($record);

        $ProductRoot = $model->getProductCategoryList();
        $optionsProductCategory = array(0 => '--- Gốc ---');
        foreach ($ProductRoot as $k => $v) {
            $optionsProductCategory[$v['product_category_id']] = str_repeat('__', $v['product_category_level']) . ' ' . $v['product_category_name'];
        }
        $form->get('product_category_parent')->setOptions(array('value_options' => $optionsProductCategory));
        $form->get('product_category_status')->setOptions(array('value_options' => $this->status));
        $form->get('submit')->setAttributes(array('value' => 'Cập nhật'));

        $data['form'] = $form;

        $view->setVariables(['form' => $form, 'record' => $record, 'actionTitle' => $actionTitle]);
        $view->setTemplate('admin/product-category/form.phtml');

        return $view;
    }

    public function deleteAction()
    {
        $id     = $this->params()->fromQuery('id');
        $model  = $this->getServiceLocator()->get('ProductCategoryModel');

        $model->delete($id);

        $this->flashMessenger()->addMessage('Xóa thành công');
        $this->redirect()->toRoute('admin/product-category');

        return $this->response();
    }
}
