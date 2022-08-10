import React, { MouseEventHandler } from 'react';
import KaKaoIcon from '@assets/brand/kakao_icon.svg';
import NaverIcon from '@assets/brand/naver_icon.svg';
import GoogleIcon from '@assets/brand/google_icon.svg';

interface Props {
	onClick?: MouseEventHandler<HTMLInputElement>;
	brand: string;
}

const baseStyle = 'font-medium rounded w-full px-[14px] h-[60px]';
export default function DefaultButton({ brand, onClick }: Props) {
	if (brand === 'kakao')
		return (
			<button className={`bg-[#F9DF5E] ${baseStyle} flex items-center justify-center`} type="button">
				<KaKaoIcon />
				<span className="font-medium text-body1 text-black-400 ml-2">카카오 로그인</span>
			</button>
		);
	if (brand === 'naver')
		return (
			<button className={`bg-[#00C73C] ${baseStyle} flex items-center justify-center`} type="button">
				<NaverIcon />
				<span className="font-medium text-body1 text-white ml-2">네이버 로그인</span>
			</button>
		);
	return (
		<button className={`bg-white ${baseStyle} flex items-center justify-center`} type="button">
			<GoogleIcon />
			<span className="font-medium text-body1 text-slate ml-2">구글 로그인</span>
		</button>
	);
}
