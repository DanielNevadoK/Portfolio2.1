import React from "react";
import "./BagelHouseCafe.css";

function BagelHouseCafe() {
  return (
    <div id="bagel-house-cafe">
      <section className="project-case-landing-page">
        <div className="pc-lp-title-container">
          <h1>Bagel House Café</h1>
          <p>
            A first draft design for a client in Stockholm that wanted a simple
            website for their Bagel Shop.
          </p>
        </div>
        <div className="pc-lp-img-container">
          <img
            className=" pc-lp-img2"
            src="../Img/Bagel_House_company_top_low_fed.png"
            alt="The project"
          />
          <img
            className="pc-lp-img1"
            src="../Img/Bagel_House_company_top_wbar.png"
            alt="The project"
          />
        </div>
      </section>
      <section className="pc-page-devider">
        <div className="pc-role">
          <h3>My Role</h3>
        </div>
        <div className="pc-tek-lang">
          <h3>Tech Stack</h3>
        </div>
        <div className="pc-tools">
          <h3>Tools</h3>
        </div>
        <div className="pc-team">
          <h3>Team</h3>
        </div>
        <div className="pc-duration">
          <h3>Duration</h3>
        </div>
      </section>
      <div>
        <img src="" alt="more pic of website" />
      </div>
      <div>
        <div>
          <h3>01 overview</h3>
        </div>
        <div>
          <h3>02 Problem</h3>
        </div>
        <div>
          <h3>03 Design process </h3>
        </div>
        <div>
          <img src="" alt="figma flow" />
        </div>
        <div>04 Selution and Resoults</div>
      </div>
      <div>
        <h5>Visit the live site (if it excist)</h5>
      </div>
      <div>Other projects</div>
    </div>
  );
}

export default BagelHouseCafe;
