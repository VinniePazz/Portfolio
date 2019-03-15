import React, { Component } from "react";
import styled from "styled-components";

import Logo from "./Logo";
import PieChartVictory from "./charts/PieChartVictory";
import RadarChartRecharts from "./charts/RadarChartRecharts";

const StyledChartContainer = styled.div`
  grid-area: chart;
  display: grid;
  grid-template-columns: minmax(4em, 10%) 1fr;

  background: ${({ theme }) => theme.lightDark1};
  border-radius: 3px;
`;

const ChartSidebar = styled.div`
  border-right: 1px solid ${props => props.theme.dark};
  display: flex;
  flex-direction: column;

  & div {
    flex-grow: 1;
    border-bottom: 1px solid ${props => props.theme.dark};
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const ChartBody = styled.div`
	overflow: hidden;
`;

class ChartContainer extends Component {
  render() {
    return (
      <StyledChartContainer>
        <ChartSidebar>
          <div>
            <Logo type="home" />
          </div>
          <div>
            <Logo type="home" />
          </div>
          <div>
            <Logo type="home" />
          </div>
          <div>
            <Logo type="home" />
          </div>
          <div>
            <Logo type="home" />
          </div>
          <div>
            <Logo type="home" />
          </div>
        </ChartSidebar>
        <ChartBody>
          <PieChartVictory />
        </ChartBody>
      </StyledChartContainer>
    );
  }
}

export default ChartContainer;
