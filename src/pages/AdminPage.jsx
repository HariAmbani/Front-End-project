import React, { useContext } from "react";
import { Form, Input, Button, notification } from "antd";
import { ProductsContext } from "../Data/ProductDetails";

const AdminPage = () => {
  const { addProduct } = useContext(ProductsContext);
  const [form] = Form.useForm();

  const handleCreateProduct = (values) => {
    const newProduct = {
      name: values.name,
      features: values.features.split(","),
      price: values.price,
      image: "https://via.placeholder.com/150", // Default image
    };
    addProduct(newProduct);
    notification.success({
      message: "Product Created",
      description: `${values.name} has been added successfully.`,
    });
    form.resetFields();
  };

  return (
    <div style={{ padding: "24px" , backgroundColor: "white" , width:"75%"}}>
      <h1 style={{display:"flex",justifyContent:"center",alignSelf:"center"}}>Product creater</h1>  
     <br></br>
      <Form
        layout="vertical"
        form={form}
        onFinish={handleCreateProduct}
        style={{ maxWidth: "400px", margin: "0 auto" }}
      >
        <Form.Item
          label="Product Name"
          name="name"
          rules={[{ required: true, message: "Please input the product name!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Product Features (comma-separated)"
          name="features"
          rules={[{ required: true, message: "Please input the product features!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Product Price"
          name="price"
          rules={[{ required: true, message: "Please input the product price!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Create Product
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AdminPage;