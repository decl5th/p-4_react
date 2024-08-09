const KakaoSdk = () => {
    const sdk = document.querySelector('.kakao-sdk');
    if (!sdk) {
      const head = document.head;
      const script = document.createElement('script');
      script.src =
        '//dapi.kakao.com/v2/maps/sdk.js?appkey=94b6629acf7d61fb7ed0478f719c70ae&libraries=services';
  
      script.className = 'kakao-sdk';
      head.prepend(script);
    }
  };
  
  export default KakaoSdk;