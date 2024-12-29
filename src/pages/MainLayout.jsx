import { Avatar, Button, Image, Layout, Menu } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import logo from "../assets/file.png";
import { UserOutlined, HomeOutlined, ShoppingCartOutlined, DropboxOutlined, QuestionCircleFilled, SettingOutlined } from '@ant-design/icons';
import { Link, Route, Routes } from "react-router-dom";
import LoginPage from "./LoginPage";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

function MainLayout() {
    const { isLoggedIn, logout } = useContext(AuthContext);

    return (
        isLoggedIn ? (
            <Layout style={{ height: '100vh' }}>
                {/* Header */}
                <Header style={{ backgroundColor: "white", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
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
                        style={{ height: 'calc(100vh - 64px)', overflow: 'auto' }}
                        breakpoint="lg"
                        collapsedWidth="80"
                    >
                        <Menu theme="dark" mode="inline" style={{ fontSize: '16px', padding: '10px 0' }}>
                            <Menu.Item key="1" icon={<HomeOutlined style={{ fontSize: '18px' }} />}>
                                <Link to="/">Home</Link>
                            </Menu.Item>
                            <Menu.Item key="2" icon={<UserOutlined style={{ fontSize: '18px' }} />}>
                                <Link to="/admin">Admin</Link>
                            </Menu.Item>
                            <Menu.Item key="3" icon={<ShoppingCartOutlined style={{ fontSize: '18px' }} />}>
                                <Link to="/cart">Your Cart</Link>
                            </Menu.Item>
                            <Menu.Item key="4" icon={<DropboxOutlined style={{ fontSize: '18px' }} />}>
                                <Link to="/orders">Your Orders</Link>
                            </Menu.Item>
                            <Menu.Item key="5" icon={<SettingOutlined style={{ fontSize: '18px' }} />}>
                                <Link to="/settings">Settings</Link>
                            </Menu.Item>
                            <Menu.Item key="6" icon={<QuestionCircleFilled style={{ fontSize: '18px' }} />}>
                                <Link to="/help">Help</Link>
                            </Menu.Item>
                        </Menu>
                    </Sider>

                    {/* Content */}
                    <Content style={{ padding: '24px', backgroundColor: '#F1F1F1' }}>
                        <Routes>
                            <Route path="/" element={<p>Home</p>} />
                            <Route path="/admin" element={<p>Admin</p>} />
                            <Route path="/cart" element={<p>Cart</p>} />
                            <Route path="/orders" element={<p>Orders</p>} />
                            <Route path="/settings" element={<p>Settings</p>} />
                            <Route path="/help" element={<p>Help</p>} />
                        </Routes>
                    </Content>
                </Layout>
                {/* Footer */}
                <Footer style={{ textAlign: 'center', height: "10px" }}>Footer</Footer>
            </Layout>
        ) : (
            <LoginPage />
        )
    );
}

export default MainLayout;
