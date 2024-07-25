import React from "react";
import "./App.css";

function Resume() {
  return (
    <div id="resume-page">
      <div className="resume-top-wrapper">
        <div className="resume-title">
          <h2>Resume</h2>
        </div>
        <div className="work-container">
          <div className="mini-work-title">
            <h3>WORK</h3>
            <img src="" alt="SVG LinkedIn" />
          </div>
          <div className="experience-container">
            <div className="exp1">
              <p>Frontend developer (Internship)</p>
              <p>02/24 - 05/24</p>
              <p>KPI Media</p>
            </div>
            <div className="exp2">
              <p>Frontend developer (Internship)</p>
              <p>12/23 - 03/24</p>
              <p>Stryda AB</p>
            </div>
            <div className="exp3">
              <p>IT Projectmanager / Scrum Master</p>
              <p>04/23 - 10/23</p>
              <p>MTR Nordic AB</p>
            </div>
            <div className="exp4">
              <p>Traffick managment</p>
              <p>06/19 - 18/24</p>
              <p>MTR Nordic AB</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
