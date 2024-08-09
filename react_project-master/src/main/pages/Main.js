import React from 'react';
import KakaoMap from '../../map/KakaoMap';

const markers = [
  {
    lat: 37.55772142387766,
    lng: 126.94321920274982,
    info: {content: '<h1>출력</h1>', removable: true},
  },
  {
    lat: 37.55648123246987,
    lng: 126.94519221656536,
    image:
      'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png',
    info: {content: '<h1>출력2</h1>',clickable: true}, // 클릭시 토글 형태로 인포윈도우 노출
  },
  { lat: 37.55783517406359, lng: 126.94560997964005 },
];

const options = {
  //currentLocation: true, // 현재 위치 기반
  address: '경기도 용인시 에버랜드로 199',
  //center: { lat: 33.450701, lng: 126.570667 },
  zoom: 4,
  //marker: markers,
  //markerImage:'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png',
};

const Main = () => {
  return <KakaoMap {...options} />;
};

export default React.memo(Main);
