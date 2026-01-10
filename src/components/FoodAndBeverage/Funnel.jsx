import React, { useEffect, useRef } from "react";
import DesktopImage from "../../assets/FoodAndBeverage/Funnel/Desktop Image.svg";
import MobileImage from "../../assets/FoodAndBeverage/Funnel/Mobile Image.svg";
import contentLeft from "../../assets/FoodAndBeverage/Funnel/Content Left.svg";
import contentRight from "../../assets/FoodAndBeverage/Funnel/Content Right.svg";
import Person1 from "../../assets/FoodAndBeverage/Funnel/Person 1.png";
import Person2 from "../../assets/FoodAndBeverage/Funnel/Person 2.png";
import Person3 from "../../assets/FoodAndBeverage/Funnel/Person 3.png";
import Person4 from "../../assets/FoodAndBeverage/Funnel/Person 4.png";
import Person5 from "../../assets/FoodAndBeverage/Funnel/Person 5.png";
import Person6 from "../../assets/FoodAndBeverage/Funnel/Person 6.png";
import Person7 from "../../assets/FoodAndBeverage/Funnel/Person 7.png";
import Person8 from "../../assets/FoodAndBeverage/Funnel/Person 8.png";

import Coin1 from "../../assets/FoodAndBeverage/Funnel/Coin 1.png";
import Coin2 from "../../assets/FoodAndBeverage/Funnel/Coin 2.png";
import Coin3 from "../../assets/FoodAndBeverage/Funnel/Coin 3.png";
import Coin4 from "../../assets/FoodAndBeverage/Funnel/Coin 4.png";
import Coin5 from "../../assets/FoodAndBeverage/Funnel/Coin 5.png";
import Coin6 from "../../assets/FoodAndBeverage/Funnel/Coin 6.png";
import Coin7 from "../../assets/FoodAndBeverage/Funnel/Coin 7.png";

const persons = [
  Person1,
  Person2,
  Person3,
  Person4,
  Person5,
  Person6,
  Person7,
  Person8,
];

const coins = [Coin1, Coin2, Coin3, Coin4, Coin5, Coin6, Coin7];

function Funnel() {
  const personRefs = useRef([]);
  const coinRefs = useRef([]);

  const personIndexRef = useRef(0);
  const coinIndexRef = useRef(0);

  useEffect(() => {
    let timeout;

    const triggerNext = () => {
      /* PERSON */
      const personEl = personRefs.current[personIndexRef.current];
      if (personEl) {
        personEl.classList.remove("active");
        void personEl.offsetWidth;
        personEl.classList.add("active");
      }

      personIndexRef.current = (personIndexRef.current + 1) % persons.length;

      /* COIN (slight delay after person) */
      setTimeout(() => {
        const coinEl = coinRefs.current[coinIndexRef.current];
        if (coinEl) {
          coinEl.classList.remove("active");
          void coinEl.offsetWidth;
          coinEl.classList.add("active");
        }

        coinIndexRef.current = (coinIndexRef.current + 1) % coins.length;
      }, 400); // coin comes after person

      // random gap before next cycle
      const randomDelay = Math.random() * 1200 + 300;
      timeout = setTimeout(triggerNext, randomDelay);
    };

    triggerNext();
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="template">
      <header className="template-heading">
        <div className="template-heading-header">
          <hr />
          <p>Engagement Models</p>
        </div>
        <h2>Designed to Execute</h2>
      </header>
      <div className="fandb-funnel-content-left">
        <img src={contentLeft} className="mobile content-left" />
      </div>
      <div className="fandb-funnel">
        <img
          src={DesktopImage}
          className="fandb-funnel-img desktop"
          alt="Funnel Image"
        />
        <img
          src={MobileImage}
          className="fandb-funnel-img mobile"
          alt="Funnel Image"
        />

        {/* PERSONS */}
        {persons.map((src, i) => (
          <img
            key={`p-${i}`}
            ref={(el) => (personRefs.current[i] = el)}
            src={src}
            alt={`Person ${i + 1}`}
            className="fandb-funnel-person"
          />
        ))}

        {/* COINS */}
        {coins.map((src, i) => (
          <img
            key={`c-${i}`}
            ref={(el) => (coinRefs.current[i] = el)}
            src={src}
            alt={`Coin ${i + 1}`}
            className="fandb-funnel-coin"
          />
        ))}
      </div>
      <div className="fandb-funnel-content-left">
        <img src={contentRight} className="mobile content-left" />
      </div>
    </section>
  );
}

export default Funnel;
