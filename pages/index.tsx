import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import HomeScreen from '@app.feature/home/screen/HomeScreen';
import InitHomeScreen from '@app.feature/home/screen/InitHomeScreen';
import { useQuery } from '@tanstack/react-query';
import fetchGetUserStudyList from '@app.feature/home/api';

const Home: NextPage = () => {
	const router = useRouter();

	const [userStudyList, setUserStudyList] = useState([]);

	const query = useQuery(['user', 'list'], () => fetchGetUserStudyList(), {
		retry: 1,
		onSuccess: (data) => {
			console.log(data.data.result);
			setUserStudyList(data.data.result);
		},
		onError: () => {
			alert('알 수 없는 에러가 발생했습니다.');
			// router.push('/');
		},
	});

	useEffect(() => {
		const accessToken = typeof window !== 'undefined' ? localStorage.getItem('TEST_TOKEN') : null;
		if (!accessToken) router.push('/login');
	}, []);

	return <div>{true ? <HomeScreen userStudyList={userStudyList} /> : <InitHomeScreen />}</div>;
};

export default Home;
