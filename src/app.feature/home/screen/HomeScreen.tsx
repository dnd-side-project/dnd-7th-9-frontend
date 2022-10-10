import React from 'react';
import PageTitle from '@app.component/title/PageTitle';
import BellIcon from '@assets/main/eva_bell-outline.svg';
import Accordion from '@app.component/accordion';
import CategoryIcon from '@app.component/icon/CategoryIcon';
import StudyGoalAccordionContent from '../component/accordionContent/StudyGoalAccordionContent';
import { IUserList } from '../types';

interface Props {
	userStudyList: IUserList[];
}

export default function HomeScreen({ userStudyList }: Props) {
	return (
		<div>
			<div className="flex justify-between mt-[40px] mb-[55px]">
				{/* TO DO : 사용자 정보 가져오는 API 부재한 것 같음. 추후 수정 (이야기 드렸음) */}
				<PageTitle title={`주희님,\n목표를 달성해보세요`} />
				<BellIcon className="cursor-pointer" />
			</div>

			{userStudyList
				.filter((item: any) => item.activeGoalResponse)
				.map((goalInfo: any) => (
					<Accordion
						className="mb-[10px]"
						icon={<CategoryIcon type={goalInfo.studyGroupListResponse.groupCategory} />}
						text={goalInfo.studyGroupListResponse.groupGoal}
						studyName="TEST DATA"
						status={goalInfo.activeGoalResponse.goalStatus}
						content={<StudyGoalAccordionContent groupId={goalInfo.studyGroupListResponse.groupId} />}
					/>
				))}
		</div>
	);
}
