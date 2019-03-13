import React from "react";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
	ResponsiveContainer
} from "recharts";

const data = [
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

class RadarChartRecharts extends React.Component {
  render() {
    return (
      <ResponsiveContainer widt="100%" height="100%" minHeight={300} minWidth={300}>
        <RadarChart outerRadius={120} data={data} onClick={(e) => console.log(e)}>
          <PolarGrid outerRadius={300} polarAngles={40} polarRadius={[5,5,5,5,5,5,5]} gridType="polygon" />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis angle={30} domain={[0, 10]} tick={false}/>
          <Radar
            name="Lily"
            dataKey="B"
            stroke="#82ca9d"
            fill="#82ca9d"
            fillOpacity={0.9}
          />
          
        </RadarChart>
      </ResponsiveContainer>
    );
  }
}

export default RadarChartRecharts;
