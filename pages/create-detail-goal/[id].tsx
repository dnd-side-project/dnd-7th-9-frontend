import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';
import Router, { useRouter } from 'next/router';
import PageController from '@app.component/pageController/PageController';
import CreateDetailGoalScreenByDate from '@app.feature/create-detail-goal/screen/CreateDetailGoalScreenByDate';
import CreateDetailGoalScreenByContent from '@app.feature/create-detail-goal/screen/CreateDetailGoalScreenByContent';
import CreateDetailGoalScreenByQuizCount from '@app.feature/create-detail-goal/screen/CreateDetailGoalScreenByQuizCount';
import CreateDetailGoalScreenBySolveQuiz from '@app.feature/create-detail-goal/screen/CreateDetailGoalScreenBySolveQuiz';
import CreateDetailGoalScreenByCorrectCount from '@app.feature/create-detail-goal/screen/CreateDetailGoalScreenByCorrectCount';
import CreateDetailGoalScreenByPassMember from '@app.feature/create-detail-goal/screen/CreateDetailGoalScreenByPassMember';
import useCreateDetailGoalStore, { useSetDetailGoalDateStore } from '@app.feature/create-detail-goal/store';
import { useMutation } from '@tanstack/react-query';
import Url from '@app.modules/constant/url';
import { postDetailGoal } from '@app.feature/create-detail-goal/api';

const CreateDetailGoal: NextPage = () => {
	const router = useRouter();
	const { id } = router.query;
	const STEPS_COUNT = 6;
	const { goalStartMonth, goalStartDay, goalEndMonth, goalEndDay } = useSetDetailGoalDateStore();
	const { detailGoal, setStudyGroupId, setGoalStartDate, setGoalEndDate, initDetailGoal } = useCreateDetailGoalStore();
	const { mutate } = useMutation(() => postDetailGoal(detailGoal), {
		onSuccess: (res) => {
			console.log(res);
		},
		onError: () => {
			alert('알 수 없는 에러가 발생했습니다.');
		},
		onSettled: () => {
			// router.push(Url.home);
			// initDetailGoal();
		},
	});
	const submitHandler = () => {
		//	if (!router?.query?.studyId) return;
		console.log('asdfasdf', detailGoal);

		mutate();
	};

	const CheckNameValidation = (): boolean => {
		if (!detailGoal?.goalContent?.trim()) {
			alert('세부목표를 적어 주세요.');
			return false;
		}
		return true;
	};
	const DateFormatter = (month: string, day: string) => {
		const date = new Date();
		const curYear = date.getFullYear();
		return `${curYear}-${month.length === 1 ? `0${month}` : month}-${day.length === 1 ? `0${day}` : day}`;
	};
	// TO DO : Util 함수로 분리하기
	const CheckDateValidation = (): boolean => {
		const startDate = DateFormatter(goalStartMonth, goalStartDay);
		const endDate = DateFormatter(goalEndMonth, goalEndDay);

		const today = new Date();
		const todayParse = Date.parse(`${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`);
		if (
			// eslint-disable-next-line no-restricted-globals
			isNaN(Date.parse(startDate))
		) {
			alert('유효한 시작 날짜를 입력해 주세요.');
			return false; // 실패 조건 : 유효한 날짜 형식이 아님
		}
		if (
			((goalEndMonth?.trim() || goalEndDay?.trim()) &&
				// eslint-disable-next-line no-restricted-globals
				(isNaN(Date.parse(endDate)) || todayParse > Date.parse(endDate))) ||
			Date.parse(endDate) < Date.parse(startDate)
		) {
			alert('유효한 마무리 날짜를 입력해 주세요.');
			return false; // 실패 조건: 유효한 날짜 형식이 아님,오늘 날짜보다 마무리 날짜가 이전임,시작 날짜보다 마무리 날짜가 이전임
		}
		setGoalStartDate(startDate);
		setGoalEndDate(endDate);
		return true;
	};

	const toPrevHandler = () => {
		if (!id) return;
		console.log(id);

		if (+id <= 1) return;

		Router.push(`/create-detail-goal/${+id - 1}`);
	};

	const toNextHandler = () => {
		if (!id) return;

		if (+id + 1 > STEPS_COUNT) return;
		if (+id === 1 && !CheckDateValidation()) return;
		if (+id === 2 && !CheckNameValidation()) return;

		// if (curPage === 3 && !CheckGoalValidation()) return;
		Router.push(`/create-detail-goal/${Number(id) + 1}`);
	};

	// TO DO : 각 스크린에서 request 값 저장
	// const { request, resetRequest } = useCreateDetailGoalStore();
	useEffect(() => {
		console.log(router);
	}, [router]);
	return (
		<div>
			{/* 스터디 기간 */}
			{id === '1' && <CreateDetailGoalScreenByDate />}
			{/* 세부 목표 */}
			{id === '2' && <CreateDetailGoalScreenByContent />}
			{/* 몇 개의 문제를 내야하는지 */}
			{id === '3' && <CreateDetailGoalScreenByQuizCount />}
			{/* 몇 개의 문제집을 풀어야하는지 */}
			{id === '4' && <CreateDetailGoalScreenBySolveQuiz />}
			{/* 몇 개의 문제를 맞춰야하는지 */}
			{id === '5' && <CreateDetailGoalScreenByCorrectCount />}
			{/* 몇 명이 문제집을 풀어야하는지 */}
			{id === '6' && <CreateDetailGoalScreenByPassMember />}

			<PageController
				curPage={Number(id)}
				pagesLength={6}
				toPrevHandler={toPrevHandler}
				toNextHandler={toNextHandler}
				finishHandler={() => {
					// TO DO : API 연동
					// resetRequest();
					submitHandler();
				}}
				finishWord="시작하기"
			/>
		</div>
	);
};
export default CreateDetailGoal;
