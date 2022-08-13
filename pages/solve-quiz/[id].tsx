import React, { useEffect } from 'react';

import { useRouter } from 'next/router';
import SolveQuizScreen from '@app.feature/quiz/solve-quiz/SolveQuizScreen';
import useSolveQuizStore, { IQuiz } from '@app.modules/store/solveQuiz'; // temp
// 임시로 5문제 만들기로 설정
export default function CreateQuiz() {
	const router = useRouter();

	const { quizzes, setInitQuizzes } = useSolveQuizStore();

	const TEMP_QUIZZES: IQuiz[] = [1, 1, 1, 1, 1].map(() => ({
		question: 'eat 뜻으로 옳은 것은?',
		choices: [
			{ id: 1, content: '먹다', isChecked: false },
			{ id: 2, content: '보다', isChecked: false },
			{ id: 3, content: '가다', isChecked: false },
			{ id: 4, content: '놀다', isChecked: false },
			{ id: 5, content: '입다', isChecked: false },
		],
	}));

	const submitQuizHandler = () => {
		// TO DO : 모든 문제를 풀었는지 확인 필요. 혹은 안 풀어도 제출 가능?
		console.log(quizzes);
	};
	useEffect(() => {
		setInitQuizzes(TEMP_QUIZZES);
	}, []);
	return (
		<div>
			{router?.query?.id && <SolveQuizScreen quizIdx={+router.query.id - 1} submitQuizHandler={submitQuizHandler} />}
		</div>
	);
}
