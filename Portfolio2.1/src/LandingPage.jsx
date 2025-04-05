import React from "react";
import "./App.css";
import Header from "./Header";

function LandingPage() {
  return (
    <div id="landing-page">
      <Header />
      <div className="title-container">
          <h1 className="mini-title ">Daniel Nevado Kröger</h1>
          <button>Projects</button>
          <button>About me</button>
          <button>Cont</button>
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
