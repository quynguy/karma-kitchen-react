import React from 'react'
import PickBowls from "./../assets/pick-meals-image.png";
import ChooseBowls from "./../assets/choose-image.png";
import DeliverBowls from "./../assets/delivery-image.png";

const Work = () => {

  const workInfoData = [
    {
      image: PickBowls,
      title: "Pick Bowls",
      text: "Choose the types of bowls you'd prefer for your event."
    },
    {
      image: ChooseBowls,
      title: "Choose Bowls",
      text: "Select the bowls you'd like to use for your event."
    },
    {
      image: DeliverBowls,
      title: "Deliver Bowls",
      text: "We'll deliver your bowls to your event."
    },
  ];

  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How it works</h1>
        <p className="primary-text">
          Simply select your preferred Buddha Bowl options and place your order online or by phone, customizing it to your liking for your event. We'll take care of the rest, ensuring a seamless catering experience tailored to your needs.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;