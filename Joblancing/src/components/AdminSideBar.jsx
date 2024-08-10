import { Layout, Menu } from 'antd';
import { NavLink } from 'react-router-dom';
import '../styles/Admin.css';
import { DashboardOutlined, UserOutlined } from '@ant-design/icons';
const { Header, Content, Sider } = Layout;

const AdminSidebar =({ children }) => {
    return (
        <>
    <Layout style={{ minHeight: '100vh' }}>
      <Sider width={250} style={{background:"#fff"}}>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <Menu.Item key="1" icon={<DashboardOutlined />}>
            <NavLink to="/admin-dashboard">Admin Dashboard</NavLink>
          </Menu.Item>
          <Menu.Item key="2" icon={<UserOutlined />}>
            <NavLink to="/users-management">User Management</NavLink>
          </Menu.Item>
        </Menu>
      </Sider>
         <Content style={{ padding: 24, margin: 0, minHeight: 280 }}>
          {children}
          </Content>
      </Layout>
        </>
    );
    }

export default AdminSidebar ;