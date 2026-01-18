import React from "react";
import Image from "../../assets/Home/Nanu Paya/Image.svg";

function NanuPaya() {
  return (
    <section className="nanu-paya">
      <span>TESTIMONIAL</span>
      <div className="nanu-paya-img">
        <img src={Image} alt="Nanu Paya" />
      </div>
      <div className="nanu-paya-text">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="87"
          height="70"
          viewBox="0 0 87 70"
          fill="none"
        >
          <path
            d="M70.3981 35.4293C80.1171 35.4293 86.6667 42.3122 86.6667 52.5105C86.6667 61.6878 79.139 69.3333 68.9433 69.3333C57.7757 69.3333 49.5238 60.1561 49.5238 46.1382C49.5238 14.2764 72.3419 1.53164 86.6667 0V14.0179C76.9538 15.8017 66.0338 25.7416 65.5448 36.7089C66.0338 36.4567 67.9714 35.4293 70.3981 35.4293ZM20.8805 35.4293C30.5871 35.4293 37.1429 42.3122 37.1429 52.5105C37.1429 61.6878 29.6152 69.3333 19.4195 69.3333C8.2519 69.3333 0 60.1561 0 46.1382C0 14.2764 22.8181 1.53164 37.1429 0V14.0179C27.43 15.8017 16.51 25.7416 16.021 36.7089C16.51 36.4567 18.4476 35.4293 20.8805 35.4293Z"
            fill="#050505"
          />
        </svg>
        <div className="nanu-paya-text-container">
          <p>
            Mariam brings a rare combination of sharp strategic thinking and
            practical execution. She wont just give high-level advice, she
            deeply understands the business, identifies real growth levers, and
            helps put clear, actionable systems in place.
            <br />
            Her approach to strategic growth is structured, data-driven, and
            tailored, which helped us gain clarity, improve decision-making, and
            build a roadmap for sustainable scale.
          </p>
          <h2><strong>Tony Francis Thottunkal</strong> Nanu Paya</h2>
        </div>
      </div>
    </section>
  );
}

export default NanuPaya;
