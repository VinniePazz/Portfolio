import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import posed from "react-pose";
import { below } from "../styled-components";

import { MainLogo } from "../styled-components";
import Language from "./Language";

const AnimatedHeader = posed.header({
  enter: {
    opacity: 1,
    delay: 1000,
    transition: { duration: 200, ease: "easeIn" }
  },
  exit: {
    opacity: 0,
    transition: { duration: 200, ease: "easeIn" }
  }
});

const StyledHeader = styled(AnimatedHeader)`
  max-width: 1300px;
  margin: 0 auto;
  padding: 2em 1em;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${below.medium`
    background-color: #1d1d2b;
    padding: 1em;
  `}
`;

const About = styled.a`
  cursor: pointer;
  font-size: 0.8rem;
  text-transform: uppercase;
  text-decoration: none;
  color: #d8dbe2;
  letter-spacing: 0.13rem;
  font-weight: 600;
  position: relative;
  transition: all 0.5s ease;
  margin: 0 2rem 0 auto;

  &:hover {
    color: ${({ activeSection }) =>
      activeSection === 2 ? "#1f8a8a" : "#e76f51b8"};
  }
`;

const Header = ({ activeSection, changeLanguage }) => {
  return (
    <StyledHeader>
      <MainLogo
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <div />
        <div />
      </MainLogo>
      <About as={Link} to="/about" activeSection={activeSection}>
        about
      </About>
      <Language activeSection={activeSection} changeLanguage={changeLanguage} />
    </StyledHeader>
  );
};

export default Header;
