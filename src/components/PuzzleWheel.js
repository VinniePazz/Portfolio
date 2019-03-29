import React from "react";
import styled from "styled-components";
import posed from "react-pose";

import WheelLinks from "./WheelLinks";
import WheelCircle from "./WheelCircle";

const PuzzleContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AnimatedWheel = posed.div({
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
			opacity: {ease: "backInOut", duration: 1500},
			rotate: {ease: "backInOut", duration: 1000},
      scale: { ease: "easeIn", duration: 1000 },
      default: { ease: "linear", duration: 1000 }
    }
  },
  hidden: { opacity: 0, scale: 0, rotate: 500 }
});

const Wheel = styled(AnimatedWheel)`
  width: 32rem;
  height: 32rem;
  border-radius: 100%;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  z-index: 1;
  transform-origin: 50% 50%;
`;

class PuzzleWheel extends React.Component {
  state = {
    isVisible: false,
    opacity: 0
  };

  componentDidMount() {
    this.setState(state => ({ isVisible: !state.isVisible }));
    setTimeout(() => {
      this.setState({ opacity: 1 });
    }, 1300);
	}

  render() {
    return (
      <PuzzleContainer>
        <Wheel pose={this.state.isVisible ? "visible" : "hidden"}>
          <WheelCircle />
          <WheelLinks opacity={this.state.opacity} />
        </Wheel>
      </PuzzleContainer>
    );
  }
}

export default PuzzleWheel;
