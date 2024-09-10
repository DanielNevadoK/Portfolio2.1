import React from "react";
import "./App.css";
import Header from "./Header";

function LandingPage() {
  return (
    <div id="landing-page">
      <Header />
      <div className="title-container">
        <div className="title-wrapper">
          <h1 className="mini-title1">Nevado</h1>
          <h1 className="page-title">Daniel</h1>
          <h1 className="mini-title2">Kröger</h1>
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
