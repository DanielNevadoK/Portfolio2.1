import React from 'react'
import "./ProjectsHeader.css";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

function ProjectsHeader() {
    const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/projects');
  };
  return (
    <nav id='back-to-projects-container'>
        <button id='back-to-projects-btn' onClick={handleNavigation}>
            <IoArrowBackCircleOutline size={50} color='white' />
            <a href="#projects-page">Projects</a>
        </button>
    </nav>
  )
}

export default ProjectsHeader
