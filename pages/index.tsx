import type { NextPage } from 'next';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import HomeScreen from '@app.feature/home/screen/HomeScreen';
import InitHomeScreen from '@app.feature/home/screen/InitHomeScreen';
import fetchGetUserStudyList from '@app.feature/home/api';

const Home: NextPage = () => {
	const [userStudyList, setUserStudyList] = useState([
		{
			studyGroupListResponse: {
				groupId: 1,
				groupName: 'DND 짱들',
				groupStartDate: '2022-08-15',
				groupEndDate: '2022-12-15',
				groupGoal: '사이드 프로젝트',
				groupImageUrl: null,
				groupCategory: 'EMPLOYMENT',
				groupStatus: 'ACTIVE',
			},
			activeGoalResponse: {
				goalContent: 'DND 프로젝트 디벨롭 회의 및 정리',
				goalStartDate: '2022-09-07',
				goalEndDate: '2022-09-30',
				goalStatus: 'ACTIVE',
				achieveGoalStatus: false,
				checkSubmitQuestionBook: false,
				checkSolveQuestionBook: true,
				clearSolveQuestionBookNum: 0,
				toSolveQuestionBookNum: 0,
				questionPerQuestionBook: 2, // 추가 (문제 생성 시, 세부 목표에 저장되어 있는 문제 개수 정보 필요)
			},
		},
	]);

	// const query = useQuery(['user', 'list'], () => fetchGetUserStudyList(), {
	// 	retry: 1,
	// 	onSuccess: (data) => {
	// 		console.log(data.data.result);
	// 		setUserStudyList(data.data.result);
	// 	},
	// 	onError: () => {
	// 		alert('알 수 없는 에러가 발생했습니다.');
	// 	},
	// });

	return <div>{userStudyList.length ? <HomeScreen userStudyList={userStudyList} /> : <InitHomeScreen />}</div>;
};

export default Home;
