import React from 'react';
import Navbar from './Navbar';
import HomeBanner from './../assets/buddha-bowl-2.png';
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div id="home" className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          {/* <img src={BannerBackground} alt="" /> */}
        </div>
        <div className="home-text-section">
          <p className="primary-subheading">Welcome</p>
          <h1 className="primary-heading">
          Bursting with flavor and designed to delight every guest.
          </h1>
          <p className="primary-text">
          Elevate your party experience with Karma Kitchen's customizable Buddha bowls, crafted with love and served with good karma.  
          </p>
          <button className="secondary-button">
            Order Now <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={HomeBanner} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;