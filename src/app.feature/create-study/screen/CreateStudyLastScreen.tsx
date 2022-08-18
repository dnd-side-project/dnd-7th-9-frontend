import React from 'react';
import DrawerInviteTeamMember from '../component/drawer/DrawerInviteTeamMember';

export default function CreateStudyLastScreen() {
	return (
		<div className="text-center">
			<h1 className="text-black-400 text-title1 font-bold mt-[108px]">스터디 그룹 이름</h1>
			<p className="text-slate text-headline font-medium mt-[15px]">
				<span>0/0</span> 시작
			</p>
			<div className="bg-background-white rounded py-[15px] mt-[43px]">
				<p className="text-[#777777] text-small font-regular">최종목표</p>
				<p className="text-black-400 text-headline font-medium mt-[8px]">최종목표내용</p>
			</div>
			<p className="text-[#089A76] mt-[100px] mb-[16px]">입력하신 정보가 맞나요?</p>
			<button
				type="button"
				className="text-slate text-small font-regular bg-background-white rounded px-[13px] py-[6px]"
			>
				다시 수정하기
			</button>
			<DrawerInviteTeamMember />
		</div>
	);
}
