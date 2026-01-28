import React from "react";
import Hero from "./Home/Hero";
import Banner from "./Home/Banner";
import About from "./Home/About";
import Founder from "./Home/Founder";
import Why from "./Home/Why";
import Help from "./Home/Help";
import Build from "./Home/Build";
import Decisions from "./Home/Decisions";
import Together from "./Home/Together";
import Testimony from "./Home/Testimony";
import Journey from "./Home/Journey";
import NanuPaya from "./Home/NanuPaya";
import Clients from "./Home/Clients";

function Home() {
  return (
    <>
      <Hero />
      <Banner />
      <About />
      <Journey />
      <Founder />
      <Why />
      {/* <Clients /> */}
      <Help />
      {/* <NanuPaya /> */}
      <Build />
      <Decisions />
      <Together />
      {/* <Testimony /> */}
    </>
  );
}

export default Home;
