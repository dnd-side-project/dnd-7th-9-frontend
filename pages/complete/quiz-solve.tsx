import type { NextPage } from 'next';
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import QuizSolveCompleteScreen from '@app.feature/complete/screen/QuizSolveCompleteScreen';

const QuizSolve: NextPage = () => {
	const router = useRouter();
	const { addedRate, userTotalRate, questionBookPostRate, questionBookSolveRate, pass, questionBookId } = router.query;
	// TEST : http://localhost:3000/complete/quiz-solve?addedRate=50&userTotalRate=50&questionBookPostRate=50&questionBookSolveRate=20?pass=true

	useEffect(() => {
		if (!router.isReady) return;
		if (!router.query) alert('알 수 없는 오류가 발생하였습니다.');
	}, [router.isReady]);

	return (
		<QuizSolveCompleteScreen
			addedRate={Number(addedRate)}
			userTotalRate={Number(userTotalRate)}
			questionBookPostRate={Number(questionBookPostRate)}
			questionBookSolveRate={Number(questionBookSolveRate)}
			questionBookId={questionBookId ?? ''}
		/>
	);
};

export default QuizSolve;
