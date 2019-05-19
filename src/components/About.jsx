import React, { Component } from "react";
import posed, { PoseGroup } from "react-pose";
import styled from "styled-components";

const AnimatedAbout = posed.div({
  enter: { opacity: 1, y: "0", transition: { duration: 1000, ease: "linear" } },
  exit: {
    opacity: 1,
    y: "-100%",
    transition: { duration: 1500, ease: "linear" }
  }
});

const StyledAbout = styled(AnimatedAbout)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: #161616;
`;

class About extends Component {
  render() {
    return <StyledAbout>ABOUT</StyledAbout>;
  }
}

export default About;
