import React from "react";
import projects from "../assets/projects";
import "./pages.css";

const Work = () => {
  return (
    <section className="work-section">
      <div className="work-container">
        <h1 className="title">My Works</h1>
        <div className="work-grid">
          {projects.map((project, index) => (
            <div className="work-card" key={index}>
              <div className="work-image-container">
                <img
                  src={project.image}
                  alt={project.title}
                  className="work-image"
                />
              </div>
              <div className="work-content">
                <h2 className="project-title">{project.title}</h2>
                <p className="project-duration">{project.duration}</p>
                <div className="project-description">
                  <ul>
                    {project.description.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </div>
                <div className="project-tech">
                  {project.technologies.map((tech, idx) => (
                    <span className="tech-badge" key={idx}>
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
