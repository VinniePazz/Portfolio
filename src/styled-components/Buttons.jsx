import styled from "styled-components";

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