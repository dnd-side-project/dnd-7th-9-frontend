import React from 'react';

import IntroduceStudyScreen from '@app.feature/create-study/screen/IntroduceStudyScreen';
import StudyDateScreen from '@app.feature/create-study/screen/StudyDateScreen';
import StudyGoalScreen from '@app.feature/create-study/screen/StudyGoalScreen';

import Error from 'next/error';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import CreateStudyLastScreen from '@app.feature/create-study/screen/CreateStudyLastScreen';

const CreateStudy: NextPage = () => {
	const router = useRouter();

	const submitHandler = () => {
		console.log('끝');
	};

	if (router.query.id === '1') return <IntroduceStudyScreen />;
	if (router.query.id === '2') return <StudyDateScreen />;
	if (router.query.id === '3') return <StudyGoalScreen />;
	if (router.query.id === '4') return <CreateStudyLastScreen />;
	return <Error statusCode={404} title="page Not Found" />;
};

export default CreateStudy;
