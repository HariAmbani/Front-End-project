import { Avatar, Button, Image, Layout, Menu } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import logo from "../assets/file.png";
import { UserOutlined, HomeOutlined, ShoppingCartOutlined, DropboxOutlined, QuestionCircleFilled } from "@ant-design/icons";
import { Link, Route, Routes } from "react-router-dom";
import LoginPage from "./LoginPage";
import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import HomePage from "./HomePage";
import CartPage from "./CartPage";
import OrderPage from "./OrderPage";
import AdminPage from "./AdminPage";
import ProductsProvider from "../Data/ProductDetails"

function MainLayout({ cartItems, setCartItems }) {
  const { isLoggedIn, logout } = useContext(AuthContext);
  const [collapsed, setCollapsed] = useState(false); // State to track Sider collapse
  const [orderItems, setOrderItems] = useState([]); // State for orders

  return isLoggedIn ? (
    <Layout style={{ height: "100vh" }}>
      {/* Header */}
      <Header
        style={{
          backgroundColor: "white",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Image width="100px" src={logo} preview={false} />
        <h1 style={{ margin: 0 }}>Electronics Ecommerce Website</h1>
        <div style={{ display: "flex", gap: "30px", alignItems: "center" }}>
          <Avatar size={48} icon={<UserOutlined />} style={{ margin: "8px" }} />
          <Button type="primary" danger onClick={logout}>
            Logout
          </Button>
        </div>
      </Header>

      {/* Main Content Area */}
      <Layout>
        {/* Sider */}
        <Sider
          collapsible
          width={200}
          style={{ height: "calc(100vh - 64px)", position: "fixed" }}
          breakpoint="lg"
          collapsedWidth="80"
          onCollapse={(collapsed) => setCollapsed(collapsed)} // Track collapse state
        >
          <Menu theme="dark" mode="inline" style={{ fontSize: "16px", padding: "10px 0" }}>
            <Menu.Item key="1" icon={<HomeOutlined style={{ fontSize: "18px" }} />}>
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<UserOutlined style={{ fontSize: "18px" }} />}>
              <Link to="/admin">Admin</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<ShoppingCartOutlined style={{ fontSize: "18px" }} />}>
              <Link to="/cart">Your Cart</Link>
            </Menu.Item>
            <Menu.Item key="4" icon={<DropboxOutlined style={{ fontSize: "18px" }} />}>
              <Link to="/orders">Your Orders</Link>
            </Menu.Item>
            <Menu.Item key="5" icon={<QuestionCircleFilled style={{ fontSize: "18px" }} />}>
              <Link to="/help">Help</Link>
            </Menu.Item>
          </Menu>
        </Sider>

        {/* Content */}
        <Content
          style={{
            padding: "24px",
            backgroundColor: "#F1F1F1",
            marginLeft: collapsed ? 80 : 200, // Adjust based on collapsed state
            overflowY: "auto",
            height: "calc(100vh - 64px)",
          }}
        >
          <ProductsProvider>
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  cartItems={cartItems}
                  setCartItems={setCartItems}
                  orderItems={orderItems}
                  setOrderItems={setOrderItems} // Pass setOrderItems to HomePage
                />
              }
            />
            <Route
              path="/admin"
              element={<AdminPage />} />
            <Route
              path="/cart"
              element={<CartPage cartItems={cartItems} setCartItems={setCartItems} setOrderItems={setOrderItems} />}
            />
            <Route
              path="/orders"
              element={<OrderPage orderItems={orderItems} setOrderItems={setOrderItems} />} // Pass setOrderItems to OrderPage
            />
            <Route path="/help" element={<p>Help</p>} />
          </Routes>
          </ProductsProvider>
        </Content>
      </Layout>

      {/* Footer */}
      {/*<Footer style={{ textAlign: "center", height: "10px" }}>Footer</Footer>*/}
    </Layout>
  ) : (
    <LoginPage />
  );
}

export default MainLayout;
