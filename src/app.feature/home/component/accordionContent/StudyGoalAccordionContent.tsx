import React from 'react';
import DefaultButton from '@app.component/button/DefaultButton';
import { useRouter } from 'next/router';

interface Props {
	groupId: number;
	studyId?: number;
}

export default function StudyGoalAccordionContent({ groupId, studyId }: Props) {
	const router = useRouter();
	return (
		<div>
			<div className="grid grid-cols-2 gap-2">
				<DefaultButton
					className="mt-3"
					// TO DO : 스터디 번호로 연결
					onClick={() => router.push(`/studies/${studyId}`)}
					text="문제집 보러가기"
				/>
				{/* TO DO : goal Id 로 연결 */}
				<DefaultButton className="mt-3" onClick={() => router.push(`/create-quiz/${groupId}`)} text="문제 작성하기" />
			</div>
		</div>
	);
}
