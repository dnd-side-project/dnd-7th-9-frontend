import React from 'react';
import Router from 'next/router';
import PageTitle from '@app.component/title/PageTitle';
import BellIcon from '@assets/main/eva_bell-outline.svg';
import UpdatedQuizCard from '../component/card/UpdatedQuizCard';
import { IUpdatedQuiz } from '../types';

interface Props {
	updatedQuizData: IUpdatedQuiz[];
}

export default function UpdatedQuizScreen({ updatedQuizData }: Props) {
	return (
		<div>
			<div className="flex justify-between mt-[40px] mb-[55px]">
				<PageTitle title="실시간 퀴즈" />
				<BellIcon className="cursor-pointer" />
			</div>
			<div className="h-full scroll-auto">
				{updatedQuizData.map((quiz) => {
					const handleRouterPushSolveQuiz = () =>
						Router.push({ pathname: '/solve-quiz/1', query: { questionBookId: quiz.questionBookId } });
					return (
						<div
							key={quiz.questionBookId}
							role="button"
							onClick={handleRouterPushSolveQuiz}
							onKeyPress={handleRouterPushSolveQuiz}
							tabIndex={0}
						>
							{!quiz.solved && <UpdatedQuizCard key={quiz.questionBookId} className="mb-[10px]" quizData={quiz} />}
						</div>
					);
				})}
			</div>
		</div>
	);
}
