import React from "react";
import DesktopImage from "../../assets/FoodAndBeverage/Reason/Desktop Image.png";
import MobileImage from "../../assets/FoodAndBeverage/Reason/Mobile Image.png";
function Reason() {
  return (
    <section className="template">
      <header className="template-heading">
        <div className="template-heading-header">
          <hr />
          <p>The Reason Behind</p>
        </div>
        <h2>Our Hyper-Growth Blueprint</h2>
      </header>
      <p className="fandb-reason-para">
        Our proprietary system integrates real-time sales data with advanced
        marketing intelligence to create a self-optimizing growth loop.This
        iterative process improves order frequency, marketing ROI, and delivers
        sustainable 30%+ year-over-year revenue increases.
      </p>
      <div className="fandb-reason">
        <img src={DesktopImage} alt="Desktop Image" className="desktop" />
        <img src={MobileImage} alt="Mobile Image" className="mobile" />
      </div>
    </section>
  );
}

export default Reason;
