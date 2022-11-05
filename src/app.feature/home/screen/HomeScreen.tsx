import React from 'react';
import { useRouter } from 'next/router';
import Accordion from '@app.component/accordion';
import NavLink from '@app.component/link/navLink';
import PageTitle from '@app.component/title/PageTitle';
import CategoryIcon from '@app.component/icon/CategoryIcon';
import DefaultButton from '@app.component/button/DefaultButton';
import StudyGoalAccordionContent from '../component/accordionContent/StudyGoalAccordionContent';
import { IUserList } from '../types';

interface Props {
	studyGoalData: IUserList;
}

export default function HomeScreen({ studyGoalData }: Props) {
	const router = useRouter();

	return (
		<div>
			<div className="flex justify-between mt-[40px] mb-[55px]">
				<PageTitle title={`${studyGoalData.userNickname}님,\n목표를 달성해보세요`} />
				<NavLink />
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

			{!studyGoalData.userGoalResponseList.length &&
				studyGoalData.emptyGoalStudyGroup.map((studyInfo: any) => (
					<Accordion
						className="mb-[10px]"
						icon={<CategoryIcon type={studyInfo.studyGroupCategory} />}
						text="아직 목표가 없어요"
						textType="disable"
						studyName={studyInfo.studyGroupContent}
						status={studyInfo.studyGroupStatus}
						content={
							<DefaultButton onClick={() => router.push(`/create-quiz/${studyInfo.studyGroupId}`)} text="목표 만들기" />
						}
					/>
				))}
		</div>
	);
}
