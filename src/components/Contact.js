import React from 'react'

const Contact = () => {
  return (
    <div id="contact" className="contact-page-wrapper">
      <h1 className="primary-heading">Have a Question in Mind?</h1>
      <h1 className="primary-heading">Let Us Help You</h1>
      <div className="contact-form-container">
        <input type="text" placeholder="yourmail@gmail.com" />
        <button className="contact-secondary-button">Submit</button>
      </div>
      <div className="questions">
      <p> We aim to respond to your inquiry within 48 hours of receiving it. </p>
      <p> If you have urgent questions or concerns, please feel free to give us a call for immediate assistance. </p>
      </div>
    </div>
  )
}

export default Contact