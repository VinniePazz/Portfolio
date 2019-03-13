import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import GlobalStyle from "./styled/GlobalStyle";
import Home from "./Home";

import SkillsPage from "./SkillsPage";
import PortfolioPage from "./PortfolioPage";

import gif from "../assets/react.gif";

const AboutPage = () => {
  return <div>About</div>;
};

const ContactsPage = () => {
  return (
    <div>Contacts</div>
  );
};

class App extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/skills" component={SkillsPage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/portfolio" component={PortfolioPage} />
          <Route exact path="/contacts" component={ContactsPage} />
        </Switch>
      </>
    );
  }
}

export default App;
