import React from 'react';
import './Footer.css';
import { FaUser, FaGithub, FaLinkedin } from 'react-icons/fa'; // ✅ Icons

const Footer = () => {
  return (
    <div id='footer' className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
          <FaUser className="footer-user-icon" />
          <p>I am frontend developer.</p>
        </div>

        <div className="footer-top-right">
          <div className="footer-email-input">
            <input type='email' placeholder='Enter your email' />
          </div>
          <div className="footer-subcriber">Subscribe</div>
        </div>
      </div>

      <hr />

      <div className="footer-bottom">
        <p className='footer-bottom-left'>© 2025 Sonali Patil. All rights reserved.</p>

        <div className="bottom-right">
          {/* GitHub */}
          <a href="https://github.com/sonali-1094" target="_blank" rel="noopener noreferrer">
            <FaGithub className="footer-icon" />
          </a>

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/sonali-patil-190257288" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="footer-icon" />
          </a>

          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
