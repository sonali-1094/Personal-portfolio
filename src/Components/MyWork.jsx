import React from "react";
import "./MyWork.css";
import MyWork_Data from "../assets/mywork_data";
import { Link } from "react-router-dom";

const MyWork = () => {
  return (
    <div id="work" className="mywork">
      <div className="mywork-title">
        <h1>My Latest Projects</h1>
      </div>

      <div className="mywork-container">
        {MyWork_Data.map((project) => (
          <div key={project.id} className="mywork-card">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div className="mywork-links">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                💻 GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
      <Link to="/" className="back-home-btn">
        ← Back to Home
      </Link>
    </div>
  );
};

export default MyWork;
