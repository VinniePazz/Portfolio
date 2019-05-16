import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledHeader = styled.header`
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

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    left: 0;
    bottom: -5px;
    transform: scaleX(0);
    background: #d8dbe2;
    transform-origin: 100%;
    transition: all 0.5s ease;
  }

  &:hover {
    &::after {
      transform: scaleX(1);
      transform-origin: 0%;
    }
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

const Header = () => {
  return (
    <StyledHeader>
      <MainLogo
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth"
          })
        }
      >
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
