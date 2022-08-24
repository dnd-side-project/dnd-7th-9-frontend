import React from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@tanstack/react-query';
import SolveQuizScreen from '@app.feature/quiz/screen/SolveQuizScreen';
import { fetchGetQuestionBook } from '@app.feature/solve-quiz/api';

import type { NextPage } from 'next';

// 임시로 5문제 만들기로 설정
const SolveQuiz: NextPage = () => {
	const router = useRouter();
	const { questionBookId, id } = router.query;

	// const {
	// 	data: questionBookData,
	// 	isError,
	// 	isLoading,
	// } = useQuery(['question', questionBookId], () => fetchGetQuestionBook(questionBookId));

	const TEMP_QUIZ = [
		{
			questionId: 10,
			questionContent: '고양이가 아닌 것은?',
			optionList: [
				{ optionId: 28, optionContent: '러시안블루', optionImageEnable: false, optionImageUrl: '' },
				{ optionId: 29, optionContent: '먼치킨', optionImageEnable: false, optionImageUrl: '' },
				{ optionId: 30, optionContent: '골든 리트리버', optionImageEnable: false, optionImageUrl: '' },
			],
		},
		{
			questionId: 11,
			questionContent: '강아지가 아닌 것은?',
			optionList: [
				{ optionId: 31, optionContent: '치와와', optionImageEnable: false, optionImageUrl: '' },
				{ optionId: 32, optionContent: '먼치킨', optionImageEnable: false, optionImageUrl: '' },
			],
		},
	];

	// console.log(solveQuiz);

	// const { quizzes, setInitQuizzes } = useSolveQuizStore();

	return (
		<div>
			{questionBookId && id && (
				<SolveQuizScreen quizId={Number(id)} questionBookId={questionBookId} questionBookData={TEMP_QUIZ} />
			)}
		</div>
	);
};

export default SolveQuiz;
