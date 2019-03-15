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
          
          colorScale={["#EDF2F4", "#ff8e0d", "#31b5a9", "#E71D36", "#141E30"]}
          startAngle={0}
          endAngle={360}
          innerRadius={100}
          labelRadius={125}
					padAngle={2}
          // labelRadius={120}
          style={{
            labels: { fontSize: 0, fontWeight: "bold" },
            data: {
              
            }
          }}
          padding={40}
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
