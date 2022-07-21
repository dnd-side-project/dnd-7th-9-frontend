const CLIENT_ID = 'CLIENT_ID';
const REDIRECT_URI = 'REDIRECT_URI';

// Redirect_URI
// 프런트엔드 주소로 넣어주면, GET params로 인가 코드가 넘어오고,
// 백엔드 주소로 넣어주면, GET params로 인가 코드가 넘어온다.

const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;

export default KAKAO_AUTH_URL;
