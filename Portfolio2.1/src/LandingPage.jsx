import React from "react";
import "./App.css";

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="title-container">
        <h1 className="mini-title">Nevado</h1>
        <h1 className="page-title">Daniel</h1>
        <h1 className="mini-title">Kröger</h1>
      </div>
      <div className="landing-page-pic">
        <img src="../public/Img/No_bg.png" alt="Daniel" />
      </div>
    </div>
  );
}

export default LandingPage;
