import React from "react";
import styled from "styled-components";

const TabMenu = styled.div`
  height: 10%;
  background: ${props => props.theme.creamy};
  display: flex;

  & button {
    background-color: #ffffff;
    border: none;
  }
`;

const ChartTabMenu = () => {
  return (
    <TabMenu>
      <button>All</button>
      <button>Javascript</button>
    </TabMenu>
  );
};

export default ChartTabMenu;
