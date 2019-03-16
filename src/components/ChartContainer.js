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
		cursor: pointer;
  }
`;

const ChartBody = styled.div`
  overflow: hidden;
`;

class ChartContainer extends Component {
  state = {
    buttons: ["all", "css"],
  };

  render() {
    return (
      <StyledChartContainer>
        <ChartSidebar>
          {this.state.buttons.map(type => (
            <div onClick={() => this.props.changeChart(type)}>
              <Logo type={type} />
            </div>
          ))}
        </ChartSidebar>
        <ChartBody>
          {this.props.currentChart === "all" ? (
            <PieChartVictory data={this.props.data} toogleItem={this.props.toogleItem} externalEventMutations={this.props.externalEventMutations} />
          ) : (
            <RadarChartRecharts data={this.props.data} />
          )}
        </ChartBody>
      </StyledChartContainer>
    );
  }
}

export default ChartContainer;
