import React, { useEffect, useState } from 'react';

import Router, { useRouter } from 'next/router';

import type { NextPage } from 'next';
import DetailQuizScreen from '@app.feature/quiz/screen/DetailQuizScreen';
import { InitSolvedQuestionBookDetail } from '@app.feature/quiz/constant';
import { useQuery } from '@tanstack/react-query';
import { fetchGetQuestionBookDetail } from '@app.feature/quiz/api';

const DetailQuiz: NextPage = () => {
	const router = useRouter();
	const { questionBookId, id } = router.query;

	const [solvedQuestionBookDetail, setSolvedQuestionBookDetail] = useState(InitSolvedQuestionBookDetail);

	const query = useQuery(['question', questionBookId], () => fetchGetQuestionBookDetail(Number(questionBookId)), {
		onSuccess: (data) => {
			console.log(data.data);
			setSolvedQuestionBookDetail(data.data);
		},
		onError: () => {
			alert('알 수 없는 에러가 발생했습니다.');
			router.push('/');
		},
	});

	const endQuizHandler = () => {
		Router.push('/');
	};

	useEffect(() => {
		if (!router.isReady) return;
		if (!router.query) alert('알 수 없는 오류가 발생하였습니다.');
	}, [router.isReady]);

	return (
		<div>
			{id && questionBookId && (
				<DetailQuizScreen
					quizIdx={+id - 1}
					endQuizHandler={endQuizHandler}
					questionBookId={+questionBookId}
					solvedQuestionBookDetail={solvedQuestionBookDetail}
				/>
			)}
		</div>
	);
};

export default DetailQuiz;
