import type { NextPage } from 'next';

import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import QuizCreateCompleteScreen from '@app.feature/complete/screen/QuizCreateCompleteScreen';

const QuizCreate: NextPage = () => {
	const router = useRouter();
	const { addedRate, userTotalRate, questionBookPostRate, questionBookSolveRate } = router.query;
	//  TEST URL : http://localhost:3000/complete/quiz-create?addedRate=50&userTotalRate=50&questionBookPostRate=50&questionBookSolveRate=0

	useEffect(() => {
		if (!router.isReady) return;
		if (!router.query) alert('알 수 없는 오류가 발생하였습니다.');
	}, [router.isReady]);

	return (
		<QuizCreateCompleteScreen
			addedRate={addedRate ?? ''}
			userTotalRate={userTotalRate ?? ''}
			questionBookPostRate={questionBookPostRate ?? ''}
			questionBookSolveRate={questionBookSolveRate ?? ''}
		/>
	);
};

export default QuizCreate;
