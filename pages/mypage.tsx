import OauthButton from '@app.feature/sign/component/OauthButton';
import { GOOGLE_AUTH_URL, KAKAO_AUTH_URL, NAVER_AUTH_URL } from '@app.feature/sign/constant/SocialAuthUrl';
import { useRouter } from 'next/router';
import React from 'react';

export default function mypage() {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const router = useRouter();
	return (
		<div>
			<OauthButton brand="kakao" loginHandler={() => router.push(KAKAO_AUTH_URL)} />
			<OauthButton brand="naver" loginHandler={() => router.push(NAVER_AUTH_URL)} />
			<OauthButton brand="google" loginHandler={() => router.push(GOOGLE_AUTH_URL)} />
		</div>
	);
}
