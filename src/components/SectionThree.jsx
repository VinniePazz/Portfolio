import React from "react";
import styled from "styled-components";

import RippleHeading from "./RippleHeading";

const Container = styled.div`
  min-height: 100vh;
  display: flex;
`;

const Description = styled.div`
  width: 40%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-end;
	padding-left: 2em;

	p {
		text-align: right;
		margin-top: 2em;
	}
`;

const Media = styled.div`
  width: 60%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`;

const VideoWrapper = styled.div`
  width: 90%;
  height: auto;
  position: relative;
	box-shadow: -20px 20px 0px #3aabab;
`;

const SectionTwo = () => {
  return (
    <Container>
      <Media>
        <VideoWrapper>
          <video width="100%" loop autoPlay muted>
            <source src="/Ki-events.mp4" type="video/mp4" />
            If you are reading this, it is because your browser does not support
            the HTML5 video element.
          </video>
        </VideoWrapper>
      </Media>
      <Description>
        <RippleHeading type="kievents" content="Ki - events" />
        <p>social-network clone with realtime changing functionality</p>
      </Description>
    </Container>
  );
};

export default SectionTwo;
