import React from "react";
import styled from "styled-components";

import Layout from "@common/Layout";
import Navbar from "@common/Navbar";

const DonorPage = () => {
  return (
    <Layout>
      <Navbar />
      <Wrapper>
        <div style={{ color: `purple` }}>
          <h1>Hello Gatsby!</h1>
          <p>What a world.</p>
        </div>
      </Wrapper>
    </Layout>
  );
};

const Wrapper = styled.header`
  padding-top: 96px;

  @media (max-width: ${(props) => props.theme.screen.md}) {
    padding-top: 128px;
  }
`;

export default DonorPage;
