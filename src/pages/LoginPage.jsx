import { Button, Image, Tabs } from "antd";
import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm";
import logo from "../assets/file.png";

function LoginPage(){

    const loginContainerStyle={
        display:"flex", 
        flexDirection:"column", 
        justifyContent:"center",
        alignItems: "center", 
        backgroundColor:"#f0f2f5",
        height:"100vh"
    }

    return(
        <div style={loginContainerStyle}>
            <Image src={logo} preview={false} height="200px"></Image>
                <Tabs>
                    <Tabs.TabPane tab="Login" key="1">
                        <LoginForm></LoginForm>  
                    </Tabs.TabPane>  
                    <Tabs.TabPane tab="Signup" key="2">
                        <SignupForm></SignupForm>
                    </Tabs.TabPane>
                </Tabs>
        </div>
    )
}
export default LoginPage;