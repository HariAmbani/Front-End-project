import React from 'react';
import { Card, Button, Typography } from 'antd';
import { ShoppingCartOutlined, DollarCircleOutlined } from '@ant-design/icons';

const { Text } = Typography;

const ProductCard = ({ product, handleAddToCart, handleBuyNow }) => {
    const truncatedTitle = product.name.length > 100 
        ? `${product.name.substring(0, 90)}...` 
        : product.name;

    return (
        <Card
            hoverable
            style={{
                width: 300,
                margin: '16px auto',
                padding: '24px',
                alignItems: 'center',
                textAlign: 'center',
            }}
            cover={
                <img
                    alt={product.name}
                    src={product.image}
                    style={{ height: '150px', objectFit: 'contain' }}
                />
            }
        >
            <Card.Meta
                title={
                    <Text style={{ fontWeight: 'bold', fontSize: '16px' }}>
                        {truncatedTitle}
                    </Text>
                }
                description={
                    <div>
                        <ul
                            style={{
                                paddingLeft: '16px',
                                listStyle: 'disc',
                                color: '#444',
                                fontWeight: 500,
                            }}
                        >
                            {product.features.map((feature, index) => (
                                <li key={index} style={{ color: '#333' }}>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        <Text style={{ fontWeight: 'bold', fontSize: '18px', color: 'black' }}>
                            ₹{product.price}
                        </Text>
                    </div>
                }
            />
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '16px',
                    marginTop: '16px',
                    alignItems: 'center',
                }}
            >
                <Button 
                    type="primary" 
                    icon={<ShoppingCartOutlined />}
                    onClick={() => handleBuyNow(product)}
                >
                    Buy Now
                </Button>
                <Button
                    type="primary"
                    danger
                    icon={<DollarCircleOutlined />}
                    onClick={() => handleAddToCart(product)}
                    //style={{backgroundColor:"green"}}
                >
                    Add to Cart
                </Button>
            </div>
        </Card>
    );
};

export default ProductCard;
