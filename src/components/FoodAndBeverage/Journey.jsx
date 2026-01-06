import React, { useState } from "react";
import Person1 from "../../assets/FoodAndBeverage/Journey/Person 1.png";
import Person1Hover from "../../assets/FoodAndBeverage/Journey/Person 1 Hover.png";
import Person2Hover from "../../assets/FoodAndBeverage/Journey/Person 2 Hover.png";
import Person3Hover from "../../assets/FoodAndBeverage/Journey/Person 3 Hover.png";

function Journey() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="template">
      <header className="template-heading">
        <div className="template-heading-header">
          <hr />
          <p>User Journey</p>
        </div>
        <h2>How Users Evolve Over Time</h2>
      </header>
      <div className="fandb-journey-tabs">
        <article className="fandb-journey-tab">
          <p>Behavior</p>
          <div className="fandb-journey-tab-svg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="30"
              viewBox="0 0 23 30"
              fill="none"
            >
              <path
                d="M11.25 27.9167V1.25M11.25 1.25L21.25 11.25M11.25 1.25L1.25 11.25"
                stroke="#212121"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </article>
        <span />
        <article className="fandb-journey-tab">
          <p>Frequency</p>
          <div className="fandb-journey-tab-svg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="30"
              viewBox="0 0 23 30"
              fill="none"
            >
              <path
                d="M11.25 27.9167V1.25M11.25 1.25L21.25 11.25M11.25 1.25L1.25 11.25"
                stroke="#212121"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </article>
        <span></span>
        <article className="fandb-journey-tab">
          <p>Spend</p>
          <div className="fandb-journey-tab-svg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="30"
              viewBox="0 0 23 30"
              fill="none"
            >
              <path
                d="M11.25 27.9167V1.25M11.25 1.25L21.25 11.25M11.25 1.25L1.25 11.25"
                stroke="#212121"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </article>
      </div>
      <div className="fandb-journey-container">
        {[0, 1, 2].map((_, index) => (
          <article
            key={index}
            className={`fandb-journey-set ${
              activeIndex === index ? "active-fandb-journey-set" : ""
            }`}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(0)}
          >
            {index === 0 && (
              <>
                <header>
                  <div className="fandb-journey-set-head">
                    <div className="fandb-journey-set-img">
                      <img src={Person1} alt="Person 1" />
                      <img src={Person1Hover} alt="Person 1 Hover" />
                    </div>
                    <span>DISCOVER</span>
                  </div>
                  <h3>Lower Affinity (LA)</h3>
                </header>

                <ul>
                  <li>
                    <p>Frequency</p>
                    <span>
                      <div className="line"></div>
                    </span>
                  </li>
                  <li>
                    <p>Spend</p>
                    <span>
                      <div className="line"></div>
                    </span>
                  </li>
                  <li>
                    <p>Behavior</p>
                    <span>
                      <div className="line"></div>
                    </span>
                  </li>
                </ul>

                <h4>Occasional Engagement - Low Spend</h4>
              </>
            )}

            {index === 1 && (
              <>
                <header>
                  <div className="fandb-journey-set-head">
                    <div className="fandb-journey-set-img">
                      <img src={Person1} alt="Person 1" />
                      <img src={Person2Hover} alt="Person 2 Hover" />
                    </div>
                    <span>ENGAGE</span>
                  </div>
                  <h3>Mid Market (MM)</h3>
                </header>

                <ul>
                  <li>
                    <p>Frequency</p>
                    <span>
                      <div className="line"></div>
                    </span>
                  </li>
                  <li>
                    <p>Spend</p>
                    <span>
                      <div className="line"></div>
                    </span>
                  </li>
                  <li>
                    <p>Behavior</p>
                    <span>
                      <div className="line"></div>
                    </span>
                  </li>
                </ul>

                <h4>Returning users with growing intent</h4>
              </>
            )}

            {index === 2 && (
              <>
                <header>
                  <div className="fandb-journey-set-head">
                    <div className="fandb-journey-set-img">
                      <img src={Person1} alt="Person 1" />
                      <img src={Person3Hover} alt="Person 3 Hover" />
                    </div>
                    <span>COMMIT</span>
                  </div>
                  <h3>Up Market (UM)</h3>
                </header>

                <ul>
                  <li>
                    <p>Frequency</p>
                    <span>
                      <div className="line"></div>
                    </span>
                  </li>
                  <li>
                    <p>Spend</p>
                    <span>
                      <div className="line"></div>
                    </span>
                  </li>
                  <li>
                    <p>Behavior</p>
                    <span>
                      <div className="line"></div>
                    </span>
                  </li>
                </ul>

                <h4>Loyal - High value customer</h4>
              </>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

export default Journey;
