import React, { Component } from "react";
import { VictoryPie } from "victory";

export default class PieChartVictory extends Component {
  render() {
    return (
      <VictoryPie
        externalEventMutations={this.props.externalEventMutations}
				name="Pie"
        data={this.props.data}
        startAngle={0}
        endAngle={360}
        innerRadius={100}
        labelRadius={125}
        padAngle={2}
        // labelRadius={120}
        style={{
          labels: { fontSize: 0, fontWeight: "bold" },
          data: {
            fill: d => d.color,
            stroke: d => (d.y > 25 ? null : null),
            strokeWidth: 3
          }
        }}
        padding={40}
        events={[
          {
            target: "data",
            eventHandlers: {
              onClick: (event, props) => {
                console.log("event props", props);
                this.props.toogleItem(props.datum.id);
                return [
                  {
                    mutation: props => {
                      console.log(props);
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
