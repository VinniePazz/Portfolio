import React, { Component } from "react";
import styled from "styled-components";

import Navigation from "./Navigation";
import Container from "./styled/Container";

import ChartContainer from "./ChartContainer";
import SkillsSidebar from "./SkillsSidebar";

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

  @media (max-width: 1250px) and (min-height: 700px) {
    padding: 0;
  }
`;

const radarData = [
  {
    subject: "Math",
    A: 120,
    B: 110,
    fullMark: 150
  },
  {
    subject: "Chinese",
    A: 98,
    B: 130,
    fullMark: 150
  },
  {
    subject: "English",
    A: 86,
    B: 130,
    fullMark: 150
  },
  {
    subject: "Geography",
    A: 99,
    B: 100,
    fullMark: 150
  },
  {
    subject: "Physics",
    A: 85,
    B: 90,
    fullMark: 150
  },
  {
    subject: "History",
    A: 65,
    B: 85,
    fullMark: 150
  }
];

const pieData = [
  { x: "CSS", y: 25, color: "#EDF2F4", id: 1, percentage: 65, isOpen: false },
  {
    x: "Javacsript",
    y: 30,
    color: "#ff8e0d",
    id: 2,
    percentage: 70,
    isOpen: true
  },
  {
    x: "Node.js",
    y: 10,
    color: "#31b5a9",
    id: 3,
    percentage: 25,
    isOpen: false
  },
  {
    x: "Design",
    y: 20,
    color: "#E71D36",
    id: 4,
    percentage: 20,
    isOpen: false
  },
  { x: "Others", y: 20, color: "#141E30", id: 5, percentage: 50, isOpen: false }
];

class SkillsPage extends Component {
  state = {
    data: pieData,
    currentChart: "all",
    itemToReveal: null,
    externalMutations: null
  };

  changeChart = type => {
    type === "all"
      ? this.setState({
          data: [...pieData],
          currentChart: "all"
        })
      : this.setState({
          data: [...radarData],
          currentChart: "radar"
        });
  };

  changeDataOfChart = id => {
    const newData = this.state.data.map(item => {
      return item.id === id ? { ...item, isOpen: !item.isOpen } : item;
    });
    this.setState({ data: newData });
  };

  toogleItem = id => {
    this.state.itemToReveal === id
      ? this.setState({ itemToReveal: null })
			: this.setState({ itemToReveal: id });
		this.mutateChart(id)
  };

  mutateChart = () => {
    this.setState({
      externalMutations: [
        {
          target: ['data'],
          eventKey: "all",
          mutation: (...args) => {console.log('MUTATION', args); return { style: { fill: 'red'} }},
          callback: this.removeMutation
        }
      ]
    });
  };

  removeMutation = () => {
    this.setState({
      externalMutations: null
    });
  };

  render() {
    return (
      <Container>
        <GridContainer>
          <Navigation page="skills" />
          <ChartContainer
            data={this.state.data}
            currentChart={this.state.currentChart}
            changeChart={this.changeChart}
            toogleItem={this.toogleItem}
            externalEventMutations={this.state.externalMutations}
          />
          <SkillsSidebar
            data={this.state.data}
            itemToReveal={this.state.itemToReveal}
            toogleItem={this.toogleItem}
						mutateChart={this.mutateChart}
          />
        </GridContainer>
      </Container>
    );
  }
}

export default SkillsPage;
