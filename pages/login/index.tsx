import type { NextPage } from 'next';
import Router from 'next/router';
import { useEffect } from 'react';

const Login: NextPage = () => {
	useEffect(() => {
		const params = new URL(document.location.toString()).searchParams;
		const isSuccess = params.get('success') === 'success';

		if (!isSuccess) Router.push('/'); // TO DO : 로그인 에러 페이지로 이동

		const accessToken = params.get('token') || '';
		const refreshToken = params.get('refresh') || ''; // TO DO : 리프레시 토큰 쿠키 저장

		localStorage.setItem('TEST_TOKEN', accessToken);
		Router.push('/');
	}, []);

	return <div style={{ display: 'none' }}>토큰 GET 용 URL</div>;
};

export default Login;
