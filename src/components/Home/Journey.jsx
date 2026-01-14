import React from "react";
import TopLeft from "./Journey/TopLeft";
import TopRight from "./Journey/TopRight";
import BottomLeft from "./Journey/BottomLeft";
import BottomRight from "./Journey/BottomRight";

function Journey() {
  return (
    <section className="template home-journey-container">
      <header className="template-heading">
        <div className="template-heading-header">
          <hr />
          <p>The Trust</p>
        </div>
        <h2>Why F&B Chooses us</h2>
      </header>
      <div className="home-journey">
        <TopLeft />
        <TopRight />
        <BottomLeft />
        <BottomRight/>
      </div>
    </section>
  );
}

export default Journey;
