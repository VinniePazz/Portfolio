import React from "react";
import styled from "styled-components";

const Aside = styled.div`
  width: 30%;
  height: 88%;
  margin-left: 2em;
  display: flex;
  flex-direction: column;

  & .chart-header {
    background: #ff9f1c;
    height: 30%;
  }

  & .chart-description {
    margin-top: 1em;

    & p {
      margin-bottom: 1em;
    }
  }
`;

const ChartAside = props => {
  return <Aside>{props.children}</Aside>;
};

export default ChartAside;
