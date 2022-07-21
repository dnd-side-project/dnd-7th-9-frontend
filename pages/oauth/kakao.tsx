import type { NextPage } from 'next';
import { useEffect } from 'react';
import axios from 'axios';
import Router from 'next/router';

interface IResponseSignIn {
	token: string;
}

const OAuthKaKaoRedirect: NextPage = () => {
	useEffect(() => {
		const signin = async () => {
			try {
				// TO DO : Back API 연동
				const { data, status } = await axios.post<IResponseSignIn>('BACK-API-URL', {
					headers: {
						// 'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
					},
				});

				if (status !== 200) throw new Error('Error. 로그인 실패.');

				// TO DO : 로직 작성하기 ex) 토큰을 받고 홈으로 가기
				localStorage.setItem('TEST_TOKEN', data.token);
				Router.push('/');
			} catch (error) {
				// TO DO : 에러시 화면 어떻게 보여줄까
				// TO DO : 에러 처리 등을 담고 있는 API axios 공통 로직 작성
				console.error(error);
			}
		};

		signin();
	}, []);

	return <div>카카오 소셜 로그인 REDIRECT 용 페이지</div>;
};

export default OAuthKaKaoRedirect;
