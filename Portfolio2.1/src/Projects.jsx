import React from "react";
import "./App.css";
import { Link } from 'react-router-dom';

function Projects() {
  return (
    <div 
    id="projects-page" 
    className="bg-[#0B1922] flex flex-col pt-14 w-full min-h-">
      <div className="project-title w-full flex justify-center pb-10">
        <h2 className="text-5xl">Project Wall</h2>
      </div>
      <div className="project-wrapper">
        <section id="project-section1">
          <div className="project-card">
            <div className="img-container">
              <Link to="/project_cases/broken-records">
                <img src="./Img/BrokenRecordsNew.png" alt="" />
              </Link>
            </div>
          </div>
          <div className="project-card">
            <div className="img-container">
              <Link to="/project_cases/bagel-house-cafe">
                <img src="./Img/BagelStreetCafeNew.png" alt="" />
              </Link>
            </div>
          </div>
          <div className="project-card">
            <div className="img-container">
              <Link to="/project_cases/kn-trafik-skola">
                <img src="./Img/KNLandingPageNew.png" alt="" />
              </Link>
            </div>
          </div>
          <div className="project-card">
            <div className="img-container">
              <a href="https://dnk-dev.vercel.app/" target="_blank"> 
                <img src="./Img/FirstPortfolioNew.png" alt="" />
              </a>
            </div>

          </div>
        </section>
      </div>
    </div>
  );
}

export default Projects;
