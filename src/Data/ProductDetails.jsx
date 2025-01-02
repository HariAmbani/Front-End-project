import React, { useState, createContext } from "react";
import productimage1 from "../assets/product 1 samsung phone.jpg";
import productimage2 from "../assets/product 2 asus laptop.jpg";
import productimage3 from "../assets/product 3 sony headphones.webp";
import productimage4 from "../assets/product 4 logitech .jpg";
import productimage5 from "../assets/product 5 samsung watch.jpg"
import productimage6 from "../assets/product 6 apple ipad pro 12.2.jpg"
import productimage7 from "../assets/product 11 sasmung QLED TV.jpg"
import productimage8 from "../assets/product 8 Razer Gaming mouse.jpg"
import productimage9 from "../assets/product 9 WD 2TB.jpg"
import productimage10 from "../assets/product 10 go pro action camera.jpg"
import productimage11 from "../assets/product 7 marshal speakers.jpg"
import productimage12 from "../assets/product 12 DJI drone.jpg"
import productimage13 from "../assets/product 13 logitech gaming mouse.jpg"
import productimage14 from "../assets/product 14 samsung buds 3.jpg"
import productimage15 from "../assets/product 15 BENQ projector.jpg"
import productimage16 from "../assets/product 16 MI powerbank.jpg"

// Create a context for products
export const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([
    {
      name: "Samsung Galaxy S23 Ultra Smartphone",
      image: productimage1,
      features: ["5G Support", "512GB Storage", "SUPER AMOLED Display", "5000mAh Battery"],
      price: "74,999",
    },
    {
      name: "Asus Vivobook S15 OLED",
      image: productimage2,
      features: ["16GB RAM", "1TB SSD", "Intel 13th i9 'H' series", "15.6' Display"],
      price: "1,09,000",
    },
    {
      name: 'Samsung QLED TV 2024 edition',
      image: productimage7,
      features: ['75 inch', 'QLED Display', '8K resolution', 'HDR10+'],
      price: "1,49,900"
    },
    {
      name: 'Apple Ipad pro M2',
      image: productimage6,
      features: ['12.2" Display', '256GB Storage', 'Quad Speakers', '10500mAh Battery'],
      price: "1,15,990"
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
      features: ["Soft Keys", "Compact Design", "Silent keys and clicks", "Wireless and Blutooth"],
      price: "4,195",
    },
    {
      name: 'Samsung watch 6 pro',
      image: productimage5,
      features: ['Heart Rate Monitor', 'GPS Tracking', 'AMOLED Display', '7 Days Battery'],
      price: "24,999"
    },
    {
        name: 'Razer Gaming Mouse',
        image: productimage8,
        features: ['RGB Lighting', '20000 DPI', 'Ergonomic Design', 'Wireless and Bluetooth'],
        price: "23,499"
    },
    
    {
        name: 'WD External Hard Drive',
        image: productimage9,
        features: ['2TB Storage', 'USB 3.0', 'Portable Design', 'Shockproof'],
        price: "7,499"
    },
    {
        name: 'Go Pro Action Camera',
        image: productimage10,
        features: ['4K Recording', 'Waterproof', 'Wide Angle Lens', 'WiFi'],
        price: "11,999"
    },
    {
        name: 'Marshal Bluetooth Speaker',
        image: productimage11,
        features: ['360° Sound', '12 Hours Battery', 'Waterproof', 'Bluetooth 5.2'],
        price: "9,999"
    },
    {
        name: 'DJI Drone',
        image: productimage12,
        features: ['4K Camera', 'GPS', '90 Mins Flight Time', 'Obstacle Avoidance'],
        price: "19,999"
    },
    {
        name: 'Logitech Professional mouse',
        image: productimage13,
        features: ['6 dedicated keys', 'silent and tackble', 'Designed for coding', 'Wireless and bluetooth'],
        price: "2,999"
    },
    {
        name: 'Samsung Buds 3 pro',
        image: productimage14,
        features: ['Noise Cancellation', 'In ear 360* surround', 'Fast Charging', 'Compact Design'],
        price: "14,999"
    },
    {
        name: 'BENQ Projector',
        image: productimage15,
        features: ['4K Resolution', '350" Screen', 'HDMI , VGA and wireless', 'Portable'],
        price: "99,999"
    },
    {
        name: 'MI 20,000 MAh Power Bank',
        image: productimage16,
        features: ['20,000 MAh', 'Fast-Charhing 33W', '2 USB and 1 Type-C', 'Compact and light weight'],
        price: "2,499"
    }
  ]);

  const addProduct = (newProduct) => {
    setProducts((prevProducts) => [...prevProducts, newProduct]);
  };

  return (
    <ProductsContext.Provider value={{ products, setProducts, addProduct }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
