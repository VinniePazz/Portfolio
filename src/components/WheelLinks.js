import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { SkillsLink, AboutLink, PortfolioLink, ContactLink } from './styled/PuzzleLinks'
import Logo from "./Logo";

class WheelLinks extends Component {
  render() {
    return (
      <>
        <SkillsLink as={Link} to="/skills">
          <h3>Скиллы</h3>
          <Logo type="skills" />
        </SkillsLink>
        <AboutLink as={Link} to="/about">
          <h3>Смоки</h3>
          <Logo type="about" />
        </AboutLink>
        <PortfolioLink as={Link} to="/portfolio">
          <h3>Портфолио</h3>
          <Logo type="portfolio" />
        </PortfolioLink>
        <ContactLink as={Link} to="/contacts">
          <h3>Контакты</h3>
          <Logo type="contact" />
        </ContactLink>
      </>
    );
  }
}

export default WheelLinks;
