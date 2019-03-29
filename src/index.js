import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";

import configureStore from "./configureStore";
import theme from "./theme";
import App from "./components/App";

const renderApp = () => {
  ReactDOM.render(
    <Router>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Router>,
    document.getElementById("root")
  );
};

if (process.env.NODE_ENV !== "production" && module.hot) {
  module.hot.accept("./components/App", renderApp);
}

renderApp();
