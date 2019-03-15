import React, { Component } from "react";
import { Link } from "react-router-dom";

import { SkillsLink, AboutLink, PortfolioLink, ContactLink} from './styled/PuzzleLinks'
import Logo from "./Logo";

class WheelLinks extends Component {
  render() {

		const { opacity } = this.props;

    return (
      <>
        <SkillsLink as={Link} to="/skills" opacity={opacity}>
          <h3>Скиллы</h3>
          <Logo type="skills" />
        </SkillsLink>
        <AboutLink as={Link} to="/about" opacity={opacity}>
          <h3>Смоки</h3>
          <Logo type="about" />
        </AboutLink>
        <PortfolioLink as={Link} to="/portfolio" opacity={opacity}>
          <h3>Портфолио</h3>
          <Logo type="portfolio" />
        </PortfolioLink>
        <ContactLink as={Link} to="/contacts" opacity={opacity}>
          <h3>Контакты</h3>
          <Logo type="contacts" />
        </ContactLink>
      </>
    );
  }
}

export default WheelLinks;
