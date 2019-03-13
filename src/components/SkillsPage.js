import React, { Component } from "react";
import styled from "styled-components";

import Navigation from "./Navigation";
import Gradient from "./styled/Gradient";
import ChartTabMenu from './ChartTabMenu'
import ChartAside from './ChartAside'

const SkillsContent = styled.div`
  max-width: 80em;
  margin: 0 auto;
  display: flex;
  justify-content: center;
	align-items: flex-start;
  height: ${props => `calc(100vh - ${props.theme.headerHeight})`};
`;

const ChartContainer = styled.div`
  width: 60%;
  height: 88%;
  background: #ffffff;
`;



const SkillsPage = props => {
  return (
    <>
      <Navigation page="skills" />
      <Gradient>
        <SkillsContent>
          <ChartContainer>
						<ChartTabMenu>
						</ChartTabMenu>
					</ChartContainer>
          <ChartAside>
						<div className="chart-header"></div>
						<div className="chart-description">
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, praesentium minima. Dolor, laborum? Hic quo voluptatum sed aut porro officia veritatis? Autem vero eum rem incidunt ex magnam quam voluptates!</p>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti odit dolore nisi voluptatibus animi! Harum laudantium ex vel fugit ducimus, deleniti commodi voluptate nulla sapiente saepe, quasi nemo inventore sint.</p>
						</div>
					</ChartAside>
        </SkillsContent>
      </Gradient>
    </>
  );
};

export default SkillsPage;
