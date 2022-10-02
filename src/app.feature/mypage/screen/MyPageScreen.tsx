import React, { useEffect, useState } from 'react';
import Router, { useRouter } from 'next/router';
import { useQuery } from '@tanstack/react-query';
import client from '@app.modules/api/client';
import Accordion from '@app.component/accordion';
import CategoryIcon from '@app.component/icon/CategoryIcon';
import MyPageUserProfile from '../component/profile/MyPageUserProfile';
import MyPageStudyCategory from '../component/category/MyPageStudyCategory';
import MyPageStudyStatusToggle from '../component/toggle/MyPageStudyStatusToggle';
import MyPageStudyAccordionContent from '../component/accordian-content/MyPageStudyAccordionContent';
import MyPageNoneStudyScreen from './MyPageNoneStudyScreen';
import fetchGetMyPageStudyList from '../api';

interface IStudyList {
	groupId: number;
	groupName: string;
	groupStartDate: string;
	groupEndDate: string;
	groupGoal: string;
	groupImageUrl: null | string;
	groupCategory: 'EMPLOYMENT' | 'LANGUAGE' | 'CERTIFICATE' | 'ETC';
	groupStatus: 'ACTIVE' | 'COMPLETE';
	studyGroupRate: number;
}

interface IFilteringInput {
	[key: string]: string;
}

export default function MyPageScreen() {
	const router = useRouter();
	const { toggle = 'active', category = 'all' } = router.query;

	const [userName, setUserName] = useState('');
	const [studyList, setStudyList] = useState<IStudyList[]>([]);

	const handleFilteringMyPage = (input: IFilteringInput) => {
		Router.push({
			pathname: '/mypage',
			query: { ...router.query, ...input },
		});
	};

	const query = useQuery(['group', 'my'], () => fetchGetMyPageStudyList(toggle), {
		retry: 1,
		onSuccess: ({ data }) => {
			setUserName(data?.result?.nickname);
			setStudyList(data?.result?.studyGroupResponses);
		},
		onError: () => {
			alert('알 수 없는 에러가 발생했습니다.');
		},
	});

	const filteredStudy = category !== 'all' ? studyList.filter((study) => study.groupCategory === category) : studyList;

	return (
		<div>
			{/* 프로필 영역 */}
			<MyPageUserProfile username={userName} />

			{/* 토글 영역 */}
			<MyPageStudyStatusToggle toggle={toggle} handleFilteringMyPage={handleFilteringMyPage} />

			{/* 스터디 카테고리 영역 */}
			<MyPageStudyCategory category={category} handleFilteringMyPage={handleFilteringMyPage} />

			{/* 스터디 리스트 영역 */}
			<section>
				{filteredStudy.length ? (
					<div>
						{filteredStudy.map((study) => (
							<Accordion
								className="mb-[10px]"
								icon={<CategoryIcon type={study.groupCategory} />}
								text={study.groupName}
								status={study.groupStatus}
								content={
									<MyPageStudyAccordionContent
										goal={study.groupGoal}
										groupId={study.groupId}
										achieveRate={study.studyGroupRate}
									/>
								}
							/>
						))}
					</div>
				) : (
					<MyPageNoneStudyScreen status={toggle} />
				)}
			</section>
		</div>
	);
}
