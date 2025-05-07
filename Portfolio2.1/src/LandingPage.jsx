import React from "react";
import "./App.css";
import ProjectsBtn from "./components/btns/projects-btn/main";
import AboutMe from "./components/btns/about-me-btn/main";
import ContactBtn from "./components/btns/contact-btn/main";
import RightTextAnimation from "./components/text-animation/right-text-animation/main";
import LeftTextAnimation from "./components/text-animation/left-text-animation/main";

function LandingPage() {
  return (
    <div
      id="landing-page"
      className="-mt-24 w-full h-[105vh] flex flex-col items-center overflow-hidden relative
    bg-[radial-gradient(circle,_#0B1922_0%,_#164053_20%,_#03131B_55%)]
"
    >
      <div className="title w-full p-6 mt-[25%] flex flex-col items-center justify-center z-[9999]">
        <h1  className="font-bebas font-normal text-[2.5rem] mini-title flex align-center ">
          Daniel Nevado Kröger</h1>
        <div className="btn-container flex gap-11">
          <ProjectsBtn />
          <AboutMe />
          <ContactBtn />
        </div>
      </div>
      <div className="landing-page-pic z-10 max-w-[1350px] items-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <img
          className="max-w-[100%] height-auto display-block animate-spin-and-scale"
          src="/Img/Daniel-in-space.png"
          alt="Daniel"
        />
      </div>
      <div className="relative mt-[-3%] job-title-lp bottom-0 w-full flex flex-col items-start font-pattaya font-normal not-italic text-[9rem] overflow-hidden">
  <RightTextAnimation />
  <LeftTextAnimation />
</div>

      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(22,64,80,1)] from-1% to-[rgba(22,64,80,0)] to-45% z-20 pointer-events-none" />
    </div>
  );
}

export default LandingPage;
