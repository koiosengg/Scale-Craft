import React from "react";
import Image1 from "../../assets/Home/Founder/Image 1.png";
import Image2 from "../../assets/Home/Founder/Image 2.png";
import Image3 from "../../assets/Home/Founder/Image 3.png";
import Sample from "../../assets/Home/Founder/Founder Video.MOV";

function Founder() {
  return (
    <section className="template">
      <header className="template-heading">
        <div className="template-heading-header">
          <hr />
          <p>Founder’s Gallery</p>
        </div>
        <h2>Meet The Founder</h2>
      </header>
      <div className="home-founder">
        <div className="home-founder-left">
          <img src={Image1} alt="Founder Image 1" />
          <img src={Image2} alt="Founder Image 2" />
          <img src={Image3} alt="Founder Image 3" />
        </div>
        <div className="home-founder-right">
          <video src={Sample} muted autoPlay loop controls />
        </div>
      </div>
    </section>
  );
}

export default Founder;
