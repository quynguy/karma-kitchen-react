import React from 'react'
import FooterImage from './../assets/buddha-bowl-2.png';

import { BsTwitter } from "react-icons/bs"
import { SiLinkedin } from "react-icons/si"
import { BsYoutube } from "react-icons/bs"
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={FooterImage} alt="karma-kitchen-buddha-bowl-2" />
        </div>
        <div className="footer-icons">
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Quality</span>
          <span>Help</span>
          <span>Share</span>
          <span>Carrers</span>
          <span>Testimonials</span>
          <span>Work</span>
        </div>
        <div className="footer-section-columns">
          <span>(123) 456-7890</span>
          <span>order@karmakitchen.come</span>
          <span>planning@karmakitchen.com</span>
          <span>admin@karmakitchen.com</span>
        </div>
        <div className="footer-section-columns">
          <span>Terms and Conditions</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;