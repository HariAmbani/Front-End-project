import React, { useContext, useState } from 'react';
import { Table, Image, Button, notification, Modal, Input } from 'antd';
import { ProductsContext } from '../Data/ProductDetails';

const ProductTable = ({ products }) => {
  const { setProducts } = useContext(ProductsContext);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [newName, setNewName] = useState('');
  const [newFeatures, setNewFeatures] = useState('');
  const [newPrice, setNewPrice] = useState('');

  const showEditModal = (product) => {
    setCurrentProduct(product);
    setNewName(product.name);
    setNewFeatures(product.features.join(', '));
    setNewPrice(product.price);
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.name === currentProduct.name
          ? {
              ...product,
              name: newName,
              features: newFeatures.split(',').map((feature) => feature.trim()),
              price: newPrice,
            }
          : product
      )
    );
    setIsModalVisible(false);
    notification.success({
      message: 'Product Updated',
      description: `${newName} has been updated successfully!`,
    });
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const deleteProduct = (productName) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.name !== productName)
    );
    notification.success({
      message: 'Product Deleted',
      description: `${productName} has been deleted successfully!`,
    });
  };

  const columns = [
    {
      title: 'Image',
      dataIndex: 'image',
      key: 'image',
      render: (text) => (
        <Image
          src={text}
          alt="Product"
          width={50}
          height={50}
          style={{ objectFit: 'cover', borderRadius: '5px' }}
          preview={false}
        />
      ),
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Features',
      dataIndex: 'features',
      key: 'features',
      render: (features) => {
        if (!Array.isArray(features) || features.length === 0) {
          return 'No features available'; 
        }
        return features.map((feature, index) => (
          <span key={index} style={{ display: 'block' }}>
            - {feature}
          </span>
        ));
      },
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      render: (text) => `₹${text}`,
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <>
          <Button
            type="primary"
            onClick={() => showEditModal(record)}
            style={{ marginRight: '8px' }}
          >
            Edit Product
          </Button>
          <Button
            type="primary"
            danger
            onClick={() => deleteProduct(record.name)}
          >
            Delete Product
          </Button>
        </>
      ),
    },
  ];

  return (
    <>
      <Table
        columns={columns}
        dataSource={products}
        rowKey="name"
        bordered
        pagination={{ pageSize: 4 }}
        style={{ marginTop: '20px' }}
      />

      <Modal
        title="Edit Product"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Input
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          placeholder="Product Name"
          style={{ marginBottom: '10px' }}
        />
        <Input
          value={newFeatures}
          onChange={(e) => setNewFeatures(e.target.value)}
          placeholder="Features (comma separated)"
          style={{ marginBottom: '10px' }}
        />
        <Input
          value={newPrice}
          onChange={(e) => setNewPrice(e.target.value)}
          placeholder="Price"
        />
      </Modal>
    </>
  );
};

export default ProductTable;
