import React from "react";
import "./App.css";
import { FaLinkedin } from "react-icons/fa6";
import { FaFileDownload } from "react-icons/fa";
import { BiLogoGithub } from "react-icons/bi";

function Resume() {
  return (
    <div id="resume-page">
      <section className="resume-top-wrapper">
        <div className="resume-title">
          <h2>Resume</h2>
        </div>
        <div className="work-container">
          <div className="mini-work-title">
            <h3>WORK EXPERIENCE</h3>
            <a
              href="https://www.linkedin.com/in/danielnevadokroger/"
              target="_blank"
            >
              <FaLinkedin size="29" />
            </a>
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
      </section>
      <section className="resume-bottom-wrapper">
        <div className="cv-container">
          <div className="cv-card">
            <div className="cv-text-and-icon-container">
              <div className="cv-text">
                <p>Daniel</p>
                <p>Nevado Kröger</p>
              </div>
              <a href="#" download="CV Daniel Nevado Kröger">
                <FaFileDownload size={29} />
              </a>
            </div>
            <div className="cv-img-container">
              <img src="Img/Daniel_Nevado_Kroger.jpg" alt="CV-Profile-IMG" />
            </div>
          </div>
        </div>
        <div className="skills-container">
          <div className="first-skills-wrp-container">
            <div className="skills-wrp2">
              <div className="mini-work-title">
                <h3>SOFT SKILLS</h3>
                <a href="https://github.com/DanielNevadoK" target="_blank">
                  <BiLogoGithub size="29" />
                </a>
              </div>
              <div className="soft-skills">
                <div className="SS-number">
                  <p>01</p>
                  <p>02</p>
                  <p>03</p>
                  <p>04</p>
                  <p>05</p>
                </div>
                <div className="SS-title">
                  <p>JavaScript</p>
                  <p>TypeScript</p>
                  <p>React</p>
                  <p>HTML</p>
                  <p>CSS</p>
                </div>
              </div>
            </div>
            <div className="skills-wrp2">
              <div className="soft-skills-section2">
                <div className="SS-number">
                  <p>06</p>
                  <p>07</p>
                  <p>08</p>
                  <p>09</p>
                </div>
                <div className="SS-title">
                  <p>UX/UI</p>
                  <p>Git/GitHub</p>
                  <p>Figma</p>
                  <p>PhotoShop</p>
                </div>
              </div>
            </div>
          </div>
          <div className="skills-wrp-container">
            <div className="skills-wrp2">
              <div className="mini-work-title">
                <h3>LANGUAGE SKILLS</h3>
              </div>
              <div className="soft-skills">
                <div className="SS-number">
                  <p>10</p>
                  <p>11</p>
                  <p>12</p>
                  <p>13</p>
                </div>
                <div className="SS-title">
                  <p>Swedish</p>
                  <p>English</p>
                  <p>Spanish</p>
                  <p>French</p>
                </div>
                <div className="SS-title2">
                  <p>Native</p>
                  <p>Fluent</p>
                  <p>Native</p>
                  <p>Beginner</p>
                </div>
              </div>
            </div>
            <div className="skills-wrp2">
              <div className="mini-work-title">
                <h3>INTEREST</h3>
              </div>
              <div className="soft-skills">
                <div className="SS-number">
                  <p>14</p>
                  <p>15</p>
                  <p>16</p>
                  <p>17</p>
                </div>
                <div className="SS-title">
                  <p>Acting</p>
                  <p>Brazilian Jiu-Jitsu</p>
                  <p>Video Games</p>
                  <p>Traveling</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="resume-aside-title2">
          <h2>RESUME</h2>
        </div>
      </section>
    </div>
  );
}

export default Resume;
