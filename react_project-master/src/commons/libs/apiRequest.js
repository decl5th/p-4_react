import axios from 'axios';
import cookies from 'react-cookies';

export default function apiRequest(url, method = 'GET', data, headers) {
  // url - http://naver.com https://naver.com
  if (!/^http[s]?/i.test(url)) {
    // 외부 url이 아닌 경우 - http://localhost:4000/api/v1/account
    url = process.env.REACT_APP_API_URL + url;
  }

  /**
   * axios 응답 코드가 2xx ~ 3xx만 정상 응답 판단
   *        그외의 응답 코드는 예외 발생
   *        -> 4xx 역시 오류 판단
   *        -> 정상 응답 범위 변경 작업 요구
   */

  const options = {
    method,
    url,
    validateStatus: (status) => status < 500, // 500미만의 응답 코드는 정상 응답
  };

  if (['POST', 'PUT', 'PATCH'].includes(method.toUpperCase()) && data) {
    options.data = data;
  }

  const token = cookies.load('token');
  if (token && token.trim()) {
    headers = headers ?? {}; // headers 없을 때는 비어있는 객체로 기본값 설정
    headers.Authorization = `Bearer ${token}`;
  }

  if (headers) options.headers = headers; // headers는 옵션쪽에 있을 때만 추가

  return axios(options);
}
