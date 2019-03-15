import React from "react";
import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";

import Logo from "./Logo";

const Header = styled.header`
  grid-area: header;
  display: flex;
  justify-content: space-between;

  background-color: ${({ page }) =>
    (page === "skills" && "#d62d2d") ||
    (page === "about" && "#375a7f") ||
    (page === "portfolio" && "#FF9F1C") ||
    (page === "contacts" && "#31b5a9")};

  border-radius: 3px;
`;

const Menu = styled.nav`
  display: flex;
	width: 50%;

	@media (max-width: 56em) {
		width: 60%;
	}

	@media (max-width: 46em) {
		width: 70%;
	}
`;

export const Item = styled.a`
	flex: 1 1 25%;
  display: flex;
  align-items: center;
	justify-content: center;
  text-decoration: none;
	color: ${(props) => props.theme.creamy};
	box-shadow: ${({ active }) => active ? 'inset 0px 3px 0px 0px #ffffffdc' : null};
	border-left: 1px solid ${(props) => props.theme.dark};

	& span {
		margin-left: 10px;
		transition: color 0.2s;
	}

	:hover span {
		color: ${({ theme }) => theme.dark}
	}
`;

export const HomeLink = styled.div`

	width: 4em;
  display: flex;
	justify-content: center;
  align-items: center;
`;

const Navigation = props => {
  return (
    <Header page={props.page}>
      <HomeLink as={Link} to="/" >
				<Logo type="home" />
			</HomeLink>
      <Menu>
        <Item as={NavLink} to="/about" >
          <Logo type="about" height="50%"  />
          <span>About</span>
        </Item>
        <Item as={NavLink} to="/skills" active="true">
          <Logo type="skills" height="50%"/>
          <span>Skills</span>
        </Item>
        <Item as={NavLink} to="/portfolio">
          <Logo type="portfolio" height="50%"/>
          <span>Portfolio</span>
        </Item>
        <Item as={NavLink} to="/contacts">
          <Logo type="contacts" height="50%"/>
          <span>Contacts</span>
        </Item>
      </Menu>
    </Header>
  );
};

export default Navigation;
