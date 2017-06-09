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

class MessageController extends AbstractActionController
{
    public function indexAction()
    {
        $this->layout()->setTemplate('layout/message');

        $type = $this->params()->fromRoute('type');

        $message = '';

        switch($type) {
            case 'deny':
                $message = 'Không có quyền truy cập';
                break;

            default:
                break;
        }

        $this->layout()->setVariable('message', $message);

        $view = new ViewModel();
        return $view;
    }
}
