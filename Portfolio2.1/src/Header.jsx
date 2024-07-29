import React from "react";

function Header() {
  return (
    <div className="header">
      <button className="head-btn1">
        <a href="#projects-page">Projects</a>
      </button>
      <button className="head-btn2">
        <a href="#resume-page">About me</a>
      </button>
    </div>
  );
}

export default Header;
