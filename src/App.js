import React from "react";
import LandingBottom from "./components/Landing/LandingBottom"
import Header from "./components/Landing/Header"
import Hero from "./components/Landing/Hero"
import Footer from "./components/Landing/Footer"

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <LandingBottom/>
      <div className="emptyDiv"/>
      <Footer/>
    </div>
  );
}

export default App;
