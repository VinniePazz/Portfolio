import { css } from "styled-components";

const sizes = {
  small: 450,
  medium: 860,
  large: 1200,
  largeHeight: 1000
};

export const above = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

export const below = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

export const large = (...args) => css`
  @media (min-width: 1201px) and (min-height: 1000px) {
    ${css(...args)}
  }
`;
