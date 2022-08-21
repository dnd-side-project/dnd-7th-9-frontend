import { useRouter } from 'next/router';

import DetailStudyHeader from '@app.feature/detail-study/component/header';
import PlusIcon from '@assets/study/plus_icon.svg';

import 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';
import PersonIcon from '@assets/complete/person.svg';
import RunningPersonIcon from '@assets/complete/running-person.svg';

import DocumentIcon from '@assets/study/fluent_document-edit-20-regular.svg';

import ArrowBottomIcon from '@assets/main/arrow-bottom.svg';
import ArrowTopIcon from '@assets/main/arrow-top.svg';
import { useState } from 'react';
import DefaultButton from '@app.component/button/DefaultButton';

interface Props {
	studyId: string;
}
const DUMMY_DATA1 = {
	score: 80,
	solveScore: 30, // 기존 문제 해결 점수
	createScore: 0, // 기존 문제 작성 점수
	addPercentageCreate: 50, // 증가한 목표달성율 퍼센티지 (문제 출제 ver) => 0 혹은 50
	addPercentageSolve: 0, // 증가한 목표달성율 퍼센티지 (문제 풀기 ver)
	correctCount: 0, // 사용자가 맞춘 갯수
	totalCount: 5, // 문제집 문제 전체 갯수
};
const chartCommonStyle = {
	cutout: '85%',
	borderRadius: 100,
	borderWidth: [0, 1, 0],
};

const quizCreateChartData = {
	labels: ['quiz-create'],
	datasets: [
		{
			label: 'quizCreate',
			borderColor: ['rgba( 255, 255, 255, 0)', '#02CABF', 'rgba( 255, 255, 255, 0)'],
			backgroundColor: ['rgba( 255, 255, 255, 0)', 'rgba( 255, 255, 255, 0 )', '#01AEB7'],
			data: [
				50,
				50 - DUMMY_DATA1.addPercentageCreate - DUMMY_DATA1.createScore,
				DUMMY_DATA1.addPercentageCreate + DUMMY_DATA1.createScore,
			],
			...chartCommonStyle,
		},
	],
};

const chartOptions = {
	plugins: {
		legend: {
			display: false,
		},
		tooltip: {
			enabled: false,
		},
	},
};
function MyCollection() {
	const [isOpenedAccordion, setIsOpenedAccordion] = useState(false);
	const handleAccordion = () => setIsOpenedAccordion(!isOpenedAccordion);
	return (
		<div className="bg-[#EFF3F6] rounded w-full">
			<div className="rounded-t  p-[16px] space-y-[15px]">
				<span className="font-medium text-black-500 text-headline">내 문제집</span>
				<div className="flex justify-between">
					<div className="flex items-center space-x-[6px]">
						<div className="bg-[#E2EFFF] rounded-full w-[30px] h-[30px]" />
						<span className="text-black-500 font-regular text-caption">박수정</span>
					</div>
					{true ? (
						<button
							type="button"
							onClick={() => setIsOpenedAccordion((prev) => !prev)}
							className="flex items-center space-x-[10.56px]"
						>
							<span className="text-brown font-bold text-small2">7명 풀이 완료</span>
							<ArrowBottomIcon />
						</button>
					) : (
						<DefaultButton text="수정하기" size="small" width="w-[109.77px]" />
					)}
				</div>
			</div>
			<div
				className={`
	${isOpenedAccordion ? 'visible  ' : 'invisible h-0'}
 
	`}
			>
				<hr className="text-[#D9D9D9] mb-[16px]" />
				<div className="   pb-[16px] grid grid-cols-3 place-items-center  gap-y-[25px]">
					{[1, 1, 1, 1, 1, 1].map((_, index) => (
						// eslint-disable-next-line react/no-array-index-key
						<div key={index} className="flex items-center space-x-[6px]">
							<div className="bg-[#E2EFFF] rounded-full w-[30px] h-[30px]" />
							<span className="text-black-500 font-regular text-caption">박수정</span>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
/*
<div key={index} className="flex items-center space-x-[6px]">
							<div className="bg-green-500 rounded-full w-[30px] h-[30px]" />
							<span className="text-black-500 font-regular text-caption">박수정</span>
						</div>
*/

export default function DetailStudyScreen({ studyId }: Props) {
	const [curGoalId, setCurGoalId] = useState<number>(0); // temp
	const [collectionType, setCollectionType] = useState<'team' | 'personal'>('team'); // temp
	return (
		<div>
			<DetailStudyHeader />
			<div className="z-40">
				<div className="flex items-center mt-[160.13px] space-x-[9.25px]">
					<span className="text-body2 text-black-400 font-medium ">전체 목표</span>
					<span className=" text-body2 text-slate font-medium ">오픽 AL 달성</span>
				</div>
				<div className="mt-[19.87px]  pt-[36.72px] bg-background-white -mx-[20px] px-[20px] pb-[29.08px] ">
					<span className="text-black-500 font-medium text-body2">세부 목표</span>
					<div className="mt-[22px] flex items-center space-x-[12.2px] overflow-x-auto ">
						{[1, 1, 1].map((_, index) => (
							<button
								type="button"
								onClick={() => setCurGoalId(index)}
								className={`rounded ${
									curGoalId === index ? 'bg-slate' : 'bg-[#EEEEEE]'
								} p-[12.2px] flex flex-col items-start w-[135.2px] min-w-[135.2px]  min-h-[135.2px] `}
							>
								<span
									className={`${
										curGoalId === index ? 'text-white' : 'text-slate'
									} block h-[48px] text-white text-body2 overflow-y-auto font-medium text-start  `}
								>
									집 문제 예상 답변 준비하기
								</span>
								<span
									className={`${
										curGoalId === index ? 'text-white' : 'text-slate'
									} block my-[9.4px] text-caption font-regular`}
								>
									8/31-9/2
								</span>
								<span className={`${curGoalId === index ? 'text-white' : 'text-slate'} text-caption font-bold`}>
									목표 달성률 90%
								</span>
							</button>
						))}
						<div className="rounded bg-[#EEEEEE]  grid place-items-center w-[135.2px]  min-w-[135.2px] h-[135.2px]  min-h-[135.2px]">
							<PlusIcon />
						</div>
					</div>
				</div>
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
								onClick={() => setCollectionType(type)}
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
							<div>
								{DUMMY_DATA1.addPercentageCreate + DUMMY_DATA1.addPercentageSolve > 0 ? (
									<RunningPersonIcon />
								) : (
									<PersonIcon />
								)}
							</div>

							<div className="relative mt-[2.36px] h-[220px] w-[220px] rotate-90 -z-50">
								<Doughnut className="absolute drop-shadow-graph" data={quizCreateChartData} options={chartOptions} />
								<div className="absolute top-1/2 -bottom-[65px] left-1/2 translate-x-[-50%] translate-y-[-50%] -rotate-90 flex flex-col items-center space-y-[5px]  ">
									<div className="flex">
										<div className="mr-[5px]">
											<DocumentIcon />
										</div>
										<p className="text-caption font-bold text-slate">
											{DUMMY_DATA1.correctCount}/{DUMMY_DATA1.totalCount}
										</p>
									</div>
									<div className=" grid place-items-center rounded-t-full w-[123.79px] h-[61.89px] drop-shadow-graph bg-[#EFF3F6]">
										<span className="font-bold text-title2 text-black-400">60%</span>
									</div>
								</div>
							</div>
							<div className="-mt-[185px] w-full h-[36.15px] bg-background-white " />
							<div className="-mt-[95px] pb-[30px] w-full bg-background-white ">
								<div className="space-y-[14px]  h-[357.83px] overflow-y-auto">
									{[1, 1, 1, 1].map(() => (
										<MyCollection />
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
