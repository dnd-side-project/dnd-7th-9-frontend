import React from 'react';

import { useRouter } from 'next/router';

import type { NextPage } from 'next';
import DetailStudyScreen from '@app.feature/detail-study/screen/DetailStudyScreen';
import { useQuery } from '@tanstack/react-query';
import { getStudyDetail } from '@app.feature/detail-study/api';

const DetailStudy: NextPage = () => {
	const router = useRouter();
	const { data: studyDetailData } = useQuery(['studyDetail'], () => getStudyDetail(router.query.id), {
		enabled: !!router.query.id,
		onSuccess: (res) => console.log(res),
		onError: (err) => console.log(err),
	});
	return <DetailStudyScreen studyDetail={studyDetailData} />;
};

export default DetailStudy;
