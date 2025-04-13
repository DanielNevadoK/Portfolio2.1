import React from "react";
import "./App.css";
import ProjectsBtn from "./components/btns/projects-btn/main";
import AboutMe from "./components/btns/about-me-btn/main";
import ContactBtn from "./components/btns/contact-btn/main";
import RightTextAnimation from "./components/text-animation/right-text-animation/main";
import LeftTextAnimation from "./components/text-animation/left-text-animation/main";

function LandingPage() {
  return (
    <div id="landing-page" className="-mt-24 ">
      <div className="title w-full p-6 mt-[20%]">
        <h1 className="mini-title">Daniel Nevado Kröger</h1>
        <div className="btn-container flex gap-11">
          <ProjectsBtn />
          <AboutMe />
          <ContactBtn />
        </div>
      </div>
      <div className="landing-page-pic z-10">
        <img src="/Img/No_bg.png" alt="Daniel" />
      </div>
      <div className="job-title-lp">
      <RightTextAnimation />
      <LeftTextAnimation />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(22,64,80,1)] from-1% to-[rgba(22,64,80,0)] to-45% z-20 pointer-events-none" />
</div>
  );
}

export default LandingPage;
