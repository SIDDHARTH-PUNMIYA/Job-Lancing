import React from 'react';
import { Button, Card, Col, Row, Typography } from 'antd';
import { CheckCircleOutlined, DollarCircleOutlined, SmileOutlined } from '@ant-design/icons';
import '../styles/Home.css'; 

const { Title, Paragraph } = Typography;

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="hero-section">
        <Title level={1}>Hire the Best Accounting Professionals</Title>
        <Paragraph>
          Get expert financial advice and services tailored to your needs. Our experienced accountants are here to help you with everything from tax planning to financial consulting.
        </Paragraph>
        <Button type="primary" size="large">Get Started</Button>
      </div>

      {/* Why Choose Us Section */}
      <div className="why-choose-us-section">
        <Title level={2}>Why Choose Us?</Title>
        <Row gutter={16}>
          <Col span={8}>
            <Card>
              <CheckCircleOutlined style={{ fontSize: '24px', color: '#52c41a' }} />
              <Title level={4}>Expertise</Title>
              <Paragraph>Our team has years of experience in accounting and finance.</Paragraph>
            </Card>
          </Col>
          <Col span={8}>
            <Card>
              <DollarCircleOutlined style={{ fontSize: '24px', color: '#faad14' }} />
              <Title level={4}>Cost-Effective</Title>
              <Paragraph>We offer competitive rates without compromising on quality.</Paragraph>
            </Card>
          </Col>
          <Col span={8}>
            <Card>
              <SmileOutlined style={{ fontSize: '24px', color: '#1890ff' }} />
              <Title level={4}>Customer Satisfaction</Title>
              <Paragraph>Our clients love us. Check out their testimonials!</Paragraph>
            </Card>
          </Col>
        </Row>
      </div>

      {/* Services Section */}
      <div className="services-section">
        <Title level={2}>Our Services</Title>
        <Row gutter={16}>
          <Col span={8}>
            <Card title="Tax Planning">
              <Paragraph>Comprehensive tax planning to optimize your savings.</Paragraph>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Financial Consulting">
              <Paragraph>Expert advice to help you make informed financial decisions.</Paragraph>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Bookkeeping">
              <Paragraph>Accurate and reliable bookkeeping services to keep your finances in check.</Paragraph>
            </Card>
          </Col>
        </Row>
      </div>

      {/* Testimonials Section */}
      <div className="testimonials-section">
        <Title level={2}>What Our Clients Say</Title>
        <Row gutter={16}>
          <Col span={8}>
            <Card>
              <Paragraph>"The best accounting service I've ever used. Highly recommended!" - Client A</Paragraph>
            </Card>
          </Col>
          <Col span={8}>
            <Card>
              <Paragraph>"Professional and efficient. They really know their stuff." - Client B</Paragraph>
            </Card>
          </Col>
          <Col span={8}>
            <Card>
              <Paragraph>"Fantastic service. They helped me save a lot on taxes." - Client C</Paragraph>
            </Card>
          </Col>
        </Row>
      </div>

      {/* Contact Us Section */}
      <div className="contact-us-section">
        <Title level={2}>Get in Touch</Title>
        <Paragraph>If you have any questions or need further information, please contact us:</Paragraph>
        <Button type="primary">Contact Us</Button>
      </div>

      {/* Footer */}
      <div className="footer">
        <Paragraph>© 2024 Your Company. All rights reserved.</Paragraph>
      </div>
    </div>
  );
};

export default Home;
