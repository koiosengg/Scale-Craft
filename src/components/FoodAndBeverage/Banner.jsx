import React, { useEffect, useRef, useState } from "react";
import Client from "../../assets/FoodAndBeverage/Banner/Client.svg";
import Areoplane from "../../assets/FoodAndBeverage/Banner/Areoplane.png";
import SVG1 from "../../assets/FoodAndBeverage/Banner/SVG 1.svg";
import SVG2 from "../../assets/FoodAndBeverage/Banner/SVG 2.svg";
import SVG3 from "../../assets/FoodAndBeverage/Banner/SVG 3.svg";
import SVG4 from "../../assets/FoodAndBeverage/Banner/SVG 4.svg";
import SVG5 from "../../assets/FoodAndBeverage/Banner/SVG 5.svg";

function Banner() {
  const containerRef = useRef(null);
  const itemRef = useRef(null);

  const items = [
    ["KPT & MFR", "Kitchen prep time optimisation", SVG1],
    ["RIDER WAIT TIME", "Minimizing delivery delays", SVG2],
    ["GRID VISIBILITY", "Store online hours maximization", SVG3],
    ["OOS FREQUENCY", "Out-of-stock prevention", SVG4],
    ["FOOD RATING", "Customer satisfaction tracking", SVG5],
  ];

  const TOTAL_ITEMS = items.length;
  const GAP = 40;
  const INTERVAL = 4000;
  const TRANSITION_TIME = 300;

  const [activeIndex, setActiveIndex] = useState(1);
  const [translateY, setTranslateY] = useState(0);
  const [animate, setAnimate] = useState(true);

  const duplicatedItems = [...items, ...items];

  useEffect(() => {
    if (!itemRef.current || !containerRef.current) return;

    const itemHeight = itemRef.current.offsetHeight + GAP;
    const containerHeight = containerRef.current.offsetHeight;

    const centerOffset = containerHeight / 2 - itemRef.current.offsetHeight / 2;

    setTranslateY(centerOffset - itemHeight);

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TOTAL_ITEMS);
      setTranslateY((prev) => prev - itemHeight);
    }, INTERVAL);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!itemRef.current || !containerRef.current) return;

    const itemHeight = itemRef.current.offsetHeight + GAP;
    const containerHeight = containerRef.current.offsetHeight;

    const centerOffset = containerHeight / 2 - itemRef.current.offsetHeight / 2;

    const resetPoint = itemHeight * TOTAL_ITEMS;

    if (Math.abs(translateY - (centerOffset - itemHeight)) >= resetPoint) {
      setTimeout(() => {
        setAnimate(false);
        setTranslateY(centerOffset - itemHeight);
      }, TRANSITION_TIME);
    } else {
      setAnimate(true);
    }
  }, [translateY]);

  const sectionRef = useRef(null);
  const [hrVisible, setHrVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHrVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="template" ref={sectionRef}>
      <header className="template-heading">
        <div className="template-heading-header">
          <hr />
          <p>Our Insights</p>
        </div>
        <h2>Metrics that Matter</h2>
      </header>

      <div className="fandb-banner">
        <div className="fandb-banner-left">
          <hr className={hrVisible ? "hr-animate" : ""} />
          <div className="fandb-banner-left-client">
            <img src={Client} alt="Client icon" />
            <p>CLIENT</p>
          </div>
          <div className="fandb-banner-left-scalecraft">
            <img src={Areoplane} alt="Areoplane" />
            <p>SCALECRAFT</p>
          </div>
          <div className="fandb-banner-left-icon">
            <img src={items[activeIndex][2]} alt={items[activeIndex][0]} />
          </div>
        </div>

        <div className="fandb-banner-right" ref={containerRef}>
          <div
            className="fandb-banner-right-inner"
            style={{
              transform: `translateY(${translateY}px)`,
              transition: animate ? "transform 0.8s ease-in-out" : "none",
            }}
          >
            {duplicatedItems.map((item, index) => (
              <article
                key={index}
                ref={index === 0 ? itemRef : null}
                className={`fandb-banner-right-set ${
                  index % TOTAL_ITEMS === activeIndex
                    ? "active-fandb-banner-right-set"
                    : ""
                }`}
              >
                <h3>{item[0]}</h3>
                <p>{item[1]}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
