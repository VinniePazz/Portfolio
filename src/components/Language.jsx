import React, { Component } from "react";
import styled from "styled-components";
import { above, below } from "../styled-components";

const LanguageWrapper = styled.div`
  cursor: pointer;
  position: relative;
  display: flex;

  ${above.medium`
  &::after {
    position: absolute;
    top: -30px;
    left: -70%;
    content: "change language";
    padding: 0.2rem 0.4rem;
    font-size: 0.6rem;
    opacity: ${({ hover }) => (hover ? "1" : "0")};
  }
  `};
`;

const Dropdown = styled.ul`
  position: absolute;
  background: white;
  list-style: none;
  padding: 0.5rem 0.7rem;
  top: 130%;
  right: 50%;
  text-transform: uppercase;
  z-index: 999;

  li {
    color: #333333d4;
  }

  & li:hover {
    color: red;
  }

  li:first-child {
    margin-bottom: 0.3rem;
  }

  ${below.large`
    padding: 0;

    li {
    padding: 1rem 2rem .5rem 2rem;
    margin-bottom: 0;
    font-weight: 600;font-size: 1.2em;
    border-bottom: 1px solid #333333d4;
    }
  `}
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: transparent;
  cursor: default;
`;

const SVG = styled.svg`
  fill: #edf2f4;
  position: relative;
  width: ${({ width }) => width || "20px"};
  height: ${({ height }) => height || "20px"};
  transition: fill 0.2s;
  &:hover {
    fill: ${({ activeSection }) =>
      activeSection === 2 ? "#1f8a8a" : "#e76f51b8"};
  }
`;

class Language extends Component {
  state = {
    open: false,
    hover: false
  };

  handleDropdown = () => {
    this.setState(prev => ({ open: !prev.open }));
  };

  handlehoverOn = () => {
    this.setState({ hover: true });
  };
  handlehoverOff = () => {
    this.setState({ hover: false });
  };

  render() {
    return (
      <LanguageWrapper onClick={this.handleDropdown} hover={this.state.hover}>
        {this.state.open ? (
          <>
            <Dropdown>
              <li onClick={() => this.props.changeLanguage("en")}>en</li>
              <li onClick={() => this.props.changeLanguage("ru")}>ru</li>
            </Dropdown>
            <Overlay />
          </>
        ) : null}
        <SVG
          xmlns="http://www.w3.org/2000/svg"
          id="Capa_1"
          viewBox="0 0 510 510"
          onMouseOver={this.handlehoverOn}
          onMouseOut={this.handlehoverOff}
          {...this.props}
        >
          <path
            d="M255,0C114.75,0,0,114.75,0,255s114.75,255,255,255s255-114.75,255-255S395.25,0,255,0z M430.95,153H357 c-7.65-33.15-20.4-61.2-35.7-91.8C367.2,79.05,408,109.65,430.95,153z M255,51c20.4,30.6,38.25,63.75,48.45,102h-96.9 C216.75,117.3,234.6,81.6,255,51z M58.65,306c-5.1-15.3-7.65-33.15-7.65-51c0-17.85,2.55-35.7,7.65-51h86.7 c-2.55,17.85-2.55,33.15-2.55,51c0,17.85,2.55,33.15,2.55,51H58.65z M79.05,357H153c7.65,33.15,20.4,61.2,35.7,91.8 C142.8,430.95,102,400.35,79.05,357z M153,153H79.05c25.5-43.35,63.75-73.95,109.65-91.8C173.4,91.8,160.65,119.85,153,153z M255,459c-20.4-30.6-38.25-63.75-48.45-102h96.9C293.25,392.7,275.4,428.4,255,459z M313.65,306h-117.3 c-2.55-17.85-5.1-33.15-5.1-51c0-17.85,2.55-33.15,5.1-51H316.2c2.55,17.85,5.1,33.15,5.1,51 C321.3,272.85,316.2,288.15,313.65,306z M321.3,448.8c15.3-28.05,28.05-58.649,35.7-91.8h73.95 C408,400.35,367.2,430.95,321.3,448.8z M367.2,306c2.55-17.85,2.55-33.15,2.55-51c0-17.85-2.55-33.15-2.55-51h86.7 c5.1,15.3,7.649,33.15,7.649,51c0,17.85-2.55,35.7-7.649,51H367.2z"
            id="language"
          />
        </SVG>
      </LanguageWrapper>
    );
  }
}

export default Language;
