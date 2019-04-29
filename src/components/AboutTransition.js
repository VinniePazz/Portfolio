import React, { Component } from "react";
import styled from "styled-components";
import girl1 from '../assets/girl-1.jpg';
import girl2 from '../assets/girl-2.jpg';
import girl3 from '../assets/girl-3.jpg';

console.log(girl1)

const Container = styled.div`
  height: 100vh;
  width: 100vh;
  position: relative;
`;

const Image = styled.img`
	height: 500px;
	width: 500px;
	display: block;
	object-fit: cover;
`;

const Canvas = styled.div`
  background: #777777;
  height: 100vh;
  text-align: center;
  transition: all 1s linear;
  transform: ${({ state }) =>
    state === "entered" ? "translateY(0)" : "translateY(100%)"};
  opacity: 1;
`;

class PlayGround extends Component {
  state = {
    inProp: false
  };

  cb = state => {
    console.log(state);
  };

  handleTransition = () => {
    console.log('asd')
  };

  render() {
    return (
      <Container>
        {/* <button onClick={this.handleTransition}>Toogle</button>
        <Transition in={this.state.inProp} timeout={500}>
          {state => (
            <Canvas state={state}>
              {this.cb(state)}
              {state}
            </Canvas>
          )}
        </Transition> */}
				<div>
					<Image src={girl1} alt="asd"/>
					<Image src={girl1} alt="asd"/>
					<Image src={girl1} alt="asd"/>
					<Image src={girl1} alt="asd"/>
					<Image src={girl2} alt="asd"/>
					<Image src={girl3} alt="asd"/>
				</div>
      </Container>
    );
  }
}

export default PlayGround;

// LIFEHACK FOR VIDEOPLAYER WITH IFRAME
// .ui.embed {
//   position: relative;
//   max-width: 100%;
//   height: 0px;
//   overflow: hidden;
//   background: #DCDDDE;
//   padding-bottom: 56.25%;
// }
