import React, { useState } from "react";

function Header() {

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen((open) => !open);
  };
  return (
    <nav className="header">
      <ul className={`head-menu-items ${isOpen ? "is-open" : ""}`}>
      <button className="head-btn1">
        <a href="#projects-page">Projects</a>
      </button>
      <button className="head-btn2">
        <a href="#resume-page">About me</a>
      </button>
      <button className="head-btn3">
        <a href="#contact-page">Contact</a>
      </button>
      </ul>
      <button id="burger-menu" onClick={toggleMenu}>Trigger</button>
    </nav>
  );
}

export default Header;
