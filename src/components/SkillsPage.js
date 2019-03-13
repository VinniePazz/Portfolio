import React, { Component } from "react";
import styled from "styled-components";

import Navigation from "./Navigation";
import Gradient from "./styled/Gradient";

import ChartContainer from "./ChartContainer";
import ChartAside from "./ChartAside";

const SkillsContent = styled.div`
  max-width: 70em;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${props => `calc(100vh - ${props.theme.headerHeight})`};

  & .hl {
    color: red;
  }
`;

class SkillsPage extends Component {
  state = {};

  render() {
    return (
      <>
        <Navigation page="skills" />
        <Gradient skills>
          <SkillsContent>
            <ChartContainer />
            <ChartAside>
              <div className="chart-header" />
              <div className="chart-description" />
            </ChartAside>
          </SkillsContent>
        </Gradient>
      </>
    );
  }
}

export default SkillsPage;
