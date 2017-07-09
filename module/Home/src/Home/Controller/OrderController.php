<?php
/**
 * Zend Framework (http://framework.zend.com/)
 *
 * @link      http://github.com/zendframework/ZendSkeletonApplication for the canonical source repository
 * @copyright Copyright (c) 2005-2015 Zend Technologies USA Inc. (http://www.zend.com)
 * @license   http://framework.zend.com/license/new-bsd New BSD License
 */

namespace Home\Controller;

use Admin\View\Helper\Currency;
use Zend\Mvc\Controller\AbstractActionController;
use Zend\Session\Container;
use Zend\View\Model\ViewModel;
use Zend\Authentication\AuthenticationService;
use Home\Form\Order;

class OrderController extends AbstractActionController
{
    private $districts = [];

    public function __construct()
    {
        $this->districts = [
            '' => '-- Quận/Huyện --',
            '1' => 'Quận 1',
            '2' => 'Quận 2',
            '3' => 'Quận 3',
            '4' => 'Quận 4',
            '5' => 'Quận 5',
            '6' => 'Quận 6',
            '7' => 'Quận 7',
            '8' => 'Quận 8',
            '9' => 'Quận 9',
            '10' => 'Quận 10',
            '11' => 'Quận 11',
            '12' => 'Quận 12',
            '13' => 'Quận Bình Tân',
            '14' => 'Quận Bình Thạnh',
            '15' => 'Quận Gò Vấp',
            '16' => 'Quận Phú Nhuận',
            '17' => 'Quận Tân Bình',
            '18' => 'Quận Tân Phú',
            '19' => 'Quận Thủ Đức',
            '20' => 'Huyện Bình Chánh',
            '21' => 'Huyện Củ Chi',
            '22' => 'Huyện Hóc Môn',
            '23' => 'Huyện Nhà Bè',
            '24' => 'Huyện Cần Giờ',
            '25' => 'Tỉnh thành khác',
        ];
    }

    public function indexAction()
    {
        $session = new Container('cart');
        $view = new ViewModel();
        $model = $this->getServiceLocator()->get('FrontProductModel');
        $sizeModel = $this->getServiceLocator()->get('FrontSizeModel');
        $colorModel = $this->getServiceLocator()->get('FrontColorModel');

        $data = $this->params()->fromPost();

        $id = $data['product_id'];
        $colorId = $data['color'];
        $sizeId = $data['size'];

        $color = $colorModel->fetchRow($colorId);
        $size = $sizeModel->fetchRow($sizeId);

        $product = $model->fetchRow($id);

        if ($id != '') {
            if ($session->offsetExists('order')) {
                $order = $session->offsetGet('order');
                if (!isset($order['products'][$product['product_id']])) {
                    $order['products'][$product['product_id']] = $product;
                    $order['products'][$product['product_id']]['color'] = $color['color_name'];
                    $order['products'][$product['product_id']]['size'] = $size['size_name'];
                    if ($this->params()->fromPost('quality') != '') {
                        $order['products'][$product['product_id']]['quality'] = $this->params()->fromPost('quality');
                    } else {
                        $order['products'][$product['product_id']]['quality'] = 1;
                    }
                }
            } else {
                $order = [];
                $order['products'][$product['product_id']] = $product;
                $order['products'][$product['product_id']]['color'] = $color['color_name'];
                $order['products'][$product['product_id']]['size'] = $size['size_name'];
                if ($this->params()->fromPost('quality') != '') {
                    $order['products'][$product['product_id']]['quality'] = $this->params()->fromPost('quality');
                } else {
                    $order['products'][$product['product_id']]['quality'] = 1;
                }

            }
        } else {
            $order = $session->offsetGet('order');
        }

        $order['fee'] = 0;
        $order['district'] = null;

        $order = $this->calculateAmount($order);

        $session->offsetSet('order', $order);

        $breadcrumbs = '<div id="breadcrumb" class="desktop-12">
                            <a href="./" class="homepage-link">Trang chủ</a>
                            <span class="separator">»</span>
                            <span class="page-title">Giỏ hàng</span>
                        </div>';

        $view->setVariables([
            'order' => $order,
            'breadcrumbs' => $breadcrumbs,
        ]);

        return $view;
    }

    public function deleteItemAction()
    {
        $session = new Container('cart');

        $view = new ViewModel();
        $data = $this->params()->fromRoute();
        $id = $data['id'];
        $order = $session->offsetGet('order');

        if (isset($order['products'][$id])) {
            unset($order['products'][$id]);
        }

        $session->offsetSet('order', $order);

        $this->redirect()->toRoute('home-order');
    }

    public function updateAction()
    {
        if ($this->getRequest()->isPost()) {
            $view = new ViewModel();
            $session = new Container('cart');
            $order = $session->offsetGet('order');

            $data = $this->params()->fromPost();
            foreach ($data['quality'] as $k => $v) {
                if (isset($order['products'][$k])) {
                    if ($v > 0) {
                        $order['products'][$k]['quality'] = $v;
                    }
                }
            }
            $session->offsetSet('order', $order);
            $this->redirect()->toRoute('home-order');
        }
    }

    public function calculateAmount($order)
    {
        $amount = 0;
        foreach ($order['products'] as $k => $v) {
            $amount += $order['products'][$k]['price_total'] = $v['product_price'] * $v['quality'];
        }

        //$fee = 0;
        $amountTotal = $amount + $order['fee'];

        $order['amount'] = $amount;
        $order['amountTotal'] = $amountTotal;

        return $order;
    }

    public function confirmAction()
    {
        $currency = new Currency();
        $view = new ViewModel();
        $session = new Container('cart');
        $orderModel = $this->getServiceLocator()->get('FrontOrderModel');
        $orderDetailModel = $this->getServiceLocator()->get('FrontOrderDetailModel');
        $form = new Order();

        $order = $session->offsetGet('order');

        if ($this->getRequest()->isPost()) {
            $data = $this->params()->fromPost();
            $form->setData($data);

            if ($form->isValid()) {
                $params = [];
                $params['order_fullname'] = $data['order_fullname'];
                $params['order_phone'] = $data['order_phone'];
                $params['order_address'] = $data['order_address'];
                $params['order_email'] = $data['order_email'];
                $params['order_note'] = $data['order_note'];
                $params['order_fee'] = $order['fee'];
                $params['order_amount'] = $order['amountTotal'];
                $params['order_date'] = date('Y-m-d H:i:s');
                $params['order_status'] = 0;
                $params['order_time_from'] = $data['order_time_from'];
                $params['order_time_to'] = $data['order_time_to'];
                $params['order_district'] = $this->districts[$data['order_district']];
                $params['order_payment_method'] = $data['payment_method'];
                $orderId = $orderModel->save($params);
                $orderCode = strtoupper(substr(str_shuffle('zxcvbnmasdfghjklqwertyuiop'), 0, 2) . substr(time(), -3) . $orderId);

                $orderModel->save(array('order_code' => $orderCode), $orderId);

                $contentMail = '';

                foreach ($order['products'] as $v) {
                    $paramsOrderDetail = [];
                    $paramsOrderDetail['order_id'] = $orderId;
                    $paramsOrderDetail['product_name'] = $v['product_name'];
                    $paramsOrderDetail['product_price'] = $v['product_price'];
                    $paramsOrderDetail['product_id'] = $v['product_id'];
                    $paramsOrderDetail['quality'] = $v['quality'];
                    $paramsOrderDetail['product_picture'] = $v['product_picture'];
                    $paramsOrderDetail['product_code'] = $v['product_code'];
                    $paramsOrderDetail['size'] = $v['size'];
                    $paramsOrderDetail['color'] = $v['color'];
                    $orderDetailModel->save($paramsOrderDetail);


                    $contentMail .= '<tr>
                                        <td>
                                            <div class="cart-item">
                                                <div class="cart-title">
                                                    <p>' . $v['product_name'] . ' - ' . $v['color'] . ' / ' . $v['size'] . '</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <p><span class="money">' . $currency->__invoke($v['product_price']) . '</span></p>
                                        </td>
                                        <td>
                                            ' . $v['quality'] . '
                                        </td>

                                        <td>
                                            <p><span class="money"> ' . $currency->__invoke($v['price_total']) . '</span></p>
                                        </td>
                                    </tr>';

                }

                $bodyMail = file_get_contents('data/email-template/email_order.php');
                $time = date('d/m/Y H:i');

                //Replace
                $patterns = [];
                $patterns[0] = '/{fullname}/';
                $patterns[1] = '/{email}/';
                $patterns[2] = '/{address}/';
                $patterns[3] = '/{phone}/';
                $patterns[4] = '/{content}/';

                $patterns[5] = '/{amount}/';
                $patterns[6] = '/{fee}/';
                $patterns[7] = '/{amountTotal}/';

                $patterns[8] = '/{note}/';
                $patterns[9] = '/{order_code}/';

                $patterns[10] = '/{time_from}/';
                $patterns[11] = '/{time_to}/';

                $patterns[12] = '/{district}/';
                $patterns[13] = '/{paymentMethod}/';

                $patterns[14] = '/{time}/';

                $replacements = [];
                $replacements[0] = $data['order_fullname'];
                $replacements[1] = $data['order_email'];
                $replacements[2] = $data['order_address'];
                $replacements[3] = $data['order_phone'];
                $replacements[4] = $contentMail;

                $replacements[5] = $currency->__invoke($order['amount']);
                if ($data['order_district'] == 25) {
                    $replacements[6] = 'Đơn hàng chưa bao gồm phí ship<br> Kaylee sẽ liên hệ báo phí sau';
                } else {
                    $replacements[6] = $currency->__invoke($order['fee']);
                }
                $replacements[7] = $currency->__invoke($order['amountTotal']);

                $replacements[8] = $data['order_note'];
                $replacements[9] = $orderCode;

                $replacements[10] = $data['order_time_from'];
                $replacements[11] = $data['order_time_to'];

                $replacements[12] = $this->districts[$data['order_district']];
                $replacements[13] = $data['payment_method'];

                $replacements[14] = $time;

                $bodyMail = preg_replace($patterns, $replacements, $bodyMail);

                $sendMail = $this->getServiceLocator()->get('send_mail');

                $sendMail->setTo($data['order_email']);
                $sendMail->setSubject('Đơn đặt hàng tại Kaylee.vn');
                $sendMail->setBody($bodyMail);
                $sendMail->action();

                $config = include 'config/mailer.php';
                $bodyMailSecond = '<p>Có một đơn hàng mã: <strong>' .$orderCode . '</strong> vừ đặt lúc: <strong>' . $time . '</strong></p>';
                $sendMail->setTo($config['to_second']);
                $sendMail->setSubject('Đơn đặt hàng tại Kaylee.vn');
                $sendMail->setBody($bodyMailSecond);
                $sendMail->action();


                $sendMail->setTo('kayleeshoesvn@gmail.com');
                $sendMail->setSubject('Đơn đặt hàng tại Kaylee.vn');
                $sendMail->setBody($bodyMailSecond);
                $sendMail->action();


                $session->offsetUnset('order');
                $this->redirect()->toRoute('home-order-success');

            } else {

            }
        }

        $arrayTime = [];
        for($i = 8; $i <= 18; $i++) {
            $ii = $i;
            if ($i < 10) {
                $ii = '0' . $ii;
            }
            $ii = $ii . ':00';
            $arrayTime[$ii] = $ii;
        }
        $form->get('order_time_from')->setValue('08:00')->setOptions(array('value_options' => $arrayTime));
        $form->get('order_time_to')->setValue('18:00')->setOptions(array('value_options' => $arrayTime));

        $form->get('order_district')->setOptions(array('value_options' => $this->districts));
        if (isset($order['district'])) {
            $form->get('order_district')->setValue($order['district']);
        }

        $breadcrumbs = '<div id="breadcrumb" class="desktop-12">
                            <a href="./" class="homepage-link">Trang chủ</a>
                            <span class="separator">»</span>
                            <a href="' . $this->url()->fromRoute('home-order') . '">Giỏ hàng</a>
                            <span class="separator">»</span>
                            <span class="page-title">Thanh toán</span>
                        </div>';

        $view->setVariables([
            'order' => $order,
            'form' => $form,
            'breadcrumbs' => $breadcrumbs,
            'districts' => $this->districts,
        ]);

        return $view;
    }

    public function updateFeeAction()
    {
        $session = new Container('cart');
        $order = $session->offsetGet('order');
        $current = new Currency();

        $districtId = $this->params()->fromPost('district');

        if (isset($this->districts[$districtId])) {
            if (in_array($districtId, array('1', '2', '3', '4', '7'))) {
                $order['fee'] = 20000;
            } else {
                $order['fee'] = 30000;
            }
            if ($order['amount'] > 1500000 || $districtId == 25) {
                $order['fee'] = 0;
            }
            $order['amountTotal'] = $order['fee'] + $order['amount'];
            $order['district'] = $districtId;
            $session->offsetSet('order', $order);
        }

        echo json_encode(array('return' => 1, 'fee' => $current->__invoke($order['fee']), 'amountTotal' => $current->__invoke($order['amountTotal']), 'districtName' => $this->districts[$districtId]));

        return $this->response;
    }

    public function successAction()
    {
        $breadcrumbs = '<div id="breadcrumb" class="desktop-12">
                            <a href="./" class="homepage-link">Trang chủ</a>
                            <span class="separator">»</span>
                            <span class="page-title">Thanh toán</span>
                        </div>';

        $view = new ViewModel(['breadcrumbs' => $breadcrumbs]);
        return $view;
    }

}
