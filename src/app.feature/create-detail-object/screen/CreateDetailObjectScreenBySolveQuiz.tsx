import React from 'react';
import MemberSolveIcon from '@assets/create-detail-object/member-solve.svg';
import LayoutCreateDetailObjectBySelect from '../component/layout/LayoutCreateDetailObjectBySelect';

/* id4 = 몇 개의 문제집을 풀어야하는지 */
export default function CreateDetailObjectScreenBySolveQuiz() {
	return (
		<div>
			<LayoutCreateDetailObjectBySelect
				title="스터디원 한 명당"
				svgIcon={<MemberSolveIcon />}
				description="몇 개의 문제집을 풀어야하나요?"
				minCount={1}
				maxCount={5}
				count={1}
			/>
		</div>
	);
}
