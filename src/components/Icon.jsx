import React, { Component } from "react";
import styled from "styled-components";

import { below, large } from "../styled-components";
import Linkedin from "./icons/Linkedin";
import Github from "./icons/Github";
import Mail from "./icons/Mail";
import Pdf from "./icons/Pdf";

const Link = styled.a`
  padding: 0.4rem;

  ${below.medium`
    padding: 0 0.8rem;
  `}

  ${below.small`
    padding: 0 0.6rem;
  `}

  ${large`
    padding: 0 1rem;
   `}
`;

class Icon extends Component {
  renderSocialLink = Component => {
    return (
      <Link href={this.props.linkTo} target="blank">
        <Component activeSection={this.props.activeSection} />
      </Link>
    );
  };

  render() {
    switch (this.props.type) {
      case "linkedin":
        return this.renderSocialLink(Linkedin);
      case "github":
        return this.renderSocialLink(Github);
      case "mail":
        return this.renderSocialLink(Mail);
      case "resume":
        return this.renderSocialLink(Pdf);
      default:
        return null;
    }
  }
}

export default Icon;
