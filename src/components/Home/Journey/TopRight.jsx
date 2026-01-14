import React, { useEffect, useRef, useState } from "react";
import Logo1 from "../../../assets/Home/Journy/Top Right/Logo 1.png";
import Logo2 from "../../../assets/Home/Journy/Top Right/Logo 2.png";
import Logo3 from "../../../assets/Home/Journy/Top Right/Logo 3.png";

function TopRight() {
  const [step, setStep] = useState(0);
  const intervalRef = useRef(null);

  const totalSteps = 5; // 3 top + 2 bottom

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setStep((prev) => (prev + 1) % totalSteps);
    }, 1000); // delay

    return () => {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    };
  }, []);

  const activeTop = step < 3 ? step : -1;
  const activeBottom = step >= 3 ? step - 3 : -1;

  return (
    <div className="home-journey-top-right">
      <div className="home-journey-top-right-container">
        <div className="home-journey-top-right-container-div">
          {/* TOP TABS */}
          <div className="home-journey-top-right-container-top-tabs">
            <div
              className={`home-journey-top-right-container-top-tab ${
                activeTop === 0 ? "active-home-journey-top-right" : ""
              }`}
            >
              <img src={Logo1} alt="B Burger" />
              <p>B Burger</p>
            </div>

            <div
              className={`home-journey-top-right-container-top-tab ${
                activeTop === 1 ? "active-home-journey-top-right" : ""
              }`}
            >
              <img src={Logo2} alt="House of Biryan" />
              <p>House of Biryan</p>
            </div>

            <div
              className={`home-journey-top-right-container-top-tab ${
                activeTop === 2 ? "active-home-journey-top-right" : ""
              }`}
            >
              <img src={Logo3} alt="Charcoal Eats" />
              <p>Charcoal Eats</p>
            </div>
          </div>

          {/* BOTTOM TABS */}
          <div className="home-journey-top-right-container-bottom-tabs">
            <div
              className={`home-journey-top-right-container-bottom-tab ${
                activeBottom === 0 ? "active-home-journey-top-right" : ""
              }`}
            >
              <span>50+</span>
              <p>Dark Kitchens</p>
            </div>

            <div
              className={`home-journey-top-right-container-bottom-tab ${
                activeBottom === 1 ? "active-home-journey-top-right" : ""
              }`}
            >
              <span>-30%</span>
              <p>Launch Time</p>
            </div>
          </div>
        </div>
      </div>

      <div className="home-journey-set">
        <h3>Scaling Kitchens</h3>
        <p>
          Honed executive leadership and full-scale brand strategy. Established
          reputation in F&B marketing innovation, system-led growth, and
          purpose-driven branding.
        </p>
      </div>
    </div>
  );
}

export default TopRight;
