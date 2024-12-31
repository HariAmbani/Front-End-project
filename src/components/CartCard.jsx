import React from 'react';
import { Card, Button, Typography } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';

const { Text } = Typography;

const CartCard = ({ product, handleRemove }) => {
    // Ensure the title is visible fully
    const truncatedTitle = product.name.length > 100
        ? `${product.name.substring(0, 90)}...`
        : product.name;

    return (
        <Card
            hoverable
            style={{
                width: 300,
                margin: '16px auto',
                padding: '24px',  // Adjusted padding for a better look
                alignItems: 'center',
                textAlign: 'center'
            }}
            cover={
                <img
                    alt={product.name}
                    src={product.image}
                    style={{ height: '150px', objectFit: 'contain' }}
                />
            }
        >
            {/* Title */}
            <Card.Meta
                title={
                    <Text style={{ fontWeight: 'bold', fontSize: '16px' }}>
                        {truncatedTitle}
                    </Text>
                }
                description={
                    <div>
                        {/* Features List */}
                        <ul
                            style={{
                                paddingLeft: '16px',
                                listStyle: 'disc',
                                color: '#444', // Darker text color
                                fontWeight: 500, // Bolder text
                            }}
                        >
                            {product.features.map((feature, index) => (
                                <li key={index} style={{ color: '#333' }}>
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        {/* Price */}
                        <Text style={{ fontWeight: 'bold', fontSize: '18px', color: 'black' }}>
                            ₹{product.price}
                        </Text>
                    </div>
                }
            />
            {/* Buttons */}
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    gap: '16px',
                    marginTop: '16px',
                    alignItems: 'center',
                }}
            >
                <Button type="primary" icon={<ShoppingCartOutlined />}>
                    Buy Now
                </Button>
                {/* Remove button with handler */}
                <Button 
                    type="primary" 
                    danger 
                    icon={<ShoppingCartOutlined />} 
                    onClick={() => handleRemove(product)} // Trigger removal
                >
                    Remove from cart
                </Button>
            </div>
        </Card>
    );
};

export default CartCard;
