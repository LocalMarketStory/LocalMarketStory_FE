import Navbar from "../components/Navbar";
import Searchbar from "../components/Searchbar";
import styled from "styled-components";
import React from "react";

const Layout = () => {

    return (
        <LayoutWrapper>
            <Searchbar/>
            <Navbar />
        </LayoutWrapper>
    )
};

export default Layout;

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;

  width: 100%;
`;