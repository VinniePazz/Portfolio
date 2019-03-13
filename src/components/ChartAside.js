import React from "react";
import styled from "styled-components";

const Aside = styled.div`
  width: 35%;
  height: 88%;
  margin-left: 2em;
  display: flex;
	flex-direction: column;
	
	@media (min-width: 1800px) {
		height: 60%;
		align-self: flex-start;
		margin-top: 10em;
	}

  & .chart-header {
    background: #ffffff;
    flex-basis: 40%;
  }

  & .chart-description {
		background: #ffffff;
		margin-top: 1em;
		overflow-y: auto;
		flex: 1 0 50%;

    & p {
			line-height: 1.4;
      margin-bottom: .6em;
    }
  }
`;

const ChartAside = props => {
  return <Aside>{props.children}</Aside>;
};

export default ChartAside;
