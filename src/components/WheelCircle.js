import React from "react";
import styled from "styled-components";

import Logo from "./Logo";

const LogoContainer = styled.div`
  position: absolute;
  width: 40%;
  height: 40%;
  top: 50%;
  left: 50%;
	background: ${({theme}) => theme.dark};
  transform: translate(-50%, -50%);
  border-radius: 100%;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WheelCircle = () => {
  return (
    <LogoContainer>
      <Logo type="main" />
    </LogoContainer>
  );
};

export default WheelCircle;
