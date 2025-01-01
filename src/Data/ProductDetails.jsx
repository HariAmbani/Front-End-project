import React, { useState, createContext } from "react";

import productimage1 from "../assets/product 1 samsung phone.jpg"
import productimage2 from "../assets/product 2 asus laptop.jpg"
import productimage3 from "../assets/product 3 sony headphones.webp"
import productimage4 from "../assets/product 4 logitech .jpg"

// Create a context for products
export const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([
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
  ]);

  const addProduct = (product) => {
    setProducts((prevProducts) => [...prevProducts, product]);
  };

  return (
    <ProductsContext.Provider value={{ products, addProduct }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
