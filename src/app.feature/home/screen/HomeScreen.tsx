import React from 'react';
import PageTitle from '@app.component/title/PageTitle';
import BellIcon from '@assets/main/eva_bell-outline.svg';
import Accordion from '@app.component/accordion';
import CategoryIcon from '@app.component/icon/CategoryIcon';
import StudyGoalAccordionContent from '../component/accordionContent/StudyGoalAccordionContent';
import { IUserList } from '../types';

interface Props {
	studyGoalData: IUserList;
}

export default function HomeScreen({ studyGoalData }: Props) {
	return (
		<div>
			<div className="flex justify-between mt-[40px] mb-[55px]">
				<PageTitle title={`${studyGoalData.userNickname}님,\n목표를 달성해보세요`} />
				<BellIcon className="cursor-pointer" />
			</div>

			{studyGoalData.userGoalResponseList.map((goalInfo: any) => (
				<Accordion
					className="mb-[10px]"
					icon={<CategoryIcon type={goalInfo.studyGroupCategory} />}
					text={goalInfo.goalContent}
					studyName={goalInfo.studyGroupContent}
					status={goalInfo.goalStatus}
					content={
						<StudyGoalAccordionContent
							studyId={goalInfo.studyGroupId}
							goalId={goalInfo.goalId}
							questionBookSubmitted={goalInfo.questionBookSubmitted}
						/>
					}
				/>
			))}
		</div>
	);
}
