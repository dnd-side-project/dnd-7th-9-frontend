import React from 'react';
import PageTitle from '@app.component/title/PageTitle';
import BellIcon from '@assets/main/eva_bell-outline.svg';
import UpdatedQuizCard from '../component/card/UpdatedQuizCard';

interface IQuiz {
	updateTime: number;
	userName: string;
	studyTitle: string;
	week: number;
}

interface Props {
	quizData: IQuiz[];
}

export default function UpdatedQuizScreen({ quizData }: Props) {
	return (
		<div>
			<div className="flex justify-between mt-[40px] mb-[55px]">
				<PageTitle title="실시간 퀴즈" />
				<BellIcon className="cursor-pointer" />
			</div>
			<div className="h-full scroll-auto">
				{quizData.map((quiz) => (
					<UpdatedQuizCard
						className="mb-[10px]"
						updateTime={quiz.updateTime}
						userName={quiz.userName}
						studyTitle={quiz.studyTitle}
						week={quiz.week}
					/>
				))}
			</div>
		</div>
	);
}
