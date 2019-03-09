import React from "react";
import styled from "styled-components";

import SkillsLogo from "./SkillsLogo";
import WindMill from './WindMill'
import { ReactComponent as AboutLogo } from "../assets/about.svg";
import { ReactComponent as PortfolioLogo } from "../assets/resume.svg";

const LandingContainer = styled.div`
  display: grid;
  width: 100vw;
  height: 100vh;
  padding: 3vmin 30vmax;

  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(6, minmax(auto, 1fr));

	@media (max-width: 1000px) {
		padding: 3vmin 20vmax;
	}

  & .skills {
    grid-area: 1 / 1 / 4 / 3;
    background: #e53935;
    background: ${props => props.theme.bgSkills};
		cursor: pointer;
    padding: 1rem 4rem 1rem 2rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: #ece9e6;
    border-top-left-radius: 100%;

    h3 {
      color: #ece9e6;
      font-size: 3rem;
		}

  }

  & .about {
    grid-area: 1 / 3 / 4 / -1;
    display: flex;
    padding: 1rem 2rem;
    justify-content: space-around;
    align-items: center;
    background: #00bf8f; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to bottom,
      #43cea2,
      #00bf8f
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to bottom,
      #43cea2,
      #00bf8f
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    border-top-right-radius: 100%;
  }

  & .slogan {
    grid-area: 3 / 3 / 5 / -1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & .portfolio {
    display: flex;
    padding: 1rem 4rem;
    justify-content: space-around;
    align-items: center;
    grid-area: 4 / 1 / -1 / 3;

    font-family: "Cabin Sketch", cursive;
    font-size: 3rem;
    color: #ece9e6;

    background: #f7971e;
    background: linear-gradient(45deg, #ffd200, #f7971e);

    border-bottom-left-radius: 100%;
  }

  & .contacts {
    grid-area: 4 / 3 / -1 / -1;
    background: linear-gradient(to right, #457fca, #5691c8);
    border-bottom-right-radius: 100%;
  }

  & .skills-logo {
    width: 10rem;
    height: 10rem;
  }

  & .about-logo {
    width: 7rem;
    height: 7rem;
  }

  & .resume-logo {
    width: 9.5rem;
    height: 9.5rem;
	}
	
	& .main-logo {
		width: 8rem;
		height: 8rem;
	}
`;

const Heading = styled.div`
  position: fixed;
  width: 30vmin;
  height: 30vmin;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(0deg);
  background: #fffff9;
  /* padding: 12vmin 12vmin; */
  border-left: 10px solid #f7971e;
  border-top: 10px solid #e53935;
  border-bottom: 10px solid #5691c8;
  border-right: 10px solid #00bf8f;
  transform-origin: center;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

	/* & h1 {
		font-size: 4.5rem;
		transform: translateY(2.5rem);
	} */

	& .main-logo {
		
	}

  @media (max-width: 900px) {
    /* padding: 5rem 10rem; */
  }
`;

const Item = styled.div``;

class Landing extends React.Component {
  state = {
    hover: false
  };

	componentDidMount() {
		console.log('Landing have been mounted')
	}

	componentDidUpdate() {
		console.log('Landing have been updated')
	}

  render() {
		console.log('Landing render method have been called')
    return (
      <LandingContainer>
        <Heading className="heading" >
					<div className="main-logo">
						<WindMill />
					</div>

				</Heading>
        <Item
          className="skills"
          onMouseEnter={() =>
            this.setState((state, props) => ({
              hover: !state.hover
            }))
          }
          onMouseLeave={() =>
            this.setState((state, props) => ({
              hover: !state.hover
            }))
          }
        >
          <div className="skills-logo">
            <SkillsLogo hover={this.state.hover} />
          </div>
        </Item>

        <Item className="about">
          <AboutLogo className="about-logo" />
        </Item>
        <Item className="portfolio">
          <PortfolioLogo className="resume-logo" />
        </Item>
        <Item className="contacts"></Item>
      </LandingContainer>
    );
  }
}

export default Landing;
