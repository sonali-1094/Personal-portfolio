import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <div className='navbar'>
      <div className="nav-logo">Portfolio</div>

      <ul className={isMobile ? 'nav-menu-mobile' : 'nav-menu'}>
        <li>
          <NavLink to="/" onClick={() => setIsMobile(false)} className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" onClick={() => setIsMobile(false)} className={({ isActive }) => (isActive ? 'active' : '')}>About Me</NavLink>
        </li>
        <li>
          <NavLink to="/services" onClick={() => setIsMobile(false)} className={({ isActive }) => (isActive ? 'active' : '')}>Services</NavLink>
        </li>
        <li>
          <NavLink to="/work" onClick={() => setIsMobile(false)} className={({ isActive }) => (isActive ? 'active' : '')}>My Work</NavLink>
        </li>
        <li>
          <NavLink to="/contact" onClick={() => setIsMobile(false)} className={({ isActive }) => (isActive ? 'active' : '')}>Contact</NavLink>
        </li>
      </ul>

      <div className="nav-connect">
        <NavLink to="/contact">Connect With Me</NavLink>
      </div>

      <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? '✕' : '☰'}
      </button>
    </div>
  );
};

export default Navbar;
