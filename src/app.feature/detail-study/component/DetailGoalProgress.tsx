import 'chart.js/auto';

import { Doughnut } from 'react-chartjs-2';

import RunningPersonIcon from '@assets/complete/running-person.svg';

import DocumentIcon from '@assets/study/fluent_document-edit-20-regular.svg';
import PersonIcon from '@assets/complete/person.svg';

const DUMMY_DATA1 = {
	score: 0,
	solveScore: 0, // 기존 문제 해결 점수
	createScore: 0, // 기존 문제 작성 점수
	addPercentageCreate: 0, // 증가한 목표달성율 퍼센티지 (문제 출제 ver) => 0 혹은 50
	addPercentageSolve: 0, // 증가한 목표달성율 퍼센티지 (문제 풀기 ver)
	correctCount: 0, // 사용자가 맞춘 갯수
	totalCount: 0, // 문제집 문제 전체 갯수
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

export default function DetailGoalProgress() {
	return (
		<>
			<div>
				{DUMMY_DATA1.addPercentageCreate + DUMMY_DATA1.addPercentageSolve > 0 ? <RunningPersonIcon /> : <PersonIcon />}
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
						<span className="font-bold text-title2 text-black-400">0%</span>
					</div>
				</div>
			</div>
		</>
	);
}
