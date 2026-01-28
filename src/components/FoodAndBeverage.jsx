import React from "react";
import Banner from "./FoodAndBeverage/Banner";
import Hero from "./FoodAndBeverage/Hero";
import Models from "./FoodAndBeverage/Models";
import Funnel from "./FoodAndBeverage/Funnel";
import Reason from "./FoodAndBeverage/Reason";
import Journey from "./FoodAndBeverage/Journey";
import Focus from "./FoodAndBeverage/Focus";
import User from "./FoodAndBeverage/User";
import Services from "./FoodAndBeverage/Services";
import Industry from "./FoodAndBeverage/Industry";
import Together from "./Home/Together";
import Clients from "./Home/Clients";

function FoodAndBeverage() {
  return (
    <>
      <Hero />
      <Banner />
      <Models />
      <Funnel />
      <Reason />
      <Journey />
      <Focus />
      <User />
      <Services />
      <Industry />
      {/* <Clients /> */}
      <Together />
    </>
  );
}

export default FoodAndBeverage;
