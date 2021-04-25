import "./style.scss"

import React from 'react'
import Button from "./Button"
import Button2 from "./Button2"
import { BrowserRouter as Router, Link} from "react-router-dom"

const Header = () => {
  const logo = "( ) => kodla"
  return (
    <Router>
    <div className="headerWrapper" >
    <Link to="/Catalogue" onClick={() => console.log("hello")} className="myLink">Katalog</Link>
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