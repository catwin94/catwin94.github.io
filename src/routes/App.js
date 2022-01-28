import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../screens/Home.jsx";
import AboutMe from "../screens/AboutMe.jsx";
import ContactMe from "../screens/ContactMe.jsx";
import Background from "../screens/Background.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/aboutMe" component={AboutMe} />
        <Route exact path="/background" component={Background} />
        <Route exact path="/contactMe" component={ContactMe} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
