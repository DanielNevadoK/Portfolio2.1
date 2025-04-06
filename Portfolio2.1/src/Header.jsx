import React, { useEffect, useState } from "react";
import { RiMenu5Line } from "react-icons/ri";
import { MdClose } from "react-icons/md";
import { BiLogoGithub } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa6";


function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((open) => !open);
  };

  return (
    <nav
      className={`
    header
    min-w-full 
    max-h-24 
    bg-transparent
    flex 
    sticky 
    top-0
    p-4
   z-50
   `}
    >
      <div className="w-[33%] flex justify-start content-center">
        <img src="" alt="" />
      </div>
      <div className="w-[33%] max-h-9 flex justify-center content-center">
        <img
          className="max-h-full"
          src="../Img/nk-logo/nk_logo.png"
          alt="{ .nk } Logo"
        />
      </div>
      <ul
        className={`head-menu-items 
      w-[33%]
      flex justify-end content-center gap-6
      ${isOpen ? "is-open" : ""}`}
      >
        <li>
          <a href="https://github.com/DanielNevadoK" target="_blank">
            <BiLogoGithub size="36" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/danielnevadokroger/"
            target="_blank"
          >
            <FaLinkedin size="36" />
          </a>
        </li>
      </ul>
      <button id="burger-menu" onClick={toggleMenu}>
        {isOpen ? <MdClose /> : <RiMenu5Line />}{" "}
      </button>
    </nav>
  );
}

export default Header;
