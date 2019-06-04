import React from "react";
import posed from "react-pose";
import styled from "styled-components";

import AboutContent from "./AboutContent";

const AnimatedWrapper = posed.div({
  enter: { staggerChildren: 25 }
});

const Wrapper = styled(AnimatedWrapper)`
  max-width: 700px;
  margin: 0 auto;

  
`;

const UtilContainer = styled.div`
  width: 100%;
  padding: 5rem 1.5rem;

  @media(min-height: 900px) {
    padding-top: 8rem;
  }
`;

const TextAbout = ({ language }) => {
  return (
    <Wrapper>
      <UtilContainer>
        <p>
          {language === "en" ? (<AboutContent language={language} />) : (<AboutContent language={language} />)}
        </p>
      </UtilContainer>
    </Wrapper>
  );
};

export default TextAbout;
