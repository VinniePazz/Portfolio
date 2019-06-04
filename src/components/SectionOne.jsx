import React from "react";
import styled from "styled-components";

import { MainButton } from "../styled-components";
import RippleHeading from "./RippleHeading";

const Hero = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  letter-spacing: 0.3rem;
  align-items: center;
`;

const Paragraph = styled.p`
  margin-top: 0.8rem;
  color: #e76f51b8;
`;

class SectionOne extends React.Component {
  handleClick = () => {
    const height = this.refs.Hero.clientHeight;
    window.scrollTo({
      top: height,
      behavior: "smooth"
    });
  };

  render() {
    return (
      <Hero ref="Hero">
        <Wrapper>
          <RippleHeading />
          <Paragraph>
            {this.props.language === "en"
              ? "web developer from Kyiv"
              : "веб-разработчик из Киева"}
          </Paragraph>
          <MainButton onClick={this.handleClick}>
            projects
            <span />
            <span />
            <span />
            <span />
          </MainButton>
        </Wrapper>
      </Hero>
    );
  }
}

export default SectionOne;
