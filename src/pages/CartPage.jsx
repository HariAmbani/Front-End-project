import React from 'react';
import { Row, Col, Typography, notification } from 'antd';
import CartCard from '../components/CartCard';

const { Text } = Typography;

const CartPage = ({ cartItems, setCartItems, setOrderItems }) => {
  const handleRemoveProduct = (productToRemove) => {
    setCartItems(prevItems => prevItems.filter(product => product !== productToRemove));
  };

  const handleBuyNow = (product) => {
    // Add the product to the order items
    setOrderItems((prevItems) => [...prevItems, product]);

    // Remove the product from the cart
    handleRemoveProduct(product);

    // Show success notification when buying now
    notification.success({
      message: "Order Placed",
      description: "Your order has been placed successfully!",
      placement: "topRight",
    });
  };

  return (
    <div style={{ padding: '24px', minHeight: '100vh', textAlign: 'center' }}>
      {cartItems.length === 0 ? (
        <div style={{ textAlign: "center", fontSize: "24px", fontWeight: "bold", marginTop: "20%" }}>
          <p>Your cart is empty</p>
        </div>
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
