import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import Portfolio from "./components/Portfolio.jsx";
import ContactMe from "./components/ContactMe.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contactMe" component={ContactMe} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
