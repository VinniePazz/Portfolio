import React from "react";
import styled from "styled-components";

const Container = styled.div`
  min-height: 100vh;
  display: flex;
`;

const Description = styled.div`
  width: 40%;
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
  &:after {
    position: absolute;
    top: -15%;
    left: -10%;
    content: "";
    width: 70%;
    height: 130%;
    background: #1f8a8a;
    z-index: -1;
  }
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
        <h1 />
        <p />
      </Description>
    </Container>
  );
};

export default SectionTwo;
