import React, { Component } from "react";
import posed, { PoseGroup } from "react-pose";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

import { MainLogo } from "../styled-components";
import Code from "./icons/Code";
import Text from "./icons/Text";
import Language from "./Language";

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
  padding: 2em 1em 1em 1em;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 500;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ToogleContainer = styled.div`
  display: flex;
  margin: 0 2rem 0 auto;
  align-items: center;
`;

const Toggle = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  margin: 0 .5rem;
  width: 40px;
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
    width: 20px;
    height: 100%;
    background: ${({ codeStyle }) => (codeStyle ? "#e76f51" : "#3aabab")};
    border-radius: 25px;
  }
`;

class About extends Component {
  state = {
    mode: true,
    language: "en"
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  changeLanguage = language => {
    if (this.state.mode) {
      this.setState({ mode: true, language });
    } else {
      this.setState({ mode: false, language });
    }
  };

  changeMode = () => {
    this.setState(prev => ({ mode: !prev.mode }));
  };

  render() {
    const { mode, language } = this.state;
    return (
      <AboutWrapper>
        <Header>
          <MainLogo as={Link} to="/">
            <div />
            <div />
          </MainLogo>
          <ToogleContainer>
            <Code />
            <Toggle onClick={this.changeMode} codeStyle={mode} />
            <Text />
          </ToogleContainer>
          <Language
            changeLanguage={this.changeLanguage}
            activeSection={mode ? 1 : 2}
          />
        </Header>
        {mode ? (
          <CodeAbout language={language} />
        ) : (
          <TextAbout language={language} />
        )}
      </AboutWrapper>
    );
  }
}

export default About;
