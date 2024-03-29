import React from 'react';
import RunusIcon from '@assets/brand/runus_icon.svg';

import { KAKAO_AUTH_URL, NAVER_AUTH_URL, GOOGLE_AUTH_URL } from '@app.feature/login/constant/SocialAuthUrl';

import OauthButton from '@app.feature/login/component/OauthButton';
import Router from 'next/router';

export default function LoginScreen() {
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
}
