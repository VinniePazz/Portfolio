import React, { Component } from "react";
import {
	VictoryPie
} from "victory";


const data = [
  { x: "CSS", y: 25, color: "blue" },
  { x: "Javacsript", y: 25, color: "orange" },
  { x: "Node.js", y: 10, color: "green" },
  { x: "Design", y: 20, color: "yellow" },
  { x: "Others", y: 20, color: "tomato" }
];

export default class PieChartVictory extends Component {
  render() {
    return (      
        <VictoryPie
          data={data}
          
          colorScale={["tomato", "#ff8e0d", "#21d130", "#E71D36", "#2EC4B6"]}
          cornerRadius={2}
          startAngle={0}
          endAngle={360}
          labels={d => d.y}
          innerRadius={80}
          labelRadius={125}
          // labelRadius={120}
          style={{
            labels: { fill: "#ffffff", fontSize: 15, fontWeight: "bold" },
            data: {
              stroke: d => (d.y === 25 ? "#555555" : "transparent"),
              strokeWidth: 2,
              fill: d => d.color
            }
          }}
          padAngle={1.5}
          padding={30}
          events={[
            {
              target: "data",
              eventHandlers: {
                onClick: e => {
                  console.log(e);
                  return [
                    {
                      target: "labels",
                      mutation: props => {
                        console.log("label props: ", props);
                        return props.text === "hello"
                          ? null
                          : { text: "hello" };
                      }
                    },
                    {
                      mutation: props => {
                        console.log("data props", props);
                      }
                    }
                  ];
                }
              }
            }
          ]}
        />
      
    );
  }
}
