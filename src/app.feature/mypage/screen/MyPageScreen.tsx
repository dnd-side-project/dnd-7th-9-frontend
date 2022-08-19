import React from 'react';
import Router, { useRouter } from 'next/router';
import Accordion from '@app.component/accordion';
import CategoryIcon from '@app.component/icon/CategoryIcon';
import MyPageUserProfile from '../component/profile/MyPageUserProfile';
import MyPageStudyCategory from '../component/category/MyPageStudyCategory';
import MyPageStudyStatusToggle from '../component/toggle/MyPageStudyStatusToggle';
import MyPageStudyAccordionContent from '../component/accordian-content/MyPageStudyAccordionContent';
import MyPageNoneStudyScreen from './MyPageNoneStudyScreen';

interface IStudyList {
	groupId: number;
	groupName: string;
	groupStartDate: string;
	groupEndDate: string;
	groupGoal: string;
	groupImageUrl: null | string;
	groupCategory: 'language' | 'company' | 'certification' | 'etc';
	groupStatus: 'proceeding' | 'complete';
}

interface IFilteringInput {
	[key: string]: string;
}

export default function MyPageScreen() {
	const router = useRouter();
	const { toggle = 'proceeding', category = 'all' } = router.query;

	const handleFilteringMyPage = (input: IFilteringInput) => {
		Router.push({
			pathname: '/mypage',
			query: { ...router.query, ...input },
		});
	};

	const username = '박수정'; // DUMMY

	const studyList: IStudyList[] = [
		// DUMMY
		{
			groupId: 1,
			groupName: '중국어 스터디',
			groupStartDate: '2022-08-15',
			groupEndDate: '2022-12-15',
			groupGoal: '중국어 능력 마스터하기',
			groupImageUrl: null,
			groupCategory: 'language',
			groupStatus: 'proceeding',
		},
		{
			groupId: 2,
			groupName: 'GSAT 스터디',
			groupStartDate: '2022-08-15',
			groupEndDate: '2022-12-15',
			groupGoal: '삼성 취뽀 하기',
			groupImageUrl: null,
			groupCategory: 'company',
			groupStatus: 'proceeding',
		},
		{
			groupId: 2,
			groupName: '컴퓨터 자격증 스터디',
			groupStartDate: '2022-08-15',
			groupEndDate: '2022-12-15',
			groupGoal: '컴퓨터 자격증 1달만에 취득하기',
			groupImageUrl: null,
			groupCategory: 'certification',
			groupStatus: 'proceeding',
		},
	];

	const filteredStudyList = studyList.filter(
		(study) =>
			(category !== 'all' && study.groupCategory === category && study.groupStatus === toggle) ||
			(category === 'all' && study.groupStatus === toggle && study.groupStatus === toggle)
	);

	console.log(filteredStudyList);

	return (
		<div>
			{/* 프로필 영역 */}
			<MyPageUserProfile username={username} />

			{/* 토글 영역 */}
			<MyPageStudyStatusToggle toggle={toggle} handleFilteringMyPage={handleFilteringMyPage} />

			{/* 스터디 카테고리 영역 */}
			<MyPageStudyCategory category={category} handleFilteringMyPage={handleFilteringMyPage} />

			{/* 스터디 리스트 영역 */}
			<section>
				{filteredStudyList.length ? (
					<div>
						{filteredStudyList.map((study) => (
							<Accordion
								className="mb-[10px]"
								icon={<CategoryIcon type={study.groupCategory} />}
								text={study.groupName}
								status={study.groupStatus}
								content={
									<MyPageStudyAccordionContent goal={study.groupGoal} groupId={study.groupId} achieveRate={80} />
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
