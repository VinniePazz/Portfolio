import React from "react";
import styled from "styled-components";

import Header from "./Header";
import Footer from "./Footer";

const Container = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 1em;
`;

const Layout = WrappedComponent => props => {
  return (
    <>
      <Header />
      <Container>
        <WrappedComponent {...props} />
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
