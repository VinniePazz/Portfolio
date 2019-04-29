import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: flex-end;
	padding: 0.5rem 1rem;
	z-index: 100;
`;

const StyledLink = styled.a`
	margin: 0 1em;
`;

function NavBar(props) {
  return (
    <Header>
      <StyledLink as={Link} to="/">
				<span>home</span>
			</StyledLink>
      <StyledLink as={Link} to="about">
				<span>about</span>
			</StyledLink>
    </Header>
  );
}

export default NavBar;
