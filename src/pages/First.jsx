import React from "react";
import Places from "../components/Places";
import styled from "styled-components";

const First = () => {
    return (
        <FirstWrapper>
            <Places/>
        </FirstWrapper>
    )
};

export default First;

const FirstWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60%;
  height: 100%;
  margin: auto;
`;