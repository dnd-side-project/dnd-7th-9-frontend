import React from 'react';
import PageTitle from '@app.component/title/PageTitle';
import BellIcon from '@assets/main/eva_bell-outline.svg';
import UpdatedQuizCard from '../component/card/UpdatedQuizCard';

export default function UpdatedQuizScreen() {
	const DUMMY_QUIZ_DATA = [
		{
			updateTime: 2,
			userName: '차주희',
			studyTitle: '프론트 스터디',
			week: 1,
		},
		{
			updateTime: 3,
			userName: '정예원',
			studyTitle: '프론트 스터디',
			week: 3,
		},
		{
			updateTime: 10,
			userName: '원태연',
			studyTitle: '백엔드 스터디',
			week: 1,
		},
		{
			updateTime: 60,
			userName: '심미경',
			studyTitle: '백엔드 스터디',
			week: 1,
		},
		{
			updateTime: 40000,
			userName: '최나은',
			studyTitle: '디자인 스터디',
			week: 2,
		},
		{
			updateTime: 503000,
			userName: '송지민',
			studyTitle: '디자인 스터디',
			week: 2,
		},
	];
	return (
		<div>
			<div className="flex justify-between mt-[40px] mb-[55px]">
				<PageTitle title="실시간 퀴즈" />
				<BellIcon className="cursor-pointer" />
			</div>
			{DUMMY_QUIZ_DATA.map((quiz) => (
				<UpdatedQuizCard
					className="mb-[10px]"
					updateTime={quiz.updateTime}
					userName={quiz.userName}
					studyTitle={quiz.studyTitle}
					week={quiz.week}
				/>
			))}
		</div>
	);
}
