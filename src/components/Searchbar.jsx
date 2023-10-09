import React, { useState } from "react";
import styled from "styled-components";

const Searchbar = () => {
    const [searchText, setSearchText] = useState(""); // 상태를 통해 입력 값을 관리

    const handleSearch = () => {
        // 검색 버튼 클릭 시 검색 기능을 구현할 함수
        // searchText 상태를 사용하여 검색어를 가져올 수 있습니다.
        console.log("검색어:", searchText);
        // 여기에서 실제 검색 로직을 구현하세요.
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