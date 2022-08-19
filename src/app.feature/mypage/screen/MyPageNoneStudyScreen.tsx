import React from 'react';
import NoStudyIcon from '@assets/mypage/no-study.svg';

interface Props {
	status: 'proceeding' | 'completed' | string | string[];
}

export default function MyPageNoneStudyScreen({ status }: Props) {
	return (
		<div className="grid place-items-center mt-[100px] mb-[160px]">
			<NoStudyIcon />
			<p className="text-slate text-body2 font-[350] mt-[30px]">
				아직 {status === 'completed' ? '완료된' : '진행 중인'} 스터디가 없어요.
			</p>
		</div>
	);
}
