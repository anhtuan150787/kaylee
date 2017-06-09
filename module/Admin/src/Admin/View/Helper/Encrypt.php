<?php
namespace Admin\View\Helper;

use Zend\View\Helper\AbstractHelper;

class Encrypt extends AbstractHelper {

    public function HashPass($pass) {
        return md5(md5($pass));
    }
}