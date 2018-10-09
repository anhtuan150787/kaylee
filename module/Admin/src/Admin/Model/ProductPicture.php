<?php
namespace Admin\Model;

use Zend\Db\Sql\Select;
use Zend\Db\Sql\Sql;
use Zend\Paginator\Adapter\DbSelect;
use Zend\Paginator\Paginator;

class ProductPicture {

    public function __construct($tableGateway)
    {
        $this->tableGateway = $tableGateway;
    }

    public function fetchAll()
    {
        $select = new Select('product_picture');
        $select->order('product_picture_id DESC');

        $paginatorAdapter   = new DbSelect($select, $this->tableGateway->getAdapter());
        $result             = new Paginator($paginatorAdapter);

        return $result;
    }

    public function save($data, $id = null)
    {
        if ($id == null) {
            $this->tableGateway->insert($data);
        } else {
            $this->tableGateway->update($data, array('product_picture_id' => $id));
        }
    }

    public function saveWherePosition($data, $id = null, $position = null)
    {
        if ($id == null) {
            $this->tableGateway->insert($data);
        } else {
            $this->tableGateway->update($data, array('product_detail_id' => $id, 'product_picture_position' => $position));
        }
    }

    public function delete($id)
    {
        $this->tableGateway->delete(array('product_picture_id' => $id));
    }

    public function deleteByProductDetail($productDetailId)
    {
        $this->tableGateway->delete(array('product_detail_id' => $productDetailId));
    }

    public function fetchRow($id)
    {
        $result = $this->tableGateway->select(array('product_picture_id' => $id));

        return $result->current();
    }

    public function getAllByProductDetail($productDetailId) {
        $sql = 'SELECT * FROM product_picture
                WHERE product_detail_id = ' . $productDetailId;
        $statement = $this->tableGateway->getAdapter()->query($sql);
        $result = $statement->execute();

        return $result;
    }
}