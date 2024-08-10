import React from 'react';
import { Layout, Typography, Row, Col, Card, Avatar, Divider } from 'antd';
import 'antd/dist/reset.css'; // Import Ant Design styles

const { Header, Content, Footer } = Layout;
const { Title, Paragraph } = Typography;

const teamMembers = [
  {
    name: 'John Doe',
    role: 'CEO',
    avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
    description: 'John is the visionary behind our company, leading the way with innovative ideas and strategic thinking.'
  },
  {
    name: 'Jane Smith',
    role: 'CTO',
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
    description: 'Jane is the technical mastermind who ensures that our products are at the cutting edge of technology.'
  },
  {
    name: 'Emily Johnson',
    role: 'CFO',
    avatar: 'https://randomuser.me/api/portraits/women/72.jpg',
    description: 'Emily oversees our financial operations, ensuring our financial health and sustainability.'
  }
];

const AboutPage = () => {
  return (
    <Layout>
      <Header style={{ background: '#fff', padding: 0 }}>
        <div style={{ textAlign: 'center', padding: '16px' }}>
          <Title level={2}>About Us</Title>
        </div>
      </Header>
      <Content style={{ padding: '0 50px', marginTop: 20 }}>
        <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
          <Typography>
            <Title level={3}>Our Mission</Title>
            <Paragraph>
              Our mission is to provide high-quality products and services that make a difference in the world. We strive for excellence in every aspect of our business and are dedicated to customer satisfaction.
            </Paragraph>
            <Divider />
            <Title level={3}>Meet the Team</Title>
            <Row gutter={16}>
              {teamMembers.map((member) => (
                <Col span={8} key={member.name}>
                  <Card
                    hoverable
                    cover={<Avatar size={64} src={member.avatar} />}
                  >
                    <Card.Meta
                      title={member.name}
                      description={member.role}
                    />
                    <Paragraph style={{ marginTop: 16 }}>
                      {member.description}
                    </Paragraph>
                  </Card>
                </Col>
              ))}
            </Row>
          </Typography>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
       Job Lancing ©{new Date().getFullYear()}
      </Footer>
    </Layout>
  );
};

export default AboutPage;
