import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";

import "./main.css";
import theme from "./theme";
import App from "./components/App";

const renderApp = () => {
  ReactDOM.render(
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>,
    document.getElementById("root")
  );
};

if (process.env.NODE_ENV !== "production" && module.hot) {
  module.hot.accept("./components/App", renderApp);
}

renderApp();
