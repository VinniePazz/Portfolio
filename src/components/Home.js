import React from "react";
import styled from "styled-components";

import Slogan from "./Slogan";
import PuzzleWheel from "./PuzzleWheel";

const HomePageGrid = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;

	& .container {
		width: 100%;
		height: 100%;
		max-width: 100em;
		margin: 0 auto;
		display: flex;
		padding: 1em;
	}
`;

const Column = styled.div`
	flex: ${props => (props.left ? "1 2 30%" : "1 0 70%")};
	height: 100%;
	/* padding-bottom: ${props => (props.left ? "3rem" : "0")}; */

	display: flex;
	flex-direction: column;
	justify-content: flex-end;
`;

class Home extends React.Component {
  render() {
    return (
      <HomePageGrid>
        <div className="container">
          <Column left>
            <Slogan />
          </Column>
          <Column right>
            <PuzzleWheel />
          </Column>
        </div>
      </HomePageGrid>
    );
  }
}

export default Home;
