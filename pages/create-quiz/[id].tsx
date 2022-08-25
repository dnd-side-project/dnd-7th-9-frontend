import React, { useEffect } from 'react';

import useCreateQuizStore from '@app.modules/store/quiz/createQuiz';
import Router, { useRouter } from 'next/router';
import CreateQuizScreen from '@app.feature/quiz/screen/CreateQuizScreen';
import type { NextPage } from 'next';
import { useMutation } from '@tanstack/react-query';
import { ICreateQuestion } from '@app.feature/quiz/types';
import fetchPostQuestionBookCreateEnd from '@app.feature/quiz/api';

// 임시로 5문제 만들기로 설정

const CreateQuiz: NextPage = () => {
	const router = useRouter();
	const { quizzes, setInitQuizzes } = useCreateQuizStore();

	// TO DO : 쿼리로 받아야 하는 값
	// goalId, questionBookName, 세부목표(타이틀용), 세부목표 설명(타이틀용)

	const mutation = useMutation((quizCreatePayload: ICreateQuestion) => {
		return fetchPostQuestionBookCreateEnd(quizCreatePayload);
	});

	const submitQuizHandler = () => {
		// TO DO : validation 체크 필요

		const payload: ICreateQuestion = {
			goalId: '넘어온 값', // TO DO : goalId query 값
			questionBookName: '넘어온 값', // TO DO : questionBookName 값
			questionBookQuestionNum: 5, // TO DO : 추후 5개 기본 값 사라지면 바꿀 예정
			questionDtoList: quizzes.map((quiz) => {
				return {
					questionAnswer: (quiz.choices.filter((option) => option.isChecked === true)[0].id + 1).toString(),
					questionContent: quiz.question,
					questionType: 'TEXT',
					questionImageUrl: '',
					optionSaveDtoList: quiz.choices.map((option) => {
						return { optionContent: option.content, optionImageEnable: false, optionImageUrl: '' };
					}),
				};
			}),
		};
		console.log('최종 payload :: ', payload);

		mutation.mutate(payload);

		if (mutation.isSuccess) {
			const { addedRate, userTotalRate, questionBookPostRate, questionBookSolveRate } = mutation.data.data;
			console.log('mutation Data :: ', mutation.data.data);
			Router.push({
				pathname: '/complete/quiz-create',
				query: { addedRate, userTotalRate, questionBookPostRate, questionBookSolveRate },
			});
		}

		if (mutation.isError) alert('알 수 없는 오류가 발생했습니다/');
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
