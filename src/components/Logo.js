import React, { Component } from "react";

import MainLogo from "../assets/icons/MainLogo";
import SkillsLogo from "../assets/icons/SkillsLogo";
import PortfolioLogo from "../assets/icons/PortfolioLogo";
import AboutLogo from "../assets/icons/AboutLogo";
import ContactLogo from "../assets/icons/ContactLogo";
import HomeLogo from "../assets/icons/HomeLogo";

const Logo = ({ type, ...props }) => {
  switch (type.toLowerCase()) {
    case "main":
      return <MainLogo {...props} />;
    case "skills":
      return <SkillsLogo {...props} />;
    case "portfolio":
      return <PortfolioLogo {...props} />;
    case "about":
      return <AboutLogo {...props} />;
    case "contacts":
      return <ContactLogo {...props} />;
    case "home":
      return <HomeLogo {...props} />;
    default:
      return <HomeLogo {...props} />;
  }
};

export default Logo;
