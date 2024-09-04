import React from "react";
import "./BagelHouseCafe.css";
import Tooltip from '@mui/material/Tooltip';

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
            src="../Img/bagel_house_img/Bagel_House_company_top_low_fed.png"
            alt="The project"
          />
          <img
            className="pc-lp-img1"
            src="../Img/bagel_house_img/Bagel_House_company_top_wbar.png"
            alt="The project"
          />
        </div>
      </section>
      <section className="pc-page-devider">
        <div className="pc-role">
          <h3>MY ROLE</h3>
          <p>Frontend developer</p>
          <p>UX/UI Designer</p>
          <p>(Intern)</p>
        </div>
        {/* <div className="pc-tek-lang">
          <h3>TECH STACK</h3>
          <img className="tech-logo" src="../Img/tech_stack_logos/figma.png" alt="Figma" />
        </div> */}
        <div className="pc-tools">
          <h3>TOOLS</h3>
          <div className="logos-container">
            <Tooltip title="Figma" arrow>
            <img
              className="tech-logo"
              src="../Img/tech_stack_logos/figma.png"
              alt="Figma"
              />
              </Tooltip>
              <Tooltip title="Midjourney.Ai" arrow>
            <img
              className="tech-logo"
              src="../Img/tech_stack_logos/Midjourney-White.png"
              alt="Figma"
            />
              </Tooltip>
          </div>
        </div>
        <div className="pc-team">
          <h3>TEAM</h3>
          <p>Design</p>
          <p>(Solo)</p>
        </div>
        <div className="pc-duration">
          <h3>DURATION</h3>
          <p>1 Day</p>
          <p>(8h)</p>
        </div>
      </section>
      <section className="pc-mid-container">
        <div className="pc-mid-img-container">
          <img
            className="pc-mid-section-img1"
            src="../Img/bagel_house_img/Bagel_House_company_half.png"
            alt="more pic of website"
          />
          <img
            className="pc-mid-section-img2"
            src="../Img/bagel_house_img/Bagel_House_company_bottom_half.png"
            alt="more pic of website"
          />
        </div>
      </section>
      <section className="pc-lower-container">
        <div className="number-block">
          <h3>01. OVERVIEW</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque
            architecto blanditiis doloribus ex ducimus dolor aperiam voluptas
            quae. Quos voluptatem ipsum soluta temporibus nihil dolores aliquam
            beatae esse ex ad.
          </p>
        </div>
        <div className="number-block">
          <h3>02. PROBLEM</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
            repudiandae, omnis quis sint consectetur, perferendis exercitationem
            pariatur facere nesciunt voluptatum explicabo fugit vero ipsum sunt
            dignissimos aut cum nisi quam.
          </p>
        </div>
        <div className="number-block">
          <h3>03. DESIGN PROCESS</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo
            natus minus optio, veniam sed voluptatem, a pariatur labore laborum
            libero quam in excepturi eligendi quae consequatur quidem molestiae
            ipsum id.
          </p>
        </div>
        <div className="design-flow">
          <img src="" alt="figma flow" />
        </div>
        <div className="number-block">
          <h3>04. Selution and Results</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo
            natus minus optio, veniam sed voluptatem, a pariatur labore laborum
            libero quam in excepturi eligendi quae consequatur quidem molestiae
            ipsum id.
          </p>
        </div>
      </section>
      <div>
        <h5>Visit the live site (if it excist)</h5>
      </div>
      <div>Other projects</div>
    </div>
  );
}

export default BagelHouseCafe;
