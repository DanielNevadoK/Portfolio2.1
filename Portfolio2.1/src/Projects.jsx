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
                <img src="./Img/bagel_street_cafe.png" alt="Bagel Street Cafe" />
              </a>
            </div>
            <div className="description-container">
              <p className="project-title">Bagel Street Café</p>
              <p className="project-work" >UX/UI</p>
            </div>
          </div>
          <div className="medium-project-card">
            <div className="medium-img-container">
              <a href="#">
                <img src="/Img/Peluceria.png" alt="" />
              </a>
            </div>
            <div className="description-container">
              <p className="project-title">Bagel Street Café</p>
              <p className="project-work">UX/UI</p>
            </div>
          </div>
        </section>
        <section id="project-section2">
          <div className="medium-project-card">
            <div className="medium-img-container">
              <a href="#">
                <img src="/Img/Peluceria.png" alt="" />
              </a>
            </div>
            <div className="description-container">
              <p className="project-title">Bagel Street Café</p>
              <p className="project-work">UX/UI</p>
            </div>
          </div>
          <div className="small-project-card">
            <div className="small-img-container">
              <a href="#">
                <img src="./Img/bagel_street_cafe.png" alt="" />
              </a>
            </div>
            <div className="description-container">
              <p className="project-title">Bagel Street Café</p>
              <p className="project-work">UX/UI</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Projects;
