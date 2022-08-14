import PageTitleSubContent from '@app.component/title/PageTitleSubContent';
import React from 'react';
import NoneQuizCard from '../component/card/NoneQuizCard';

export default function UpdatedQuizNoneScreen() {
	return (
		<div>
			<PageTitleSubContent
				className="mt-[57px]"
				title="실시간 문제집"
				sub={`나의 스터디 그룹 내에서 함께\n목표에 맞는 문제를 시작해봐요!`}
			/>
			<div>
				<NoneQuizCard />
				<p className="text-center text-body2 text-slate mt-[24px] font-[350]">
					아직 풀어야하는 문제집이
					<br /> 등록되지 않았어요.
				</p>
			</div>
		</div>
	);
}
