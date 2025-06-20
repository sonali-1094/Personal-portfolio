import React from "react";
import "./About.css";
import { Link } from "react-router-dom";

//import theme_pattern from '../../assets/theme_pattern.jpg'
//import profile_img from '../../assets/about_profile.jpg'

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src="" alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src="" alt="" />
        </div>
        <div className="about-right"></div>
        <div className="about-para">
          <p>
            Hi! I'm Sonali Patil, a passionate and dedicated Frontend Developer
            with a strong foundation in React.js, Tailwind CSS, HTML, and
            JavaScript. I love crafting visually appealing, responsive, and
            user-friendly web experiences that not only look great but also
            perform smoothly.
          </p>
          <p>
            I'm currently pursuing my degree in Electronics & Computer
            Engineering, and constantly pushing myself to learn and grow in the
            world of web development. I’ve worked on projects ranging from
            personal portfolios to mental health apps and gamified learning
            platforms, each sharpening my design and coding skills.
          </p>
          <p>
            I enjoy solving problems, learning new technologies, and building
            projects that make a real impact. My aim is to become a full-stack
            developer and contribute to innovative products that enhance lives.
          </p>
        </div>
        <div className="about-skills">
          <div className="about-skill">
            <p>HTML & CSS</p>
            <hr style={{ width: "50%" }} />
          </div>
          <div className="about-skill">
            <p>React JS</p>
            <hr style={{ width: "70%" }} />
          </div>
          <div className="about-skill">
            <p>JavaScript</p>
            <hr style={{ width: "60%" }} />
          </div>
          <div className="about-skill">
            <p>MongoDb</p>
            <hr style={{ width: "50%" }} />
          </div>
        </div>
        <div className="about-achievements">
          <div className="about-achievement">
            <h1>10+</h1>
            <p>PROJECT COMPLETED</p>
          </div>
          <hr />
          <div className="about-achievement">
            <h1>10+</h1>
            <p>HAPPY CLIENTS</p>
          </div>
          <hr />
          <div className="about-achievement">
            <h1>15+</h1>
            <p>PROJECTS</p>
          </div>
          <hr />
        </div>
      </div>
      <Link to="/" className="back-home-btn">
        ← Back to Home
      </Link>
    </div>
  );
};

export default About;
