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
import Url from '@app.modules/constant/url';

const CreateStudy: NextPage = () => {
	const router = useRouter();
	const { study, initStudy } = useCreateStudyStore();
	const { mutate: postStudy } = useMutation(() => postStudyGroup(study), {
		onSuccess: () => {
			router.push('/complete/invite-member');
		},
		onError: () => {
			initStudy();
			alert('알 수 없는 에러가 발생했습니다.');
			router.push(Url.home);
		},
	});
	const submitHandler = () => {
		postStudy();
	};

	if (router.query.id === '1') return <IntroduceStudyScreen />;
	if (router.query.id === '2') return <StudyDateScreen />;
	if (router.query.id === '3') return <StudyGoalScreen />;
	if (router.query.id === '4') return <CreateStudyLastScreen submitHandler={submitHandler} />;
	return <Error statusCode={404} title="page Not Found" />;
};

export default CreateStudy;
