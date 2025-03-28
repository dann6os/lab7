import React, { useState, useEffect } from "react";
import greencardImg from "../assets/greencard.png";
import quickcashImg from "../assets/quickcash.png";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/api/projects")
    .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error("Error fetching projects:", err));
  }, []);

  return (
    <div className="page-container">
      <h1>My Projects</h1>
      <p>My Projects Done in School</p>

      <div className="projects-container">
        {projects.length > 0 ? (
          projects.map((project) => (
            <div key={project.id} className="project-item">
              <h2>{project.name}</h2>
              <p><strong>Author:</strong> {project.author}</p>
              <p><strong>Languages:</strong> {project.languages.join(", ")}</p>
              <p>{project.description}</p>
              <p><strong>Technologies Used:</strong> {project.technologies.join(", ")}</p>
              {project.name === "Geriatric Psychiatry Green Card Project" && (
                <img src={greencardImg} alt="Geriatric Psychiatry Green Card" className="project-img" />
              )}
              {project.name === "CSCI3172 QuickCash Project" && (
                <img src={quickcashImg} alt="QuickCash Job App" className="project-img" />
              )}             
            </div>
          ))
        ) : (
          <p>Loading projects...</p>
        )}
      </div>
    </div>
  );
};

export default Projects;
