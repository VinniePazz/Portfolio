import React from "react";
import styled from "styled-components";
import posed, { PoseGroup } from "react-pose";
import _ from "lodash";

import { MainButton } from "../styled-components";

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

const TitleContainer = styled.div`
  position: relative;
`;

const TitleWrapper = styled.div`
  color: #d8dbe2;
`;

const CloneWrapper = styled(TitleWrapper)`
  position: absolute;
  top: 0;
  left: 0;
  color: #73bbbb;
  transition: all 0.2s linear;
`;

const HeadingOne = styled.h2`
  font-size: 3rem;
`;

const HeadingTwo = styled.h1`
  font-size: 4.5rem;
  margin: 0;
`;

const Paragraph = styled.p`
  text-align: right;
  margin-top: 1rem;
  color: #e76f51b8;
`;

class SectionOne extends React.Component {
  state = {
    pose: 0,
    x: 0,
    y: 0
  };

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
      top: 635,
      behavior: "smooth"
    });
  };

  handleMouseMove = e => {
    const width = this.refs.titleContainer.clientWidth;
    const height = this.refs.titleContainer.clientHeight;
    const offsetX = (e.nativeEvent.offsetX / width) * 100;
    const offsetY = (e.nativeEvent.offsetY / height) * 100;
    this.setState({
      x: Math.round(offsetX),
      y: Math.round(offsetY)
    });
  };

  handleMouseOut = () => {
    this.setState({
      x: 0,
      y: 0
    });
  };

  render() {
    const { x, y } = this.state;
    return (
      <Hero ref="Hero">
        <Wrapper>
          <TitleContainer
            onMouseMove={this.handleMouseMove}
            onMouseOut={this.handleMouseOut}
            ref="titleContainer"
          >
            <TitleWrapper>
              <HeadingOne>DIMA</HeadingOne>
              <HeadingTwo>SMAKOUZ</HeadingTwo>
            </TitleWrapper>
            <CloneWrapper
              style={{ clipPath: `polygon(0 0, ${x}% 0, ${y}% 100%, 0 100%)` }}
            >
              <HeadingOne>DIMA</HeadingOne>
              <HeadingTwo>SMAKOUZ</HeadingTwo>
            </CloneWrapper>
          </TitleContainer>

          <Paragraph pose={this.choosePose()}>
            web developer from Kyiv
          </Paragraph>
          <MainButton pose={this.choosePose()} onClick={this.handleClick}>
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
