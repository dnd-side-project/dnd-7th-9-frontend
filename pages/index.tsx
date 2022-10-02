import type { NextPage } from 'next';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import HomeScreen from '@app.feature/home/screen/HomeScreen';
import InitHomeScreen from '@app.feature/home/screen/InitHomeScreen';
import fetchGetUserStudyList from '@app.feature/home/api';

const Home: NextPage = () => {
	const [userStudyList, setUserStudyList] = useState([]);

	const query = useQuery(['user', 'list'], () => fetchGetUserStudyList(), {
		retry: 1,
		onSuccess: (data) => {
			console.log(data.data.result);
			setUserStudyList(data.data.result);
		},
		onError: () => {
			alert('알 수 없는 에러가 발생했습니다.');
		},
	});

	return <div>{userStudyList.length ? <HomeScreen userStudyList={userStudyList} /> : <InitHomeScreen />}</div>;
};

export default Home;
