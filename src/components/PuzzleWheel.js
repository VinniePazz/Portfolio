import React from "react";
import styled from "styled-components";

import WheelLinks from "./WheelLinks";
import WheelCircle from "./WheelCircle";

const PuzzleContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wheel = styled.div`
  width: 32rem;
  height: 32rem;
  background: #011627;
  border-radius: 100%;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  z-index: 1;
	/* box-shadow: 60px 60px 0 0 #5d4e4e0f, 40px 40px 0 0 #55555517, 20px 20px 0 0 #653c3c1a; */
`;

const PuzzleWheel = () => {
  return (
    <PuzzleContainer>
      <Wheel>
        <WheelCircle />
        <WheelLinks />
      </Wheel>
    </PuzzleContainer>
  );
};

export default PuzzleWheel;
