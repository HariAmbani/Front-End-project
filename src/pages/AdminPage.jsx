import React, { useContext } from 'react';
import ProductCreator from '../components/ProductCreator';
import ProductTable from '../components/ProductTable';
import { ProductsContext } from '../Data/ProductDetails';

const AdminPage = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div>
      <h1 style={{display:"flex" , justifyContent:"center"}}>Admin Page</h1>
      <ProductCreator />
      <h2>Product List</h2>
      <ProductTable products={products} />
    </div>
  );
};

export default AdminPage;
