import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { setCookie } from '@app.modules/cookie/cookie';
import LoginScreen from '@app.feature/login/screen/LoginScreen';

const Login: NextPage = () => {
	const router = useRouter();
	useEffect(() => {
		const params = new URL(document.location.toString()).searchParams;
		const isSuccess = params.get('success');
		if (!isSuccess) return; // TO DO : 로그인 에러 페이지로 이동
		const accessToken = params.get('token') ?? '';
		const refreshToken = params.get('refresh') ?? '';
		if (!accessToken.trim() || !refreshToken.trim()) return; // TO DO : 에러 표시
		localStorage.setItem('TEST_TOKEN', accessToken);
		setCookie('REFRESH_TOKEN', refreshToken, { path: '/', secure: true, sameSite: 'none' });

		router.push('/');
	}, [router]);

	return <LoginScreen />;
};

export default Login;
// <div style={{ display: 'none' }}>토큰 GET 용 URL</div>;
