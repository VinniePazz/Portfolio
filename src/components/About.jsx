import React, { Component } from "react";
import posed, { PoseGroup } from "react-pose";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

import { MainLogo } from "../styled-components";

import CodeAbout from "./CodeAbout";
import TextAbout from "./TextAbout";

const AnimatedAbout = posed.div({
  enter: {
    y: "0",
    beforeChildren: true,
    transition: { duration: 1000, ease: "linear" }
  },
  exit: {
    y: "-100%",
    transition: { duration: 1000, ease: "linear" }
  }
});

const AnimatedHeader = posed.header({
  enter: {
    opacity: 1,
    delay: 800,
    transition: { duration: 200, ease: "easeIn" }
  },
  exit: {
    opacity: 0,
    transition: { duration: 200, ease: "easeIn" }
  }
});

const AboutWrapper = styled(AnimatedAbout)`
  min-height: 100vh;
  background: #1d1d2b;
  z-index: 999;
  position: relative;
`;

const Header = styled(AnimatedHeader)`
  max-width: 1300px;
  margin: 0 auto;
  padding: 1em;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 500;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Toggle = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  width: 45px;
  height: 20px;
  transition: all 0.2s;
  background: ${({ codeStyle }) => (codeStyle ? "#79515163" : "#3aabab66")};
  position: relative;
  border-radius: 25px;

  &::before {
    content: "";
    position: absolute;
    transition: all 0.2s;
    top: 0;
    left: ${({ codeStyle }) => (codeStyle ? "0" : "50%")};
    width: 22.5px;
    height: 100%;
    background: ${({ codeStyle }) => (codeStyle ? "#e76f51" : "#3aabab")};
    border-radius: 25px;
  }
`;

class About extends Component {
  state = {
    mode: true
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  changeMode = () => {
    this.setState(prev => ({ mode: !prev.mode }));
  };

  render() {
    return (
      <AboutWrapper>
        <Header>
          <MainLogo as={Link} to="/">
            <div />
            <div />
          </MainLogo>
          <Toggle onClick={this.changeMode} codeStyle={this.state.mode} />
        </Header>
        {this.state.mode ? <CodeAbout /> : <TextAbout />}
      </AboutWrapper>
    );
  }
}

export default About;
