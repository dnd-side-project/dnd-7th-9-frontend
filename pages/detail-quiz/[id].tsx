import React, { useEffect } from 'react';

import { useRouter } from 'next/router';
import useSolveQuizStore from '@app.modules/store/quiz/solveQuiz'; // temp
import { NextPage } from 'next';
import DetailQuizScreen from '@app.feature/quiz/screen/DetailQuizScreen';
// 임시로 5문제 만들기로 설정
const DetailQuiz: NextPage = () => {
	const router = useRouter();

	// 	const { quizzes, setInitQuizzes } = useSolveQuizStore();

	const endQuizHandler = () => {
		// TO DO : 홈으로 보내기
		console.log('끝');
	};
	/* useEffect(() => {
		setInitQuizzes(TEMP_QUIZZES);
	}, []); */
	return (
		<div>
			{router?.query?.id && <DetailQuizScreen quizIdx={+router.query.id - 1} endQuizHandler={endQuizHandler} />}
		</div>
	);
};

export default DetailQuiz;
