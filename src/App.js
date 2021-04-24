import React from "react";
import LandingBottom from "./components/Landing/LandingBottom"
import Header from "./components/Landing/Header"
import Hero from "./components/Landing/Hero"
import Footer from "./components/Landing/Footer"
import {Route, BrowserRouter as Router, Switch, Link} from "react-router-dom"
import Catalogue from "./components/Katalog/Catalogue";
function App() {
  return (
    <Router>


    <div className="App">
    <Switch>
     <Route exact path="/" >
        <Header/>
      <Hero/>
      <LandingBottom/>
      <div className="emptyDiv"/>
      <Footer/>
     </Route>
      <Route exact path="/Catalogue">
        <Catalogue />
      </Route>

      
      
     
      
    </Switch>
    
    </div>
    </Router>
    
  );
}

export default App;
