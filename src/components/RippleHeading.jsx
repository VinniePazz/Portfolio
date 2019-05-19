import React from "react";
import styled from "styled-components";

const TitleContainer = styled.div`
  position: relative;
`;

const TitleWrapper = styled.div`
  color: ${({ type }) =>
    type === "main" ? "#d8dbe2" : type === "vinyl" ? "#e76f51" : "#3aabab"};
`;

const CloneWrapper = styled(TitleWrapper)`
  position: absolute;
  top: 0;
  left: 0;
  color: ${({ type }) => (type === "main" ? "#3aabab" : "#d8dbe2")};
  transition: all 0.2s linear;
`;

const HeadingOne = styled.h2`
  font-size: 3rem;
  cursor: default;
`;

const HeadingTwo = styled.h1`
  font-size: 4.5rem;
  cursor: default;
  margin: 0;
`;

const VinylHeading = styled.h3`
  font-size: 5rem;
  cursor: default;
`;
const KieventsHeading = styled.h3`
  font-size: 5rem;
  cursor: default;
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
    const { type, content } = this.props;
    const { x, y } = this.state;

    return (
      <>
        <TitleContainer
          onMouseMove={this.handleMouseMove}
          onMouseOut={this.handleMouseOut}
          ref="titleContainer"
        >
          <TitleWrapper type={type}>
            {type === "main" ? (
              <>
                <HeadingOne>DIMA</HeadingOne>
                <HeadingTwo>SMAKOUZ</HeadingTwo>
              </>
            ) : type === "vinyl" ? (
              <VinylHeading>{content}</VinylHeading>
            ) : (
              <KieventsHeading>{content}</KieventsHeading>
            )}
          </TitleWrapper>
          <CloneWrapper
            style={{ clipPath: `polygon(0 0, ${x}% 0, ${y}% 100%, 0 100%)` }}
            type={type}
          >
            {type === "main" ? (
              <>
                <HeadingOne>DIMA</HeadingOne>
                <HeadingTwo>SMAKOUZ</HeadingTwo>
              </>
            ) : type === "vinyl" ? (
              <VinylHeading>{content}</VinylHeading>
            ) : (
              <KieventsHeading>{content}</KieventsHeading>
            )}
          </CloneWrapper>
        </TitleContainer>
      </>
    );
  }
}

export default RippleHeading;
