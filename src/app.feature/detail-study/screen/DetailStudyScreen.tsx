import PlusIcon from '@assets/study/plus_icon.svg';

import DetailGoals from '@app.feature/detail-study/component/DetailGoals';
import { useState } from 'react';

import { useRouter } from 'next/router';
import MyCollection from '../component/MyCollection';
import Collection from '../component/Collection';
import DetailGoalProgress from '../component/DetailGoalProgress';
import DetailStudyHeader from '../component/DetailStudyHeader';

interface Props {
	studyDetail: any; // TODO:타입 명시하기
}
// TO DO : layout 배치 mt 수정 용이하게 컴포넌트 props 개선 필요
export default function DetailStudyScreen({ studyDetail }: Props) {
	const router = useRouter();
	type CollectionType = 'team' | 'personal';
	const [collectionType, setCollectionType] = useState<CollectionType>('team'); // temp

	return (
		<div>
			<DetailStudyHeader
				groupName={studyDetail?.studyGroupDetailResponse?.groupName ?? ''}
				invitedUserNameList={studyDetail?.studyGroupDetailResponse?.invitedUserNameList ?? []}
			/>
			<div className="z-40">
				<DetailGoals
					groupGoal={studyDetail?.studyGroupDetailResponse?.groupGoal ?? ''}
					detailGoals={studyDetail?.studyGroupDetailResponse?.studyGroupGoalResponseList ?? []}
					groupId={studyDetail?.studyGroupDetailResponse?.groupId ?? 23}
				/>
				<div className="mt-[32.72px] flex items-start justify-between">
					<div className="space-y-[3px] flex flex-col">
						<span className="text-black-500 font-medium text-body2">스터디 문제집</span>
						<span className="text-[#FF8300] font-regular text-caption" />
					</div>
					<button onClick={() => router.push('/create-detail-goal/1')} type="button">
						<PlusIcon />
					</button>
				</div>
				<div className="mt-[22.93px] pt-[15.55px] px-[15.55px] rounded-t-[25px] drop-shadow-white bg-background-white -mx-[20px] ">
					<div className="flex justify-around">
						{['team', 'personal'].map((type) => (
							<button
								type="button"
								onClick={() => setCollectionType(type as CollectionType)}
								className={`w-[88.72px] pt-[10px] px-[10px]  ${
									collectionType === type ? 'pb-[6px] border-b-[4px] border-main' : 'pb-[10px]'
								}`}
							>
								<span className="text-[#999999] font-medium text-body1">{type === 'team' ? '팀' : '개인'}</span>
							</button>
						))}
					</div>

					<div className="mt-[41.71px]">
						<div className="grid place-items-center mt-[31px]">
							<DetailGoalProgress />
							<div className="-mt-[185px] w-full h-[36.15px] bg-background-white " />
							<div className="-mt-[95px] pb-[30px] w-full bg-background-white ">
								<div className="space-y-[14px]  h-[357.83px] overflow-y-auto">
									{collectionType === 'personal' ? (
										<>
											{(studyDetail?.studyGroupAndGoalDetailPersonalVerResponseList ?? []).map(() => (
												<MyCollection />
											))}
										</>
									) : (
										<>
											{(studyDetail?.studyGroupAndGoalDetailTeamVerResponseList ?? []).map((_: any, index: number) => (
												// eslint-disable-next-line react/no-array-index-key
												<Collection key={index} isSolved={index === 0} />
											))}
										</>
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
