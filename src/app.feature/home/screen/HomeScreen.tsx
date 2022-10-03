import React from 'react';
import PageTitle from '@app.component/title/PageTitle';
import BellIcon from '@assets/main/eva_bell-outline.svg';
import Accordion from '@app.component/accordion';
import CategoryIcon from '@app.component/icon/CategoryIcon';
import StudyGoalAccordionContent from '../component/accordionContent/StudyGoalAccordionContent';

interface Props {
	// TO DO : 추후 수정
	userStudyList: any;
}

export default function HomeScreen({ userStudyList }: Props) {
	return (
		<div>
			<div className="flex justify-between mt-[40px] mb-[55px]">
				{/* TO DO : 사용자 정보 가져오는 API 부재한 것 같음. 추후 수정 (이야기 드렸음) */}
				<PageTitle title={`주희님,\n목표를 달성해보세요`} />
				<BellIcon className="cursor-pointer" />
			</div>

			{/* TO DO : 추후 수정 */}
			{userStudyList
				.filter((item: any) => item.activeGoalResponse)
				.map((goalInfo: any) => (
					<Accordion
						// TO DO : 추후 수정
						className="mb-[10px]"
						icon={<CategoryIcon type="ETC" />}
						text={goalInfo.studyGroupListResponse.groupGoal}
						status={goalInfo.activeGoalResponse.groupStatus}
						content={
							<StudyGoalAccordionContent
								groupId={goalInfo.studyGroupListResponse.groupId}
								toSolveQuestionBookNum={goalInfo.activeGoalResponse.toSolveQuestionBookNum}
								questionCount={0}
								goal={goalInfo.studyGroupListResponse.groupGoal}
								endGoal={goalInfo.activeGoalResponse.goalContent}
							/>
						}
					/>
				))}
		</div>
	);
}
