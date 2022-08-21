import DetailStudyHeader from '@app.feature/detail-study/component/header';
import PlusIcon from '@assets/study/plus_icon.svg';

import DetailGoals from '@app.feature/detail-study/component/DetailGoals';
import { useState } from 'react';

import MyCollection from '../component/MyCollection';
import Collection from '../component/Collection';
import DetailGoalProgress from '../component/DetailGoalProgress';

interface Props {
	studyId: string;
}
// TO DO : layout 배치 mt 수정 용이하게 컴포넌트 props 개선 필요
export default function DetailStudyScreen({ studyId }: Props) {
	type CollectionType = 'team' | 'personal';
	const [collectionType, setCollectionType] = useState<CollectionType>('team'); // temp
	return (
		<div>
			<DetailStudyHeader />
			<div className="z-40">
				<DetailGoals />
				<div className="mt-[32.72px] flex items-start justify-between">
					<div className="space-y-[3px] flex flex-col">
						<span className="text-black-500 font-medium text-body2">스터디 문제집</span>
						<span className="text-[#FF8300] font-regular text-caption">8문제집을 더 풀어야 해요!</span>
					</div>
					<button type="button">
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
											{[1, 1, 1, 1].map(() => (
												<MyCollection />
											))}
										</>
									) : (
										<>
											{[1, 1].map((_, index) => (
												<Collection isSolved={index === 0} />
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
