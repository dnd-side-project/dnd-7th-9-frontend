import React, { useEffect } from 'react';

import useCreateQuizStore from '@app.modules/store/quiz/createQuiz';
import { useRouter } from 'next/router';
import CreateQuizScreen from '@app.feature/quiz/screen/CreateQuizScreen';
import { NextPage } from 'next';

// 임시로 5문제 만들기로 설정

const CreateQuiz: NextPage = () => {
	const router = useRouter();
	const { quizzes, setInitQuizzes } = useCreateQuizStore();
	const submitQuizHandler = () => {
		// TO DO : validation 체크 필요
		console.log(quizzes); // TO DO :  api 요구사항에 따라 quizzes 작업 필요
	};
	useEffect(() => {
		if (router.query.id && +router.query.id !== 0) return;
		if (quizzes.length === 5) return; // 서버에서 받아온 세부 목표 문제 수
		setInitQuizzes(5); // 서버에서 받아온 세부 목표 문제 수
	}, [router]);
	return (
		<div>
			{router?.query?.id && <CreateQuizScreen quizIdx={+router.query.id - 1} submitQuizHandler={submitQuizHandler} />}
		</div>
	);
};
export default CreateQuiz;
