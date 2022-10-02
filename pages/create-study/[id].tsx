import React, { useEffect } from 'react';

import IntroduceStudyScreen from '@app.feature/create-study/screen/IntroduceStudyScreen';
import StudyDateScreen from '@app.feature/create-study/screen/StudyDateScreen';
import StudyGoalScreen from '@app.feature/create-study/screen/StudyGoalScreen';

import Error from 'next/error';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import CreateStudyLastScreen from '@app.feature/create-study/screen/CreateStudyLastScreen';
import useCreateStudyStore, { useInviteMemberEmailStore } from '@app.feature/create-study/store';
import { useMutation } from '@tanstack/react-query';
import { postGroupInvite, postStudyGroup } from '@app.feature/create-study/api';
import Url from '@app.modules/constant/url';

const CreateStudy: NextPage = () => {
	const router = useRouter();
	const { study, studyId, inviteLink, initStudy, setInviteLink, setStudyId, setMemberList } = useCreateStudyStore();
	const { inviteMemberEmail, initInviteMemberEmail } = useInviteMemberEmailStore();
	const { mutate: postStudy, isLoading: postStudyIsLoading } = useMutation(() => postStudyGroup(study), {
		onSuccess: (res) => {
			const { invitedUrl, groupId } = res;

			setInviteLink(invitedUrl);
			setStudyId(groupId);
			router.push('/create-study/4');
		},
		onError: () => {
			alert('알 수 없는 에러가 발생했습니다.');
			initStudy();
			router.push(Url.home);
		},
	});
	const { mutate: inviteMember, isLoading: inviteMemberIsLoading } = useMutation(
		() => postGroupInvite(studyId, inviteMemberEmail),
		{
			onSuccess: (res) => {
				setMemberList(res);
				console.log(res);
			},
			onError: () => {
				alert('알 수 없는 에러가 발생했습니다.');

				router.push(Url.home);
			},
			onSettled: () => {
				initInviteMemberEmail();
			},
		}
	);

	const submitHandler = () => {
		// TODO:이름바꾸기
		if (postStudyIsLoading) return;
		postStudy();
	};

	const inviteMemberHandler = () => {
		if (inviteMemberIsLoading) return;
		inviteMember();
	};
	const completeHandler = () => {
		initStudy();
		router.push(Url.home);
	};
	if (router.query.id === '1') return <IntroduceStudyScreen />;
	if (router.query.id === '2') return <StudyDateScreen />;
	if (router.query.id === '3') return <StudyGoalScreen submitHandler={submitHandler} />;
	if (router.query.id === '4')
		return <CreateStudyLastScreen inviteMemberHandler={inviteMemberHandler} completeHandler={completeHandler} />;
	return <Error statusCode={404} title="page Not Found" />;
};

export default CreateStudy;
