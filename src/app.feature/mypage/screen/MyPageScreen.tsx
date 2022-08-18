import React from 'react';
import Router, { useRouter } from 'next/router';
import Accordion from '@app.component/accordion';
import CategoryIcon from '@app.component/icon/CategoryIcon';
import MyPageUserProfile from '../component/profile/MyPageUserProfile';
import MyPageStudyCategory from '../component/category/MyPageStudyCategory';
import MyPageStudyStatusToggle from '../component/toggle/MyPageStudyStatusToggle';
import MyPageStudyAccordionContent from '../component/accordian-content/MyPageStudyAccordionContent';

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

	console.log(router, router.query, toggle, category);
	return (
		<div>
			{/* 프로필 영역 */}
			<MyPageUserProfile />

			{/* 토글 영역 */}
			<MyPageStudyStatusToggle toggle={toggle} handleFilteringMyPage={handleFilteringMyPage} />

			{/* 스터디 카테고리 영역 */}
			<MyPageStudyCategory />

			{/* 스터디 리스트 영역 */}
			<section>
				<div>
					<Accordion
						className="mb-[10px]"
						icon={<CategoryIcon type="language" />}
						text="중국어 스터디"
						status="완료"
						content={<MyPageStudyAccordionContent />}
					/>
				</div>
			</section>
		</div>
	);
}
