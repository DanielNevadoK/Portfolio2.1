import React, { useEffect } from "react";
import "./BagelHouseCafe.css";
import Tooltip from "@mui/material/Tooltip";
import ProjectsHeader from "../projects_header/ProjectsHeader";

function BagelHouseCafe() {
  return (
    <div id="bagel-house-cafe">
      <ProjectsHeader />
      <section className="project-case-landing-page">
        <div className="pc-lp-title-container">
          <h1>Bagel House Café</h1>
          <p>
          Bagel House Café is a charming establishment in Stockholm, known for its variety of bagels and a vibrant salad bar. Initially without a website. During my internship, I created a one-page mockup, aiming to attract new customers and enhance their digital visibility.
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
        <div className="pc-role-bagel">
          <h3>MY ROLE</h3>
          <p>Frontend developer</p>
          <p>UX/UI Designer</p>
          <p>(Intern)</p>
        </div>
        {/* <div className="pc-tek-lang">
          <h3>TECH STACK</h3>
          <img className="tech-logo" src="../Img/tech_stack_logos/figma.png" alt="Figma" />
        </div> */}
        <div className="pc-tools-bagel">
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
        <div className="pc-team-bagel">
          <h3>TEAM</h3>
          <p>Design</p>
          <p>(Solo)</p>
        </div>
        <div className="pc-duration-bagel">
          <h3>DURATION</h3>
          <p>1 Day</p>
          <p>(8h)</p>
        </div>
      </section>
      <section className="pc-mid-container-bagel">
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
            Bagel House Café is a charming small business nestled in the heart
            of Stockholm. Known for its diverse selection of freshly made bagels
            and a vibrant salad bar, it has become a go-to spot for
            professionals seeking a delicious and quick lunch during their work
            break. The café prides itself on offering an adaptable menu,
            catering to a wide range of tastes and dietary preferences, ensuring
            that everyone can find something they enjoy. Whether you're craving
            a classic bagel or a fresh, healthy salad, Bagel House Café provides
            a welcoming atmosphere for all.
          </p>
        </div>
        <div className="number-block">
          <h3>02. PROBLEM</h3>
          <p>
            Bagel House Café initially started without a website, relying solely
            on word of mouth, Instagram, and Facebook. As demand grew and they
            aimed to expand their customer base beyond the city, they recognized
            the need for an online presence. To address this, my boss requested
            a website design during my internship. I created a one-page mockup
            to provide them with a preview of what we could offer. This design
            aimed to capture the café’s essence and help them reach a wider
            audience.
          </p>
        </div>
        <div className="number-block">
          <h3>03. DESIGN PROCESS</h3>
          <p>
            Upon receiving the request from my boss, I asked some essential
            questions to understand the project better: the purpose, target
            audience, key features, available content, logo needs, any preferred
            reference websites, and the timeline. The primary purpose, as
            mentioned, was to attract new clients and expand their reach. The
            target audience included workers and people who enjoy healthy, fresh
            food. Key features for the website included displaying the menu,
            providing location information, and potentially offering online
            ordering for pick-up.
            <br />
            <br />
            While they gave me artistic freedom for the design and appearance,
            the timeline for delivering the high-definition mockup was set for
            the following day.
          </p>
        </div>
        <div className="design-flow-bagel">
          <div className="full-lenght-img-container">
            <img
              src="../Img/bagel_house_img/Bagel_House_company.png"
              alt="Full webpage"
            />
            <img
              src="../Img/bagel_house_img/Bagel_House_company_low_fed.png"
              alt="Full webpage"
            />
          </div>
          <div className="component-img-container">
            <div className="head-foot-img-container-bagel">
              <img src="../Img/bagel_house_img/Bagel_Header.png" alt="Header" />
              <img src="../Img/bagel_house_img/Bagel_footer.png" alt="Footer" />
            </div>
            <div className="buttons-img-container">
              <img
                className="btn-img-1"
                src="../Img/bagel_house_img/Bagel_order.png"
                alt="Button"
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
            </div>
          </div>
        </div>
        <div className="number-block">
          <h3>04. Selution and Results</h3>
          <p>
            The design was delivered on time, and my boss approved it before
            sending it to the client. I drew inspiration from similar
            restaurants to create a design with clear CTA buttons, so visitors
            wouldn’t need to scroll too much to order food or find the address.
            The goal was to showcase their food and healthy lifestyle
            immediately upon entering the page, using vibrant images and a clean
            aesthetic. Unfortunately, my internship ended before I could gather
            feedback from the client on what they liked or wanted to change.
            <br />
            <br />
            Reflecting on the project now (2024), six months later, I would
            approach several aspects differently. For instance, I would choose a
            different landing page image, as the original one conveys more of a
            fast-food chain vibe rather than the healthy, small-business café
            feel we aimed for. I’ve also learned the importance of avoiding
            placeholder text in final designs, as it can undermine the
            professional quality of the presentation. Additionally, I would opt
            for a lighter theme to enhance the website's fresh and inviting
            atmosphere.
            <br />
            <br />
            Want to discuss the design, share your opinions, talk about web
            development, or explore opportunities to hire me, a frontend
            developer? Click the contact link below.
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

export default BagelHouseCafe;
