import Header from "./components/Landing/Header";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Catalogue from "./components/Katalog/Catalogue";
import LandingTop from "./components/Landing/LandingTop";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <LandingTop />
          </Route>
          <Route path="/Catalogue" exact>
            <Catalogue />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
