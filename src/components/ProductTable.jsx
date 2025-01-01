//under testing (not testing its functionality)
import React from "react";
import { Table, Button, Typography } from "antd";
import { CloseCircleOutlined } from "@ant-design/icons";

const { Text } = Typography;

const ProductTable = ({ product, setOrderItems }) => {
  const handleCancelOrder = () => {
    setOrderItems((prevItems) => prevItems.filter(item => item.name !== product.name));
  };

  const columns = [
    {
      title: "Product Photo",
      dataIndex: "image",
      key: "image",
      render: (image) => (
        <img
          src={image}
          alt="Product"
          style={{ height: "80px", objectFit: "contain" }}
        />
      ),
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (name) => <Text strong>{name}</Text>,
    },
    {
      title: "Product Features",
      dataIndex: "features",
      key: "features",
      render: (features) => (
        <div>
          {features.map((feature, index) => (
            <div key={index} style={{ display: "flex", alignItems: "center" }}>
              <img
                src={feature.image}
                alt={feature.name}
                style={{ height: "40px", objectFit: "contain", marginRight: "8px" }}
              />
              <Text>{feature.name}</Text>
            </div>
          ))}
        </div>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: () => (
        <Button
          type="primary"
          danger
          icon={<CloseCircleOutlined />}
          onClick={handleCancelOrder}
        >
          Cancel
        </Button>
      ),
    },
  ];

  const data = [
    {
      key: product.name,
      image: product.image,
      name: product.name,
      features: product.features, // Directly use product.features
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={data}
      pagination={false}
      style={{ margin: "16px auto", maxWidth: "800px" }}
    />
  );
};

export default ProductTable;
