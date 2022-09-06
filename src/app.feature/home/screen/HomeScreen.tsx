import React from 'react';
import PageTitle from '@app.component/title/PageTitle';
import BellIcon from '@assets/main/eva_bell-outline.svg';
import Accordion from '@app.component/accordion';
import CategoryIcon from '@app.component/icon/CategoryIcon';
import StudyGoalAccordionContent from '../component/accordionContent/StudyGoalAccordionContent';

interface IGoalInfo {
	type: 'certification' | 'company' | 'language' | 'etc';
	goalText: string;
	status: string;
	questionCount: number;
	goal: string;
	endGoal: string;
}

export default function HomeScreen() {
	const title = `${'주희'}님,\n목표를 달성해보세요`;
	const DUMMY_ACCORDION_INFO: IGoalInfo[] = [
		{
			type: 'company',
			goalText: '인적성 스터디',
			status: '이번 목표 완료',
			questionCount: 3,
			goal: '인적성 문제 풀기',
			endGoal: '취뽀하기',
		},
		{
			type: 'certification',
			goalText: '컴퓨터 자격증',
			status: '진행 중',
			questionCount: 3,
			goal: '10페이지까지 문제 풀기',
			endGoal: '컴퓨터 자격증 따기',
		},
		{
			type: 'language',
			goalText: '영어 회화 스터디',
			status: '진행 중',
			questionCount: 2,
			goal: '스터디 참여하기',
			endGoal: '원어민 친구 사귀기',
		},
	];

	return (
		<div>
			<div className="flex justify-between mt-[40px] mb-[55px]">
				<PageTitle title={title} />
				<BellIcon className="cursor-pointer" />
			</div>

			{DUMMY_ACCORDION_INFO.map((goalInfo) => (
				<Accordion
					className="mb-[10px]"
					icon={<CategoryIcon type={goalInfo.type} />}
					text={goalInfo.goalText}
					status={goalInfo.status}
					content={
						<StudyGoalAccordionContent
							questionCount={goalInfo.questionCount}
							goal={goalInfo.goal}
							endGoal={goalInfo.endGoal}
						/>
					}
				/>
			))}
		</div>
	);
}
