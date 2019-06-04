import React from "react";
import posed from "react-pose";
import styled, { keyframes } from "styled-components";

const AnimatedWrapper = posed.div({
  enter: { staggerChildren: 25 }
});

const Wrapper = styled(AnimatedWrapper)`
  max-width: 900px;
  margin: 0 auto;
  display: flex;
`;

const UtilContainer = styled.div`
  width: 80%;
  margin-left: auto;
  border-left: 1px solid #d8dbe2;
  padding: 4rem 1.5rem;
  font-family: monospace;
`;

const TextAbout = () => {
  return (
    <Wrapper>
      <UtilContainer>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa pariatur,
        doloribus at molestias vel omnis aliquid saepe, nobis, dolorum
        reiciendis sed ad ducimus dicta eos quas! Reiciendis facilis tenetur
        nemo!
      </UtilContainer>
    </Wrapper>
  );
};

export default TextAbout;
