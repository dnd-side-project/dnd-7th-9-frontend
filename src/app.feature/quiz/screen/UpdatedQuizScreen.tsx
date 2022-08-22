import React from 'react';
import PageTitle from '@app.component/title/PageTitle';
import BellIcon from '@assets/main/eva_bell-outline.svg';
import UpdatedQuizCard from '../component/card/UpdatedQuizCard';

interface IQuiz {
	questionBookId: number;
	goalContent: string;
	userNickName: string;
	userProfileImageUrl?: string | null;
	studyGroupName: string;
	questionCreatedAt: string;
	solved: boolean;
}

interface Props {
	updatedQuizData: IQuiz[];
}

export default function UpdatedQuizScreen({ updatedQuizData }: Props) {
	const nowDate = new Date();

	return (
		<div>
			<div className="flex justify-between mt-[40px] mb-[55px]">
				<PageTitle title="실시간 퀴즈" />
				<BellIcon className="cursor-pointer" />
			</div>
			<div className="h-full scroll-auto">
				{updatedQuizData.map((quiz) => {
					const createdDate = Date.parse(quiz.questionCreatedAt);
					const updateTime = (nowDate.getTime() - createdDate) / 1000;

					return (
						<div>
							{!quiz.solved && (
								<UpdatedQuizCard
									key={quiz.questionBookId}
									className="mb-[10px]"
									updateTime={updateTime}
									userNickName={quiz.userNickName}
									studyGroupName={quiz.studyGroupName}
									goalContent={quiz.goalContent}
								/>
							)}
						</div>
					);
				})}
			</div>
		</div>
	);
}
