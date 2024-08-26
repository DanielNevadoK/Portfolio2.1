import React, { useState } from "react";
import { RiMenu5Line } from "react-icons/ri";
import { MdClose } from "react-icons/md";



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
      <button id="burger-menu" onClick={toggleMenu} >{isOpen ? <MdClose /> : <RiMenu5Line />} </button>
    </nav>
  );
}

export default Header;
