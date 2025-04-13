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
                <img src="./Img/Broken_Records.png" alt="" />
              </Link>
            </div>
            {/* <div className="description-container">
              <p className="project-card-title">Broken Records</p>
              <p className="project-work"> Vinyl Records Webshop</p>
            </div> */}
          </div>
          <div className="project-card">
            <div className="img-container">
              <Link to="/project_cases/bagel-house-cafe">
                <img src="./Img/Bagel_street_house_big.png" alt="" />
              </Link>
            </div>
            {/* <div className="description-container">
              <p className="project-title">Bagel House Café</p>
              <p className="project-work">Bagel Cafe website</p>
            </div> */}
          </div>
          <div className="project-card">
            <div className="img-container">
              <Link to="/project_cases/kn-trafik-skola">
                <img src="./Img/Korkortsnyckeln.png" alt="" />
              </Link>
            </div>
            {/* <div className="description-container">
              <p className="project-title">Driving School</p>
              <p className="project-work">Modernizing a driving schools website</p>
            </div> */}
          </div>
          <div className="project-card">
            <div className="img-container">
              <a href="https://dnk-dev.vercel.app/" target="_blank"> 
                <img src="./Img/First_Portfolio.png" alt="" />
              </a>
            </div>
            {/* <div className="description-container">
              <p className="project-title">First Porfolio</p>
              <p className="project-work">Visit my first portfolio</p>
            </div> */}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Projects;
