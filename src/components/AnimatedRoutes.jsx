import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import posed, { PoseGroup } from "react-pose";

import Landing from "./Landing";
import About from "./About";
import ProjectOne from "./ProjectOne";
import Header from "./Header";

const RoutesContainer = posed.div({

});

class AnimatedRoutes extends Component {
  render() {
    return (
      <Route
        render={({ location }) => (
          <>
            <PoseGroup>
              <RoutesContainer key={location.pathname}>
                <Switch location={location}>
                  <Route exact path="/" component={Landing} key="landing" />
                  <Route exact path="/about" component={About} key="about" />
                </Switch>
              </RoutesContainer>
            </PoseGroup>
          </>
        )}
      />
    );
  }
}

export default withRouter(AnimatedRoutes);
