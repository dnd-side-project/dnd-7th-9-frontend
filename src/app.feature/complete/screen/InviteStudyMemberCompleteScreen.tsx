import React from 'react';
import FireCrackerIcon from '@assets/complete/firecracker.svg';
import DefaultButton from '@app.component/button/DefaultButton';
import QuizCompleteAnimation from '../component/animation/QuizCompleteAnimation';

export default function InviteStudyMemberCompleteScreen() {
	return (
		<div className="text-center">
			<div className="flex justify-center mt-[49px]">
				<FireCrackerIcon />
			</div>
			<h1 className="text-black-400 text-title1 font-bold mt-[16px]">초대를 완료하셨어요</h1>
			<p className="text-slate text-headline font-medium mt-[15px]">스터디 그룹 명</p>
			<div className="h-[300px] overflow-x-auto">계정들</div>
			<div className="absolute bottom-0 left-0 right-0 bg-background-white drop-shadow-white px-[20px] pb-[33px] pt-[10px]">
				<QuizCompleteAnimation />
				<DefaultButton className="bg-[#677A90] border-none" text="홈으로" />
			</div>
		</div>
	);
}
