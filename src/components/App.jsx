import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import styled from "styled-components";
import posed from "react-pose";

import AnimatedRoutes from "./AnimatedRoutes";

const InitialLayer = posed.div({
  initial: {
    opacity: 1,
    y: 0
  },
  visible: {
    y: 0,
    opacity: 1,
    staggerChildren: 250,
    transition: {
      duration: 0,
      ease: "linear"
    }
  },
  hidden: {
    opacity: 1,
    y: "-100%",
    delay: 2000,
    transition: {
      duration: 1500,
      ease: "linear"
    }
  }
});

const AnimatedText = posed.span({
  initial: {
    opacity: 0
  },
  visible: {
    opacity: 0
  },
  hidden: {
    opacity: 1,
    transition: {
      duration: 100
    }
  }
});

const AnimatedBox = posed.div({
  initial: {
    opacity: 1,
    left: 0,
    scaleX: 0,
    flip: true
  },
  visible: {
    opacity: 1,
    left: 0,
    scaleX: 1,
    flip: true,
    transition: {
      duration: 500
    }
  },
  hidden: {
    opacity: 0,
    scaleX: 0,
    left: "100%",
    flip: true,
    transition: {
      duration: 500
    }
  }
});

const Initial = styled(InitialLayer)`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 10000;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: #1d1d2b;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Slogan = styled.div`
  font-size: 1.5rem;
  color: #d8dbe2;
  font-weight: 700;
  padding: 1rem;
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  text-transform: uppercase;
  line-height: 80%;
  padding: 0.4em 1em;
  position: relative;
  ${({ type }) => type === "name" && "transform: translateX(-15%)"};
`;

const Text = styled(AnimatedText)``;

const Box = styled(AnimatedBox)`
  top: 0;
  left: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: ${({ type }) => (type === "name" ? "#e76f51" : "#3aabab")};
  animation-fill-mode: forwards;
  transform-origin: left;
`;

class App extends Component {
  state = {
    pose: 0
  };

  componentDidMount() {
    this.setState({ pose: 1 });
    setTimeout(() => {
      this.setState({ pose: 2 });
    }, 2000);
  }

  choosePose = () => {
    switch (this.state.pose) {
      case 0:
        return "initial";
      case 1:
        return "visible";
      case 2:
        return "hidden";
      default:
        return "hidden";
    }
  };

  render() {
    return (
      <>
        <Initial pose={this.choosePose()}>
          <Slogan>
            <Heading type="name">
              <Text>dima</Text>
              <Box type="name" />
            </Heading>
            <Heading>
              <Text>smakouz</Text>
              <Box />
            </Heading>
          </Slogan>
        </Initial>

        <Router>
          <AnimatedRoutes language={this.state.language} />
        </Router>
      </>
    );
  }
}

export default App;
