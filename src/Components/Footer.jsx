import React from 'react';
import './Footer.css';
import { FaUser, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div id='footer' className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
          <FaUser className="footer-user-icon" />
          <p>I am frontend developer.</p>
        </div>
      </div>

      {/* ✅ Move icons here, above the line */}
      <div className="footer-social">
        <a href="https://github.com/sonali-1094" target="_blank" rel="noopener noreferrer">
          <FaGithub className="footer-icon" />
        </a>
        <a href="https://www.linkedin.com/in/sonali-patil-190257288" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="footer-icon" />
        </a>
      </div>

      <hr />

      <div className="footer-bottom">
        <p className='footer-bottom-left'>© 2025 Sonali Patil All rights reserved.</p>
        <p>Connect with Me</p>
      </div>
    </div>
  );
};

export default Footer;
