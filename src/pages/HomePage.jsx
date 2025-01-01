import React, { useState } from "react";
import { Row, Col, Button, notification } from "antd";
import ProductCard from "../components/ProductCard";

import productimage1 from "../assets/product 1 samsung phone.jpg";
import productimage2 from "../assets/product 2 asus laptop.jpg";
import productimage3 from "../assets/product 3 sony headphones.webp";
import productimage4 from "../assets/product 4 logitech .jpg";

const HomePage = ({ cartItems, setCartItems, orderItems, setOrderItems }) => {
  const [loading, setLoading] = useState(false);

  const handleAddToCart = (product) => {
    // Show success notification when adding to cart
    setCartItems((prevItems) => [...prevItems, product]);
    notification.success({
      message: "Product Added to Cart",
      description: `${product.name} has been added to your cart.`,
      placement: "topRight",
    });    
  };

  const handleBuyNow = (product) => {
    setOrderItems((prevItems) => [...prevItems, product]);

    // Show success notification when buying now
    notification.success({
      message: "Order Placed",
      description: "Your order has been placed successfully!",
      placement: "topRight",
    });
  };

  const Product = [
    {
      name: "Samsung Galaxy S23 Ultra Smartphone",
      image: productimage1,
      features: ["5G Support", "128GB Storage", "AMOLED Display", "5000mAh Battery"],
      price: "74,999",
    },
    {
      name: "Asus Vivobook S15 OLED",
      image: productimage2,
      features: ["16GB RAM", "1TB SSD", "Intel 13th i9 'H' series", "15.6' Display"],
      price: "1,09,000",
    },
    {
      name: "Sony Headphones CH720N",
      image: productimage3,
      features: ["Noise Cancellation", "50 Hours Battery Life", "Waterproof", "Bluetooth 5.2"],
      price: "9,990",
    },
    {
      name: "Logitech Pebbles 2 Combo",
      image: productimage4,
      features: ["Mechanical Keys", "Backlit RGB", "Anti-Ghosting", "Wireless"],
      price: "4,195",
    },
  ];

  return (
    <div>
      <Row gutter={[16, 16]} justify="center" style={{ padding: "24px" }}>
        {Product.map((product, index) => (
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
