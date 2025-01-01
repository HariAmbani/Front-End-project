import React from "react";
import { Row, Col, notification } from "antd";
import OrderCard from "../components/OrderCard";

const OrderPage = ({ orderItems, setOrderItems }) => {
  const handleBuyNow = (product) => {
    // Logic to handle the Buy Now action (e.g., move the product to the orders list or display a message)
    notification.success({
      message: "Order Placed",
      description: "Your order has been placed successfully!",
      placement: "topRight",
    });
  };

  return (
    <div style={{ padding: "24px" }}>
      {orderItems.length > 0 && (
        <div style={{ textAlign: "center", fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}>
          <p>Your Orders</p>
        </div>
      )}

      <Row gutter={[16, 16]} justify="center">
        {orderItems.length > 0 ? (
          orderItems.map((item, index) => (
            <Col key={index} xs={24} sm={12} md={6}>
              <OrderCard product={item} setOrderItems={setOrderItems} handleBuyNow={handleBuyNow} />
            </Col>
          ))
        ) : (
          <div style={{ textAlign: "center", fontSize: "24px", fontWeight: "bold", marginTop: "18%" }}>
            <p>No Orders Yet...</p>
          </div>
        )}
      </Row>
    </div>
  );
};

export default OrderPage;
