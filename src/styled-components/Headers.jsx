import styled from "styled-components";

export const MainLogo = styled.div`
  height: 25px;
  width: 40px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transform: translateX(25%);

  div {
    height: 50%;
    transition: transform 0.3s ease;
  }

  div:first-child {
    background: ${({ theme }) => theme.pallette.secondary};
    transform: translateX(-25%);
  }
  div:last-child {
    background: ${({ theme }) => theme.pallette.main};
  }

  &:hover {
    div:first-child {
      transform: translateX(0%);
    }
    div:last-child {
      transform: translateX(-25%);
    }
  }
`;
