import type { NextPage } from 'next';
import Router from 'next/router';
import { useEffect } from 'react';

const Login: NextPage = () => {
	useEffect(() => {
		const params = new URL(document.location.toString()).searchParams;
		const token: string = params.get('token') || ''; // 토큰

		if (token === '백이랑 정한 에러 메시지') Router.push('/'); // 로그인 에러 페이지로 이동

		localStorage.setItem('TEST_TOKEN', token);
		Router.push('/');
	}, []);

	return <div style={{ display: 'none' }}>토큰 GET 용 URL</div>;
};

export default Login;
