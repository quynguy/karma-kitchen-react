import React from 'react'
import Navbar from './Navbar';

import { FiArrowRight } from "react-icons/fi";


const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-text-section">
        <h1 className="primary-heading">
        Elevate your party experience with Karma Kitchen's customizable Buddha bowls, crafted with love and served with good karma.  
        </h1>
        <p className="primary-text">
        bursting with flavor and designed to delight every guest. 
        </p>
        <button className="secondary-button">
          Order Now <FiArrowRight /> { " "}
        </button>
      </div>
    </div>
  );
};

export default Home;