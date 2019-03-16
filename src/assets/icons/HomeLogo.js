import React from "react";
import styled from "styled-components";
import { HomeLink } from '../../components/Navigation'

const SVG = styled.svg`
  fill: #edf2f4;
  width: ${({ width }) => width || "50%"};
  height: ${({ height }) => height || "50%"};
  transition: fill 0.2s;

  ${HomeLink}:hover & {
    fill: ${({ theme }) => theme.lightDarkHover};
  }
`;

const AboutLogo = props => {
  return (
    <SVG
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      id="Capa_1"
      x="0px"
      y="0px"
      viewBox="0 0 306.773 306.773"
			{...props}
    >
      <path
        d="M302.93,149.794c5.561-6.116,5.024-15.49-1.199-20.932L164.63,8.898   c-6.223-5.442-16.2-5.328-22.292,0.257L4.771,135.258c-6.092,5.585-6.391,14.947-0.662,20.902l3.449,3.592   c5.722,5.955,14.971,6.665,20.645,1.581l10.281-9.207v134.792c0,8.27,6.701,14.965,14.965,14.965h53.624   c8.264,0,14.965-6.695,14.965-14.965v-94.3h68.398v94.3c-0.119,8.264,5.794,14.959,14.058,14.959h56.828   c8.264,0,14.965-6.695,14.965-14.965V154.024c0,0,2.84,2.488,6.343,5.567c3.497,3.073,10.842,0.609,16.403-5.513L302.93,149.794z"
      />
    </SVG>
  );
};

export default AboutLogo;