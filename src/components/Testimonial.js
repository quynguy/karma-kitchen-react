import React from 'react'
import ProfilePic from './../assets/profile-picture.png'

import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading"> Testimonial </p>
        <h1 className="primary-heading"> What they are saying </h1>
        <p className="primary-text">
        Here's a recent review from one of our clients sharing their experience with our Buddha Bowl offerings.
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="karma-kitchen-buddha-bowl" />
        <p>
        My event was transformed by Karma Kitchen's Buddha Bowl catering, and I couldn't be happier with the outcome. The bowls were a hit with all my guests, offering a perfect balance of flavors and textures that left everyone raving. Beyond the delicious food, the team's dedication to karma and sustainability added an extra layer of satisfaction, making it a truly soulful dining experience. I'll definitely be turning to Karma Kitchen for all my future catering needs.
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2> John Doe </h2>
      </div>
    </div>
  );
};

export default Testimonial;