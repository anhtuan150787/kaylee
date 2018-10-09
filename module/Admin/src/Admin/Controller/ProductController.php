<?php
/**
 * Zend Framework (http://framework.zend.com/)
 *
 * @link      http://github.com/zendframework/ZendSkeletonApplication for the canonical source repository
 * @copyright Copyright (c) 2005-2015 Zend Technologies USA Inc. (http://www.zend.com)
 * @license   http://framework.zend.com/license/new-bsd New BSD License
 */

namespace Admin\Controller;

use Admin\Form\ProductDetail;
use Zend\Mvc\Controller\AbstractActionController;
use Zend\Session\Container;
use Zend\View\Model\ViewModel;

use Admin\Form\Product;

class ProductController extends AbstractActionController
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
        $session = new Container();
        $search = [];

        if (!isset($_GET['page'])) {
            $session->offsetUnset('search-product');
        }

        if ($session->offsetExists('search-product')) {
            $search = $session->offsetGet('search-product');
        }

        if ($this->getRequest()->isPost()) {
            $data = $this->params()->fromPost();
            $search['name'] = ($data['name'] != '') ? $data['name'] : null;
            $search['category'] = ($data['category'] != '') ? $data['category'] : null;
            $session->offsetSet('search-product', $search);
        }

        $model = $this->getServiceLocator()->get('ProductModel');

        $records = $model->fetchAll($search);
        $records->setCurrentPageNumber($this->params()->fromQuery('page', 1));
        $records->setItemCountPerPage(20);

        $productCategoryModel = $this->getServiceLocator()->get('ProductCategoryModel');
        $productCategory = $productCategoryModel->getProductCategoryList();

        $view->setVariables(['records' => $records, 'status' => $this->status, 'search' => $search, 'productCategory' => $productCategory]);

        return $view;
    }

    public function addAction()
    {
        $actionTitle = 'Thêm';
        $view = new ViewModel();
        $form = new Product();
        $form->init();

        $uploadService = $this->getServiceLocator()->get('upload_file');
        $model = $this->getServiceLocator()->get('ProductModel');
        $productCategoryModel = $this->getServiceLocator()->get('ProductCategoryModel');

        if ($this->getRequest()->isPost()) {
            $pictureInfo = $this->params()->fromFiles('product_picture');
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
                    $uploadService->setPrefix('product_');
                    $uploadService->upload();
                    $pictureNewName = $uploadService->getNewFile();
                }

                $input = array();
                $input['product_category_id'] = $this->params()->fromPost('product_category_id');
                $input['product_name'] = $this->params()->fromPost('product_name');
                $input['product_code'] = $this->params()->fromPost('product_code');
                $input['product_description'] = $this->params()->fromPost('product_description');
                $input['product_price'] = $this->params()->fromPost('product_price');
                $input['product_price_old'] = $this->params()->fromPost('product_price_old');
                $input['product_type_new'] = $this->params()->fromPost('product_type_new');
                $input['product_type_sale'] = $this->params()->fromPost('product_type_sale');
                $input['product_status'] = $this->params()->fromPost('product_status');
                $input['product_picture'] = $pictureNewName;
                $lastId = $model->save($input);

                $this->flashMessenger()->addMessage('Thêm thành công.');
                $this->redirect()->toRoute('admin/product', array('action' => 'edit'), array('query' => array('id' => $lastId)));

//                $this->redirect()->toRoute('admin/product');
            }
        }

        $productCategoryRoot = $productCategoryModel->getProductCategoryList();
        $optionsProductCategory = array(0 => '--- Chọn Danh mục ---');
        foreach ($productCategoryRoot as $k => $v) {
            $optionsProductCategory[$v['product_category_id']] = str_repeat('__', $v['product_category_level']) . ' ' . $v['product_category_name'];
        }
        $form->get('product_status')->setOptions(array('value_options' => $this->status));
        $form->get('product_category_id')->setOptions(array('value_options' => $optionsProductCategory));

        $data['form'] = $form;

        $view->setVariables(['form' => $form, 'actionTitle' => $actionTitle]);
        $view->setTemplate('admin/product/form.phtml');

        return $view;
    }

    public function editAction()
    {
        $actionTitle = 'Cập nhật';
        $view = new ViewModel();
        $form = new Product();
        $form->init();

        $uploadService = $this->getServiceLocator()->get('upload_file');
        $model = $this->getServiceLocator()->get('ProductModel');
        $productCategoryModel = $this->getServiceLocator()->get('ProductCategoryModel');
        $id = $this->params()->fromQuery('id');
        $record = $model->fetchRow($id);

        if ($this->getRequest()->isPost()) {

            $pictureInfo = $this->params()->fromFiles('product_picture');
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
                    $uploadService->setPrefix('product_');
                    $uploadService->upload();

                    unlink('public/pictures/' . $record['product_picture']);

                    $input['product_picture'] = $uploadService->getNewFile();
                }
                $input['product_category_id'] = $this->params()->fromPost('product_category_id');
                $input['product_name'] = $this->params()->fromPost('product_name');
                $input['product_code'] = $this->params()->fromPost('product_code');
                $input['product_description'] = $this->params()->fromPost('product_description');
                $input['product_price'] = $this->params()->fromPost('product_price');
                $input['product_price_old'] = $this->params()->fromPost('product_price_old');
                $input['product_type_new'] = $this->params()->fromPost('product_type_new');
                $input['product_type_sale'] = $this->params()->fromPost('product_type_sale');
                $input['product_status'] = $this->params()->fromPost('product_status');
                $model->save($input, $id);

                $this->flashMessenger()->addMessage('Cập nhật thành công.');
                $this->redirect()->toRoute('admin/product');
            }
        }

        $form->bind($record);

        $productCategoryRoot = $productCategoryModel->getProductCategoryList();
        $optionsProductCategory = array(0 => '--- Chọn Danh mục ---');
        foreach ($productCategoryRoot as $k => $v) {
            $optionsProductCategory[$v['product_category_id']] = str_repeat('__', $v['product_category_level']) . ' ' . $v['product_category_name'];
        }
        $form->get('product_status')->setOptions(array('value_options' => $this->status));
        $form->get('product_category_id')->setOptions(array('value_options' => $optionsProductCategory));
        $form->get('submit')->setAttributes(array('value' => 'Cập nhật'));

        $data['form'] = $form;

        $view->setVariables(['form' => $form, 'record' => $record, 'actionTitle' => $actionTitle, 'id' => $id]);
        $view->setTemplate('admin/product/form.phtml');

        return $view;
    }

    public function deleteAction()
    {
        $id     = $this->params()->fromQuery('id');
        $model  = $this->getServiceLocator()->get('ProductModel');
        $record = $model->fetchRow($id);

        $model->delete($id);
        unlink('public/pictures/' . $record['product_picture']);

        $this->flashMessenger()->addMessage('Xóa thành công');
        $this->redirect()->toRoute('admin/product');

        return $this->response();
    }

    public function deletePictureAction()
    {
        $id     = $this->params()->fromPost('id');
        $model  = $this->getServiceLocator()->get('ProductModel');
        $record = $model->fetchRow($id);

        unlink('public/pictures/' . $record['product_picture']);

        $params                     = array();
        $params['product_picture']  = null;
        $model->save($params, $id);

        echo json_encode(array('return' => 1));

        return $this->response;
    }

    public function colorAction()
    {
        $view = new ViewModel();
        $this->layout('layout/simple');

        $product_id = $this->params()->fromRoute('product_id');

        $productDetailModel = $this->getServiceLocator()->get('ProductDetailModel');
        $productDetails = $productDetailModel->getAllByProduct($product_id);

        $view->setVariables(['product_id' => $product_id, 'productDetails' => $productDetails, 'status' => $this->status]);

        return $view;
    }

    public function colorAddAction() {
        $view = new ViewModel();
        $this->layout('layout/simple');

        $product_id = $this->params()->fromRoute('product_id');

        $form = new ProductDetail();

        $colorModel = $this->getServiceLocator()->get('ColorModel');
        $sizeModel = $this->getServiceLocator()->get('SizeModel');
        $productDetailModel = $this->getServiceLocator()->get('ProductDetailModel');
        $productPictureModel = $this->getServiceLocator()->get('ProductPictureModel');
        $uploadService = $this->getServiceLocator()->get('upload_file');

        if ($this->getRequest()->isPost()) {

            $form->setData($this->params()->fromPost());

            if ($form->isValid()) {

                $size_id = $this->params()->fromPost('size_id');

                $params = [];
                $params['color_id'] = $this->params()->fromPost('color_id');
                $params['size_id'] = ',' . implode(',', $size_id) . ',';
                $params['product_id'] = $product_id;
                $params['product_detail_status'] = $this->params()->fromPost('product_detail_status');;
                $result = $productDetailModel->save($params);

                if ($result) {

                    for ($i = 1; $i <= 6; $i++) {
                        $pictureNewName = '';
                        $pictureInfo = $this->params()->fromFiles('picture_' . $i);
                        if (!empty($pictureInfo) && $pictureInfo['name'] != '') {
                            $uploadService->setPath('public/pictures');
                            $uploadService->setFile($pictureInfo['name']);
                            $uploadService->setPrefix('productcolor' . $i . '_');
                            $uploadService->upload();
                            $pictureNewName = $uploadService->getNewFile();
                        }

                        $paramsPicture = [];
                        $paramsPicture['product_picture_name'] = $pictureNewName;
                        $paramsPicture['product_detail_id'] = $result;
                        $paramsPicture['product_picture_position'] = $i;
                        $productPictureModel->saveWherePosition($paramsPicture);
                    }
                    $this->flashMessenger()->addMessage('Thêm thành công');
                    $this->redirect()->toRoute('admin/product', array('action' => 'color', 'product_id' => $product_id));
                }
            }
        }

        $color = $colorModel->getAll();
        $colorData = [];
        $colorData = array(0 => '--- Chọn Màu ---');
        foreach($color as $v) {
            $colorData[$v['color_id']] = $v['color_name'];
        }

        $size = $sizeModel->getAll();
        $sizeData = [];
        foreach($size as $v) {
            $sizeData[$v['size_id']] = $v['size_name'];
        }

        $form->get('product_detail_status')->setOptions(array('value_options' => $this->status));
        $form->get('color_id')->setOptions(array('value_options' => $colorData));
        $form->get('size_id')->setOptions(array('value_options' => $sizeData));

        $view->setVariables([
            'form' => $form,
            'product_id' => $product_id,
        ]);

        return $view;
    }

    public function colorEditAction()
    {
        $view = new ViewModel();
        $this->layout('layout/simple');

        $product_id = $this->params()->fromRoute('product_id');
        $id = $this->params()->fromQuery('id');

        $form = new ProductDetail();

        $colorModel = $this->getServiceLocator()->get('ColorModel');
        $sizeModel = $this->getServiceLocator()->get('SizeModel');
        $productDetailModel = $this->getServiceLocator()->get('ProductDetailModel');
        $productPictureModel = $this->getServiceLocator()->get('ProductPictureModel');
        $uploadService = $this->getServiceLocator()->get('upload_file');

        $record = $productDetailModel->fetchRow($id);

        $pictures = $productPictureModel->getAllByProductDetail($id);
        $pictureData = [];
        foreach($pictures as $v) {
            $pictureData[$v['product_picture_position']] = $v;
        }

        if ($this->getRequest()->isPost()) {

            $form->setData($this->params()->fromPost());

            if ($form->isValid()) {

                $size_id = $this->params()->fromPost('size_id');

                $params = [];
                $params['color_id'] = $this->params()->fromPost('color_id');
                $params['size_id'] = ',' . implode(',', $size_id) . ',';
                $params['product_id'] = $product_id;
                $params['product_detail_status'] = $this->params()->fromPost('product_detail_status');;
                $productDetailModel->save($params, $id);

                for ($i = 1; $i <= 6; $i++) {
                    $pictureNewName = '';
                    $pictureInfo = $this->params()->fromFiles('picture_' . $i);
                    if (!empty($pictureInfo) && $pictureInfo['name'] != '') {
                        $uploadService->setPath('public/pictures');
                        $uploadService->setFile($pictureInfo['name']);
                        $uploadService->setPrefix('productcolor' . $i . '_');
                        $uploadService->upload();
                        $pictureNewName = $uploadService->getNewFile();

                        $paramsPicture = [];
                        $paramsPicture['product_picture_name'] = $pictureNewName;
                        $productPictureModel->saveWherePosition($paramsPicture, $id, $i);

                        unlink('public/pictures/' . $pictureData[$i]['product_picture_name']);
                    }
                }

                $this->flashMessenger()->addMessage('Thêm thành công');
                $this->redirect()->toRoute('admin/product', array('action' => 'color', 'product_id' => $product_id));

            }
        }

        $form->bind($record);

        $color = $colorModel->getAll();
        $colorData = [];
        $colorData = array(0 => '--- Chọn Màu ---');
        foreach($color as $v) {
            $colorData[$v['color_id']] = $v['color_name'];
        }

        $sizeRecord = $record['size_id'];
        $sizeRecordArr = explode(',', $sizeRecord);

        $size = $sizeModel->getAll();
        $sizeData = [];
        foreach($size as $v) {
            $sizeData[$v['size_id']] = $v['size_name'];
        }

        $form->get('product_detail_status')->setOptions(array('value_options' => $this->status));
        $form->get('color_id')->setOptions(array('value_options' => $colorData));
        $form->get('size_id')->setOptions(array('value_options' => $sizeData))->setAttributes(['value' => $sizeRecordArr]);
        $form->get('submit')->setAttributes(array('value' => 'Cập nhật'));

        $view->setVariables([
            'form' => $form,
            'pictures' => $pictureData,
            'id' => $id,
            'product_id' => $product_id,
        ]);
        $view->setTemplate('admin/product/color-add.phtml');
        return $view;
    }

    public function colorDeleteAction()
    {
        $id     = $this->params()->fromQuery('id');
        $product_id = $this->params()->fromRoute('product_id');

        $productPictureModel  = $this->getServiceLocator()->get('ProductPictureModel');
        $productDetailModel  = $this->getServiceLocator()->get('ProductDetailModel');

        $records = $productPictureModel->getAllByProductDetail($id);

        $productDetailModel->delete($id);
        $productPictureModel->deleteByProductDetail($id);

        foreach($records as $v) {
            unlink('public/pictures/' . $v['product_picture_name']);
        }

        $this->flashMessenger()->addMessage('Xóa thành công');
        $this->redirect()->toRoute('admin/product', array('action' => 'color', 'product_id' => $product_id));

        return $this->response();
    }

    public function deleteColorPictureAction()
    {
        $id     = $this->params()->fromPost('id');
        $model  = $this->getServiceLocator()->get('ProductPictureModel');
        $record = $model->fetchRow($id);

        unlink('public/pictures/' . $record['product_picture_name']);

        $params                     = array();
        $params['product_picture_name'] = null;
        $model->save($params, $id);

        echo json_encode(array('return' => 1));

        return $this->response;
    }
}
