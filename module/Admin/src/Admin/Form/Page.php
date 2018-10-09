<?php

namespace Admin\Form;

use \Zend\Form\Form;
use Zend\InputFilter\InputFilter;

class Page extends Form {
    public function __construct($name = null) {
        parent::__construct('build');

        $this->add([
            'name' => 'page_title',
            'type' => 'Text',
            'attributes' => [
                'class' => 'form-control',
            ],
            'options' => [
                'label' => 'Tiêu đề',
                'label_attributes' => ['class' => 'control-label col-lg-2'],
            ],
        ]);

        $this->add([
            'name' => 'page_content',
            'type' => 'Zend\Form\Element\Textarea',
            'attributes' => [
                'class' => 'form-control content',
            ],
            'options' => [
                'label' => 'Nội dung',
                'label_attributes' => ['class' => 'control-label col-lg-2'],
            ],
        ]);

        $this->add([
            'name' => 'page_status',
            'type' => 'Zend\Form\Element\Select',
            'attributes' => [
                'class' => 'form-control',
            ],
            'options' => [
                'label' => 'Trạng thái',
                'label_attributes' => ['class' => 'control-label col-lg-2'],
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

        $this->add([
            'name' => 'submit',
            'type' => 'submit',
            'attributes' => [
                'value' => 'Thêm',
                'id' => 'submit',
                'class' => 'btn btn-primary',
            ],
        ]);
    }

    public function getInputFilter()
    {
        $inputFilter = new InputFilter();
        $inputFilter->add([
            'name' => 'page_title',
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
                            \Zend\Validator\NotEmpty::IS_EMPTY => 'Vui lòng nhập thông tin',
                        ]
                    ],
                    'break_chain_on_failure' => true,
                ],
            ],
        ]);

        return $inputFilter;
    }
}