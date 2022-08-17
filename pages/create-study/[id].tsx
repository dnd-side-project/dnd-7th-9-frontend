import React, { useEffect } from 'react';

import { useRouter } from 'next/router';

import { NextPage } from 'next';
import IntroduceStudyScreen from '@app.feature/studyGroup/screen/IntroduceStudyScreen';
import StudyDateScreen from '@app.feature/studyGroup/screen/StudyDateScreen';
import StudyGoalScreen from '@app.feature/studyGroup/screen/StudyGoalScreen';

const CreateStudy: NextPage = () => {
	const router = useRouter();

	const submitHandler = () => {
		console.log('끝');
	};

	return (
		<div>
			{router?.query?.id && +router.query.id === 1 && <IntroduceStudyScreen submitHandler={submitHandler} />}
			{router?.query?.id && +router.query.id === 2 && <StudyDateScreen submitHandler={submitHandler} />}
			{router?.query?.id && +router.query.id === 3 && <StudyGoalScreen submitHandler={submitHandler} />}
		</div>
	);
};

export default CreateStudy;
