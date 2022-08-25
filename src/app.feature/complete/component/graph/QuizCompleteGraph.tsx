import React from 'react';
import 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';
import PersonIcon from '@assets/complete/person.svg';
import RunningPersonIcon from '@assets/complete/running-person.svg';
import QuizCompleteGraphScore from './QuizCompleteGraphScore';

interface Props {
	// score: number; // 유저의 이번주 목표 점수 (최종 점수)
	// solveScore: number; // 기존 문제 해결 점수
	// createScore: number; // 기존 문제 생성 점수
	// addPercentageCreate?: number; // 증가한 목표달성율 퍼센티지 (문제 출제 ver) => 0 혹은 50
	// addPercentageSolve?: number; // 증가한 목표달성율 퍼센티지 (문제 풀기 ver)
	// correctCount?: number; // 사용자가 맞춘 갯수
	// totalCount?: number; // 문제집 문제 전체 갯수

	addedRate: number; // 추가된 달성률
	userTotalRate: number; // 현재 세부 목표에 대한 총 달성률
	questionBookPostRate: number; // 문제 출제로 부터 얻은 달성률
	questionBookSolveRate: number; // 문제 풀이로 부터 얻은 달성률
}

export default function QuizCompleteGraph({
	// solveScore,
	// createScore,
	// addPercentageCreate = 0,
	// addPercentageSolve = 0,

	addedRate, // 추가된 달성률
	userTotalRate, // 현재 세부 목표에 대한 총 달성률
	questionBookPostRate, // 문제 출제로 부터 얻은 달성률
	questionBookSolveRate, // 문제 풀이로 부터 얻은 달성률

	...props
}: Props) {
	// TO DO : 백그라운드 컬러 그라데이션
	// TO DO : border 점선 효과..!

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
				data: [50, 50 - questionBookPostRate, questionBookPostRate],
				...chartCommonStyle,
			},
		],
	};

	const quizSolveChartData = {
		labels: ['quiz-solve'],
		datasets: [
			{
				label: 'quizSolve',
				borderColor: ['rgba( 255, 255, 255, 0)', '#02CABF', 'rgba( 255, 255, 255, 0)'],
				backgroundColor: ['#93F358', 'rgba( 255, 255, 255, 0)', 'rgba( 255, 255, 255, 0 )'],
				data: [questionBookSolveRate, 50 - questionBookSolveRate, 50],
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

	return (
		<div className="grid place-items-center mt-[31px]">
			<div>{addedRate > 0 ? <RunningPersonIcon /> : <PersonIcon />}</div>

			<div className="relative mt-[13px] h-[300px] w-[300px]">
				<Doughnut className="absolute drop-shadow-graph" data={quizCreateChartData} options={chartOptions} />
				<Doughnut className="absolute drop-shadow-graph" data={quizSolveChartData} options={chartOptions} />

				<div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
					<QuizCompleteGraphScore userTotalRate={userTotalRate} {...props} />
				</div>
			</div>
		</div>
	);
}
