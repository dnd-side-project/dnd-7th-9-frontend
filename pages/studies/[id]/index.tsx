import React from 'react';

import { useRouter } from 'next/router';

import type { NextPage } from 'next';
import DetailStudyScreen from '@app.feature/detail-study/screen/DetailStudyScreen';

const DetailStudy: NextPage = () => {
	const router = useRouter();

	return <div>{router?.query?.id && <DetailStudyScreen studyId={`${router.query.id}`} />}</div>;
};

export default DetailStudy;
