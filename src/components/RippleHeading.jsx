import React from "react";
import styled from "styled-components";

const TitleContainer = styled.div`
  position: relative;
  text-align: center;
`;

const TitleWrapper = styled.div`
  color: #d8dbe2;
`;

const CloneWrapper = styled(TitleWrapper)`
  position: absolute;
  top: 0;
  left: 0;
  color: #3aabab;
  transition: all 0.2s linear;
`;

const HeadingOne = styled.h2`
  font-size: 3rem;
  cursor: default;
`;

const HeadingTwo = styled.h1`
  font-size: 3rem;
  cursor: default;
  margin: 0;
`;

class RippleHeading extends React.Component {
  state = {
    pose: 0,
    x: 0,
    y: 0
  };

  handleMouseMove = e => {
    const width = this.refs.titleContainer.clientWidth;
    const height = this.refs.titleContainer.clientHeight;
    const offsetX = (e.nativeEvent.offsetX / width) * 160;
    const offsetY = (e.nativeEvent.offsetY / height) * 160;
    console.log(offsetX, offsetY);
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
    const { language } = this.props;

    return (
      <>
        <TitleContainer
          onMouseMove={this.handleMouseMove}
          onMouseOut={this.handleMouseOut}
          ref="titleContainer"
        >
          <TitleWrapper>
            <HeadingOne>{language === "en" ? "DIMA" : "ДИМА"}</HeadingOne>
            <HeadingTwo>{language === "en" ? "SMAKOUZ" : "СМАКОУЗ"}</HeadingTwo>
          </TitleWrapper>
          <CloneWrapper
            style={{ clipPath: `polygon(0 0, ${x}% 0, ${y}% 100%, 0 100%)` }}
          >
            <HeadingOne>{language === "en" ? "DIMA" : "ДИМА"}</HeadingOne>
            <HeadingTwo>{language === "en" ? "SMAKOUZ" : "СМАКОУЗ"}</HeadingTwo>
          </CloneWrapper>
        </TitleContainer>
      </>
    );
  }
}

export default RippleHeading;
