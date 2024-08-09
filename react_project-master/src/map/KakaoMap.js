/* eslint-disable no-undef */
import React, { useEffect, useCallback, useRef } from 'react';
import styled from 'styled-components';

const MapArea = styled.div`
  width: ${({width}) => width ?? '100%' }; 
  height: ${({height}) => height ?? '38.5rem'};
`;

const KakaoMap = ({width, height, center, zoom, marker, markerImage}) => {
  const mapRef = useRef(null);

  useEffect(() => {
    const mapEl = mapRef.current;
    
    // 지도 가운데 배치 B
    const position = new kakao.maps.LatLng(
      center?.lat ?? 37.557756188912954,
      center?.lng ?? 126.94062742683245,
    );
    const map = new kakao.maps.Map(mapEl, {
      center: position,
      level: zoom || 3,
    });
    // 지도 가운데 배치 D

    // 마커 출력 B
    if (marker) {
      let _markers = marker;
      if (!Array.isArray(marker)) _markers = [marker];

      const markers = _markers.map(m => {
        const {lat, lng, image} = m;
        const options = {
            position: new kakao.maps.LatLng(lat, lng),
          };
        const _marker = new kakao.maps.Marker(options);
        
        // 마커 이미지 처리 B
          const mi = image ? image : markerImage;
          if (mi) {
            const mIcon = new kakao.maps.MarkerImage(mi, new kakao.maps.Size(64, 69), 
              {offset: new kakao.maps.Point(27,69)},
            );

            options.image = mIcon
          }
        // 마커 이미지 처리 D
        
        _marker.setMap(map);

        return _marker;
        
      });

    }

    // 마커 출력 D
  }, [mapRef, center, zoom, marker, markerImage]);

  return <MapArea ref={mapRef} width={width} height={height} />;
};

export default React.memo(KakaoMap);