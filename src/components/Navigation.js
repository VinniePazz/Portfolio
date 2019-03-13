import React from "react";
import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";

const Header = styled.header.attrs(({ page }) => ({
  gradient:
    page === "skills"
      ? "linear-gradient(-90deg,#dc5a32,#c44a67)"
      : page === "portfolio"
      ? "#FF9F1C"
      : "blue"
}))`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  color: ${({ theme }) => theme.creamy};
  background: ${({ gradient }) => gradient};

  & .container {
    height: ${(props) => props.theme.headerHeight};
    width: 100%;
    margin: 0 auto;
    padding: 0 1em 0 1em;
    max-width: 80em;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  & .menu {
    display: flex;
    height: 100%;
    align-items: center;

    a {
      display: flex;
      align-items: center;
      text-decoration: none;
      height: 100%;
      padding: 0 1em 0 1em;
      color: ${({ theme }) => theme.creamy};
    }
  }
`;

const HomeLink = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
	color: ${({ theme }) => theme.creamy};
	text-decoration: none;
`;

const Navigation = props => {
  return (
    <Header page={props.page}>
      <div className="container">
        <HomeLink as={Link} to="/">
          Home
        </HomeLink>
        <nav className="menu">
          <a href="#">About</a>
          <a href="#">Skills</a>
          <a href="#">Portfolio</a>
          <a href="#">Contacts</a>
        </nav>
      </div>
    </Header>
  );
};

export default Navigation;
