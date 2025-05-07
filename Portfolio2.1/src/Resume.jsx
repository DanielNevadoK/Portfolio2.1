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
            <p>04/25 - now :</p>
              <p className="btm-border">
                Frontend developer (Freelance) - Lynora AI
              </p>
              <p>02/24 - 05/24 :</p>
              <p className="btm-border">
                Frontend developer (Internship) - KPI Media
              </p>
              <p>12/23 - 03/24 :</p>
              <p className="btm-border">
                Frontend developer (Internship) - Stryda AB
              </p>
              <p>04/23 - 10/23 :</p>
              <p className="btm-border">
                IT Projectmanager / Scrum Master - MTR Nordic AB
              </p>
              <p>06/19 - 18/24 :</p>
              <p className="btm-border">Traffick managment - MTR Nordic AB</p>
            </div>
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
                    <p>CMS</p>
                    <p>Netx.js</p>
                  </div>
                </div>
              </div>
              <div className="skills-wrp2">
                <div className="soft-skills-section2">
                  <div className="SS-title">
                    <p>UX/UI</p>
                    <p>Git</p>
                    <p>GitHub</p>
                    <p>Figma</p>
                    <p>PhotoShop</p>
                    <p>Wordpress</p>
                    <p>Vue.js</p>
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
                  My journey into tech hasn’t been traditional and that’s my
                  biggest strength. For nearly a decade, I worked as a traffic
                  manager in Stockholm’s metro, where I learned how to stay
                  sharp under pressure, solve problems fast, and communicate
                  when it matters most. 
                  <br /><br />
                  At the same time, I was developing
                  another skill, storytelling through acting. It’s taken me onto
                  sets, taught me how to understand people deeply, and it still
                  shapes how I design and build today. Now, as a frontend
                  developer, I combine that structure and empathy to create
                  interfaces that actually feel intuitive. I’ve worked closely
                  with backend teams, marketers, and CEOs, building scalable
                  apps, improving UX flows, and always thinking one step ahead.
                  <br /><br />
                  Outside of code, I competed in Brazilian Jiu-Jitsu, where I
                  train focus and adaptability daily, two skills I bring into
                  every line of code I write. I’m not just here to build
                  features. I’m here to bring clarity, purpose, and storytelling
                  into every part of the product experience.
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
