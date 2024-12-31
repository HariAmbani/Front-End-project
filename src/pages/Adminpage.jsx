import React, { useContext } from 'react';
import { ProductContext } from '../Context/ProductContext';

const AdminPage = () => {
    const { setProducts } = useContext(ProductContext);

    const handleCreateProduct = () => {
        setProducts((prevProducts) => [
            ...prevProducts,
            {
                name: 'New Product',
                image: 'https://images.samsung.com/is/image/samsung/p6pim/in/feature/164487493/in-feature-galaxy-s-535964243?$FB_TYPE_A_JPG$',
                features: ['Feature 1', 'Feature 2'],
                price: 1000,
            },
        ]);
    };

    return (
        <button onClick={handleCreateProduct}>Add Product</button>
    );
};

export default AdminPage;
