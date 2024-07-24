import React from "react";
import "./App.css";

function Projects() {
  return (
    <div id="projects-page">
      <div>
        <h2>PROJECTS</h2>
      </div>
      <div>
        <section id="project-section1">
          <div className="small-project-card">
            <a href="#">
              <img src="" alt="" />
            </a>
          </div>
          <div className="medium-project-card">
            <a href="#">
              <img src="" alt="" />
            </a>
          </div>
        </section>
        <section id="project-section2">
          <div className="medium-project-card">
            <a href="#">
              <img src="" alt="" />
            </a>
          </div>
          <div className="small-project-card">
            <a href="#">
              <img src="" alt="" />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Projects;
