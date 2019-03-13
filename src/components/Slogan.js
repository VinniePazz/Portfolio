import React from "react";
import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  0% {
    opacity: .6;
  }

	50% {
		opacity: 1;
	}

	100% {
		opacity: 0.6;
	}

`;

const H1 = styled.h1`
  text-transform: uppercase;
  line-height: 1;
  letter-spacing: -0.06em;
  font-size: 4rem;
	font-weight: 400;
	opacity: 0.4;

	@media (max-width: 1200px) {
		font-size: 3rem;
	}
	
	& .lightDark {
		color: ${({theme}) => theme.lightDark}
	}
	& .creamy {
		color: ${({theme}) => theme.creamy}
	}
	& .blueSky {
		color: ${({theme}) => theme.blueSky}
	}
	& .tomato {
		color: ${({theme}) => theme.tomato}
	}
	& .yellow {
		color: ${({theme}) => theme.yellow}
	}
`;

const Smoky = styled(H1)`
	animation: ${rotate} 3s linear infinite;
`

const Slogan = () => {

	const arrayForSpans = ['lightDark', 'creamy', 'blueSky', 'tomato', 'yellow', 'lightDark', 'creamy', 'blueSky', 'tomato', 'yellow', 'lightDark', 'creamy', 'blueSky', 'tomato', 'yellow', 'lightDark', 'creamy', 'blueSky', 'tomato', 'yellow'];

	const renderSpans = (text, num) => {
		return Array.from(text).map((char, i) => <span key={char + i} className={arrayForSpans[i + num]}>{char}</span>);
	};

  return (
    <>
      <H1>{renderSpans("помогите", 0)}</H1>
      <Smoky>{renderSpans("смоки", 1)}</Smoky>
      <H1>{renderSpans("стать веб -", 2)}</H1>
      <H1>{renderSpans("разработчиком", 3)}</H1>
    </>
  );
};

export default Slogan;
