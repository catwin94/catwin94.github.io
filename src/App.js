import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import AboutMe from "./components/AboutMe.jsx";
import ContactMe from "./components/ContactMe.jsx";
import Background from "./components/Background.jsx";

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
