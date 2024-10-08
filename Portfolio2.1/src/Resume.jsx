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
      </section>
      <section className="resume-bottom-wrapper">
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
              <p>02/24 - 05/24 :</p>
              <p className="btm-border">Frontend developer (Internship) - KPI Media</p>
              <p>12/23 - 03/24 :</p>
              <p className="btm-border">Frontend developer (Internship) - Stryda AB</p>
              <p>04/23 - 10/23 :</p>
              <p className="btm-border">IT Projectmanager / Scrum Master - MTR Nordic AB</p>
              <p>06/19 - 18/24 :</p>
              <p className="btm-border">Traffick managment - MTR Nordic AB</p>
            </div>
            {/* <div className="work_date">
              <p>02/24 - 05/24</p>
              <p>12/23 - 03/24</p>
              <p>04/23 - 10/23</p>
              <p>06/19 - 18/24</p>
            </div> */}
            {/* <div className="work_company">
              <p>KPI Media</p>
              <p>Stryda AB</p>
              <p>MTR Nordic AB</p>
              <p>MTR Nordic AB</p>
            </div> */}
          </div>
          <div className="skills-container">
            <div className="first-skills-wrp-container">
              <div className="skills-wrp2">
                <div className="mini-work-title">
                  <h3>SKILLS</h3>
                  <a href="https://github.com/DanielNevadoK" target="_blank">
                    <BiLogoGithub size="29" />
                  </a>
                </div>
                <div className="soft-skills">
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
        </div>
        <div className="cv-container">
          <div className="cv-card">
            <div className="mini-work-title">
              <h3>About me</h3>
            </div>
            <div className="cv-text-and-icon-container">
              <div className="cv-text">
                <p>
                  "I’m driven by a deep passion for design and crafting
                  exceptional user experiences. My unique background as a train
                  conductor and traffic manager in the metro for 8 years has
                  instilled in me a strong sense of discipline, precision, and
                  problem-solving. Alongside my studies in frontend development,
                  my longstanding passion for acting—dating back to high
                  school—has shaped my creative perspective, allowing me to
                  approach projects with empathy and storytelling at the
                  forefront. Each project I work on contributes to my continuous
                  growth and learning, pushing me to refine my skills and
                  deliver even more impactful, user-centered designs."
                </p>
              </div>
              {/* <a href="./public/doc/Daniel_Nevado_Kröger_CV_(eng).pdf" download>
                <FaFileDownload size={29} />
              </a> */}
            </div>
            {/* <div className="cv-img-container">
              <img src="Img/Daniel_Nevado_Kroger.jpg" alt="CV-Profile-IMG" />
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Resume;
