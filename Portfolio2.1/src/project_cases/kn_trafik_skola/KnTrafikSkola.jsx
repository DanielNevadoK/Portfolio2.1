import React from 'react'
import './KnTrafikSkola.css'
import Tooltip from "@mui/material/Tooltip";
import ProjectsHeader from "../projects_header/ProjectsHeader";

function KnTrafikSkola() {
    return (
        <div id="kn-trafik-skola">
          <ProjectsHeader />
          <section className="project-case-landing-page">
            <div className="pc-lp-title-container">
              <h1>Körkortnyckelns Trafikskola</h1>
              <p>
                This is a updated website for a drivingschool, that was outdated and falling behind 
              </p>
            </div>
            <div className="pc-lp-img-container">
              <img
                className=" pc-lp-img2"
                src="../Img/kn_trafik-skola_img/KN-LandingPage-Old.png"
                alt="The project"
              />
              <img
                className="pc-lp-img1"
                src="../Img/kn_trafik-skola_img/KN-LandinPage-New.png"
                alt="The project"
              />
            </div>
          </section>
          <section className="pc-page-devider">
            <div className="pc-role-kn">
              <h3>MY ROLE</h3>
              <p>Frontend developer</p>
              <p>UX/UI Designer</p>
              <p>(Intern)</p>
            </div>
            {/* <div className="pc-tek-lang">
              <h3>TECH STACK</h3>
              <img className="tech-logo" src="../Img/tech_stack_logos/figma.png" alt="Figma" />
            </div> */}
            <div className="pc-tools-kn">
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
                    alt="Midjourney.Ai"
                  />
                </Tooltip>
                <Tooltip title="PhotoShop" arrow>
                  <img
                    className="tech-logo"
                    src="../Img/tech_stack_logos/PhotoShop.png"
                    alt="PhotoShop"
                  />
                </Tooltip>
                <Tooltip title="WordPress" arrow>
                  <img
                    className="tech-logo"
                    src="../Img/tech_stack_logos/WordPress.png"
                    alt="WordPress"
                  />
                </Tooltip>
              </div>
            </div>
            <div className="pc-team-kn">
              <h3>TEAM</h3>
              <p>Design</p>
              <p>(Solo)</p>
            </div>
            <div className="pc-duration-kn">
              <h3>DURATION</h3>
              <p>2 weeks</p>
              {/* <p>(8h)</p> */}
            </div>
          </section>
          <section className="pc-mid-container-kn">
            <div className="pc-mid-img-container">
              <img
                className="pc-mid-section-img1"
                src="../Img/kn_trafik-skola_img/KN-Page-Top.png"
                alt="more pic of website"
              />
              <img
                className="pc-mid-section-img2"
                src="../Img/kn_trafik-skola_img/KN-Page-Bottom.png"
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
            <div className="design-flow-kn">
              <div className="full-lenght-img-container">
                <img
                  src="../Img/kn_trafik-skola_img/KN-FullPage.png"
                  alt="Full webpage"
                />
                <img
                  src="../Img/kn_trafik-skola_img/KN_Full_Page_Old.png"
                  alt="Full webpage"
                />
              </div>
              <div className="component-img-container">
                <div className="head-foot-img-container">
                  <img src="../Img/bagel_house_img/Bagel_Header.png" alt="Header" />
                  <img src="../Img/bagel_house_img/Bagel_footer.png" alt="Footer" />
                </div>
                <div className="buttons-img-container">
                  <img className="btn-img-1" src="../Img/bagel_house_img/Bagel_order.png" alt="Button" />
                  <img className="btn-img-2"
                    src="../Img/bagel_house_img/Bagel_find_us.png"
                    alt="Button"
                  />
                  <img className="btn-img-3"
                  src="../Img/bagel_house_img/Bagel_menu.png" 
                  alt="Button" />
                </div>
              </div>
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
            <div className="number-block">
              <h3>Let's talk ✉️</h3>
              <a href="mailto: daniel.nkroger@outlook.com">
                daniel.nkroger@outlook.com
              </a>
            </div>
          </section>
          {/* <div>
            <h5>Visit the live site (if it excist)</h5>
          </div> */}
        </div>
      );
}

export default KnTrafikSkola
