<?php

namespace Admin\Form;

use \Zend\Form\Form;
use Zend\InputFilter\InputFilter;

class Login extends Form {
    public function __construct($name = null) {
        parent::__construct('login');

        $this->add([
            'name' => 'email',
            'type' => 'Text',
            'attributes' => [
                'placeholder' => 'Email',
                'class' => 'input-block-level',
                'value' => 'anhtuan150787@gmail.com',
            ]
        ]);
        $this->add([
            'name' => 'password',
            'type' => 'Password',
            'attributes' => [
                'placeholder' => 'Mật khẩu',
                'class' => 'input-block-level',
            ],
        ]);
        $this->add([
            'name' => 'submit',
            'type' => 'Submit',
            'attributes' => [
                'value' => 'Tiếp tục',
                'class' => 'btn btn-primary',
            ]
        ]);
    }

    public function getInputFilter()
    {
        $inputFilter = new InputFilter();
        $inputFilter->add([
            'name' => 'email',
            'required' => true,
            'filters' => [
                ['name' => 'StripTags'],
                ['name' => 'Stringtrim'],
            ],
            'validators' => [
                [
                    'name' => 'not_empty',
                    'options' => [
                        'messages' => [
                            \Zend\Validator\NotEmpty::IS_EMPTY => 'Vui lòng nhập Email',
                        ]
                    ],
                    'break_chain_on_failure' => true,
                ],
                [
                    'name' => 'EmailAddress',
                    'options' => [
                        'messages' => [
                            \Zend\Validator\EmailAddress::INVALID_FORMAT => 'Email không đúng định dạng',
                        ]
                    ]
                ],
            ],
        ]);
        $inputFilter->add([
            'name' => 'password',
            'required' => true,
            'filters' => [
                ['name' => 'Stringtrim'],
            ],
            'validators' => [
                [
                    'name' => 'not_empty',
                    'options' => [
                        'messages' => [
                            \Zend\Validator\NotEmpty::IS_EMPTY => 'Vui lòng nhập Mật khẩu',
                        ]
                    ],
                    'break_chain_on_failure' => true,
                ],
            ],
        ]);
        return $inputFilter;
    }
}