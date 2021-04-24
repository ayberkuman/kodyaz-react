import "./style.scss"

import React from 'react'
import Button from "./Button"
import Button2 from "./Button2"
import {Route, BrowserRouter as Router, Switch, Link} from "react-router-dom"


const Header = () => {
  const logo = "( ) => kodla"
  return (
    <Router>
    <div className="headerWrapper" >
      <Link className="myLink" to="/Catalogue">
        
      Katalog
      
      
      </Link>
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
