import React from 'react'

const Contact = () => {
  return (
    <div className="contact-container" id="contact">
      <h2 className="contact-title">
      Contact
    </h2>
    <p className="contact-description">
     Feel Free to Contact
    </p>
    <div className="contact-input-container">
      <label htmlFor="name" className="contact-input-label">
        Name
      </label>
      <input
        type="text"
        id="name"
        name="name"
        className="contact-input"
      />
    </div>
    <div className="contact-input-container">
      <label htmlFor="email" className="contact-input-label">
        Email
      </label>
      <input
        type="email"
        id="email"
        name="email"
        className="contact-input"
      />
    </div>
    <div className="contact-input-container">
      <label htmlFor="message" className="contact-input-label">
        Message
      </label>
      <textarea
        id="message"
        name="message"
        className="contact-input"
        defaultValue={""}
      />
    </div>
    <button className="contact-button">
      Send message
    </button>
   
  </div>
  )
}

export default Contact
