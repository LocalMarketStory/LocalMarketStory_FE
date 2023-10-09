import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Place = () => {
  const { placeID } = useParams();
  const [placeInfo, setPlaceInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showDescription, setShowDescription] = useState(false);

  useEffect(() => {
    // 백엔드 API에 placeID를 포함한 요청을 보냅니다.
    axios
      .get(`http://43.201.18.199:8080/tourism-spots/${placeID}`)
      .then((response) => {
        setPlaceInfo(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("데이터를 가져오는 중 오류 발생:", error);
        setLoading(false);
      });
  }, [placeID]);

  if (loading) {
    return <div>Loading...</div>;
  }

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <PlaceWrapper>
      <h2>{placeInfo.name}</h2>
      <p>주소: {placeInfo.address}</p>
      {/* 한 줄만 보여주는 설명 */}
      <p>{showDescription ? placeInfo.description : placeInfo.description.slice(0, 100) + "..."}</p>
      {/* 더보기 버튼 */}
      <button onClick={toggleDescription}>
        {showDescription ? "접기" : "더 보기"}
      </button>
      {/* 이미지를 매핑하여 렌더링 */}
      <ImageContainer>
        <ImageList>
          {placeInfo.imgUrls.map((imgUrl, index) => (
            <ImageItem key={index}>
              <img
                src={imgUrl}
                alt={`Image ${index + 1}`}
                style={{ width: "40%", height: "auto" }}
              />
            </ImageItem>
          ))}
        </ImageList>
      </ImageContainer>
    </PlaceWrapper>
  );
};

export default Place;

const PlaceWrapper = styled.div`
  /* 스타일을 추가하세요. */
`;

const ImageContainer = styled.div`
  overflow-x: auto; /* 가로 스크롤을 활성화합니다. */
`;

const ImageList = styled.div`
  display: flex;
  gap: 10px; /* 사진과 사진 사이의 간격을 조절합니다. */
`;

const ImageItem = styled.div`
  max-width: 50%;
  height: auto;
  flex: 0 0 auto;
  margin-right: 0px; /* 오른쪽 여백을 조절합니다. */
`;
