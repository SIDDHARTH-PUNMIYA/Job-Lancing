import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css'; 
import Logo from '../../public/logo.svg';
const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <NavLink to="/" className="logo-link">
                    {/* Replace with your logo image */}
                    <img src={Logo} alt="Logo" width="40px" height="40px" />
                </NavLink>
            </div>
            <ul className="nav-links">
                <li>
                    <NavLink to="/" exact activeClassName="active-link">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/list-profile" activeClassName="active-link">
                        Add Profile
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/hire-professional" activeClassName="active-link">
                        Hire Professional
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/admin-dashboard" activeClassName="active-link">
                        Admin DashBoard
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about" activeClassName="active-link">
                        About Us
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/login" activeClassName="active-link">
                        Login
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
