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
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns one">
          <span>Quality</span>
          <span>Help</span>
          <span>Share</span>
          <span>Carrers</span>
          <span>Testimonials</span>
          <span>Work</span>
        </div>
        <div className="footer-section-columns two">
          <span>(123) 456-7890</span>
          <span>order@karmakitchen.come</span>
          <span>planning@karmakitchen.com</span>
          <span>admin@karmakitchen.com</span>

          <div className="developer">
          <p> created by quynguy || all rights reserved </p>
          </div>
        </div>
        <div className="footer-section-columns three">
          <span>Terms and Conditions</span>
          <span>Privacy Policy</span>

          <div className="social-icons">
          <span><BsTwitter /></span>
          <span><SiLinkedin /></span>
          <span><BsYoutube /></span>
          <span><FaFacebookF /></span>
          </div>
      
        </div>
      </div>

    </div>
  );
};

export default Footer;