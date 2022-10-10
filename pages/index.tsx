import type { NextPage } from 'next';
import { useQuery } from '@tanstack/react-query';
import HomeScreen from '@app.feature/home/screen/HomeScreen';
import InitHomeScreen from '@app.feature/home/screen/InitHomeScreen';
import fetchGetUserStudyList from '@app.feature/home/api';
import { IUserList } from '@app.feature/home/types';

const Home: NextPage = () => {
	const { data = [], isLoading, error } = useQuery<IUserList[]>(['user', 'list'], fetchGetUserStudyList);

	// TO DO : loading, error 상태 화면

	return <div>{data.length ? <HomeScreen userStudyList={data} /> : <InitHomeScreen />}</div>;
};

export default Home;
