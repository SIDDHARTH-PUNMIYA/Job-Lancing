// src/ListProfile.js
import React from 'react';
import { Form, Input, Button, Card } from 'antd';

const ListProfile = () => {
  const onFinish = (values) => {
    console.log('Received values:', values);
  };

  return (
    <div style={{ padding: '30px', maxWidth: '600px', margin: 'auto' }}>
      <Card title="Create Profile" bordered={false}>
        <Form
          name="profile_form"
          initialValues={{ name: '', about: '' }}
          onFinish={onFinish}
          layout="vertical"
        >
          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: 'Please enter your name!' }]}
          >
            <Input placeholder="Enter your name" />
          </Form.Item>

          <Form.Item
            name="about"
            label="About Me"
            rules={[{ required: true, message: 'Please tell us about yourself!' }]}
          >
            <Input.TextArea placeholder="Tell us about yourself" rows={4} />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default ListProfile;
