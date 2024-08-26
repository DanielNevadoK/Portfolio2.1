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
          <div className="medium-project-card">
            <div className="medium-img-container">
              <a href="https://brokenrecords.vercel.app/" target="_blank">
                <img src="./Img/Broken_records_pic.png" alt="" />
              </a>
            </div>
            <div className="description-container">
              <p className="project-card-title">Broken Records</p>
              <p className="project-work"> Vinyl Records Webshop</p>
            </div>
          </div>
          <div className="medium-project-card">
            <div className="medium-img-container">
              <a href="#">
                <img src="./Img/Bagel_street_house.png" alt="" />
              </a>
            </div>
            <div className="description-container">
              <p className="project-title">Bagel House Café</p>
              <p className="project-work">Bagel Cafe website</p>
            </div>
          </div>
          <div className="medium-project-card">
            <div className="medium-img-container">
              <a href="#">
                <img src="./Img/Peluceria.png" alt="" />
              </a>
            </div>
            <div className="description-container">
              <p className="project-title">Spanish Hair Saloon</p>
              <p className="project-work">UX/UI Design Prototype</p>
            </div>
          </div>
          <div className="medium-project-card">
            <div className="medium-img-container">
              <a href="https://dnk-dev.vercel.app/" target="_blank">
                <img src="./Img/First_Portfolio.png" alt="" />
              </a>
            </div>
            <div className="description-container">
              <p className="project-title">First Porfolio</p>
              <p className="project-work">Visit my first portfolio</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Projects;
