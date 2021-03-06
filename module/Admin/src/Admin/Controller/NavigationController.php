<?php
/**
 * Zend Framework (http://framework.zend.com/)
 *
 * @link      http://github.com/zendframework/ZendSkeletonApplication for the canonical source repository
 * @copyright Copyright (c) 2005-2015 Zend Technologies USA Inc. (http://www.zend.com)
 * @license   http://framework.zend.com/license/new-bsd New BSD License
 */

namespace Admin\Controller;

use Admin\View\Helper\Functions;
use Zend\Mvc\Controller\AbstractActionController;
use Zend\View\Model\ViewModel;

use Admin\Form\Navigation;

class NavigationController extends AbstractActionController
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

        $model = $this->getServiceLocator()->get('NavigationModel');

        $records = $model->getNavigationList();

        $view->setVariables(['records' => $records, 'status' => $this->status]);

        return $view;
    }

    public function addAction()
    {
        $actionTitle = 'Thêm';
        $view = new ViewModel();
        $functions = new Functions();
        $url = $this->getServiceLocator()->get('viewhelpermanager')->get('url');
        $form = new Navigation();
        $form->init();

        $model = $this->getServiceLocator()->get('NavigationModel');
        $productCategoryModel = $this->getServiceLocator()->get('ProductCategoryModel');
        $newsCategoryModel = $this->getServiceLocator()->get('NewsCategoryModel');
        $pageModel = $this->getServiceLocator()->get('PageModel');

        if ($this->getRequest()->isPost()) {

            $form->setData($this->getRequest()->getPost());

            if ($form->isValid()) {
                $input = array();
                $input['navigation_name']          = $this->params()->fromPost('navigation_name');
                $input['navigation_parent']        = $this->params()->fromPost('navigation_parent');
                $input['navigation_status']        = $this->params()->fromPost('navigation_status');
                $input['navigation_url']           = $this->params()->fromPost('navigation_url');
                $input['navigation_url_select']    = $this->params()->fromPost('navigation_url_select');
                $input['navigation_position']      = $this->params()->fromPost('navigation_position');
                $model->save($input);

                $this->flashMessenger()->addMessage('Thêm thành công.');
                $this->redirect()->toRoute('admin/navigation');
            }
        }

        $navigationRoot = $model->getNavigationList();
        $optionsNavigation = array(0 => '--- Gốc ---');
        foreach ($navigationRoot as $k => $v) {
            $optionsNavigation[$v['navigation_id']] = str_repeat('__', $v['navigation_level']) . ' ' . $v['navigation_name'];
        }

        $navigationUrlSelect = [];

        $navigationUrlSelectData = array('' => '--- Chọn Url đã có ---');

        $productCategory = $productCategoryModel->getProductCategoryList();
        foreach($productCategory as $v) {
            $navigationUrlSelectData[trim($url('home-product-category', array('name' => $functions->formatTitle($v['product_category_name']), 'id' => $v['product_category_id'])), '/')] = '[Danh mục sản phẩm] - ' . $v['product_category_name'];
        }

        $newsCategory = $newsCategoryModel->getNewsCategoryList();
        foreach($newsCategory as $v) {
            $navigationUrlSelectData[trim($url('home-news-category', array('name' => $functions->formatTitle($v['news_category_name']), 'id' => $v['news_category_id'])), '/')] = '[Danh mục bài viết] - ' . $v['news_category_name'];
        }

        $page = $pageModel->getAll();
        foreach($page as $v) {
            $navigationUrlSelectData[trim($url('home-page', array('name' => $functions->formatTitle($v['page_title']), 'id' => $v['page_id'])), '/')] = '[Trang nội dung] - ' . $v['page_title'];
        }

        $form->get('navigation_parent')->setOptions(array('value_options' => $optionsNavigation));
        $form->get('navigation_status')->setOptions(array('value_options' => $this->status));
        $form->get('navigation_url_select')->setOptions(array('value_options' => $navigationUrlSelectData));

        $data['form'] = $form;

        $view->setVariables(['form' => $form, 'actionTitle' => $actionTitle]);
        $view->setTemplate('admin/navigation/form.phtml');

        return $view;
    }

    public function editAction()
    {
        $actionTitle = 'Cập nhật';
        $view = new ViewModel();
        $functions = new Functions();
        $url = $this->getServiceLocator()->get('viewhelpermanager')->get('url');
        $form = new Navigation();
        $form->init();

        $model = $this->getServiceLocator()->get('NavigationModel');
        $productCategoryModel = $this->getServiceLocator()->get('ProductCategoryModel');
        $newsCategoryModel = $this->getServiceLocator()->get('NewsCategoryModel');
        $pageModel = $this->getServiceLocator()->get('PageModel');

        $id = $this->params()->fromQuery('id');
        $record = $model->fetchRow($id);

        if ($this->getRequest()->isPost()) {

            $form->setData($this->getRequest()->getPost());

            if ($form->isValid()) {
                $input = array();
                $input['navigation_name']          = $this->params()->fromPost('navigation_name');
                $input['navigation_parent']        = $this->params()->fromPost('navigation_parent');
                $input['navigation_status']        = $this->params()->fromPost('navigation_status');
                $input['navigation_url']           = $this->params()->fromPost('navigation_url');
                $input['navigation_url_select']    = $this->params()->fromPost('navigation_url_select');
                $input['navigation_position']      = $this->params()->fromPost('navigation_position');
                $model->save($input, $id);

                $this->flashMessenger()->addMessage('Cập nhật thành công.');
                $this->redirect()->toRoute('admin/navigation');
            }
        }

        $form->bind($record);

        $navigationRoot = $model->getNavigationList();
        $optionsNavigation = array(0 => '--- Gốc ---');
        foreach ($navigationRoot as $k => $v) {
            $optionsNavigation[$v['navigation_id']] = str_repeat('__', $v['navigation_level']) . ' ' . $v['navigation_name'];
        }

        $navigationUrlSelect = [];

        $navigationUrlSelectData = array('' => '--- Chọn Url đã có ---');

        $productCategory = $productCategoryModel->getProductCategoryList();
        foreach($productCategory as $v) {
            $navigationUrlSelectData[trim($url('home-product-category', array('name' => $functions->formatTitle($v['product_category_name']), 'id' => $v['product_category_id'])), '/')] = '[Danh mục sản phẩm] - ' . $v['product_category_name'];
        }

        $newsCategory = $newsCategoryModel->getNewsCategoryList();
        foreach($newsCategory as $v) {
            $navigationUrlSelectData[trim($url('home-news-category', array('name' => $functions->formatTitle($v['news_category_name']), 'id' => $v['news_category_id'])), '/')] = '[Danh mục bài viết] - ' . $v['news_category_name'];
        }

        $page = $pageModel->getAll();
        foreach($page as $v) {
            $navigationUrlSelectData[trim($url('home-page', array('name' => $functions->formatTitle($v['page_title']), 'id' => $v['page_id'])), '/')] = '[Trang nội dung] - ' . $v['page_title'];
        }

        $form->get('navigation_parent')->setOptions(array('value_options' => $optionsNavigation));
        $form->get('navigation_status')->setOptions(array('value_options' => $this->status));
        $form->get('navigation_url_select')->setOptions(array('value_options' => $navigationUrlSelectData));

        $form->get('submit')->setAttributes(array('value' => 'Cập nhật'));

        $data['form'] = $form;

        $view->setVariables(['form' => $form, 'actionTitle' => $actionTitle]);
        $view->setTemplate('admin/navigation/form.phtml');

        return $view;
    }

    public function deleteAction()
    {
        $id     = $this->params()->fromQuery('id');
        $model  = $this->getServiceLocator()->get('NavigationModel');

        $model->delete($id);

        $this->flashMessenger()->addMessage('Xóa thành công');
        $this->redirect()->toRoute('admin/navigation');

        return $this->response();
    }
}
