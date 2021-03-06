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

class EmailCustomerController extends AbstractActionController
{
    public function indexAction()
    {
        $view = new ViewModel();

        $model = $this->getServiceLocator()->get('EmailCustomerModel');

        $records = $model->fetchAll();
        $records->setCurrentPageNumber($this->params()->fromQuery('page', 1));
        $records->setItemCountPerPage(20);

        $view->setVariables(['records' => $records, 'status' => $this->status]);

        return $view;
    }

    public function exportAction()
    {
        $view = new ViewModel();

        $model = $this->getServiceLocator()->get('EmailCustomerModel');

        $records = $model->getAll();

        header("Content-type: application/vnd.ms-excel; name='excel'");
        header("Content-Disposition: attachment; filename=email-customer.xls");
        header("Pragma: no-cache");
        header("Expires: 0");

        $str = '<table border="1">
                    <tr>
                        <td><strong>Email</strong></td>
                    </tr>';

         foreach ($records as $record) {
            $str .= '<tr>
                        <td>' . $record['email_customer_name'] . '</td>
                    </tr>';
         }

        $str .= '</tbody></table>';

        echo $str;

        exit();
    }
}
