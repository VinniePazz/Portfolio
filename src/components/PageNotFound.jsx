import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  * {
    margin: 1rem;
  }

  h1 {
    font-size: 1.8rem;
    color: ${({ theme }) => theme.pallette.mainDarker};
  }

  p {
    font-size: 1.2rem;
  }

  a {
    color: ${({ theme }) => theme.pallette.secondaryDarker};
    text-decoration: underline;
  }
`;

const PageNotFound = () => {
  return (
    <Wrapper>
      <h1>NOT FOUND</h1>
      <p>
        You probably hit a page that doesn&#39;t exist...{" "}
        <Link to="/">home page</Link>.
      </p>
    </Wrapper>
  );
};

export default PageNotFound;
