import "./style.scss"

import React from 'react'
import Button from "./Button"

const x = {
  backgroundColor: "#fce300", 
  color:"#131417", 
  
}

const Header = () => {
  const logo = "( ) => kodla"
  return (
    <div className="headerWrapper" >
      <Button className="headerButton" name={"Katalog"} />
      <h1>{logo}</h1>
      <div className="buttonWrapper">
        <Button name={"Gİrİş Yap"}/>
      <div className="kayıt">  
        <Button id="me2" style={x} name={"Kayıt Ol"} />
      </div>
      </div>
    </div>
  )
}

export default Header
