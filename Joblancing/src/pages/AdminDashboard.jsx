import React from 'react';
import { Card, Col, Row } from 'antd';

const AdminDashboard = () => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <Row gutter={16}>
        <Col span={8}>
          <Card title="Card 1" bordered={false}>
            Content 1
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Card 2" bordered={false}>
            Content 2
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Card 3" bordered={false}>
            Content 3
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default AdminDashboard;
