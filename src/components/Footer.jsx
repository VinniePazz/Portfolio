import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

import Icon from "./Icon";

const StyledFooter = styled.footer`
  max-width: 1140px;
  margin: 0 auto;
  padding: 2em 1em;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
`;

const Pages = styled.ul``;

const ProjectLink = styled.a`
  display: inline-block;
  color: ${({ active, project }) =>
    active === 1 && project === 1
      ? "#e76f51b8"
      : active === 2 && project === 2
      ? "#3aabab"
      : "#fdfffcd4"};
  margin-right: 3em;
  font-size: 0.8rem;
	font-weight: 500;
	text-transform: uppercase;
  transition: color 0.2s ease;
  cursor: pointer;

  span {
    margin-left: 0.5em;
  }

  &:hover {
    color: ${({ project }) =>
      project === 1 ? "#e76f51b8" : project === 2 ? "#3aabab" : "#fdfffcd4"};
  }
`;

const Social = styled.ul``;

const socialLinks = [
  { name: "linkedin", linkTo: "#" },
  { name: "github", linkTo: "https://github.com/VinniePazz" },
  {
    name: "facebook",
    linkTo: "https://www.facebook.com/profile.php?id=100013179880450"
  }
];

const Footer = ({ activeSection, toSectionTwo, toSectionThree }) => {
  return (
    <StyledFooter>
      <Pages>
        <ProjectLink active={activeSection} project={1} onClick={toSectionTwo}>
          01 <span>vinyl</span>
        </ProjectLink>
        <ProjectLink
          active={activeSection}
          project={2}
          onClick={toSectionThree}
        >
          02 <span>ki-events</span>
        </ProjectLink>
      </Pages>
      <Social>
        {socialLinks.map(link => (
          <Icon key={link.name} type={link.name} linkTo={link.linkTo} activeSection={activeSection} />
        ))}
      </Social>
    </StyledFooter>
  );
};

export default Footer;
