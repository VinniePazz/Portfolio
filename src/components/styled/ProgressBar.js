import React from "react";
import styled from "styled-components";

const StyledProgressBar = styled.div`
	flex-basis: 65%;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 1em .5em;
`;

const ProgressBarContainer = styled.div`
	position: relative;
	height: 1em;
	width: 100%;
	border: 1px solid #535353;
	border-radius: 1em;
`;
const Filler = styled.div`
	background: ${(props) => props.color};
	height: 100%;
	border-radius: inherit;
	transition: width .2s ease-in;
	width: ${({ width }) => `${width}%`}
`;

const ProgressBar = (props) => {
  return (
    <StyledProgressBar>
      <ProgressBarContainer>
        <Filler width={props.percentage} color={props.color} />
      </ProgressBarContainer>
    </StyledProgressBar>
  );
};

export default ProgressBar;
