import type { NextPage } from 'next';

import React, { useState } from 'react';
import Router from 'next/router';
import { useQuery } from '@tanstack/react-query';
import IUpdatedQuiz from '@app.feature/updated-quizzes/constant';
import UpdatedQuizScreen from '@app.feature/updated-quizzes/screen/UpdatedQuizScreen';
import UpdatedQuizNoneScreen from '@app.feature/updated-quizzes/screen/UpdatedQuizNoneScreen';
import { fetchGetUpdatedQuizzes } from '@app.feature/updated-quizzes/api';

const UpdatedQuizzes: NextPage = () => {
	const [updatedQuizData, setUpdatedQuizData] = useState(IUpdatedQuiz);

	const query = useQuery(['question-book', 'list', 'live'], fetchGetUpdatedQuizzes, {
		onSuccess: (data) => {
			console.log(data);
			setUpdatedQuizData(data.filter((quiz) => quiz.solved === false));
		},
		onError: (error) => {
			console.log(error), 12345;
			alert('알 수 없는 에러가 발생했습니다.');
			Router.push('/');
		},
	});

	return updatedQuizData.length ? <UpdatedQuizScreen updatedQuizData={updatedQuizData} /> : <UpdatedQuizNoneScreen />;
};

export default UpdatedQuizzes;
