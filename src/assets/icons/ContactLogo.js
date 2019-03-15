import React from "react";
import styled from "styled-components";
import { ContactLink } from "../../components/styled/PuzzleLinks";
import { Item } from "../../components/Navigation";

const SVG = styled.svg`
  fill: #edf2f4;
  width: ${({ width }) => width || "30%"};
  height: ${({ height }) => height || "30%"};
  transition: fill 0.2s;

  ${ContactLink}:hover & {
    fill: #16364e;
  }

  ${Item}:hover & {
    fill: ${({ theme }) => theme.lightDarkHover};
  }
`;

const ContactLogo = props => {
  return (
    <SVG
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
      id="Capa_1"
      viewBox="0 0 373.6 373.6"
      {...props}
    >
      <g>
        <g>
          <g>
            <path d="M4.8,154.062c-1.6,0.8-2.4,2.4-3.2,4.8c-0.8,1.6-0.8,2.4-0.8,4l16,8.8l16.8,9.6v-50.4L4.8,154.062z" />
          </g>
        </g>
        <g>
          <g>
            <path d="M37.6,202.062l-21.6-12l-16-8.8v119.2c0,11.2,2.4,21.6,7.2,31.2l13.6-9.6l99.2-73.6L37.6,202.062z" />
          </g>
        </g>
        <g>
          <g>
            <path d="M343.2,334.862l-108.8-80.8l-47.2-32l-47.2,32.8l-108.8,80l-13.6,9.6c11.2,9.6,26.4,15.2,41.6,14.4h256    c15.2,0.8,30.4-4.8,41.6-14.4L343.2,334.862z" />
          </g>
        </g>
        <g>
          <g>
            <path d="M192,16.462c-3.2-2.4-7.2-2.4-10.4,0l-64.8,49.6h140L192,16.462z" />
          </g>
        </g>
        <g>
          <g>
            <path d="M372.8,158.062c-0.8-1.6-1.6-3.2-3.2-4.8l-28.8-22.4v49.6l16.8-9.6l16-8.8C373.6,161.262,373.6,159.662,372.8,158.062z" />
          </g>
        </g>
        <g>
          <g>
            <path d="M357.6,190.862l-104,57.6l99.2,72.8l13.6,9.6c4.8-9.6,7.2-20,7.2-31.2v-118.4L357.6,190.862z" />
          </g>
        </g>
        <g>
          <g>
            <path d="M50.4,82.862v107.2l84.8,48l48-32.8c2.4-1.6,6.4-1.6,9.6,0l47.2,32.8l84.8-48v-107.2H50.4z M87.2,116.462h134.4    c4.8,0,8,3.2,8,8c0,4.8-3.2,8-8,8H87.2c-4.8,0-8-3.2-8-8C79.2,119.662,83.2,116.462,87.2,116.462z M286.4,177.262H87.2    c-4.8,0-8-3.2-8-8c0-4.8,4-8,8-8h199.2c4.8,0,8,3.2,8,8C294.4,174.062,291.2,177.262,286.4,177.262z" />
          </g>
        </g>
      </g>
    </SVG>
  );
};

export default ContactLogo;
