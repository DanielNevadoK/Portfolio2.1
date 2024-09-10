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
              The client needed a website overhaul to stay competitive in Järfälla's driving school market. The goal was to attract new clients, enhance user engagement, and provide a login profile for current students to manage their schedules and book classes.
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
              Körkortnyckelns Driving School is a trusted and professional driving school located in Järfälla. They provide high-quality driving education aimed at making you a safe and responsible driver. With extensive experience, a solid local presence, and a strong reputation among Järfälla residents, They take pride in being the top choice for driving education in the area.
              </p>
            </div>
            <div className="number-block">
              <h3>02. PROBLEM</h3>
              <p>
              The client had an outdated website in significant need of a refresh. While their business was thriving, they observed that the existing website was not attracting new clients or engaging users effectively.
                
                They wanted a website that would be competitive with other driving schools in Järfälla, attract new clients for car driving licenses, and include a login profile feature for current students. This would allow students to view their schedules and book new classes.
                </p>
            </div>
            <div className="number-block">
              <h3>03. DESIGN PROCESS</h3>
              <p>
              The process was challenging, as the client had no specific requests initially. Their main priorities were to ensure the booking and profile systems were functional and to increase the number of driving license class bookings. I used their old website and layout as a foundation for my frontend work.
                <br />
                <br />
                I conducted usability testing with a small group of friends and family, divided into two age groups (under 50 and over 50) and categorized by those with and without a driving license. This allowed me to observe how they navigated the old website and gather insights based on their specific needs. From this, I identified gaps and areas for improvement to enhance engagement, attract more clients, and stay competitive against other driving schools.


                <br />
                <br />
                Key changes included:
                <br />
                <br />

                <ul>
                  <li>Removed the Distracting Background Video: <br /> The background video on the landing page was removed to reduce distractions and improve focus.
                  </li>
                  <br />
                  <li>Enhanced Contact Information and CTA Buttons: <br /> I added the school's phone number prominently at the top and included CTA buttons arranged in the sequence of the course progression to make the UX more logical and user-friendly.
                  </li>
                  <br />
                  <li>Revised Website Layout: <br />
                  I reorganized the layout to better highlight the initial driving class and updated images of other classes to ensure a cohesive and welcoming appearance.</li>
                  <br />
                  <li>Updated the "Paket" Section: <br />
                   This section was redesigned into cards to clearly illustrate what each package includes.</li><br />
                  <li>Emphasized Core Values: <br />The page divider, which showcased the school’s core values, was enhanced by making the icons bolder and more consistent, using less text to convey the same message more directly.</li>
                  <br />
                  <li>Created Detailed Lesson Pages: <br />I added individual pages for each lesson to provide more information, making it easier for visitors to find details without leaving the website.</li><br />
                </ul>
                These updates aimed to improve the website's usability and effectiveness in attracting and converting potential students.
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
                  <img src="../Img/kn_trafik-skola_img/KN_TrafikSkola_PageDiveder_Update.png" alt="" />
                  <img src="../Img/kn_trafik-skola_img/KN_Course_Update.png" alt="" />
                </div>
                {/* <div className="buttons-img-container">
                  <img className="btn-img-1" src="../Img/bagel_house_img/Bagel_order.png" alt="Button" />
                  <img className="btn-img-2"
                    src="../Img/bagel_house_img/Bagel_find_us.png"
                    alt="Button"
                  />
                  <img className="btn-img-3"
                  src="../Img/bagel_house_img/Bagel_menu.png" 
                  alt="Button" />
                </div> */}
              </div>
            </div>
            <div className="number-block">
              <h3>04. Solution and Results</h3>
              <p>
              These changes resulted in a more engaging and user-friendly website. The updated design improved navigation, making it easier for potential students to find information and book classes. The clearer presentation of course packages and core values enhanced the communication of the school's offerings. Additionally, the improved website was favorably rated by Google, achieving top listings for searches related to driving schools in Järfälla. Unfortunately, my internship ended before I could assess whether the website led to increased user engagement and a higher rate of class bookings, but the redesign was aimed at aligning with the client’s goals of boosting their online presence and attracting more students.
              Want to discuss the website, share tips, or explore frontend development opportunities? Click the contact link below.<br />
              <br />
              Visit the website <span><a href="https://kntrafikskola.se/" target='_blank'>here</a></span> (Please note, the website may differ from the final design as I am no longer maintaining it.)
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
