import React from 'react'
import ProfilePic from './../assets/profile-picture.png'

import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div id="testimonials" className="testimonial-section-wrapper">
      <div className="testimonial-section-top">
        <p className="testimonial-primary-subheading"> Testimonial </p>
        <h1 className="testimonial-primary-heading"> What they are saying </h1>
        <p className="testimonial-primary-text">
        Here's a recent review from one of our clients sharing their experience.
        </p> 
      </div>

      <div className="testimonial-section">
        <div className="testimonials-review-container">
        <img src={ProfilePic} alt="karma-kitchen-buddha-bowl" />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        <h2>Jane Doe</h2>
        <p>
          My event was transformed by Karma Kitchen's Buddha Bowl catering, and I couldn't be happier with the outcome. The bowls were a hit with all my guests, offering a perfect balance of flavors and textures that left everyone raving. Beyond the delicious food, the team's dedication to karma and sustainability added an extra layer of satisfaction, making it a truly soulful dining experience. I'll definitely be turning to Karma Kitchen for all my future catering needs.
        </p>
        </div>

        <div className="testimonials-review-container">
        <img src={ProfilePic} alt="karma-kitchen-buddha-bowl" />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        <h2>Jessica Johnson</h2>
        <p>
        Choosing Karma Kitchen for my event was the best decision I made. The Buddha Bowls were a highlight of the evening, with each bite bursting with flavor and nutrition. What truly sets Karma Kitchen apart is their dedication to karma and environmental consciousness, making every bite not just delicious but also meaningful. I'm already planning my next event with Karma Kitchen in mind.
        </p>
        </div>

        <div className="testimonials-review-container">
        <img src={ProfilePic} alt="karma-kitchen-buddha-bowl" />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        <h2>Elizabeth Ellis</h2>
        <p>
        Karma Kitchen's Buddha Bowl catering exceeded all expectations at my gathering. The diverse flavors and fresh ingredients in each bowl left my guests impressed and satisfied. Not only did the food bring joy, but the commitment to sustainability resonated with everyone, making it a conscious and fulfilling dining experience. I'll be eagerly recommending Karma Kitchen to friends and family for their next event.
        </p>
        </div>


      </div>

    </div>
  );
};

export default Testimonial;