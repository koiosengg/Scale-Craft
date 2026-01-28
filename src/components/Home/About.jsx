import React from "react";
import Founder from "../../assets/Home/About/Founder.svg";
import Sample from "../../assets/Home/About/Founder Video.mp4";
import Recognition from "../../assets/Home/About/Recognition.svg";
import Experience from "../../assets/Home/About/Experience.svg";
import Results from "../../assets/Home/About/Results.svg";

function About() {
  return (
    <section className="home-about">
      <div className="home-about-top">
        <div className="home-about-top-left">
          <img src={Founder} alt="Founder" />
          <div className="home-about-top-left-text">
            <div className="template-heading-header">
              <hr />
              <p>Our Founder</p>
            </div>
            <h2>
              <strong>Built</strong> Through <span>Experience</span>{" "}
              <br className="desktop" />
              Driven by Growth
            </h2>
            <p>
              A growth strategist and F&B industry leader with over a decade of
              experience scaling successful food brands across India & UAE. She
              began her career in customer-facing retail and entrepreneurial
              roles, building strong operational KPIs and brand intuition. She
              later led growth for brands like{" "}
              <strong>Charcoal Eats, B Burger</strong> and was the{" "}
              <strong>
                founding team member and CMO for House of Biryan (HOB)
              </strong>
              , strengthening her expertise in marketing systems, analytics, and
              digital strategy. With Scale Craft, she brings all this experience
              together offering a focused, data-driven approach that helps
              modern F&B brands execute and build strategies that are{" "}
              <span>measurable, repeatable and scalable</span> with clarity and
              confidence.
            </p>
          </div>
        </div>
        <div className="home-about-top-right">
          <video src={Sample} autoPlay loop muted controls />
        </div>
      </div>
      <div className="home-about-bottom">
        <div className="home-about-bottom-container">
          <article>
            <img src={Recognition} alt="Recognition" />
            <div className="home-about-bottom-text">
              <h3>Recognition</h3>
              <p>
                Women-Led Brand of the Year 2024 Award initiated by Swiggy and
                presented by our Finance Minister Nirmala Sitharaman{" "}
              </p>
            </div>
          </article>
          <article>
            <img src={Experience} alt="Experience" />
            <div className="home-about-bottom-text">
              <h3>Experience</h3>
              <p>
                Livglam (Founder), Charcoal Eats, B Burger, House of Biryan
                (Founding Team & CMO)
              </p>
            </div>
          </article>
          <article>
            <img src={Results} alt="Results" />
            <div className="home-about-bottom-text">
              <h3>Results</h3>
              <p>
                2.5x revenue growth, 30%+ ROI targets, 5x return on marketing
                investments
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default About;
