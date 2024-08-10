import React, { useState } from 'react';
import { Input, Card, List, Button, notification } from 'antd';

const { Search } = Input;

const mockData = [
  { id: 1, name: 'John Doe', age: 30, email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', age: 25, email: 'jane@example.com' },
  // Add more mock data as needed
];

const HireProfessional = () => {
  const [data, setData] = useState(mockData);
  const [selectedPerson, setSelectedPerson] = useState(null);

  const onSearch = (value) => {
    const filteredData = mockData.filter(person =>
      person.name.toLowerCase().includes(value.toLowerCase())
    );
    setData(filteredData);
  };
  const hireConfirm = () => {
    notification.success({
        message: 'Success',
        description: `${selectedPerson.name} hired successfully`,
    });
  }


  return (
    <div style={{ padding: '20px' }}>
      <Search
        placeholder="Search for a Professional"
        onSearch={onSearch}
        style={{ marginBottom: '20px' }}
      />
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={item => (
          <List.Item
            actions={[<a onClick={() => setSelectedPerson(item)}>View Profile</a>]}
          >
            <List.Item.Meta
              title={item.name}
            />
          </List.Item>
        )}
      />
      {selectedPerson && (
        <Card
          title={selectedPerson.name}
          style={{ marginTop: '20px' }}
        >
          <p><strong>Age:</strong> {selectedPerson.age}</p>
          <p><strong>Email:</strong> {selectedPerson.email}</p>
          <Button type="primary" onClick={hireConfirm}>Hire</Button>
        </Card>
      )}
    </div>
  );
};

export default HireProfessional;
