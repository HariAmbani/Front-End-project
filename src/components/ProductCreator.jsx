import React, { useState, useContext } from 'react';
import { ProductsContext } from '../Data/ProductDetails';
import { Form, Input, InputNumber, Button, notification, Modal, Row, Col, Image } from 'antd';

// Import images directly
import product1image from "../assets/product 1 samsung phone.jpg";
import product2image from "../assets/product 2 asus laptop.jpg";
import product3image from "../assets/product 3 sony headphones.webp";
import product4image from "../assets/product 4 logitech .jpg";

// List of available images
const availableImages = [
  { src: product1image, alt: 'Samsung Phone' },
  { src: product2image, alt: 'Asus Laptop' },
  { src: product3image, alt: 'Sony Headphones' },
  { src: product4image, alt: 'Logitech' },
];

const ProductCreator = () => {
  const { addProduct } = useContext(ProductsContext);
  const [form] = Form.useForm();
  const [selectedImage, setSelectedImage] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);

  // Handle opening the modal
  const showImageModal = () => {
    setIsModalVisible(true);
  };

  // Handle closing the modal
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  // Handle image selection from modal
  const handleImageSelect = (image) => {
    setSelectedImage(image.src);
    setIsModalVisible(false); // Close the modal after selecting the image
  };

  // Handle form submission
  const handleSubmit = (values) => {
    const newProduct = {
      ...values,
      features: values.features.split(',').map((feature) => feature.trim()),
      image: selectedImage || 'https://via.placeholder.com/150', // Fallback if no image is selected
    };

    addProduct(newProduct);
    notification.success({
      message: 'Product Added',
      description: `${newProduct.name} has been added successfully!`,
    });

    form.resetFields();
    setSelectedImage(''); // Reset image selection
  };

  return (
    <div
      style={{
        maxWidth: '100%',
        width: '100%',
        backgroundColor: 'white',
        padding: '20px',
        boxSizing: 'border-box',
        borderRadius: '8px',
      }}
    >
      <h2 style={{ display: 'flex', justifyContent: 'center' }}>Product Creator</h2>
      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        initialValues={{
          image: selectedImage, // Initialize form with the selected image
        }}
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: 'Please input the product name!' }]}
        >
          <Input placeholder="Enter product name" />
        </Form.Item>

        <Form.Item
          label="Features"
          name="features"
          rules={[{ required: true, message: 'Please input the product features!' }]}
        >
          <Input placeholder="Enter product features (comma-separated)" />
        </Form.Item>

        <Form.Item
          label="Price"
          name="price"
          rules={[
            { required: true, message: 'Please input the product price!' },
            { type: 'number', transform: (value) => Number(value), message: 'Price must be a number!' },
          ]}
        >
          <InputNumber style={{ width: '100%' }} placeholder="Enter product price" min={0} />
        </Form.Item>

        <Form.Item label="Select Image" name="image">
          <Button type="dashed" onClick={showImageModal} style={{ width: '100%' }}>
            {selectedImage ? (
              <div>
                <Image
                  src={selectedImage} // Use the selected image directly
                  alt={selectedImage}
                  width={50}
                  height={50}
                  style={{ objectFit: 'cover', borderRadius: '5px' }}
                />
                <span>{selectedImage}</span>
              </div>
            ) : (
              'Click to upload image'
            )}
          </Button>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
            Add Product
          </Button>
        </Form.Item>
      </Form>

      {/* Modal to select image */}
      <Modal
        title="Select Product Image"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        width={600}
      >
        <Row gutter={[16, 16]}>
          {availableImages.map((image, index) => (
            <Col key={index} xs={12} sm={8} md={6}>
              <div
                onClick={() => handleImageSelect(image)}
                style={{
                  cursor: 'pointer',
                  textAlign: 'center',
                  padding: '10px',
                  borderRadius: '8px',
                  transition: 'background 0.3s',
                }}
                onMouseEnter={(e) => (e.target.style.background = '#f0f0f0')}
                onMouseLeave={(e) => (e.target.style.background = 'transparent')}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={80}
                  height={80}
                  style={{ objectFit: 'cover', borderRadius: '5px' }}
                />
                <div>{image.alt}</div>
              </div>
            </Col>
          ))}
        </Row>
      </Modal>
    </div>
  );
};

export default ProductCreator;
