import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Second = () => {
  const { placeID } = useParams();
  const [placeInfo, setPlaceInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`http://43.201.18.199:8080/tourism-spots/${placeID}`)
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

  return (
    <div>
      <h2>{placeInfo.name}</h2>
      <p>주소: {placeInfo.address}</p>
      <p>설명: {placeInfo.description}</p>
    </div>
  );
};

export default Second;
