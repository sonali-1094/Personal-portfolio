import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
      <ul className="nav-menu">
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
            About Me
          </NavLink>
        </li>
        <li>
          <NavLink to="/services" className={({ isActive }) => (isActive ? 'active' : '')}>
            Services
          </NavLink>
        </li>
        <li>
          <NavLink to="/work" className={({ isActive }) => (isActive ? 'active' : '')}>
            My Work
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>
            Contact
          </NavLink>
        </li>
       
      </ul>

      {/* You can link to Contact or any page here */}
      <NavLink to="/footer" className="nav-connect">
        Connect With Me
      </NavLink>
    </div>
  );
};

export default Navbar;
