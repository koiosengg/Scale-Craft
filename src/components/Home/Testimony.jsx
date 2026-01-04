import React, { useEffect, useState } from "react";
import Testimony1 from "../../assets/Home/Testimony/Testimony 1.jpg";
import Testimony2 from "../../assets/Home/Testimony/Testimony 2.jpg";
import Testimony3 from "../../assets/Home/Testimony/Testimony 3.jpg";

function Testimony() {
  const testimonyData = [
    {
      name: "Rahul Mehta",
      designation: "Business CEO & Co-Founder",
      text: "Lorem ipsum dolor sit amet consectetur. Gravida id commodo habitant donec lobortis suscipit.",
      img: Testimony1,
    },
    {
      name: "Ananya Sharma",
      designation: "Founder & Managing Director",
      text: "Their strategic insights helped us scale faster than expected. The execution was flawless and measurable.",
      img: Testimony2,
    },
    {
      name: "Vikram Rao",
      designation: "Chief Operations Officer",
      text: "From diagnosis to deployment, the team stayed hands-on and result-oriented throughout the journey.",
      img: Testimony3,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonyData.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [testimonyData.length]);

  return (
    <section className="home-testimony">
      <header>
        <h2>{testimonyData[activeIndex].name}</h2>
        <span>{testimonyData[activeIndex].designation}</span>
      </header>

      <p>“{testimonyData[activeIndex].text}”</p>

      <div className="home-testimony-imgs">
        {testimonyData.map((item, index) => (
          <div
            key={index}
            className={`home-testimony-img ${
              activeIndex === index ? "active-home-testimony-img" : ""
            }`}
          >
            <img src={item.img} alt={item.name} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimony;
