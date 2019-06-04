import styled from "styled-components";
import { above, below } from "./media";

export const SectionContainer = styled.div`
  min-height: 100vh;
  display: flex;

  ${below.large`
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `}

  ${below.medium`
    min-height: 0;
    margin: 10rem 0;
  `}

  @media (max-height: 600px) {
    min-height: 0;
    margin: 5rem 0;
  }
`;

export const InfoBlock = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${({ section }) =>
    section === "vinyl" ? "flex-start" : "flex-end"};
  ${({ section, theme }) =>
    section === "vinyl" ? "padding-right: 2em" : "padding-left: 2em"};

  ${below.large`
    order: -1;
    width: 100%;
    margin-bottom: 2rem;
    align-items: center;
    padding: 0;
  `}
`;

export const Heading = styled.h2`
  font-size: 3.5rem;
  letter-spacing: 3px;
  color: ${({ section, theme }) =>
    section === "vinyl"
      ? `${theme.pallette.main}`
      : `${theme.pallette.secondary}`};
`;

export const MediaBlock = styled.div`
  width: 60%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${below.large`
    width: 70%;
  `}

  ${below.small`
    width: 100%;
  `}
`;

export const VideoWrapper = styled.div`
  height: auto;
  position: relative;
`;

export const PlayButton = styled.div`
  position: absolute;
  z-index: 100;
  cursor: pointer;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 50px 0 50px 100px;
  border-color: transparent transparent transparent
    ${({ color, theme }) =>
      color === "tomato"
        ? `${theme.pallette.main}`
        : `${theme.pallette.secondary}`};

  &:hover {
    border-color: transparent transparent transparent
      ${({ color, theme }) => (color === "tomato" ? `#fa9a81` : `#62d4d4`)};
  }
`;

export const Description = styled.p`
  margin-top: 1rem;
`;

export const Technologies = styled.p`
  margin-top: 1rem;
  color: ${({ section, theme }) =>
    section === "vinyl"
      ? `${theme.pallette.mainDarker}`
      : `${theme.pallette.secondaryDarker}`};
`;

export const Language = styled.p`
  margin-top: 1rem;
`;

export const ActionBar = styled.div`
  margin-top: 2rem;
`;


