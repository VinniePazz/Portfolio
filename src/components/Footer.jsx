import React from "react";
import styled from "styled-components";
import posed from "react-pose";

import { below, large } from "../styled-components";
import Icon from "./Icon";

const AnimatedFooter = posed.div({
  enter: {
    opacity: 1,
    transition: { duration: 200, ease: "easeIn" }
  },
  exit: {
    opacity: 0,

    transition: { duration: 200, ease: "easeIn" }
  }
});

const StyledFooter = styled(AnimatedFooter)`
  max-width: 1300px;
  margin: 0 auto;
  padding: 1em;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  ${below.medium`
    background-color: #1d1d2b;
  `}

  ${large`
    background-color: #1d1d2b;
  `}
`;

const Pages = styled.ul`
  display: flex;
  flex-direction: column;

  ${below.medium`
    flex-direction: row;
  `}

  ${large`
    display: none;
  `}
`;

const ProjectLink = styled.a`
  margin-top: 1em;
  color: ${({ active, project, theme }) =>
    active === 1 && project === 1
      ? `${theme.pallette.mainDarker}`
      : active === 2 && project === 2
      ? "#3aabab"
      : "#fdfffcd4"};
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  transition: color 0.2s ease;
  cursor: pointer;

  &:hover {
    color: ${({ project, theme }) =>
      project === 1
        ? `${theme.pallette.main}`
        : project === 2
        ? "#3aabab"
        : "#fdfffcd4"};
  }

  ${below.medium`
    margin-right: 1rem;
  `}
`;

const Social = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 70px;

  ${below.medium`
    flex-wrap: no-wrap;
    width: auto;
  `}

  ${large`
    flex-wrap: no-wrap;
    width: 100%;
    justify-content: center;
  `}
`;

const socialLinks = [
  {
    name: "linkedin",
    linkTo: "https://www.linkedin.com/in/dima-smakouz-9ab590188/"
  },
  { name: "github", linkTo: "https://github.com/VinniePazz" },
  {
    name: "mail",
    linkTo: "mailto:dimasmakouz@gmail.com"
  },
  {
    name: "resume",
    linkTo: "/CV.pdf"
  }
];

const Footer = ({ activeSection, toSectionTwo, toSectionThree }) => {
  return (
    <StyledFooter>
      <Pages>
        <ProjectLink active={activeSection} project={1} onClick={toSectionTwo}>
          vinyl
        </ProjectLink>
        <ProjectLink
          active={activeSection}
          project={2}
          onClick={toSectionThree}
        >
          ki-events
        </ProjectLink>
      </Pages>
      <Social>
        {socialLinks.map(link => (
          <Icon
            key={link.name}
            type={link.name}
            linkTo={link.linkTo}
            activeSection={activeSection}
          />
        ))}
      </Social>
    </StyledFooter>
  );
};

export default Footer;
