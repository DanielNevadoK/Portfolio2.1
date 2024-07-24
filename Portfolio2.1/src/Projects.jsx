import React from "react";
import "./App.css";

function Projects() {
  return (
    <div id="projects-page">
      <div className="project-title">
        <h2>PROJECTS</h2>
      </div>
      <div className="project-wrapper">
        <section id="project-section1">
          <div className="small-project-card">
            <div className="small-img-container">
              <a href="#">
                <img src="" alt="" />
              </a>
            </div>
            <div className="description-container">
              <p>Project title here</p>
              <p>Project work here</p>
            </div>
          </div>
          <div className="medium-project-card">
            <div className="medium-img-container">
              <a href="#">
                <img src="" alt="" />
              </a>
            </div>
            <div className="description-container">
              <p>Project title here</p>
              <p>Project work here</p>
            </div>
          </div>
        </section>
        <section id="project-section2">
          <div className="medium-project-card">
            <div className="medium-img-container">
              <a href="#">
                <img src="" alt="" />
              </a>
            </div>
            <div className="description-container">
              <p>Project title here</p>
              <p>Project work here</p>
            </div>
          </div>
          <div className="small-project-card">
            <div className="small-img-container">
              <a href="#">
                <img src="" alt="" />
              </a>
            </div>
            <div className="description-container">
              <p>Project title here</p>
              <p>Project work here</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Projects;
