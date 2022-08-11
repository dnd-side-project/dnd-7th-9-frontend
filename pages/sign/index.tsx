import type { NextPage } from 'next';
import Router from 'next/router';
import { useEffect } from 'react';
import { setCookie } from '@app.modules/cookie/cookie';
import SignScreen from '@app.feature/sign/screen/SignScreen';

const Sign: NextPage = () => {
	useEffect(() => {
		const params = new URL(document.location.toString()).searchParams;
		const isSuccess = params.get('success') === 'success';
		console.log('success');
		if (!isSuccess) return; // TO DO : 로그인 에러 페이지로 이동
		const accessToken = params.get('token') ?? '';
		const refreshToken = params.get('refresh') ?? '';
		localStorage.setItem('TEST_TOKEN', accessToken);
		setCookie('REFRESH_TOKEN', refreshToken, { path: '/', secure: true, sameSite: 'none' });
		Router.push('/');
	}, []);

	return <SignScreen />;
};

export default Sign;
// <div style={{ display: 'none' }}>토큰 GET 용 URL</div>;
