import React, { Component, Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";

import GlobalStyle from "./styled/GlobalStyle";
import Home from "./Home";

import SkillsPage from "./SkillsPage";
import PortfolioPage from "./PortfolioPage";

import NavBar from "./NavBar";
import HomeTransition from "./HomeTransition";
const ABoutTransition = lazy(() => import('./AboutTransition'));

const AboutPage = () => {
  return <div>About</div>;
};

const ContactsPage = () => {
  return <div>Contacts</div>;
};

const Loader = styled.div`
  height: 100vh;
  width: 100vw;
	position: fixed;
	z-index: 1000;
	background: tomato;
`;

class App extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <NavBar />
        <Suspense fallback={<Loader></Loader>}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={ABoutTransition} />
            <Route exact path="/skills" component={SkillsPage} />
            <Route exact path="/portfolio" component={PortfolioPage} />
            <Route exact path="/contacts" component={ContactsPage} />
            <Route exact path="/playground" component={HomeTransition} />
            <Route render={() => <div>ERORR 404</div>} />
          </Switch>
        </Suspense>
      </>
    );
  }
}

export default App;
