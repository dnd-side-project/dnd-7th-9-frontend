import React, { useEffect, useState } from 'react';
import Router, { useRouter } from 'next/router';
import { useQuery } from '@tanstack/react-query';
import InitQuestionBookData from '@app.feature/solve-quiz/constant';
import SolveQuizScreen from '@app.feature/quiz/screen/SolveQuizScreen';
import { fetchGetQuestionBook } from '@app.feature/solve-quiz/api';

import type { NextPage } from 'next';

// 임시로 5문제 만들기로 설정
const SolveQuiz: NextPage = () => {
	const router = useRouter();
	const { questionBookId, id } = router.query;

	const [questionBookData, setQuestionBookData] = useState(InitQuestionBookData);

	// const query = useQuery(['question', questionBookId], () => fetchGetQuestionBook(questionBookId), {
	// 	onSuccess: (data) => {
	// 		setQuestionBookData(data);
	// 	},
	// 	onError: () => {
	// 		alert('알 수 없는 에러가 발생했습니다.');
	// 		router.push('/');
	// 	},
	// });

	useEffect(() => {
		if (!router.isReady) return;
		if (!router.query.questionBookId) Router.push('/');
	}, [router.isReady]);

	return (
		<div>
			{questionBookId && id && (
				<SolveQuizScreen quizId={Number(id)} questionBookId={questionBookId} questionBookData={questionBookData} />
			)}
		</div>
	);
};

export default SolveQuiz;
