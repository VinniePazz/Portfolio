import React from "react";
import styled from "styled-components";

const SVG = styled.svg`
  fill: #edf2f4;
  width: ${({ width }) => width || "20px"};
  height: ${({ height }) => height || "20px"};
  transition: fill 0.2s;
  &:hover {
    fill: ${({ activeSection, theme }) =>
      activeSection === 2 ? "#1f8a8a" : `${theme.pallette.mainDarker}`};
  }
`;

const Mail = props => {
  return (
    <SVG
      xmlns="http://www.w3.org/2000/svg"
      id="Capa_1"
      viewBox="0 0 14 14"
      {...props}
    >
      <g>
        <path d="M7,9L5.268,7.484l-4.952,4.245C0.496,11.896,0.739,12,1.007,12h11.986 c0.267,0,0.509-0.104,0.688-0.271L8.732,7.484L7,9z" />
        <path d="M13.684,2.271C13.504,2.103,13.262,2,12.993,2H1.007C0.74,2,0.498,2.104,0.318,2.273L7,8 L13.684,2.271z" />
        <polygon points="0,2.878 0,11.186 4.833,7.079" />
        <polygon points="9.167,7.079 14,11.186 14,2.875" />
      </g>
    </SVG>
  );
};

export default Mail;
