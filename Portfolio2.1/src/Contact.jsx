import React from "react";
import "./App.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa6";

function Contact() {
  return (
    <div id="contact-page">
      <div className="contact-wrapper">
        <div className="contact-links-container">
          <address className="email-container">
            <a href="mailto: daniel.nkroger@outlook.com">
              <p>Email</p>
              <div className="arrow">
                <FaArrowRightLong />
              </div>
            </a>
          </address>
          <address className="LinkedIn-container">
            <a
              href="https://www.linkedin.com/in/danielnevadokroger/"
              target="_blank"
            >
              <p>LinkedIn</p>
              <div className="arrow">
                <FaArrowRightLong />
              </div>
            </a>
          </address>
          <address className="discord-container">
            <a
              href="https://discordapp.com/channels/@me/878175128633114654/"
              target="_blank"
            >
              <p>Discord</p>
              <div className="arrow">
                <FaArrowRightLong />
              </div>
            </a>
          </address>
        </div>
        <div className="contact-title">
          <h2>CONTACT</h2>
        </div>
        <div className="btm-conatct-container">
          <div className="back-to-top">
            <a href="#landing-page">
              <p>Back to top</p>
              <div className="arrow">
                <FaArrowUp size={25} />
              </div>
            </a>
          </div>
          <div className="copy-right">
            <p>Created and designed by Daniel Nevado Kröger</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
