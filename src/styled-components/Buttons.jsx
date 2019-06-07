import styled, { keyframes } from "styled-components";
import { above, below } from "./media";

//=============keyFrames==================

const animate1 = keyframes`
  0% {
    transform: translateX(-100%)
  }
  100% {
    transform: translateX(100%)
  }
`;

const animate2 = keyframes`
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(100%);
  }
`;

const animate3 = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const animate4 = keyframes`
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(-100%);
  }
`;

// =======================================

export const MainButton = styled.button`
  border: none;
  background-color: transparent;
  align-self: center;
  padding: 1.5em 3em;
  margin-top: 5rem;
  font-family: Poppins, sans-serif;
  font-size: 0.8rem;
  letter-spacing: 2px;
  color: #d8dbe2;
  cursor: pointer;
  outline: none;
  text-transform: uppercase;
  font-weight: 700;
  position: relative;
  transition: color 0.3s ease-in-out;
  overflow: hidden;

  & span:nth-child(odd) {
    position: absolute;
    display: block;
    width: 100%;
    height: 2px;
    background: linear-gradient(
      to right,
      #1d1d2b,
      ${({ section, theme }) => `${theme.pallette.secondary}`},
      #1d1d2b
    );
    transition: 0.3s ease-in-out;
  }

  & span:nth-child(1) {
    top: 0;
    left: 50%;
  }
  & span:nth-child(3) {
    bottom: 0;
    right: 50%;
  }

  & span:nth-child(even) {
    position: absolute;
    display: block;
    width: 2px;

    height: 100%;
    background: linear-gradient(
      to bottom,
      #1d1d2b,
      ${({ section, theme }) => `${theme.pallette.secondary}`},
      #1d1d2b
    );
    transition: all 0.3s ease-in-out;
  }

  & span:nth-child(2) {
    top: 50%;
    left: 0;
  }
  & span:nth-child(4) {
    bottom: 50%;
    right: 0;
  }

  ${above.medium`
    &:hover {
    & span:nth-child(even) {
      background: linear-gradient(
        to bottom,
        #1d1d2b,
        ${({ section, theme }) => `${theme.pallette.main}`},
        #1d1d2b
      );
    }

    & span:nth-child(odd) {
      background: linear-gradient(
        to right,
        #1d1d2b,
        ${({ section, theme }) => `${theme.pallette.main}`},
        #1d1d2b
      );
    }
  }

    &:hover span:nth-child(1) {
      top: 0;
      left: -50%;
    }
    &:hover span:nth-child(3) {
      bottom: 0;
      right: -50%;
    }
    &:hover span:nth-child(2) {
      top: -50%;
      left: 0;
    }
    &:hover span:nth-child(4) {
      bottom: -50%;
      right: 0;
    }
  `}
`;

const Button = styled.a`
  display: inline-block;
  color: #fafafa;
  padding: 1em 2em;
  text-transform: uppercase;
  overflow: hidden;
  position: relative;
  letter-spacing: 1px;
  box-shadow: 0 2px 50px rgba(0, 0, 0, 0.3);
`;

export const VisitLink = styled(Button)`
  ${below.medium`
    background-color: ${({ section, theme }) =>
      section === "vinyl"
        ? `${theme.pallette.main}`
        : `${theme.pallette.secondary}`};
    border: 1px solid ${({ section, theme }) =>
      section === "vinyl"
        ? `${theme.pallette.main}`
        : `${theme.pallette.secondary}`};
`};

  ${above.medium`

  background: ${({ section }) =>
    section === "vinyl" ? `rgba(144, 86, 86, 0.2)` : `rgba(58, 171, 171, 0.2)`};

  & span {
    background-color: ${({ section, theme }) =>
      section === "vinyl"
        ? `${theme.pallette.main}`
        : `${theme.pallette.secondary}`};
  }

  & span:nth-child(1) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(
      to right,
      #1d1d2b,
      ${({ section, theme }) =>
        section === "vinyl"
          ? `${theme.pallette.main}`
          : `${theme.pallette.secondary}`},
      #1d1d2b
    );
    animation: ${animate1} 2s linear infinite paused;
  }

  & span:nth-child(2) {
    position: absolute;
    top: 0;
    right: 0;
    width: 1px;
    height: 100%;
    background: linear-gradient(
      to bottom,
      #1d1d2b,
      ${({ section, theme }) =>
        section === "vinyl"
          ? `${theme.pallette.main}`
          : `${theme.pallette.secondary}`},
      #1d1d2b
    );
    animation: ${animate2} 2s linear infinite paused;
  }

  & span:nth-child(3) {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(
      to left,
      #1d1d2b,
      ${({ section, theme }) =>
        section === "vinyl"
          ? `${theme.pallette.main}`
          : `${theme.pallette.secondary}`},
      #1d1d2b
    );
    animation: ${animate3} 2s linear infinite paused;
  }

  & span:nth-child(4) {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 1px;
    height: 100%;
    background: linear-gradient(
      to top,
      #1d1d2b,
      ${({ section, theme }) =>
        section === "vinyl"
          ? `${theme.pallette.main}`
          : `${theme.pallette.secondary}`},
      #1d1d2b
    );
    animation: ${animate4} 2s linear infinite paused;
  }

  &:hover span:nth-child(1),
  &:hover span:nth-child(2),
  &:hover span:nth-child(3),
  &:hover span:nth-child(4) {
    animation-play-state: running;
  }

  &:active span:nth-child(1),
  &:active span:nth-child(2),
  &:active span:nth-child(3),
  &:active span:nth-child(4) {
    animation-play-state: paused;
  }

  &:hover {
    color: ${({ section, theme }) =>
      section === "vinyl"
        ? `${theme.pallette.main}`
        : `${theme.pallette.secondary}`};
  }

  &:active {
    color: #fafafa;
  }
`}
`;

export const GithubLink = styled(Button)`
  margin-left: 1.5rem;

  ${below.medium`
    background-color: none;
    border: 1px solid ${({ section, theme }) =>
      section === "vinyl"
        ? `${theme.pallette.main}`
        : `${theme.pallette.secondary}`};
  `};

  ${above.medium`
span {
    position: absolute;
    display: block;
    background-color: ${({ section, theme }) =>
      section === "vinyl"
        ? `${theme.pallette.main}`
        : `${theme.pallette.secondary}`};
  }

  & span:nth-child(1) {
    top: 0;
    left: 0;
    width: 2px;
    height: 100%;
    transform: translateY(0);
    background: linear-gradient(
      to bottom,
      #1d1d2b,
      ${({ section, theme }) =>
        section === "vinyl"
          ? `${theme.pallette.main}`
          : `${theme.pallette.secondary}`},
      #1d1d2b
    );
  }

  & span:nth-child(2) {
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    transform: translateX(-100%);
    background: linear-gradient(
      to right,
      #1d1d2b,
      ${({ section, theme }) =>
        section === "vinyl"
          ? `${theme.pallette.main}`
          : `${theme.pallette.secondary}`},
      #1d1d2b
    );
  }

  & span:nth-child(3) {
    top: 0;
    right: 0;
    width: 2px;
    height: 100%;
    transform: translateY(-100%);
    background: linear-gradient(
      to bottom,
      #1d1d2b,
      ${({ section, theme }) =>
        section === "vinyl"
          ? `${theme.pallette.main}`
          : `${theme.pallette.secondary}`},
      #1d1d2b
    );
  }

  & span:nth-child(4) {
    top: 0;
    right: 0;
    width: 2px;
    height: 100%;
    transform: translateY(0);
    background: linear-gradient(
      to bottom,
      #1d1d2b,
      ${({ section, theme }) =>
        section === "vinyl"
          ? `${theme.pallette.main}`
          : `${theme.pallette.secondary}`},
      #1d1d2b
    );
  }
  & span:nth-child(5) {
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    transform: translateX(100%);
    background: linear-gradient(
      to right,
      #1d1d2b,
      ${({ section, theme }) =>
        section === "vinyl"
          ? `${theme.pallette.main}`
          : `${theme.pallette.secondary}`},
      #1d1d2b
    );
  }
  & span:nth-child(6) {
    top: 0;
    left: 0;
    width: 2px;
    height: 100%;
    transform: translateY(100%);
    background: linear-gradient(
      to bottom,
      #1d1d2b,
      ${({ section, theme }) =>
        section === "vinyl"
          ? `${theme.pallette.main}`
          : `${theme.pallette.secondary}`},
      #1d1d2b
    );
  }

  &:hover {
    transition: color 1s;
    color:  ${({ section, theme }) =>
      section === "vinyl"
        ? `${theme.pallette.main}`
        : `${theme.pallette.secondary}`};
          
    & span:nth-child(1) {
      transition: 0.5s;
      transform: translateY(-100%);
    }
    & span:nth-child(2) {
      transform: translateX(100%);
      transition: 0.75s;
      transition-delay: 0.25s;
    }
    & span:nth-child(3) {
      transform: translateY(0);
      transition: 0.5s;
      transition-delay: 0.5s;
    }
    & span:nth-child(4) {
      transform: translateY(100%);
      transition: 0.5s;
    }
    & span:nth-child(5) {
      transform: translateX(-100%);
      transition: 0.75s;
      transition-delay: 0.25s;
    }
    & span:nth-child(6) {
      transform: translateY(0);
      transition: 0.5s;
      transition-delay: 0.5s;
    }
  }

  &:active {
    color: #fafafa;
  }
  `}
`;
