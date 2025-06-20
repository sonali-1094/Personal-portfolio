import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom"; // ✅ Use Link from React Router

const Hero = () => {
  return (
    <div id="home" className="hero">
      <h1>
        <span>Hii I'm Sonali Patil,</span> frontend developer.
      </h1>
      <p>
        I am passionate about crafting responsive and interactive web
        experiences.
      </p>

      <div className="hero-action">
        <Link to="/footer" className="hero-connect">
          Connect with Me
        </Link>

        {/* Open resume PDF */}
        <a
          href="/public/Sonali Patil Resume Latest.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hero-resume"
        >
          My Resume
          
        </a>
      </div>
    </div>
  );
};

export default Hero;
