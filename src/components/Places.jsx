import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios"; // Axios 라이브러리 임포트
import { Link } from "react-router-dom";

const Place = () => {
  const [placeList, setPlaceList] = useState([]);

  useEffect(() => {
    // 서버로부터 장소 목록 데이터 가져오기
    fetchDataFromServer()
      .then((data) => {
        setPlaceList(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("데이터를 가져오는 중 오류 발생:", error);
      });
  }, []);

  const fetchDataFromServer = async () => {
    try {
      const response = await axios.get("http://43.201.18.199:8080/tourism-spots");

      const data = response.data;

      return data;
    } catch (error) {
      throw new Error("데이터를 가져오는 데 실패했습니다.");
    }
  };

  return (
    <PlaceWrapper>
      {placeList.map((place, index) => (
        <PlaceItem key={index}>
          <PlaceBox>
            {/* Link 컴포넌트를 사용하여 title을 가지고 두 번째 페이지로 이동 */}
            <Link to={`/Second/${place.id}`}>{place.name}</Link>
          </PlaceBox>
        </PlaceItem>
      ))}
    </PlaceWrapper>
  );
};

export default Place;

const PlaceWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 가로 2개의 열 */
  grid-template-rows: repeat(3, 1fr); /* 세로 3개의 행 */
  gap: 10px; /* 그리드 아이템 간의 간격 설정 */
`;

const PlaceItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0; /* 상자 배경색 설정 */
  padding: 10px;
  border: 1px solid #ccc;
`;

const PlaceBox = styled.div`
  text-align: center;
`;

const PlaceTitle = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
`;

const PlaceDescription = styled.div`
  margin-bottom: 5px;
`;

const PlaceAddress = styled.div`
  margin-bottom: 5px;
`;

const PlaceDistrict = styled.div`
  margin-bottom: 5px;
`;
