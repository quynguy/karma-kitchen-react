import React from 'react'
import AboutBackgroundImage from './../assets/buddha-bowl-1.png';
import { BsFillPlayCircleFill } from "react-icons/bs";
const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackgroundImage} alt="karma-kitchen-buddha-bowl" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
        Buddha bowls are not only nutritious but also visually appealing, making them an attractive option for both adults and children.
        </h1>
        <p className="primary-text">
        Buddha bowls typically include a variety of vegetables, grains, proteins, and healthy fats, providing a wide range of nutrients essential for overall health.
        </p>
        <p className="primary-text">
        They can be easily customized to suit individual preferences and dietary restrictions, making them a versatile option for various dietary needs.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button"> Learn More </button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;

