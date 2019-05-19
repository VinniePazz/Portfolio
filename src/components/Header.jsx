import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import posed from "react-pose";

const AnimatedHeader = posed.div({
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
  max-width: 1140px;
  margin: 0 auto;
  padding: 2em 1em;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 500;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    cursor: pointer;
    font-size: 0.8rem;
    text-transform: uppercase;
    text-decoration: none;
    color: #d8dbe2;
    letter-spacing: 0.13rem;
    font-weight: 600;
    position: relative;
    transition: all 0.5s ease;
  }

  a:hover {
    color: ${({ theme }) => theme.pallette.main};
  }
`;

const MainLogo = styled.div`
  height: 30px;
  width: 50px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transform: translateX(25%);

  div {
    height: 50%;
    transition: transform 0.3s ease;
  }

  div:first-child {
    background: ${({ theme }) => theme.pallette.secondary};
    transform: translateX(-25%);
  }
  div:last-child {
    background: ${({ theme }) => theme.pallette.main};
  }

  &:hover {
    div:first-child {
      transform: translateX(0%);
    }
    div:last-child {
      transform: translateX(-25%);
    }
  }
`;

const About = styled.a`
`;

const Contact = styled.a``;

const Header = () => {
  return (
    <StyledHeader>
      <MainLogo as={Link} to="/">
        <div />
        <div />
      </MainLogo>
      <About as={Link} to="/about">
        about
      </About>
    </StyledHeader>
  );
};

export default Header;
