import React, { useEffect, useState } from "react";
import DesktopBackground from "../../assets/Home/Decisions/Desktop Background.png";

function Decisions() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 4);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const decisionsData = [
    {
      title: "Diagnose",
      text: "We start by understanding your business, challenges, and goals. No generic solutions—everything is tailored to your reality.",
    },
    {
      title: "Design",
      text: "Together, we craft strategies that are ambitious yet achievable, backed by data and grounded in your market reality.",
    },
    {
      title: "Deploy",
      text: "This is where we differ. We don't just hand you a plan—we help you implement it, adjusting as we learn what works.",
    },
    {
      title: "Drive Results",
      text: "Regular tracking, honest conversations, and course corrections ensure we're always moving toward your goals.",
    },
  ];

  return (
    <section className="home-decisions-container">
      <div className="template">
        <img
          src={DesktopBackground}
          alt="Desktop Background"
          className="template-background"
        />

        <header className="template-heading">
          <div className="template-heading-header">
            <hr />
            <p>How we Scale the Brands</p>
          </div>
          <h2>Fast Insights , Faster Decisions</h2>
        </header>

        <div className="home-decisions">
          {decisionsData.map((item, index) => (
            <article
              key={index}
              className={`home-decisions-set ${
                activeIndex === index ? "active-home-decisions-set" : ""
              }`}
            >
              <div className="home-decisions-set-left">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div className="home-decisions-set-line"></div>
              </div>

              <div className="home-decisions-set-right">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Decisions;
