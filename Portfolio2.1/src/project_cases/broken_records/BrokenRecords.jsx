import React from "react";
import "./BrokenRecords.css";
import Tooltip from "@mui/material/Tooltip";
import ProjectsHeader from "../projects_header/ProjectsHeader";

function BrokenRecords() {
  return (
    <div id="broken-records">
      <ProjectsHeader />
      <section className="project-case-landing-page">
        <div className="pc-lp-title-container">
          <h1>Broken Records</h1>
          <p>This is a vinly record webshop</p>
        </div>
        <div className="pc-lp-img-container">
          <img
            className=" pc-lp-img2"
            src="../Img/broken_records_img/BrokenRedord_logo (2).png"
            alt="The project"
          />
          <img
            className="pc-lp-img1"
            src="../Img/broken_records_img/BrokenRecords-LP.png"
            alt="The project"
          />
        </div>
      </section>
      <section className="pc-page-devider">
        <div className="pc-role">
          <h3>MY ROLE</h3>
          <p>Frontend developer</p>
          <p>Backend developer</p>
          <p>UX/UI Designer</p>
          {/* <p>(Intern)</p> */}
        </div>
        <div className="pc-tek-lang">
          <h3>TECH STACK</h3>
          <div className="logos-container">
            <Tooltip title="React" arrow>
              <img
                className="tech-logo"
                src="../Img/tech_stack_logos/React.png"
                alt="React"
              />
            </Tooltip>
            <Tooltip title="JavaScript" arrow>
              <img
                className="tech-logo"
                src="../Img/tech_stack_logos/JavaScript.png"
                alt="JavaScript"
              />
            </Tooltip>
            <Tooltip title="HTML" arrow>
              <img
                className="tech-logo"
                src="../Img/tech_stack_logos/Html.png"
                alt="HTML"
              />
            </Tooltip>
            <Tooltip title="CSS" arrow>
              <img
                className="tech-logo"
                src="../Img/tech_stack_logos/css.png"
                alt="CSS"
              />
            </Tooltip>
          </div>
        </div>
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
            <Tooltip title="PhotoShop" arrow>
              <img
                className="tech-logo"
                src="../Img/tech_stack_logos/PhotoShop.png"
                alt="Figma"
              />
            </Tooltip>
          </div>
        </div>
        <div className="pc-team">
          <h3>TEAM</h3>
          <p>Development & Design</p>
          <Tooltip title="Me & Jonael Ghidey">
            <p>(2 people)</p>
          </Tooltip>
        </div>
        <div className="pc-duration">
          <h3>DURATION</h3>
          <p>6 Weeks</p>
          {/* <p>(8h)</p> */}
        </div>
      </section>
      <section className="pc-mid-container">
        <div className="pc-mid-img-container">
          <img
            className="pc-mid-section-img1"
            src="../Img/broken_records_img/BrokenRecords-top-half.png"
            alt="more pic of website"
          />
          <img
            className="pc-mid-section-img2"
            src="../Img/broken_records_img/BrokenRecords-btm-half.png"
            alt="more pic of website"
          />
        </div>
      </section>
      <section className="pc-lower-container">
        <div className="number-block">
          <h3>01. OVERVIEW</h3>
          <p>
            Broken Records is a vinyl webshop designed for music lovers of all
            ages. It’s a blend of the old and the new, where you can discover
            the latest hits from today’s most popular artists while experiencing
            music in its timeless, classic form. Explore a curated collection of
            artists, pop culture icons, and genres, all in one place,
            celebrating the rich diversity of music.
          </p>
        </div>
        <div className="number-block">
          <h3>02. PROBLEM</h3>
          <p>
            This project originally began as a school assignment in a Frontend
            Developer course. However, driven by our passion for coding and
            tackling new challenges, two students,
            <span>
              {" "}
              <a
                href="https://www.linkedin.com/in/danielnevadokroger/"
                target="_blank"
              >
                Daniel Nevado Kröger
              </a>
            </span>{" "}
            &{" "}
            <span>
              <a
                href="https://www.linkedin.com/in/jonael-ghidey-51a780239/"
                target="_blank"
              >
                Jonael Ghidey 
              </a>
              {" "}
            </span> 
            saw potential in the webshop and decided to continue developing it
            over the summer.
            <br />
            <br />
            Our main goal was to refine the previous "rodeo" code we had written
            with our initial group, while also revamping the layout and
            improving the overall UX/UI. We aimed to give the site a modern,
            professional look that would make it easier to navigate, allowing
            visitors to quickly scan and find the records they’re searching for.
          </p>
        </div>
        <div className="number-block">
          <h3>03. DESIGN PROCESS</h3>
          <p>
          The reshaping of our first project began with a team meeting. We started by breaking down what we wanted to achieve, assigning tasks, estimating timelines, and setting clear goals for the new Broken Records webshop.
            <br />
            <br />
            Next, we moved on to designing the new layout using Figma. We discussed color schemes, layouts, and selecting imagery that would resonate with our audience. We focused on how the landing page would showcase the vinyls, and how the product pages would be organized. We also drew inspiration from existing designs, recognizing that there’s no need to reinvent the wheel.
            <br />
            <br />
            Throughout the project, my role was multifaceted. Like my teammate, I worked as a frontend developer, UX/UI designer, and contributed to backend development.
          </p>
        </div>
        <div className="design-flow">
          <div className="full-lenght-img-container">
            <img
              src="../Img/broken_records_img/BrokenRecords-full-page.png"
              alt="Full webpage"
            />
            <img
              src="../Img/broken_records_img/BrokenRecords-under-pages.png"
              alt="Full webpage"
            />
          </div>
          <div className="component-img-container">
            <div className="head-foot-img-container">
              <img
                src="../Img/broken_records_img/BrokenRecords-product-card-img.png"
                alt="Header"
              />
              <img
                src="../Img/broken_records_img/BrokenRecord-produkt-page-img.png"
                alt="Footer"
              />
            </div>
            {/* <div className="buttons-img-container">
              <img
                className="btn-img-1"
                src="../Img/broken_records_img/BrokenRecords-product-card-img.png"
                alt="Product cards"
              />
              <img
                className="btn-img-2"
                src="../Img/bagel_house_img/Bagel_find_us.png"
                alt="Button"
              />
              <img
                className="btn-img-3"
                src="../Img/bagel_house_img/Bagel_menu.png"
                alt="Button"
              />
            </div> */}
          </div>
        </div>
        <div className="number-block">
          <h3>04. Selution and Results</h3>
          <p>
          After spending most of our time cleaning up the messy code from the first version, we were able to focus on refining and optimizing the website. The product listings became much clearer, with a consistent layout and unified design that was lacking before. We also improved the individual product pages, making them straightforward and easy to understand, resulting in a better user experience. But don't just take my word for it—see the project for yourself{" "}
            <span className="link-to-project">
              <a href="https://brokenrecords.vercel.app/" target="_blank">
                here.
              </a>
            </span>
            <br />
            <br />
            Looking at this project today (2024) 2 years later, with more experience under my belt, I can already spot areas I would approach differently or improve. Curious about what I would change? Want to discuss the future of web design or in need of a frontend developer? Feel free to contact me with the info below.
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
    //     <div id='broken-records'>
    //     <div>
    //         <h1>Broken Records</h1>
    //         <p>Hello im still under development, pls comeback later! 😎👍</p>
    //         <img src="" alt="The project" />
    //     </div>
    //     <div>
    //        <div><p>My role</p></div>
    //        <div><p>Team (Solo)</p></div>
    //        <div>Duration 5years</div>
    //     </div>
    //     <div>
    //         <img src="" alt="more pic of website" />
    //     </div>
    //     <div>
    //         <div><p>01 overview</p></div>
    //         <div><p>02 Problem</p></div>
    //         <div><p>03 Design process </p></div>
    //     <div><img src="" alt="figma flow" /></div>
    //     <div>04 Selution and Resoults</div>
    //     </div>
    //     <div><h5>Visit the live site (if it excist)</h5></div>
    //     <div>Other projects</div>
    // </div>
  );
}

export default BrokenRecords;
