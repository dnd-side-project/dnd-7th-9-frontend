import type { NextPage } from 'next';
import Router from 'next/router';
import { useEffect } from 'react';
import { setCookie } from '@app.modules/cookie/cookie';
import RunusIcon from '@assets/brand/runus_icon.svg';

import LoginButton from '@app.component/button/LoginButton';

const Login: NextPage = () => {
	/* useEffect(() => {
		const params = new URL(document.location.toString()).searchParams;
		const isSuccess = params.get('success') === 'success';

		if (!isSuccess) Router.push('/'); // TO DO : 로그인 에러 페이지로 이동

		const accessToken = params.get('token') ?? '';
		const refreshToken = params.get('refresh') ?? '';

		localStorage.setItem('TEST_TOKEN', accessToken);
		setCookie('REFRESH_TOKEN', refreshToken, { path: '/', secure: true, sameSite: 'none' });

		Router.push('/');
	}, []);
*/
	return (
		<div className="w-full  flex flex-col items-center">
			<div className="mt-[94px]">
				<RunusIcon />
			</div>
			<span className="mt-[39.83px] font-bold text-brown text-title2 text-center">
				스터디원들과
				<br />
				문제를 만들어 볼까요?
			</span>
			<div className="mt-[124.98px] flex items-center">
				<div />
				<span>간편 로그인</span>
				<div />
			</div>
			<div className="mt-[18.19px] mb-[62px] flex flex-col w-full space-y-[14px]">
				<LoginButton brand="kakao" />
				<LoginButton brand="naver" />
				<LoginButton brand="google" />
			</div>
		</div>
	);
};

export default Login;
// <div style={{ display: 'none' }}>토큰 GET 용 URL</div>;
