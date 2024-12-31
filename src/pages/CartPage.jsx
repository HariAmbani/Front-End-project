import React from 'react';
import { Row, Col, Typography } from 'antd';
import CartCard from '../components/CartCard';

const { Text } = Typography;

const CartPage = ({ cartItems = [], setCartItems }) => {
    const handleRemoveProduct = (productToRemove) => {
        setCartItems(prevItems => prevItems.filter(product => product !== productToRemove));
    };

    return (
        <div style={{ padding: '24px', minHeight: '100vh', textAlign: 'center' }}>
            {cartItems.length === 0 ? (
                <div style={{ marginTop: '50px' }}>
                    <Text style={{ fontSize: '24px', fontWeight: 'bold' }}>
                        Your cart is empty
                    </Text>
                </div>
            ) : (
                <Row gutter={[16, 16]} justify="center">
                    {cartItems.map((product, index) => (
                        <Col key={index} xs={24} sm={12} md={6}>
                            <CartCard product={product} handleRemove={handleRemoveProduct} />
                        </Col>
                    ))}
                </Row>
            )}
        </div>
    );
};

export default CartPage;
