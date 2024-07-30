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
              <FaArrowRightLong />
            </a>
          </address>
          <address className="LinkedIn-container">
            <a href="https://www.linkedin.com/in/danielnevadokroger/" target="_blank">
              <p>LinkedIn</p>
              <FaArrowRightLong />
            </a>
          </address>
          <address className="discord-container">
            <a href="https://discordapp.com/channels/@me/878175128633114654/" target="_blank">  
              <p>Discord</p>
              <FaArrowRightLong />
            </a>
          </address>
        </div>
        <div className="contact-title">
          <h2>CONTACT</h2>
        </div>
        <div className="back-to-top">
          <a href="#landing-page">
            <p>Back to top</p>
            <FaArrowUp size={25}/>
          </a>
        </div>
        <div className="copy-right">
          <p>Created and designed by Daniel Nevado Kröger</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
