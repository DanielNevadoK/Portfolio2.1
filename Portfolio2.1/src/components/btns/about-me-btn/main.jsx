import React from 'react'

function AboutMe() {
  return (
    <button 
    className='primary-btn'
    onClick={() => {
      document.getElementById('resume-page')?.scrollIntoView({behavior:'smooth'})
    }}>
      ABOUT ME
    </button>
  )
}

export default AboutMe
