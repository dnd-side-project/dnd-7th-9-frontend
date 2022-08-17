import React from 'react';
import { useRouter } from 'next/router';
import FireCrackerIcon from '@assets/complete/firecracker.svg';
import DefaultButton from '@app.component/button/DefaultButton';
import CompleteAnimation from '../component/animation/CompleteAnimation';
import ItemInvitedCompleteMember from '../component/item/ItemInvitedCompleteMember';

export default function InviteStudyMemberCompleteScreen() {
	const router = useRouter();

	const DUMMY_EMAIL = [
		'123@naver.com',
		'456@naver.com',
		'1235@naver.com',
		'999@naver.com',
		'9559@naver.com',
		'9129@naver.com',
		'991129@naver.com',
		'99112123@naver.com',
	];
	return (
		<div className="text-center">
			<div className="flex justify-center mt-[49px]">
				<FireCrackerIcon />
			</div>
			<h1 className="text-black-400 text-title1 font-bold mt-[16px]">초대를 완료하셨어요</h1>
			<p className="text-slate text-headline font-medium mt-[15px]">스터디 그룹 명</p>
			<div className="overflow-auto h-[58vh] mt-[30px] pb-[60px]">
				{DUMMY_EMAIL.map((email) => (
					<ItemInvitedCompleteMember email={email} />
				))}
			</div>
			<CompleteAnimation />
			<div className="absolute bottom-0 left-0 right-0 bg-background-white drop-shadow-white px-[20px] pb-[33px] pt-[10px]">
				<DefaultButton className="bg-[#677A90] border-none" text="홈으로" onClick={() => router.push('/')} />
			</div>
		</div>
	);
}
