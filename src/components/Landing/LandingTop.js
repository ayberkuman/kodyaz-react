import React from 'react'
import LandingBottom from "./LandingBottom"
import Hero from "./Hero"
import Footer from "./Footer"
const LandingTop = () => {
  return (
    <div className="landing" >
       
      <Hero/>
      <LandingBottom/>
      <div className="emptyDiv"/>
      <Footer/>
    </div>
  )
}

export default LandingTop
