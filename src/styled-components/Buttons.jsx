import styled from "styled-components";
import { above, below } from "./media";

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
    background: #3aabab;
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
    background: #3aabab;
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

  &:hover {
    span {
      background: #e76f51b8;
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
`;

const Button = styled.a`
  display: inline-block;
  color: #fafafa;
  padding: 0.8em 2em;
  text-transform: uppercase;
  border-radius: 2px;
  transition: all 0.2s;

  &:hover {
    transform: scale(1.01);
  }

  &:active {
    transform: scale(0.99);
  }
`;

export const VisitLink = styled(Button)`
  border: 2px solid
    ${({ section, theme }) =>
      section === "vinyl"
        ? `${theme.pallette.main}`
        : `${theme.pallette.secondary}`};
  background: ${({ section, theme }) =>
    section === "vinyl"
      ? `${theme.pallette.main}`
      : `${theme.pallette.secondary}`};

  ${above.large`
    &:hover {
    border: 2px solid
      ${({ section, theme }) =>
        section === "vinyl"
          ? `${theme.pallette.mainDarker}`
          : `${theme.pallette.secondaryDarker}`};
    background: ${({ section, theme }) =>
      section === "vinyl"
        ? `${theme.pallette.mainDarker}`
        : `${theme.pallette.secondaryDarker}`};
    box-shadow: 0 0 5px 5px #1a1a23;
  }

  &:active {
    box-shadow: 0 0 1px #1a1a23;

    border: 2px solid
      ${({ section, theme }) =>
        section === "vinyl"
          ? `${theme.pallette.main}`
          : `${theme.pallette.secondary}`};
    background: ${({ section, theme }) =>
      section === "vinyl"
        ? `${theme.pallette.main}`
        : `${theme.pallette.secondary}`};
    box-shadow: 0 0 0px 0px #1a1a23;
  }
  `}
`;

export const GithubLink = styled(Button)`
  border: 2px solid
    ${({ section, theme }) =>
      section === "vinyl"
        ? `${theme.pallette.mainDarker}`
        : `${theme.pallette.secondaryDarker}`};
  margin-left: 1.5em;
  color: #fafafa;

  &:hover {
    border: 2px solid
      ${({ section, theme }) =>
        section === "vinyl"
          ? `${theme.pallette.main}`
          : `${theme.pallette.secondary}`};
    background-color: ${({ section, theme }) =>
      section === "vinyl"
        ? `${theme.pallette.main}`
        : `${theme.pallette.secondary}`};
  }
`;