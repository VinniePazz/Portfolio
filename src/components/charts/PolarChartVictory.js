import React, { Component } from "react";
import {
  VictoryBar,
  VictoryChart,
  VictoryPolarAxis,
	VictoryLabel
} from "victory";


const data = [
  { x: 0, y: 5, color: "red" },
  { x: 15, y: 7, color: "tomato" },
  { x: 30, y: 8, color: "gold" },
  { x: 45, y: 5, color: "green" },
  { x: 60, y: 6, color: "blue" },
  { x: 75, y: 9, color: "black" },
  { x: 90, y: 8, color: "brown" }
];

export default class PolarChartVictory extends Component {
  render() {
    return (
      <VictoryChart polar domain={{ x: [0, 105], y: [0, 10] }}>
        <VictoryPolarAxis
				tickLabelComponent={<VictoryLabel dy={0}/>}
          tickValues={[0, 15, 30, 45, 60, 75, 90]}
          labelPlacement="vertical"
          startAngle={90}
          endAngle={450}
          style={{
            axis: { stroke: "#555555", strokeWidth: 2},
            tickLabels: { fontSize: 15, padding: 10, fill: '#555555' },
						
          }}
        />
        
			
				<VictoryBar
          data={data}
          style={{
            data: {
              fill: d => d.color,
              stroke: "#555555",
              fillOpacity: 0.8,
							strokeWidth: 1.5
            }
          }}
        />
 
      </VictoryChart>
    );
  }
}


