import React, { Component } from "react";
import styled from "styled-components";

import ChartTabMenu from "./ChartTabMenu";

const Box = styled.div`
  width: 60%;
  height: 88%;
	background: #ffffff;
	
	@media (min-width: 1800px) {
		height: 60%;
		align-self: flex-start;
		margin-top: 10em;
	}
`;

class ChartContainer extends Component {


  render() {
    return (
      <Box>
        <ChartTabMenu />
      </Box>
    );
  }
}

export default ChartContainer;
