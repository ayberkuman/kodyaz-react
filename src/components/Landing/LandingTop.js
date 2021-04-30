import React from "react";
import LandingBottom from "./LandingBottom";
import Hero from "./Hero";
import Footer from "./Footer";

const LandingTop = () => {
  return (
    <>
      <Hero />
      <LandingBottom />
      <div className="emptyDiv" />
      <Footer />
    </>
  );
};

export default LandingTop;
