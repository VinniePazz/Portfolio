import React from "react";
import styled from "styled-components";
import posed, { PoseGroup } from "react-pose";
import _ from "lodash";

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
  letter-spacing: 0.2em;

  * {
    line-height: 100%;
  }
`;

const Paragraph = styled.p`
  text-align: right;
  margin-top: 1rem;
  color: #e76f51b8;
`;

class SectionOne extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      this.setState({ pose: 1 });
    }, 5500);
  }

  choosePose = () => {
    switch (this.state.pose) {
      case 0:
        return "initial";
      case 1:
        return "visible";
      case 2:
        return "hidden";
      default:
        return "visible";
    }
  };

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
          <RippleHeading type="main" />
          <Paragraph>web developer from Kyiv</Paragraph>
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
