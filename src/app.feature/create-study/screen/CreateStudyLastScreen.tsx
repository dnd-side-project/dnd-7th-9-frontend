import React from 'react';
import DrawerInviteTeamMember from '../component/drawer/DrawerInviteTeamMember';
import useCreateStudyStore, { useSetStudyDateStore } from '../store';

interface Props {
	submitHandler: () => void;
}
export default function CreateStudyLastScreen({ submitHandler }: Props) {
	const { study, setGroupCategory, setGroupName } = useCreateStudyStore();
	const { groupStartMonth, groupStartDay } = useSetStudyDateStore();
	return (
		<div className="text-center">
			<h1 className="text-black-400 text-title1 font-bold mt-[108px]">{study.groupName}</h1>
			<p className="text-slate text-headline font-medium mt-[15px]">
				<span>
					{groupStartMonth}/{groupStartDay}
				</span>{' '}
				시작
			</p>
			<div className="bg-background-white rounded py-[15px] mt-[43px]">
				<p className="text-[#777777] text-small font-regular">최종목표</p>
				<p className="text-black-400 text-headline font-medium mt-[8px]">{study.groupGoal}</p>
			</div>
			<p className="text-[#089A76] mt-[100px] mb-[16px]">입력하신 정보가 맞나요?</p>
			<button
				type="button"
				className="text-slate text-small font-regular bg-background-white rounded px-[13px] py-[6px]"
			>
				다시 수정하기
			</button>
			<DrawerInviteTeamMember submitHandler={submitHandler} />
		</div>
	);
}
