import React, { Component } from "react";
import styled from "styled-components";

import Facebook from "./icons/Facebook";
import Linkedin from "./icons/Linkedin";
import Github from "./icons/Github";

const Link = styled.a`
  margin-left: 1.5rem;
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
      case "facebook":
        return this.renderSocialLink(Facebook);
      case "linkedin":
        return this.renderSocialLink(Linkedin);
      case "github":
        return this.renderSocialLink(Github);
      default:
        return null;
    }
  }
}

export default Icon;
