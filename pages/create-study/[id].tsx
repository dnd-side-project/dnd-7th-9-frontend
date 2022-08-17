import React, { useEffect } from 'react';

import { useRouter } from 'next/router';

import { NextPage } from 'next';
import CreateStudyGroupScreen from '@app.feature/studyGroup/screen/CreateStudyGroupScreen';

const CreateStudy: NextPage = () => {
	const router = useRouter();

	const submitHandler = () => {
		console.log('끝');
	};

	return (
		<div>
			{router?.query?.id && <CreateStudyGroupScreen pageIdx={+router.query.id - 1} submitHandler={submitHandler} />}
		</div>
	);
};

export default CreateStudy;
