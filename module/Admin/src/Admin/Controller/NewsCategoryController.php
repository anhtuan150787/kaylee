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

use Admin\Form\NewsCategory;

class NewsCategoryController extends AbstractActionController
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

        $model = $this->getServiceLocator()->get('NewsCategoryModel');

        $records = $model->getNewsCategoryList();

        $view->setVariables(['records' => $records, 'status' => $this->status]);

        return $view;
    }

    public function addAction()
    {
        $actionTitle = 'Thêm';
        $view = new ViewModel();
        $form = new NewsCategory();
        $form->init();

        $model = $this->getServiceLocator()->get('NewsCategoryModel');

        if ($this->getRequest()->isPost()) {

            $form->setData($this->getRequest()->getPost());

            if ($form->isValid()) {
                $input = array();
                $input['news_category_name']    = $this->params()->fromPost('news_category_name');
                $input['news_category_parent']  = $this->params()->fromPost('news_category_parent');
                $input['news_category_status']  = $this->params()->fromPost('news_category_status');
                $model->save($input);

                $this->flashMessenger()->addMessage('Thêm thành công.');
                $this->redirect()->toRoute('admin/news-category');
            }
        }

        $newsCategoryRoot = $model->getNewsCategoryList();
        $optionsNewsCategory = array(0 => '--- Gốc ---');
        foreach ($newsCategoryRoot as $k => $v) {
            $optionsNewsCategory[$v['news_category_id']] = str_repeat('__', $v['news_category_level']) . ' ' . $v['news_category_name'];
        }
        $form->get('news_category_parent')->setOptions(array('value_options' => $optionsNewsCategory));
        $form->get('news_category_status')->setOptions(array('value_options' => $this->status));

        $data['form'] = $form;

        $view->setVariables(['form' => $form, 'actionTitle' => $actionTitle]);
        $view->setTemplate('admin/news-category/form.phtml');

        return $view;
    }

    public function editAction()
    {
        $actionTitle = 'Cập nhật';
        $view = new ViewModel();
        $form = new NewsCategory();
        $form->init();

        $model = $this->getServiceLocator()->get('NewsCategoryModel');
        $id = $this->params()->fromQuery('id');
        $record = $model->fetchRow($id);

        if ($this->getRequest()->isPost()) {

            $form->setData($this->getRequest()->getPost());

            if ($form->isValid()) {
                $input = array();
                $input['news_category_name']    = $this->params()->fromPost('news_category_name');
                $input['news_category_parent']  = $this->params()->fromPost('news_category_parent');
                $input['news_category_status']  = $this->params()->fromPost('news_category_status');
                $model->save($input, $id);

                $this->flashMessenger()->addMessage('Cập nhật thành công.');
                $this->redirect()->toRoute('admin/news-category');
            }
        }

        $form->bind($record);

        $newsCategoryRoot = $model->getNewsCategoryList();
        $optionsNewsCategory = array(0 => '--- Gốc ---');
        foreach ($newsCategoryRoot as $k => $v) {
            $optionsNewsCategory[$v['news_category_id']] = str_repeat('__', $v['news_category_level']) . ' ' . $v['news_category_name'];
        }
        $form->get('news_category_parent')->setOptions(array('value_options' => $optionsNewsCategory));
        $form->get('news_category_status')->setOptions(array('value_options' => $this->status));
        $form->get('submit')->setAttributes(array('value' => 'Cập nhật'));

        $data['form'] = $form;

        $view->setVariables(['form' => $form, 'record' => $record, 'actionTitle' => $actionTitle]);
        $view->setTemplate('admin/news-category/form.phtml');

        return $view;
    }

    public function deleteAction()
    {
        $id     = $this->params()->fromQuery('id');
        $model  = $this->getServiceLocator()->get('NewsCategoryModel');

        $model->delete($id);

        $this->flashMessenger()->addMessage('Xóa thành công');
        $this->redirect()->toRoute('admin/news-category');

        return $this->response();
    }
}
