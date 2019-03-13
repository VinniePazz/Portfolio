import React, { Component } from "react";
import {
  VictoryChart,
  VictoryPolarAxis,
	VictoryLine
} from "victory";

const data = [
  { x: 0, y: 5, color: "red" },
  { x: 15, y: 7, color: "tomato" },
  { x: 30, y: 8, color: "gold" },
  { x: 45, y: 8, color: "green" },
  { x: 60, y: 3, color: "blue" },
  { x: 75, y: 10, color: "black" },
  { x: 90, y: 7, color: "brown" }
];

export class RadarChartVictory extends Component {
  render() {
    return (
      <VictoryChart polar domain={{ x: [0, 100], y: [0, 10] }} >
        <VictoryPolarAxis
          dependentAxis
          style={{ axis: { stroke: "none" } }}
          tickFormat={() => null}
        />
        <VictoryPolarAxis style={{ axis: { stroke: (e) => console.log(e) } }}/>
        <VictoryLine
          data={data}
          style={{
            data: { stroke: "#c43a31", fill: 'red', fillOpacity: 0.6 }
          }}
        />
      </VictoryChart>
    );
  }
}

export default RadarChartVictory;
