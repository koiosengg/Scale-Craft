import React from "react";
import DesktopImage from "../../assets/FoodAndBeverage/Hero/Desktop Image.svg";

function Hero() {
  return (
    <section className="home-hero">
      <div className="home-hero-img">
        <img src={DesktopImage} alt="Desktop Image" />
      </div>
      <div className="home-hero-content">
        <h1>
          GrowTH THAT <span>WORKS</span>
        </h1>
        <div className="home-hero-content-section">
          <p>
            Practical guidance and real execution support to scale sustainably.
          </p>
          <a href="#" className="primary-button">
            Explore Our Approach
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
