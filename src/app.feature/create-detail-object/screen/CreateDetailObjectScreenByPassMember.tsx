import React from 'react';
import MemberIcon from '@assets/create-detail-object/member.svg';
import LayoutCreateDetailObjectBySelect from '../component/layout/LayoutCreateDetailObjectBySelect';

/* id6 = 몇 명이 문제집을 풀어야하는지 */
export default function CreateDetailObjectScreenByPassMember() {
	return (
		<div>
			<LayoutCreateDetailObjectBySelect
				title="전체 스터디원 중"
				description="몇 명이 문제집 풀기에 성공해야하나요?"
				svgIcon={<MemberIcon />}
				minCount={1}
				maxCount={5}
				count={1}
			/>
		</div>
	);
}
