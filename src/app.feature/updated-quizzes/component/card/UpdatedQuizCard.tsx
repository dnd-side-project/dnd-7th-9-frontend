import React from 'react';
import PersonIcon from '@assets/quiz/person.svg';
import ArrowRightIcon from '@assets/quiz/arrow-right.svg';
import { transformSecond } from '@app.modules/util';
import { IUpdatedQuiz } from '@app.feature/updated-quizzes/types';

interface Props {
	className?: string;
	quizData: IUpdatedQuiz;
}

export default function UpdatedQuizCard({ className, quizData }: Props) {
	const nowDate = new Date();

	const createdDate = Date.parse(quizData.questionCreatedAt);
	const updateTime = (nowDate.getTime() - createdDate) / 1000;

	return (
		<div className={`px-[18px] bg-background-white rounded drop-shadow-white ${className}`}>
			<div className="flex justify-end pt-[10px]">
				<div className="my-auto rounded-full mr-[5px] w-[8px] h-[8px] bg-sub" />
				<p className="text-overline text-slate font-regular">{transformSecond(updateTime)} 전</p>
			</div>
			<div className="flex justify-between pb-[25px] ">
				<div className="flex">
					<div className="rounded grid place-items-center h-[48px] w-[48px] mr-[14px] bg-[#E2EFFF]">
						<PersonIcon />
					</div>
					<div>
						<div className="flex">
							<span className="text-small text-brown font-regular">{quizData.userNickName}</span>
							<hr className="border border-brown h-[9px] my-auto ml-[6px] mr-[9px]" />
							<span className="text-small text-brown font-bold">{quizData.studyGroupName}</span>
						</div>
						<p className="text-body1 font-medium">{quizData.goalContent}</p>
					</div>
				</div>
				<div className="my-auto">
					<ArrowRightIcon />
				</div>
			</div>
		</div>
	);
}
