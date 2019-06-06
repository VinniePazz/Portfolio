import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import posed, { PoseGroup } from "react-pose";

import Landing from "./Landing";
import About from "./About";
import PageNotFound from "./PageNotFound";

const RoutesContainer = posed.div({});

class AnimatedRoutes extends Component {
  state = {
    language: "en"
  };

  changeLanguage = language => {
    this.setState({ language });
  };

  render() {
    return (
      <Route
        render={({ location }) => (
          <>
            <PoseGroup>
              <RoutesContainer key={location.pathname}>
                <Switch location={location}>
                  <Route
                    exact
                    path="/"
                    key="landing"
                    component={() => (
                      <Landing
                        language={this.state.language}
                        changeLanguage={this.changeLanguage}
                      />
                    )}
                  />
                  <Route
                    exact
                    path="/about"
                    key="about"
                    component={() => (
                      <About
                        language={this.state.language}
                        changeLanguage={this.changeLanguage}
                      />
                    )}
                  />
                  <Route component={PageNotFound} />
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
