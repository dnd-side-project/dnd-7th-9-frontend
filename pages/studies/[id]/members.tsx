import React from 'react';

import { useRouter } from 'next/router';

import type { NextPage } from 'next';
import StudyMembersScreen from '@app.feature/detail-study/screen/StudyMembersScreen';

const StudyMembers: NextPage = () => {
	const router = useRouter();

	return <div>{router?.query?.id && <StudyMembersScreen studyId={`${router.query.id}`} />}</div>;
};

export default StudyMembers;
