<?php

namespace Home\Form;

use \Zend\Form\Form;
use Zend\InputFilter\InputFilter;
use Zend\InputFilter\InputFilterProviderInterface;
use Zend\Validator\EmailAddress;

use Zend\Form\Element\Captcha;
use Zend\Captcha\Image as CaptchaImage;
use Zend\Validator\StringLength;


class Order extends Form implements InputFilterProviderInterface {

    public function __construct($name = null)
    {
        parent::__construct('contact');

        $this->add([
            'name' => 'order_fullname',
            'type' => 'Text',
            'attributes' => [
                'class' => 'field__input',
                'placeholder' => 'Họ tên'
            ],
            'options' => [
                'label' => 'Họ tên',
                'label_attributes' => ['class' => 'field__label'],
            ],
        ]);

        $this->add([
            'name' => 'order_email',
            'type' => 'Text',
            'attributes' => [
                'class' => 'field__input',
                'placeholder' => 'Email'
            ],
            'options' => [
                'label' => 'Email',
                'label_attributes' => ['class' => 'field__label'],
            ],
        ]);

        $this->add([
            'name' => 'order_address',
            'type' => 'Text',
            'attributes' => [
                'class' => 'field__input',
                'placeholder' => 'Địa chỉ'
            ],
            'options' => [
                'label' => 'Địa chỉ',
                'label_attributes' => ['class' => 'field__label'],
            ],
        ]);

        $this->add([
            'name' => 'order_phone',
            'type' => 'Text',
            'attributes' => [
                'class' => 'field__input',
                'placeholder' => 'Điện thoại'
            ],
            'options' => [
                'label' => 'Điện thoại',
                'label_attributes' => ['class' => 'field__label'],
            ],
        ]);

        $this->add([
            'name' => 'order_time_from',
            'type' => 'Zend\Form\Element\Select',
            'attributes' => [
                'class' => 'field__input',
            ],
            'options' => [
                'label' => 'Thời gian giao hàng từ',
                'label_attributes' => ['class' => 'field__label'],
                'disable_inarray_validator' => true,
            ],
        ]);

        $this->add([
            'name' => 'order_time_to',
            'type' => 'Zend\Form\Element\Select',
            'attributes' => [
                'class' => 'field__input',
            ],
            'options' => [
                'label' => 'Thời gian giao hàng đến',
                'label_attributes' => ['class' => 'field__label'],
                'disable_inarray_validator' => true,
            ],
        ]);

        $this->add([
            'name' => 'order_district',
            'type' => 'Zend\Form\Element\Select',
            'attributes' => [
                'class' => 'field__input',
                'id' => 'order_district',
            ],
            'options' => [
                'label' => 'Quận',
                'label_attributes' => ['class' => 'field__label'],
                'disable_inarray_validator' => true,
            ],
        ]);

        $this->add([
            'name' => 'order_note',
            'type' => 'Zend\Form\Element\Textarea',
            'attributes' => [
                'class' => 'field__input',
                'style' => 'height: 100px',
                'placeholder' => 'Vui lòng nhập mã khuyến mãi/ ưu đãi nếu có'
            ],
            'options' => [
                'label' => 'Ghi chú',
                'label_attributes' => ['class' => 'field__label'],
            ],
        ]);

        $this->add(array(
            'type' => 'Zend\Form\Element\Csrf',
            'name' => 'csrf',
            'options' => array(
                'csrf_options' => array(
                    'timeout' => 600
                )
            )
        ));

        $configCaptcha = include 'config/captcha.php';

        $captchaImage = new CaptchaImage($configCaptcha);

        $this->add(array(
            'type' => 'Zend\Form\Element\Captcha',
            'name' => 'Captcha',
            'options' => [
                'captcha' => $captchaImage,
            ],
            'attributes' => [
                'placeholder' => 'Mã xác thực',
                'class' => 'input-block-level captcha-input',
            ],
        ));

        $this->add([
            'name' => 'submit',
            'type' => 'button',
            'attributes' => [
                'value' => 'Gửi đơn hàng',
                'id' => 'btn-submit',
                'class' => 'btn btn-success',
                'data-loading-text' => 'Đang gửi đơn hàng'
            ],
        ]);
    }

//    public function getInputFilter()
//    {
//        $inputFilter = new InputFilter();
//        $inputFilter->add([
//            'name' => 'order_fullname',
//            'required' => true,
//            'filters' => [
//                ['name' => 'StringTrim'],
//                ['name' => 'StripTags']
//            ],
//            'validators' => [///Validators
//                [
//                    'name' => 'not_empty',
//                    'options' => [
//                        'messages' => [
//                            \Zend\Validator\NotEmpty::IS_EMPTY => 'Vui lòng nhập thông tin',
//                        ]
//                    ],
//                    'break_chain_on_failure' => true,
//                ],
//            ]
//        ]);
//
//        $inputFilter->add([
//            'name' => 'order_address',
//            'required' => true,
//            'filters' => [
//                ['name' => 'StringTrim'],
//                ['name' => 'StripTags']
//            ],
//            'validators' => [///Validators
//                [
//                    'name' => 'not_empty',
//                    'options' => [
//                        'messages' => [
//                            \Zend\Validator\NotEmpty::IS_EMPTY => 'Vui lòng nhập thông tin',
//                        ]
//                    ],
//                    'break_chain_on_failure' => true,
//                ],
//            ]
//        ]);
//
//        $inputFilter->add([
//            'name' => 'order_district',
//            'required' => true,
//            'filters' => [
//                ['name' => 'StringTrim'],
//                ['name' => 'StripTags']
//            ],
//            'validators' => [///Validators
//                [
//                    'name' => 'not_empty',
//                    'options' => [
//                        'messages' => [
//                            \Zend\Validator\NotEmpty::IS_EMPTY => 'Vui lòng chọn thông tin',
//                        ]
//                    ],
//                    'break_chain_on_failure' => true,
//                ],
//            ]
//        ]);
//
//        $inputFilter->add([
//            'name' => 'order_phone',
//            'required' => true,
//            'filters' => [
//                ['name' => 'StringTrim'],
//                ['name' => 'StripTags']
//            ],
//            'validators' => [///Validators
//                [
//                    'name' => 'not_empty',
//                    'options' => [
//                        'messages' => [
//                            \Zend\Validator\NotEmpty::IS_EMPTY => 'Vui lòng nhập thông tin',
//                        ]
//                    ],
//                    'break_chain_on_failure' => true,
//                ],
//                [
//                    'name' => 'Digits',
//                    'options' => [
//                        'messages' => [
//                            \Zend\Validator\Digits::NOT_DIGITS => 'Thông tin không hợp lệ',
//                        ]
//                    ],
//                    'break_chain_on_failure' => true,
//                ],
//            ]
//        ]);
//        $inputFilter->add([
//            'name' => 'order_email',
//            'required' => true,
//            'filters' => [
//                ['name' => 'StringTrim'],
//                ['name' => 'StripTags']
//            ],
//            'validators' => [///Validators
//                [
//                    'name' => 'not_empty',
//                    'options' => [
//                        'messages' => [
//                            \Zend\Validator\NotEmpty::IS_EMPTY => 'Vui lòng nhập thông tin',
//                        ]
//                    ],
//                ],
//                [
//                    'name' => 'EmailAddress',
//                    'options' => [
//                        'messages' => [
//                            EmailAddress::INVALID => 'Thông tin không hợp lệ',
//                            EmailAddress::INVALID_HOSTNAME => 'Thông tin không hợp lệ',
//                            EmailAddress::INVALID_FORMAT => 'Thông tin không hợp lệ',
//                            EmailAddress::INVALID_LOCAL_PART => 'Thông tin không hợp lệ',
//                            EmailAddress::INVALID_MX_RECORD => 'Thông tin không hợp lệ',
//                            EmailAddress::INVALID_SEGMENT => 'Thông tin không hợp lệ',
//                        ],
//                    ],
//                ],
//            ]
//        ]);
//
//        $inputFilter->add([
//            'name' => 'order_note',
//            'required' => false,
//            'filters' => [
//                ['name' => 'StringTrim'],
//                ['name' => 'StripTags']
//            ],
//            'validators' => [///Validators
//                [
//                    'name' => 'StringLength',
//                    'break_chain_on_failure' => true,
//                    'options' => [
//                        'max' => 300,
//                        'messages' => [
//                            StringLength::TOO_LONG => 'Lời nhắn không quá 300 ký tự',
//                        ]
//                    ]
//                ],
//            ]
//        ]);
//
//        return $inputFilter;
//    }

    public function getInputFilterSpecification() {
        return [
            'order_fullname' => [
                'required' => true,
                'filters' => [
                    ['name' => 'StringTrim'],
                    ['name' => 'StripTags']
                ],
                'validators' => [///Validators
                    [
                        'name' => 'not_empty',
                        'options' => [
                            'messages' => [
                                \Zend\Validator\NotEmpty::IS_EMPTY => 'Vui lòng nhập thông tin',
                            ]
                        ],
                        'break_chain_on_failure' => true,
                    ],
                ],
            ],
            'order_address' => [
                'required' => true,
                'filters' => [
                    ['name' => 'StringTrim'],
                    ['name' => 'StripTags']
                ],
                'validators' => [///Validators
                    [
                        'name' => 'not_empty',
                        'options' => [
                            'messages' => [
                                \Zend\Validator\NotEmpty::IS_EMPTY => 'Vui lòng nhập thông tin',
                            ]
                        ],
                        'break_chain_on_failure' => true,
                    ],
                ],
            ],
            'order_district' => [
                'required' => true,
                'filters' => [
                    ['name' => 'StringTrim'],
                    ['name' => 'StripTags']
                ],
                'validators' => [///Validators
                    [
                        'name' => 'not_empty',
                        'options' => [
                            'messages' => [
                                \Zend\Validator\NotEmpty::IS_EMPTY => 'Vui lòng chọn thông tin',
                            ]
                        ],
                        'break_chain_on_failure' => true,
                    ],
                ]
            ],
            'order_phone' => [
                'required' => true,
                'filters' => [
                    ['name' => 'StringTrim'],
                    ['name' => 'StripTags']
                ],
                'validators' => [///Validators
                    [
                        'name' => 'not_empty',
                        'options' => [
                            'messages' => [
                                \Zend\Validator\NotEmpty::IS_EMPTY => 'Vui lòng nhập thông tin',
                            ]
                        ],
                        'break_chain_on_failure' => true,
                    ],
                    [
                        'name' => 'Digits',
                        'options' => [
                            'messages' => [
                                \Zend\Validator\Digits::NOT_DIGITS => 'Thông tin không hợp lệ',
                            ]
                        ],
                        'break_chain_on_failure' => true,
                    ],
                ]
            ],
            'order_email' => [
                'required' => true,
                'filters' => [
                    ['name' => 'StringTrim'],
                    ['name' => 'StripTags']
                ],
                'validators' => [///Validators
                    [
                        'name' => 'not_empty',
                        'options' => [
                            'messages' => [
                                \Zend\Validator\NotEmpty::IS_EMPTY => 'Vui lòng nhập thông tin',
                            ]
                        ],
                    ],
                    [
                        'name' => 'EmailAddress',
                        'options' => [
                            'messages' => [
                                EmailAddress::INVALID => 'Thông tin không hợp lệ',
                                EmailAddress::INVALID_HOSTNAME => 'Thông tin không hợp lệ',
                                EmailAddress::INVALID_FORMAT => 'Thông tin không hợp lệ',
                                EmailAddress::INVALID_LOCAL_PART => 'Thông tin không hợp lệ',
                                EmailAddress::INVALID_MX_RECORD => 'Thông tin không hợp lệ',
                                EmailAddress::INVALID_SEGMENT => 'Thông tin không hợp lệ',
                            ],
                        ],
                    ],
                ]
            ],
            'order_note' => [
                'required' => false,
                'filters' => [
                    ['name' => 'StringTrim'],
                    ['name' => 'StripTags']
                ],
                'validators' => [///Validators
                    [
                        'name' => 'StringLength',
                        'break_chain_on_failure' => true,
                        'options' => [
                            'max' => 300,
                            'messages' => [
                                StringLength::TOO_LONG => 'Lời nhắn không quá 300 ký tự',
                            ]
                        ]
                    ],
                ]
            ],
        ];
    }

}