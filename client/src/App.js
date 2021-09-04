import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Favori from "./Component/favorit";
import Contact from "./Component/Contact";
import Events from "./Component/Events";
import Home from "./Component/Acceuil";
import AboutUs from "./Component/AboutUs";
import Table from "./Component/Table"
import ADmin from "./Component/Admin";
export default function App() {
    return (
      <div>
        <Router>
                   <div>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/Acceuil" exact component={Home} />
              <Route path="/admin" component={ADmin} />

              <Route path="/Contact" component={Contact} />
              <Route path="/AboutUs" component={AboutUs} />

              <Route path="/Events" component={Events} />
              <Route path="/favorit" component={Favori} />
              <Route path="/Table" component={Table} />
            </Switch>
          </div>
        </Router>
      </div>
    );
}
