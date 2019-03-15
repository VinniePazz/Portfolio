import React, { Component } from "react";
import styled from "styled-components";

import Navigation from "./Navigation";
import Container from "./styled/Container";

import ChartContainer from "./ChartContainer";
import ChartSidebar from "./ChartSidebar";

const GridContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding: 2em 0 2em 0;

  display: grid;
  grid-template-columns: 4em 1fr 30%;
  grid-template-rows: 10% 1fr;
  row-gap: 20px;
  column-gap: 20px;
  grid-template-areas:
    "header header header"
    "chart chart sidebar"
    "chart chart sidebar";
`;

const SkillsContent = styled.div`
  max-width: 70em;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${props => `calc(100vh - ${props.theme.headerHeight})`};
`;

class SkillsPage extends Component {
  state = {};

  render() {
    return (
      <Container>
        <GridContainer>
          <Navigation page='skills' />
          <ChartContainer />
          <ChartSidebar />
        </GridContainer>
      </Container>
    );
  }
}

// <>
//   <Navigation page="skills" />
//   <Gradient skills>
//     <SkillsContent>
//       <ChartContainer />
//       <ChartAside>
//         <div className="chart-header" />
//         <div className="chart-description" />
//       </ChartAside>
//     </SkillsContent>
//   </Gradient>
// </>

export default SkillsPage;
