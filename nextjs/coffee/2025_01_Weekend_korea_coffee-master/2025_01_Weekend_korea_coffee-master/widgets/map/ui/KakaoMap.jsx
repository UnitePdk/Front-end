"use client";
import { useEffect, useRef } from "react";
import Script from "next/script";

const KakaoMap = () => {
  const mapContainerRef = useRef(null);
  const initMap = () => {
    if (!window.kakao) {
      console.error("Kakao Maps API가 로드되지 않았습니다.");
      return;
    }
    const mapContainer = mapContainerRef.current; // 지도를 표시할 div
    const mapOption = {
      center: new window.kakao.maps.LatLng(37.4922, 126.7239), // 지도 중심 좌표
      level: 3,
    };
    new window.kakao.maps.Map(mapContainer, mapOption);
  };

  useEffect(() => {
    console.log(window.kakao && window.kakao.maps);
    if (window.kakao && window.kakao.maps) {
      window.kakao.maps.load(initMap);
    }
  }, []);

  return (
    <>
      <Script
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=e62f8678cb703b1ea5e52f56beb8e7e7&autoload=false`}
        strategy="afterInteractive"
        onLoad={() => {
          if (window.kakao && window.kakao.maps) {
            window.kakao.maps.load(initMap);
          }
        }}
        onError={(e) => {
          console.error("카카오맵 스크립트 로드 실패", e);
        }}
      />
      <div
        id="map"
        ref={mapContainerRef}
        style={{ width: "100%", height: "350px" }}
      ></div>
    </>
  );
};

export default KakaoMap;
