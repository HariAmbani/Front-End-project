import React, { useState } from 'react';
import { Row, Col, Spin } from 'antd'; // Import Spin for the loading spinner
import ProductCard from '../components/ProductCard';
import { useNavigate } from 'react-router-dom'; // Import navigate

import productimage1 from "../assets/product 1 samsung phone.jpg";

const HomePage = ({ cartItems, setCartItems }) => {
    const navigate = useNavigate();  // Initialize navigate
    const [loading, setLoading] = useState(false);  // State for loading

    // Function to handle adding item to cart with a 2-second delay
    const handleAddToCart = (product) => {
        setLoading(true);  // Set loading to true
        setTimeout(() => {
            setCartItems((prevItems) => [...prevItems, product]);
            setLoading(false);  // Set loading to false after 2 seconds
        }, 250);
    };

    const goToCartPage = () => {
        navigate('/cart');  // Navigate to the cart page when clicked
    };

    const products = [
        {
            name: 'Samsung Galaxy S23 ultra Smartphone',
            image: productimage1,
            features: ['5G Support', '128GB Storage', 'AMOLED Display', '5000mAh Battery'],
            price: 74999
        },
        {
            name: 'Wireless Earbuds ABC',
            image: 'https://via.placeholder.com/150',
            features: ['Noise Cancellation', '10 Hours Battery Life', 'Waterproof', 'Bluetooth 5.2'],
            price: 4999
        },
        {
            name: 'Smartwatch DEF',
            image: 'https://via.placeholder.com/150',
            features: ['Heart Rate Monitor', 'GPS Tracking', 'AMOLED Display', '7 Days Battery'],
            price: 7999
        },
        {
            name: 'Laptop GHI',
            image: 'https://via.placeholder.com/150',
            features: ['16GB RAM', '1TB SSD', 'Intel i7 Processor', '15.6" Display'],
            price: 59999
        },
        {
            name: 'Tablet JKL',
            image: 'https://via.placeholder.com/150',
            features: ['10.5" Display', '64GB Storage', 'Quad Speakers', '7000mAh Battery'],
            price: 15999
        },
        {
            name: 'Bluetooth Speaker MNO',
            image: 'https://via.placeholder.com/150',
            features: ['360° Sound', '12 Hours Battery', 'Waterproof', 'Bluetooth 5.0'],
            price: 2999
        },
        {
            name: 'Gaming Mouse PQR',
            image: 'https://via.placeholder.com/150',
            features: ['RGB Lighting', '16000 DPI', 'Ergonomic Design', 'Wireless'],
            price: 3499
        },
        {
            name: 'Keyboard STU',
            image: 'https://via.placeholder.com/150',
            features: ['Mechanical Keys', 'Backlit RGB', 'Anti-Ghosting', 'Wireless'],
            price: 4499
        },
        {
            name: 'External Hard Drive VWX',
            image: 'https://via.placeholder.com/150',
            features: ['2TB Storage', 'USB 3.0', 'Portable Design', 'Shockproof'],
            price: 5999
        },
        {
            name: 'Action Camera YZA',
            image: 'https://via.placeholder.com/150',
            features: ['4K Recording', 'Waterproof', 'Wide Angle Lens', 'WiFi'],
            price: 11999
        },
        {
            name: 'Smart Thermostat BCD',
            image: 'https://via.placeholder.com/150',
            features: ['Energy Saving', 'App Control', 'Voice Assistant', 'Scheduling'],
            price: 8999
        },
        {
            name: 'Drone EFG',
            image: 'https://via.placeholder.com/150',
            features: ['4K Camera', 'GPS', '30 Mins Flight Time', 'Obstacle Avoidance'],
            price: 24999
        },
        {
            name: 'Fitness Tracker HIJ',
            image: 'https://via.placeholder.com/150',
            features: ['Step Counter', 'Sleep Tracking', 'Waterproof', '7 Days Battery'],
            price: 2999
        },
        {
            name: 'Portable Charger KLM',
            image: 'https://via.placeholder.com/150',
            features: ['20000mAh', 'USB-C', 'Fast Charging', 'Compact Design'],
            price: 2499
        },
        {
            name: 'Projector NOP',
            image: 'https://via.placeholder.com/150',
            features: ['1080p Resolution', '200" Screen', 'HDMI Input', 'Portable'],
            price: 19999
        },
        {
            name: 'Smart Light Bulb QRS',
            image: 'https://via.placeholder.com/150',
            features: ['Color Changing', 'Voice Control', 'App Control', 'Energy Efficient'],
            price: 899
        }
    ];

    return (
        <div>
            {/* Show loading spinner if loading is true */}
            {loading ? (
                <div style={{ textAlign: 'center', padding: '50px' }}>
                    <Spin size="large" tip="Adding to Cart..." />
                </div>
            ) : (
                <Row gutter={[16, 16]} justify="center" style={{ padding: '24px' }}>
                    {products.map((product, index) => (
                        <Col key={index} xs={24} sm={12} md={6}>
                            <ProductCard product={product} handleAddToCart={handleAddToCart} />
                        </Col>
                    ))}
                </Row>
            )}

            {/* Add a button to navigate to the cart */}
            <button
                onClick={goToCartPage}
                style={{
                    position: 'fixed',
                    bottom: '10px',
                    right: '10px',
                    padding: '10px',
                }}
            >
                Go to Cart
            </button>
        </div>
    );
};

export default HomePage;
