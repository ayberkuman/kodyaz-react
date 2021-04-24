import React from 'react'
import Button2 from "./Button2"
const Hero = () => {
  return (
    <div className="heroWrapper" >
      <div className="mottoWrapper">
      <h1>Kodlama yazarak öğrenilir.</h1>
      <h4>Sıfırdan başla, gerçek hayattan örneklerle, izleyerek değil yaparak öğren.</h4>
      </div>
      <Button2 name={"Hemen ücretsiz başla"}/>
    </div>
  )
}

export default Hero
