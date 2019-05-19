import React from "react";
import styled from "styled-components";
import posed from "react-pose";

import RippleHeading from "./RippleHeading";

const SectionContainer = styled.div`
  min-height: 100vh;
  display: flex;
`;

const InfoBlock = styled.div`
	width: 40%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding-right: 2em;

	p {
		text-align: left;
		
	}
`;

const Description = styled.p`
	margin-top: 2em;
`;

const Technologies = styled.p`
	color: #696969;
	margin-top: .5em;
`;

const ActionBar = styled.div`
	
`;

const VisitLink = styled.button`
	
`;

const GithubLink = styled.button`

`;

const Media = styled.div`
  width: 60%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const VideoWrapper = styled.div`
  width: 90%;
  height: auto;
	position: relative;
	box-shadow: 20px 20px 0px #e76f51;
`;

const SectionTwo = () => {
  return (
    <SectionContainer>
      <InfoBlock>
        <RippleHeading type="vinyl" content="Vinyl" />
        <Description>e-commerce vinyl store with database integration</Description>
				<Technologies>#React, #MongoDB, #Material-UI</Technologies>
				<ActionBar>
					<VisitLink>visit</VisitLink>
					<GithubLink>source code</GithubLink>
				</ActionBar>
      </InfoBlock>
      <Media>
        <VideoWrapper>
          <video width="100%" height="100%" loop autoPlay muted>
            <source src="/Vinyl-compressed.mp4" type="video/mp4" />
            If you are reading this, it is because your browser does not support
            the HTML5 video element.
          </video>
        </VideoWrapper>
      </Media>
    </SectionContainer>
  );
};

export default SectionTwo;
