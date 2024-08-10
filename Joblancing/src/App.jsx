import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import Login from './pages/Login';
import Navbar from './components/NavBar';
import HireProfessional from './pages/HireProfessional';
import ListProfile from './pages/ListProfile';
import AdminSideBar from './components/AdminSideBar';
import AdminDashboard from './pages/AdminDashboard';
import UserManagement from './pages/UserManagement';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/hire-professional" element={<HireProfessional />} />
        <Route path="/list-profile" element={<ListProfile />} />
        <Route path="/admin-dashboard" element={
                    <AdminSideBar>
                        <AdminDashboard />
                    </AdminSideBar>
                } />
                <Route path="/users-management" element={
                    <AdminSideBar>
                        <UserManagement />
                    </AdminSideBar>
                } />
      </Routes>
    </Router>
  );
}

export default App;
