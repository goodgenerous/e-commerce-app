import React from "react";
import NavbarComponent from "../components/NavbarComponent";
import HeroComponent from "../components/HeroComponent";
import PricingComponent from "../components/PricingComponent";
import MarqueeComponent from "../components/MarqueeComponent";
import LogoComponent from "../components/LogoComponent";
import CardComponent from "../components/CardComponent";

const Home = () => {
  return (
    <>
      <NavbarComponent />
      <HeroComponent />
      <MarqueeComponent />
      <LogoComponent />
      <CardComponent />
      {/* <PricingComponent /> */}
    </>
  );
};

export default Home;
