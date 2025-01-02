import React, { useContext } from 'react';
import { Table, Image, Button, notification } from 'antd';
import { ProductsContext } from '../Data/ProductDetails';

const ProductTable = ({ products }) => {
  const { setProducts } = useContext(ProductsContext);

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
          return 'No features available'; // Handle missing or invalid features
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
      render: (text) => `₹${text}`, // Format price with ₹
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <Button
          type="primary"
          danger
          onClick={() => deleteProduct(record.name)}
        >
          Delete Product
        </Button>
      ),
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={products}
      rowKey="name" // Use unique product names as the row key
      bordered
      pagination={{ pageSize: 4 }}
      style={{ marginTop: '20px' }}
    />
  );
};

export default ProductTable;
