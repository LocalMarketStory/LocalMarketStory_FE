import Navbar from "../components/Navbar";
import Searchbar from "../components/Searchbar";
import styled from "styled-components";
import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {

    return (
        <LayoutWrapper>
            <Navbar />
            <Searchbar/>
            <Outlet/>
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