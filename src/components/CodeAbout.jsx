import React from "react";
import posed from "react-pose";
import styled, { keyframes } from "styled-components";

const AnimatedWrapper = posed.div({
  enter: { staggerChildren: 25 }
});

const AnimatedLine = posed.p({
  enter: { opacity: 1 },
  exit: { opacity: 0 }
});

const Wrapper = styled(AnimatedWrapper)`
  max-width: 900px;
  margin: 0 auto;
  display: flex;
`;

const UtilContainer = styled.div`
  width: 80%;
  margin-left: auto;
  border-left: 1px solid rgba(250, 250, 250, 0.3);
  padding: 5rem 1.5rem;
  font-family: monospace;

  @media(min-height: 900px) {
    padding-top: 8rem;
  }

  @media (max-width: 450px) {
    padding-top: 8rem;
    font-size: 18px;
  }
`;

const Line = styled(AnimatedLine)`
  position: relative;
  line-height: 150%;
  transition: all .2s;
  cursor: default;

  &::before {
    position: absolute;
    top: 0;
    left: -60px;
    content: '${({ n }) => n}';
    color: rgba(250, 250, 250, 0.3);
  }

  &:hover {
    background-color: rgba(74, 74, 74, 0.23);
  }

  .dots {
    color: rgba(250, 250, 250, 0.1);
    font-size: .8rem;
    letter-spacing: 1px;
    margin-right: 2px;
  }
`;

const Orange = styled.span`
  color: #d8a64b;
`;
const Violet = styled.span`
  color: rgba(153, 106, 191, 0.96);
`;
const Blue = styled.span`
  color: #1491c3;
`;
const Heaven = styled.span`
  color: #3ed8d8;
`;
const Red = styled.span`
  color: ${({ theme }) => theme.pallette.main};
`;
const Grass = styled.span`
  color: #7ebb75;
`;
const Comments = styled.span`
  color: rgba(250, 250, 250, 0.3);
`;
const EmptyLine = styled(Line)`
  color: transparent;
`;

const blink = keyframes`
  0% {
    opacity: 0;
  }

  50% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`;

const Cursor = styled.span`
  height: 100%;
  width: 1px;
  color: #fafafa;

  animation: ${blink} 1s linear infinite;
`;

const CodeAbout = ({ language }) => {
  return (
    <Wrapper>
      <UtilContainer>
        <Line n={1}>
          <Violet>class </Violet>
          <Orange>Dima Smakouz</Orange> {"{"}
        </Line>
        <EmptyLine n={2}>.</EmptyLine>
        <Comments>
          {language === "en" ? (
            <>
              <Line n={3}>//Ambitious self-taught person </Line>
              <Line n={4}>//who set himself a huge goal - </Line>
              <Line n={5}>//become a professional web developer</Line>
            </>
          ) : (
            <>
              <Line n={3}>//Амбициозный самоучка, </Line>
              <Line n={4}>//который поставил перед собой цель - </Line>
              <Line n={5}>//стать профессиональным веб-разработчиком</Line>
            </>
          )}
        </Comments>

        <EmptyLine n={6}>.</EmptyLine>
        <Line n={7}>
          <span className="dots">··</span>
          <Blue>constructor</Blue>() {"{"}
        </Line>
        <Line n={8}>
          <span className="dots">····</span>
          <Red>this</Red>.<Heaven>name </Heaven>
          <Violet>=</Violet> <Grass>"Dima"</Grass>
        </Line>
        <Line n={9}>
          <span className="dots">····</span>
          <Red>this</Red>.<Heaven>email </Heaven>
          <Violet>= </Violet>
          <Grass>"dimasmakouz@gmail.com"</Grass>
        </Line>
        <Line n={10}>
          <span className="dots">··</span>
          {"}"}
        </Line>

        {/* education */}
        <EmptyLine n={11}>.</EmptyLine>
        <Line n={12}>
          <span className="dots">··</span>
          <Blue>education</Blue>() {"{"}
        </Line>
        <Line n={13}>
          <span className="dots">····</span>
          <Violet>return </Violet>
          {"{"}
        </Line>
        <Line n={14}>
          <span className="dots">······</span>
          <Grass>
            "2011-2016": "Kyiv National University of Trade and Economics"
          </Grass>
        </Line>
        <Line n={15}>
          <span className="dots">····</span>
          {"}"}
        </Line>
        <Line n={16}>
          <span className="dots">··</span>
          {"}"}
        </Line>

        {/* skillls */}
        <EmptyLine n={17}>.</EmptyLine>
        <Line n={18}>
          <span className="dots">··</span>
          <Blue>skills</Blue>() {"{"}
        </Line>
        <Line n={19}>
          <span className="dots">····</span>
          <Violet>return </Violet>
          {"["}{" "}
          <Grass>
            'HTML/CSS/JS', 'React.js', 'Redux', 'Node.js', 'Express', 'MongoDB/Mongoose',
            'Firebase/Firestore', 'Webpack/Gulp', 'npm', 'SCSS',
            'Styled-Components' 'Material UI/Semantic UI/Bootstrap 4',
            'D3/Victory', 'GIT/Github', 'Figma', 'Avocode', 'Inkscape'{" "}
          </Grass>
          <Cursor>|</Cursor> {"]"}
        </Line>
        <Line n={20}>
          <span className="dots">··</span>
          {"}"}
        </Line>
        <Line n={21}>{"}"}</Line>
        <EmptyLine n={22}>.</EmptyLine>
        <Line n={23}>
          <Violet>export default </Violet>
          <Orange>Dima Smakouz</Orange>;
        </Line>
      </UtilContainer>
    </Wrapper>
  );
};

export default CodeAbout;
