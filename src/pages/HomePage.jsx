import React, { useContext } from "react";
import { Row, Col, notification } from "antd";
import ProductCard from "../components/ProductCard";
import { ProductsContext } from "../Data/ProductDetails"

const HomePage = ({ cartItems, setCartItems, orderItems, setOrderItems }) => {
  const { products } = useContext(ProductsContext);

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
    notification.success({
      message: "Product Added to Cart",
      description: `${product.name} has been added to your cart.`,
      placement: "topRight",
    });
  };

  const handleBuyNow = (product) => {
    setOrderItems((prevItems) => [...prevItems, product]);
    notification.success({
      message: "Order Placed",
      description: "Your order has been placed successfully!",
      placement: "topRight",
    });
  };

  return (
    <div>
      <Row gutter={[16, 16]} justify="center" style={{ padding: "24px" }}>
        {products.map((product, index) => (
          <Col key={index} xs={24} sm={12} md={6}>
            <ProductCard
              product={product}
              handleAddToCart={handleAddToCart}
              handleBuyNow={handleBuyNow}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default HomePage;
