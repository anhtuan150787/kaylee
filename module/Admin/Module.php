<?php
/**
 * Zend Framework (http://framework.zend.com/)
 *
 * @link      http://github.com/zendframework/ZendSkeletonApplication for the canonical source repository
 * @copyright Copyright (c) 2005-2015 Zend Technologies USA Inc. (http://www.zend.com)
 * @license   http://framework.zend.com/license/new-bsd New BSD License
 */

namespace Admin;

use Admin\Model\Color;
use Admin\Model\Contact;
use Admin\Model\EmailCustomer;
use Admin\Model\GroupAcl;
use Admin\Model\Navigation;
use Admin\Model\News;
use Admin\Model\NewsCategory;
use Admin\Model\Order;
use Admin\Model\OrderDetail;
use Admin\Model\Page;
use Admin\Model\Product;
use Admin\Model\ProductCategory;
use Admin\Model\ProductDetail;
use Admin\Model\ProductPicture;
use Admin\Model\Size;
use Admin\Model\Website;
use Zend\ModuleManager\Listener\ModuleLoaderListener;
use Zend\Mvc\MvcEvent;
use Zend\Authentication\AuthenticationService;

use Zend\Permissions\Acl\Acl;
use Zend\Permissions\Acl\Role\GenericRole as Role;
use Zend\Permissions\Acl\Resource\GenericResource as Resource;

use Zend\Db\TableGateway\TableGateway;

use Admin\Model\Menu;
use Admin\Model\Build;
use Admin\Model\GroupAdmin;
use Admin\Model\Admin;
use Admin\Model\GroupMenu;
use Admin\Model\Acl as AclAdmin;
use Admin\Model\Template;

class Module
{
    public function getConfig()
    {
        return include __DIR__ . '/config/module.config.php';
    }

    public function getAutoloaderConfig()
    {
        return array(
            'Zend\Loader\StandardAutoloader' => array(
                'namespaces' => array(
                    __NAMESPACE__ => __DIR__ . '/src/' . __NAMESPACE__,
                ),
            ),
        );
    }

    public function getServiceConfig()
    {
        return array(
            'factories' => array(
                'MenuModel' => function ($sm) {
                    $dbAdapter = $sm->get('Zend/Db/Adapter/Adapter');
                    $tableGateway = new TableGateway('menu', $dbAdapter);
                    return new Menu($tableGateway);
                },
                'GroupMenuModel' => function ($sm) {
                    $dbAdapter = $sm->get('Zend/Db/Adapter/Adapter');
                    $tableGateway = new TableGateway('group_menu', $dbAdapter);
                    return new GroupMenu($tableGateway);
                },
                'BuildModel' => function ($sm) {
                    $dbAdapter = $sm->get('Zend/Db/Adapter/Adapter');
                    $tableGateway = new TableGateway('build', $dbAdapter);
                    return new Build($tableGateway);
                },
                'GroupAdminModel' => function ($sm) {
                    $dbAdapter = $sm->get('Zend/Db/Adapter/Adapter');
                    $tableGateway = new TableGateway('group_admin', $dbAdapter);
                    return new GroupAdmin($tableGateway, $dbAdapter);
                },
                'AdminModel' => function ($sm) {
                    $dbAdapter = $sm->get('Zend/Db/Adapter/Adapter');
                    $tableGateway = new TableGateway('admin', $dbAdapter);
                    return new Admin($tableGateway, $dbAdapter);
                },
                'AclModel' => function ($sm) {
                    $dbAdapter = $sm->get('Zend/Db/Adapter/Adapter');
                    $tableGateway = new TableGateway('acl', $dbAdapter);
                    return new AclAdmin($tableGateway);
                },
                'GroupAclModel' => function ($sm) {
                    $dbAdapter = $sm->get('Zend/Db/Adapter/Adapter');
                    $tableGateway = new TableGateway('group_acl', $dbAdapter);
                    return new GroupAcl($tableGateway);
                },
                'NavigationModel' => function ($sm) {
                    $dbAdapter = $sm->get('Zend/Db/Adapter/Adapter');
                    $tableGateway = new TableGateway('navigation', $dbAdapter);
                    return new Navigation($tableGateway);
                },
                'PageModel' => function ($sm) {
                    $dbAdapter = $sm->get('Zend/Db/Adapter/Adapter');
                    $tableGateway = new TableGateway('page', $dbAdapter);
                    return new Page($tableGateway);
                },
                'NewsCategoryModel' => function ($sm) {
                    $dbAdapter = $sm->get('Zend/Db/Adapter/Adapter');
                    $tableGateway = new TableGateway('news_category', $dbAdapter);
                    return new NewsCategory($tableGateway);
                },
                'NewsModel' => function ($sm) {
                    $dbAdapter = $sm->get('Zend/Db/Adapter/Adapter');
                    $tableGateway = new TableGateway('news', $dbAdapter);
                    return new News($tableGateway);
                },
                'ProductCategoryModel' => function ($sm) {
                    $dbAdapter = $sm->get('Zend/Db/Adapter/Adapter');
                    $tableGateway = new TableGateway('product_category', $dbAdapter);
                    return new ProductCategory($tableGateway);
                },
                'ProductModel' => function ($sm) {
                    $dbAdapter = $sm->get('Zend/Db/Adapter/Adapter');
                    $tableGateway = new TableGateway('product', $dbAdapter);
                    return new Product($tableGateway);
                },
                'OrderModel' => function ($sm) {
                    $dbAdapter = $sm->get('Zend/Db/Adapter/Adapter');
                    $tableGateway = new TableGateway('order', $dbAdapter);
                    return new Order($tableGateway);
                },
                'OrderDetailModel' => function ($sm) {
                    $dbAdapter = $sm->get('Zend/Db/Adapter/Adapter');
                    $tableGateway = new TableGateway('order_detail', $dbAdapter);
                    return new OrderDetail($tableGateway);
                },
                'TemplateModel' => function ($sm) {
                    $dbAdapter = $sm->get('Zend/Db/Adapter/Adapter');
                    $tableGateway = new TableGateway('template', $dbAdapter);
                    return new Template($tableGateway);
                },
                'ColorModel' => function ($sm) {
                    $dbAdapter = $sm->get('Zend/Db/Adapter/Adapter');
                    $tableGateway = new TableGateway('color', $dbAdapter);
                    return new Color($tableGateway);
                },
                'SizeModel' => function ($sm) {
                    $dbAdapter = $sm->get('Zend/Db/Adapter/Adapter');
                    $tableGateway = new TableGateway('size', $dbAdapter);
                    return new Size($tableGateway);
                },
                'ProductDetailModel' => function ($sm) {
                    $dbAdapter = $sm->get('Zend/Db/Adapter/Adapter');
                    $tableGateway = new TableGateway('product_detail', $dbAdapter);
                    return new ProductDetail($tableGateway);
                },
                'ProductPictureModel' => function ($sm) {
                    $dbAdapter = $sm->get('Zend/Db/Adapter/Adapter');
                    $tableGateway = new TableGateway('product_picture', $dbAdapter);
                    return new ProductPicture($tableGateway);
                },
                'WebsiteModel' => function ($sm) {
                    $dbAdapter = $sm->get('Zend/Db/Adapter/Adapter');
                    $tableGateway = new TableGateway('website', $dbAdapter);
                    return new Website($tableGateway);
                },
                'EmailCustomerModel' => function ($sm) {
                    $dbAdapter = $sm->get('Zend/Db/Adapter/Adapter');
                    $tableGateway = new TableGateway('email_customer', $dbAdapter);
                    return new EmailCustomer($tableGateway);
                },
                'ContactModel' => function ($sm) {
                    $dbAdapter = $sm->get('Zend/Db/Adapter/Adapter');
                    $tableGateway = new TableGateway('contact', $dbAdapter);
                    return new Contact($tableGateway);
                },
            ),
        );
    }

    public function onBootstrap(MvcEvent $e)
    {
        $eventManager        = $e->getApplication()->getEventManager();
        $moduleRouteListener = new ModuleLoaderListener();
        $moduleRouteListener->attach($eventManager);

        $eventManager->attach('route', function(MvcEvent $e){
            $match      = $e->getRouteMatch();
            $controllerArr = explode('\\', $match->getParam('controller'));
            $controller = strtolower($controllerArr[2]);
            $module     = strtolower($controllerArr[0]);
            $action     = $match->getParam('action');
            $target     = $e->getTarget();
            $auth       = new AuthenticationService();
            $acl        = new Acl();
            $dbAdapter  = $e->getApplication()->getServiceManager()->get('Zend\Db\Adapter\Adapter');


            /*
             * Check Identity
             */
            if ($module == 'admin'
                && $controller != 'login'
                && $controller != 'test'
                && $controller != 'message') {

                if (!$auth->hasIdentity()) {
                    $serverUrl = $e->getApplication()->getServiceManager()->get('ViewHelperManager')->get('ServerUrl');
                    $baseUrl = $serverUrl->__invoke();
                    $response = $e->getResponse();
                    $response->getHeaders()->addHeaderLine(
                        'Location',
                        $baseUrl . '/admin/login'
                    );
                    $response->setStatusCode(302);
                    return $response;
                }


                /*
                 * Check Permission
                 */
                if ($auth->hasIdentity()) {
                    $user = $auth->getIdentity();

                    //Group info
                    $statement = $dbAdapter->query('SELECT * FROM group_admin WHERE group_admin_id = ' . $user->group_admin_id);
                    $groupResult = $statement->execute();
                    $groupInfo = $groupResult->current();


                    //Add Groups
                    $statement = $dbAdapter->query('SELECT * FROM group_admin');
                    $groups = $statement->execute();
                    foreach ($groups as $group) {
                        $acl->addRole(new Role($group['group_admin_id']));
                    }

                    //Add Resouces
                    $statement = $dbAdapter->query('SELECT *
                                                FROM group_acl as gac
                                                LEFT JOIN acl as a ON gac.acl_id=a.acl_id
                                                LEFT JOIN group_admin as g ON gac.group_admin_id = gac.group_admin_id
                                                WHERE gac.group_admin_id = ' . $groupInfo['group_admin_id'] . ' AND a.acl_module = "admin" AND gac.group_acl_status = 1
                                                GROUP BY a.acl_controller');
                    $resources = $statement->execute();
                    foreach ($resources as $resource) {
                        $acl->addResource(new Resource($resource['acl_controller']));
                    }
                    $acl->addResource('message');
                    $acl->addResource('login');
                    $acl->addResource('logout');
                    $acl->addResource('test');

                    //Add Permission Allow
                    $statement = $dbAdapter->query('SELECT *
                                                FROM group_acl as gac
                                                LEFT JOIN acl as ac ON gac.acl_id=ac.acl_id
                                                LEFT JOIN group_admin as g ON gac.group_admin_id = g.group_admin_id
                                                WHERE gac.group_admin_id = ' . $groupInfo['group_admin_id'] . ' AND ac.acl_module = "admin" AND gac.group_acl_status = 1');
                    $permissionAllows = $statement->execute();
                    foreach ($permissionAllows as $permission) {
                        $acl->allow($permission['group_admin_id'], $permission['acl_controller'], $permission['acl_action']);
                    }
                    $acl->allow($groupInfo['group_admin_id'], 'message', 'index');
                    $acl->allow($groupInfo['group_admin_id'], 'login', 'index');
                    $acl->allow($groupInfo['group_admin_id'], 'logout', 'index');
                    $acl->allow($groupInfo['group_admin_id'], 'test', 'index');

                    $allow = false;
                    if ($acl->hasResource($controller)) {
                        if ($acl->isAllowed($groupInfo['group_admin_id'], $controller, $action)) {
                            $allow = true;
                        }
                    }

                    if (!$allow) {
                        $serverUrl = $e->getApplication()->getServiceManager()->get('ViewHelperManager')->get('ServerUrl');
                        $baseUrl = $serverUrl->__invoke();
                        $response = $e->getResponse();
                        $response->getHeaders()->addHeaderLine(
                            'Location',
                            $baseUrl . '/admin/message/index/deny'
                        );
                        $response->setStatusCode(302);
                        return $response;
                    }
                }
            }
        });

        $eventManager->attach('dispatch', function(MvcEvent $e){
            $match      = $e->getRouteMatch();
            $controllerArr = explode('\\', $match->getParam('controller'));
            $controller = strtolower($controllerArr[2]);
            $module = strtolower($controllerArr[0]);
            $target     = $e->getTarget();
            $viewModel  = $e->getApplication()->getMvcEvent()->getViewModel();
            $auth       = new AuthenticationService();
            $groupMenuModel  = $e->getApplication()->getServiceManager()->get('GroupMenuModel');

            if ($controller == 'login') {
                $target->layout('layout/login');
            }

            if ($auth->hasIdentity()) {
                $user = $auth->getIdentity();
                $menu = $groupMenuModel->getGroupMenu($user->group_admin_id);

                $viewModel->menu = $menu;
                $viewModel->user = $user;
            }

        });
    }
}
