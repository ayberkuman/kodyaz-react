import "./style.scss"
import {useState} from "react";
import React from 'react'
import Button from "./Button"
import Button2 from "./Button2"
import { BrowserRouter as Router, Link} from "react-router-dom"

const Header = () => {
  const logo = "( ) => kodla"
  const [boo,setBoo] = useState();

  

  return (
    <Router>
    <div className="headerWrapper" >
    <Link to={{pathname: '/Catalogue'}} className="myLink">Katalog</Link>
      <h1>{logo}</h1>
      <div className="buttonWrapper">
        <Button name={"Gİrİş Yap"}/>
      <div className="kayıt">  
        <Button2 name={"Kayıt Ol"} />
      </div>
      </div>
    </div>
    </Router>
  )
}

export default Header