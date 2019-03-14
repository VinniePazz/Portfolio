import styled from 'styled-components'
import posed from 'react-pose'

const PuzzleLink = styled.div`
  flex-basis: 50%;
  border: 3px solid ${({theme}) => theme.dark};
  position: relative;
	text-decoration: none;
	transition: all .2s;

  & h3 {
    position: absolute;
    font-size: 2rem;
		font-weight: 400;
		transition: all 1s linear;
  }

  & svg {
    position: absolute;
  }

  /* &::before {
    content: "";
    position: absolute;
    z-index: 1;
	} */
`;

export const SkillsLink = styled(PuzzleLink)`
  background: ${({ theme }) => theme.tomato};
  border-top-left-radius: 100%;

  & svg {
    bottom: 40%;
    right: 40%;
  }

  & h3 {
    left: -35%;
    top: 20%;
		color: ${({ theme }) => theme.tomato};
		opacity: ${(props) => props.opacity}
  }

  /* &::before {
    width: 30px;
    height: 35px;
    right: -30px;
    bottom: 62%;
    border-top: 5px solid ${({ theme }) => theme.dark};
    border-bottom: 5px solid ${({ theme }) => theme.dark};
    border-right: 5px solid ${({ theme }) => theme.dark};
    border-top-right-radius: 100%;
    border-bottom-right-radius: 100%;
		background: ${({ theme }) => theme.tomato};
		z-index: 100;
	} */
	
	:hover {
		transform: translate(-10px, -10px);
	}

	:active {
		transform: translate(-5px, -5px);
	}
`;

export const AboutLink = styled(PuzzleLink)`
  background: ${({ theme }) => theme.lightDark};
  border-top-right-radius: 100%;

  & svg {
    bottom: 40%;
    right: 40%;
  }

  & h3 {
    right: -35%;
		top: 20%;
		color: ${({ theme }) => theme.lightDark};
		opacity: ${(props) => props.opacity}
  }

  /* &::before {
    width: 35px;
    height: 30px;
    left: 62%;
    bottom: -31px;
    border-bottom: 5px solid ${({ theme }) => theme.dark};
    border-right: 5px solid ${({ theme }) => theme.dark};
    border-left: 5px solid ${({ theme }) => theme.dark};
    border-bottom-left-radius: 100%;
    border-bottom-right-radius: 100%;
    background: ${({ theme }) => theme.lightDark};
	} */
	
	:hover {
		transform: translate(10px, -10px);
	}

	:active {
		transform: translate(5px, -5px);
	}
`;



export const PortfolioLink = styled(PuzzleLink)`
  background: ${({ theme }) => theme.yellow};
	border-bottom-left-radius: 100%;

  & svg {
    bottom: 40%;
    right: 40%;
  }

  & h3 {
    left: -45%;
    bottom: 20%;
		color: ${({ theme }) => theme.yellow};
		opacity: ${(props) => props.opacity}
  }

  /* &::before {
    width: 35px;
    height: 30px;
    right: 62%;
    top: -30px;
    border-left: 5px solid ${({ theme }) => theme.dark};
    border-right: 5px solid ${({ theme }) => theme.dark};
    border-top: 5px solid ${({ theme }) => theme.dark};
    border-top-left-radius: 100%;
    border-top-right-radius: 100%;
    background: ${({ theme }) => theme.yellow};
	} */

	:hover {
		transform: translate(-10px, 10px);
	}

	:active {
		transform: translate(-5px, 5px);
	}
`;

export const ContactLink = styled(PuzzleLink)`
  background: ${({ theme }) => theme.blueSky};
  border-bottom-right-radius: 100%;

  & svg {
    bottom: 40%;
    left: 36%;
  }

  & h3 {
    right: -45%;
    bottom: 20%;
		color: ${({ theme }) => theme.blueSky};
		opacity: ${(props) => props.opacity}
  }

  /* &::before {
    width: 30px;
    height: 35px;
    left: -31px;
    top: 62%;
    border-left: 5px solid ${({ theme }) => theme.dark};
    border-top: 5px solid ${({ theme }) => theme.dark};
    border-bottom: 5px solid ${({ theme }) => theme.dark};
    border-top-left-radius: 100%;
    border-bottom-left-radius: 100%;
    background: ${({ theme }) => theme.blueSky};
	} */

	:hover {
		transform: translate(10px, 10px);
	}

	:active {
		transform: translate(5px, 5px);
	}
`;