import type { NextPage } from 'next';

import HomeScreen from '@app.feature/home/screen/HomeScreen';
import InitHomeScreen from '@app.feature/home/screen/InitHomeScreen';

const Home: NextPage = () => {
	return <div>{false ? <HomeScreen /> : <InitHomeScreen />}</div>;
};

export default Home;
