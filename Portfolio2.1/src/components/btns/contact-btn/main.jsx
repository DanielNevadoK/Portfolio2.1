import React from 'react'

function ContactBtn() {
  return (
    <button 
    className="primary-btn"
    onClick={() => {
      document.getElementById("contact-page")?.scrollIntoView({behavior:'smooth'})
    }}>
    CONTACT
  </button>
  )
}

export default ContactBtn
