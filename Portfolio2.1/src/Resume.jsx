import React from "react";
import "./App.css";
import { FaLinkedin } from "react-icons/fa6";


function Resume() {
  return (
    <div id="resume-page">
      <div className="resume-top-wrapper">
        <div className="resume-title">
          <h2>Resume</h2>
        </div>
        <div className="work-container">
          <div className="mini-work-title">
            <h3>WORK EXPERIENCE</h3>
           <a href="https://www.linkedin.com/in/danielnevadokroger/" target="_blank">
           <FaLinkedin size="29"/></a>
          </div>
          <div className="experience-container">
            <div className="work_title">
              <p>Frontend developer (Internship)</p>
              <p>Frontend developer (Internship)</p>
              <p>IT Projectmanager / Scrum Master</p>
              <p>Traffick managment</p>
            </div>
            <div className="work_date">
              <p>02/24 - 05/24</p>
              <p>12/23 - 03/24</p>
              <p>04/23 - 10/23</p>
              <p>06/19 - 18/24</p>
            </div>
            <div className="work_company">
              <p>KPI Media</p>
              <p>Stryda AB</p>
              <p>MTR Nordic AB</p>
              <p>MTR Nordic AB</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
