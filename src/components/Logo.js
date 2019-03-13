import React, { Component } from "react";

import MainLogo from "../assets/icons/MainLogo";
import SkillsLogo from "../assets/icons/SkillsLogo";
import PortfolioLogo from "../assets/icons/PortfolioLogo";
import AboutLogo from "../assets/icons/AboutLogo";
import ContactLogo from "../assets/icons/ContactLogo";

class Logo extends Component {
  render() {
    switch (this.props.type) {
      case "main":
        return <MainLogo {...this.props} />;
      case "skills":
        return <SkillsLogo />;
      case "portfolio":
        return <PortfolioLogo />;
      case "about":
        return <AboutLogo />;
      case "contact":
        return <ContactLogo />;
      default:
        return null;
    }
  }
}

export default Logo;
