import React from "react";
import "./App.css";
import Header from "./Header";
import ProjectsBtn from "./components/btns/projects-btn/main";
import AboutMe from "./components/btns/about-me-btn/main";
import ContactBtn from "./components/btns/contact-btn/main";

function LandingPage() {
  return (
    <div id="landing-page">
      <Header />
      <div className="title-container">
          <h1 className="mini-title ">Daniel Nevado Kröger</h1>
          <div>
          <ProjectsBtn />
          <AboutMe />
          <ContactBtn />
          </div>
      </div>
      <div className="landing-page-pic">
        <img src="/Img/No_bg.png" alt="Daniel" />
      </div>
      <div className="job-title-lp">
        <p>Frontend developer</p>
      </div>
    </div>
  );
}

export default LandingPage;
