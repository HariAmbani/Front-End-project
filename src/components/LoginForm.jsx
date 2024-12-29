import React, { useContext, useState } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { AuthContext } from '../Context/AuthContext'

const LoginForm = () => {
  const { login } = useContext(AuthContext);
  const [error, setError] = useState('');

  const onFinish = (values) => {
    // Clear previous error
    setError('');

    // Validate credentials
    if (values.username === "admin" && values.password === "admin123") {
      login();
    } else {
      setError('Invalid Credentials');
    }
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      style={{
        maxWidth: 600,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        validateStatus={error ? 'error' : ''}
        help={error}
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked" label={null}>
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item label={null}>
        <Button type="primary" htmlType="submit">
          Login
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;