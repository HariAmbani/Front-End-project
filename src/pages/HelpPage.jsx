import React from 'react';
import { Layout, Row, Col, Button, Card, Typography, Divider } from 'antd';
import { PhoneOutlined, MailOutlined } from '@ant-design/icons';
import '../components/HelpPage.css'; // Custom CSS for styling

const { Title, Paragraph } = Typography;

const HelpPage = () => {
  return (
    <Layout
      style={{
        minHeight: '100vh',
        backgroundImage: 'url("/assets/formal_background.jpg")', // Replace with your formal photo
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '20px',
      }}
    >
      <Row justify="center" style={{ padding: '50px 0' }}>
        <Col xs={24} sm={18} md={12} lg={10}>
          <Card
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              borderRadius: '8px',
              boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.1)',
              padding: '30px',
            }}
          >
            <Title level={2} style={{ textAlign: 'center' }}>
              Customer Help & Support
            </Title>
            <Paragraph style={{ textAlign: 'center' }}>
              We are here to assist you with any questions or issues you may have.
              Please feel free to reach out to us for support.
            </Paragraph>

            <Divider />

            <Title level={4}>Frequently Asked Questions</Title>
            <ul>
              <li>
                <strong>How do I place an order?</strong> <br />
                Simply browse our product catalog, select the items you want, and proceed
                to checkout. We will take care of the rest!
              </li>
              <li>
                <strong>What payment methods do you accept?</strong> <br />
                We accept a variety of payment methods, including credit/debit cards, net
                banking, and UPI payments.
              </li>
              <li>
                <strong>How do I track my order?</strong> <br />
                Once your order has been dispatched, you will receive an email with a
                tracking number and a link to track the shipment.
              </li>
              <li>
                <strong>How do I return an item?</strong> <br />
                If you wish to return a product, please contact our support team within 30
                days of delivery. We'll assist you in the return process.
              </li>
            </ul>

            <Divider />

            <Title level={4}>Still Need Help?</Title>
            <Paragraph>
              If your question isn't answered here, feel free to get in touch with us.
            </Paragraph>

            <Row gutter={[16, 16]} justify="center">
              <Col span={24} style={{ textAlign: 'center' }}>
                <Button
                  type="primary"
                  icon={<PhoneOutlined />}
                  size="large"
                >
                  Call Us: +91 0987654321
                </Button>
              </Col>
            </Row>

            <Divider />

            <Title level={4}>Email Support</Title>
            <Paragraph>
              Alternatively, you can email us at <a href="mailto:support@ecommerce.com">support@ecommerce.com</a> for any inquiries.
            </Paragraph>
          </Card>
        </Col>
      </Row>
    </Layout>
  );
};

export default HelpPage;
