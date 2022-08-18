import React from 'react';

import { useRouter } from 'next/router';

import type { NextPage } from 'next';
import DetailStudyScreen from '@app.feature/detail-study/screen/DetailStudyScreen';
// 임시로 5문제 만들기로 설정
const DetailStudy: NextPage = () => {
	const router = useRouter();

	/* useEffect(() => {
		setInitQuizzes(TEMP_QUIZZES);
	}, []); */
	return <div>{router?.query?.id && <DetailStudyScreen studyId={`${router.query.id}`} />}</div>;
};

export default DetailStudy;
