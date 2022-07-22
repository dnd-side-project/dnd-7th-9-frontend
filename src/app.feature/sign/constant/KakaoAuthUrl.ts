// TO DO : 백 프론트 어디로 리다이렉트 할지 정하기
const FRONT_REDIRECT_URI = `${process.env.LOCALHOST_URL}/oauth/kakao`;
const BACK_REDIRECT_URI = `${process.env.API_URL}/login/oauth2/code/kakao`;

// Redirect_URI
// 프런트엔드 주소로 넣어주면, GET params로 인가 코드가 넘어오고,
// 백엔드 주소로 넣어주면, GET params로 인가 코드가 넘어온다.

const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.KAKAO_CLIENT_ID}&redirect_uri=${FRONT_REDIRECT_URI}&response_type=code`;

export default KAKAO_AUTH_URL;
