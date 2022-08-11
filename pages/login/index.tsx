import type { NextPage } from 'next';
import Router from 'next/router';
import { useEffect } from 'react';
import { setCookie } from '@app.modules/cookie/cookie';
import RunusIcon from '@assets/brand/runus_icon.svg';

import { KAKAO_AUTH_URL, NAVER_AUTH_URL, GOOGLE_AUTH_URL } from '@app.feature/sign/constant/SocialAuthUrl';

import OauthButton from '@app.feature/sign/component/OauthButton';

const Login: NextPage = () => {
	// const router = useRouter();
	/* useEffect(() => {
		const params = new URL(document.location.toString()).searchParams;
		const isSuccess = params.get('success') === 'success';
		if (!isSuccess) return; // TO DO : 로그인 에러 페이지로 이동
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
			<div className="mt-[124.98px] flex items-center w-full">
				<div className="w-full h-[1px] bg-gray" />
				<span className="text-body2 text-brown font-light whitespace-nowrap mx-[26px]">간편 로그인</span>
				<div className="w-full h-[1px] bg-gray" />
			</div>
			<div className="mt-[18.19px] mb-[62px] flex flex-col w-full space-y-[14px]">
				<OauthButton brand="kakao" loginHandler={() => Router.push(KAKAO_AUTH_URL)} />
				<OauthButton brand="naver" loginHandler={() => Router.push(NAVER_AUTH_URL)} />
				<OauthButton brand="google" loginHandler={() => Router.push(GOOGLE_AUTH_URL)} />
			</div>
		</div>
	);
};

export default Login;
// <div style={{ display: 'none' }}>토큰 GET 용 URL</div>;
