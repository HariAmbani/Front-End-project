import React from 'react';
import { Row, Col, Typography, notification, Empty } from 'antd';
import CartCard from '../components/CartCard';

const { Text } = Typography;

const CartPage = ({ cartItems, setCartItems, setOrderItems }) => {
  const handleRemoveProduct = (productToRemove) => {
    setCartItems(prevItems => prevItems.filter(product => product !== productToRemove));
  };

  const handleBuyNow = (product) => {
    setOrderItems((prevItems) => [...prevItems, product]);

    handleRemoveProduct(product);

    notification.success({
      message: "Order Placed",
      description: "Your order has been placed successfully!",
      placement: "topRight",
    });
  };

  return (
    <div style={{ padding: '24px', minHeight: '100vh', textAlign: 'center' }}>
      {cartItems.length === 0 ? (
        <Empty
          description={
            <Text strong style={{ fontSize: "20px" }}>
              Your Cart is Empty
            </Text>
          }
          style={{
            padding: "100px 50px", // Increase padding
            textAlign: "center", // Align content to the left
            marginTop: "5%", // Push it down vertically
          }}
        />
      ) : (
        <div>
          <div style={{ textAlign: "center", fontSize: "24px", fontWeight: "bold" }}>
            <p>Your Cart</p>
          </div>
          <Row gutter={[16, 16]} justify="center">
            {cartItems.map((product, index) => (
              <Col key={index} xs={24} sm={12} md={6}>
                <CartCard 
                  product={product} 
                  handleRemove={handleRemoveProduct} 
                  handleBuyNow={handleBuyNow} // Pass handleBuyNow to CartCard
                />
              </Col>
            ))}
          </Row>
        </div>
      )}
    </div>
  );
};

export default CartPage;
