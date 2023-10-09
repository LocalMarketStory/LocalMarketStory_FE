import React, { useState } from "react";
import styled from "styled-components";

const Searchbar = () => {
    const [searchText, setSearchText] = useState("");

    const handleSearch = () => {
        console.log("검색어:", searchText);
    };

    return (
        <SearchbarWrapper>
            <SearchInput
                type="text"
                placeholder="검색어를 입력하세요"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
            />
            <SearchButton onClick={handleSearch}>검색</SearchButton>
        </SearchbarWrapper>
    );
};

export default Searchbar;

const SearchbarWrapper = styled.div`
    display: flex;
    gap: 1rem;
`;

const SearchInput = styled.input`
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    outline: none;
`;

const SearchButton = styled.button`
    padding: 0.5rem 1rem;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
`;