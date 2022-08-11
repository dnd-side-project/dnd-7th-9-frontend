import React from 'react';
import KaKaoIcon from '@assets/brand/kakao_icon.svg';
import NaverIcon from '@assets/brand/naver_icon.svg';
import GoogleIcon from '@assets/brand/google_icon.svg';

interface Props {
	loginHandler?: () => void;
	brand: string;
}

export default function OauthButton({ brand, loginHandler }: Props) {
	const BASE_BTN_STYLE = 'font-medium rounded w-full px-[14px] h-[60px] flex items-center justify-center';
	const BASE_SPAN_STYLE = 'font-medium text-body1 ml-2';
	if (brand === 'kakao')
		return (
			<button onClick={loginHandler} className={`bg-[#F9DF5E] ${BASE_BTN_STYLE} `} type="button">
				<KaKaoIcon />
				<span className={`${BASE_SPAN_STYLE} text-black-400 `}>카카오 로그인</span>
			</button>
		);
	if (brand === 'naver')
		return (
			<button onClick={loginHandler} className={`bg-[#00C73C] ${BASE_BTN_STYLE} `} type="button">
				<NaverIcon />
				<span className={`${BASE_SPAN_STYLE} text-white`}>네이버 로그인</span>
			</button>
		);
	return (
		<button onClick={loginHandler} className={`bg-white ${BASE_BTN_STYLE} `} type="button">
			<GoogleIcon />
			<span className={`${BASE_SPAN_STYLE} text-slate`}>구글 로그인</span>
		</button>
	);
}
