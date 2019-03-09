import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { test } from '../actions'

import Landing from "./Landing";
import SkillsPage from "./SkillsPage";
import GlobalStyle from "./styled/GlobalStyle";

class App extends Component {

	componentDidMount() {
		console.log('App have been mounted')
	}

	componentDidUpdate() {
		console.log('App have been updated')
	}

  render() {
		console.log('App render method have been called')
    return (
      <>
        <GlobalStyle />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/skills" component={SkillsPage} />
        </Switch>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.data
  };
};

export default connect(mapStateToProps, { test })(App);
