import styled from 'styled-components'

const PuzzleLink = styled.div`
  flex-basis: 50%;
  border: 2px solid ${({ theme }) => theme.dark};
  position: relative;
  text-decoration: none;

  & h3 {
    position: absolute;
    font-size: 2rem;
    opacity: 0.7;
    font-weight: 400;
  }

  & svg {
    position: absolute;
  }

  &::before {
    content: "";
    position: absolute;
    z-index: 1;
  }
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
  }

  &::before {
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
  }

  &::before {
    width: 35px;
    height: 30px;
    left: 62%;
    bottom: -30px;
    border-bottom: 5px solid ${({ theme }) => theme.dark};
    border-right: 5px solid ${({ theme }) => theme.dark};
    border-left: 5px solid ${({ theme }) => theme.dark};
    border-bottom-left-radius: 100%;
    border-bottom-right-radius: 100%;
    background: ${({ theme }) => theme.lightDark};
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
  }

  &::before {
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
  }

  &::before {
    width: 30px;
    height: 35px;
    left: -30px;
    top: 62%;
    border-left: 5px solid ${({ theme }) => theme.dark};
    border-top: 5px solid ${({ theme }) => theme.dark};
    border-bottom: 5px solid ${({ theme }) => theme.dark};
    border-top-left-radius: 100%;
    border-bottom-left-radius: 100%;
    background: ${({ theme }) => theme.blueSky};
  }
`;