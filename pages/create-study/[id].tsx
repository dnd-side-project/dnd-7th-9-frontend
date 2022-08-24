import React from 'react';

import IntroduceStudyScreen from '@app.feature/create-study/screen/IntroduceStudyScreen';
import StudyDateScreen from '@app.feature/create-study/screen/StudyDateScreen';
import StudyGoalScreen from '@app.feature/create-study/screen/StudyGoalScreen';

import Error from 'next/error';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import CreateStudyLastScreen from '@app.feature/create-study/screen/CreateStudyLastScreen';
import useCreateStudyStore from '@app.feature/create-study/store';
import { PostStudyBody } from '@app.feature/create-study/types';
import { useMutation } from '@tanstack/react-query';
import { postStudyGroup } from '@app.feature/create-study/api';

const CreateStudy: NextPage = () => {
	const router = useRouter();
	const { study, initStudy } = useCreateStudyStore();
	const { mutate: postStudy } = useMutation(() => postStudyGroup(study), {
		onSuccess: (data) => {
			console.log(data);
		},
		onError: (error) => {
			console.log(error);
		},
	});
	const submitHandler = () => {
		postStudy();
		console.log(study);
		// initStudy();
		router.push('/complete/invite-member');
	};

	if (router.query.id === '1') return <IntroduceStudyScreen />;
	if (router.query.id === '2') return <StudyDateScreen />;
	if (router.query.id === '3') return <StudyGoalScreen />;
	if (router.query.id === '4') return <CreateStudyLastScreen submitHandler={submitHandler} />;
	return <Error statusCode={404} title="page Not Found" />;
};

export default CreateStudy;
