import React from "react";

function ProjectsBtn() {
  return (
    <button 
    className="primary-btn"
    onClick={() => {
      document.getElementById("projects-page")?.scrollIntoView({behavior:"smooth"})
    }}>
      PROJECTS
    </button>
  );
}

export default ProjectsBtn;
