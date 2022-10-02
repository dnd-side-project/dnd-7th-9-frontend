import React from 'react';
import DefaultButton from '@app.component/button/DefaultButton';
import { useRouter } from 'next/router';

interface Props {
	groupId: number;
}

export default function StudyGoalAccordionContent({ groupId }: Props) {
	const router = useRouter();
	return (
		<div>
			<div className="grid grid-cols-2 gap-2">
				<DefaultButton
					className="mt-3"
					// TO DO : 문제집 번호로 연결
					// onClick={() => router.push(``)}
					text="문제집 보러가기"
				/>
				{/* goalId 함께 넘겨주기 */}
				<DefaultButton className="mt-3" onClick={() => router.push(`/create-quiz/${groupId}`)} text="문제 작성하기" />
			</div>
		</div>
	);
}
