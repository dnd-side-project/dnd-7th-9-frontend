import React, { useState } from 'react';
import Router, { useRouter } from 'next/router';
import { useQuery } from '@tanstack/react-query';
import Accordion from '@app.component/accordion';
import CategoryIcon from '@app.component/icon/CategoryIcon';
import fetchGetMyPageStudyList from '../api';
import MyPageNoneStudyScreen from './MyPageNoneStudyScreen';
import MyPageUserProfile from '../component/profile/MyPageUserProfile';
import MyPageStudyCategory from '../component/category/MyPageStudyCategory';
import MyPageStudyStatusToggle from '../component/toggle/MyPageStudyStatusToggle';
import MyPageStudyAccordionContent from '../component/accordian-content/MyPageStudyAccordionContent';

interface IStudyList {
	groupId: number;
	groupName: string;
	groupStartDate: string;
	groupEndDate: string;
	groupGoal: string;
	groupImageUrl: string | any;
	groupCategory: 'EMPLOYMENT' | 'LANGUAGE' | 'CERTIFICATE' | 'ETC';
	groupStatus: 'ACTIVE' | 'READY' | 'COMPLETE';
	studyGroupRate: number;
}

interface IFilteringInput {
	[key: string]: string;
}

export default function MyPageScreen() {
	const router = useRouter();
	const { toggle = 'active', category = 'all' } = router.query;

	// 유저 이름
	const [userName, setUserName] = useState('');

	// 진행 중 스터디, 완료된 스터디 갯수 count
	const [activeStudyCount, setActiveStudyCount] = useState(0);
	const [completeStudyCount, setCompleteStudyCount] = useState(0);

	// 진행 중 스터디, 완료된 스터디
	const [activeStudyList, setActiveStudyList] = useState<IStudyList[]>([]);
	const [completeStudyList, setCompleteStudyList] = useState<IStudyList[]>([]);

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
			setActiveStudyCount(data?.result?.activeStudyGroupCount);
			setCompleteStudyCount(data?.result?.completeStudyGroupCount);
			setActiveStudyList(data?.result?.activeStudyGroupResponses);
			setCompleteStudyList(data?.result?.completeStudyGroupResponses);
		},
		onError: () => {
			alert('알 수 없는 에러가 발생했습니다.');
		},
	});

	const getFilteredStudy = (studies: IStudyList[]) => {
		return category !== 'all' ? studies.filter((study) => study.groupCategory === category) : studies;
	};
	const studyList = toggle === 'active' ? getFilteredStudy(activeStudyList) : getFilteredStudy(completeStudyList);

	return (
		<div>
			{/* 프로필 영역 */}
			<MyPageUserProfile username={userName} />

			{/* 토글 영역 */}
			<MyPageStudyStatusToggle
				toggle={toggle}
				activeStudyCount={activeStudyCount}
				completeStudyCount={completeStudyCount}
				handleFilteringMyPage={handleFilteringMyPage}
			/>

			{/* 스터디 카테고리 영역 */}
			<MyPageStudyCategory category={category} handleFilteringMyPage={handleFilteringMyPage} />

			{/* 스터디 리스트 영역 */}
			<section>
				{studyList.length ? (
					<div>
						{studyList.map((study) => (
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
