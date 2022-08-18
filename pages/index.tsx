import type { NextPage } from 'next';

import HomeScreen from '@app.feature/home/screen/HomeScreen';
import InitHomeScreen from '@app.feature/home/screen/InitHomeScreen';

const Home: NextPage = () => {
	const tempNumOfStudy = [1, 1, 1]; // 테스트용 임시 array
	return <div>{tempNumOfStudy.length ? <HomeScreen /> : <InitHomeScreen />}</div>;
};

export default Home;
