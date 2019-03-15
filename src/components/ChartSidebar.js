import React from "react";
import styled from "styled-components";

const StyledChartSidebar = styled.div`
  grid-area: sidebar;

  background: ${({ theme }) => theme.lightDark1};
  border-radius: 3px;
`;

const ChartSidebar = () => {
  return <StyledChartSidebar />;
};

export default ChartSidebar;
