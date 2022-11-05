import type { NextPage } from 'next';
import { useQuery } from '@tanstack/react-query';
import HomeScreen from '@app.feature/home/screen/HomeScreen';
import InitHomeScreen from '@app.feature/home/screen/InitHomeScreen';
import fetchGetUserStudyList from '@app.feature/home/api';
import { IUserList } from '@app.feature/home/types';

const Home: NextPage = () => {
	// const DUMMY: IUserList = {
	// 	userNickname: '태연',
	// 	userGoalResponseList: [
	// 		{
	// 			studyGroupId: 21,
	// 			goalId: 8,
	// 			studyGroupCategory: 'EMPLOYMENT',
	// 			studyGroupStatus: 'ACTIVE',
	// 			goalStatus: 'READY',
	// 			goalContent: 'Test Goal',
	// 			studyGroupContent: 'DND 짱들',
	// 			questionBookSubmitted: false,
	// 			groupEndDate: '2022-10-22',
	// 		},
	// 		{
	// 			studyGroupId: 21,
	// 			goalId: 7,
	// 			studyGroupCategory: 'EMPLOYMENT',
	// 			studyGroupStatus: 'ACTIVE',
	// 			goalStatus: 'ACTIVE',
	// 			goalContent: 'Test Goal',
	// 			studyGroupContent: 'DND 짱들',
	// 			questionBookSubmitted: true,
	// 			groupEndDate: '2022-10-12',
	// 		},
	// 	],
	// 	emptyGoalStudyGroup: [
	// 		{
	// 			studyGroupId: 1,
	// 			studyGroupCategory: 'ETC',
	// 			studyGroupStatus: 'ACTIVE',
	// 			studyGroupContent: 'DND 짱들',
	// 			studyGroupEndDate: '2022-12-15',
	// 		},
	// 	],
	// };

	const { data, isLoading, error } = useQuery(['user', 'list'], fetchGetUserStudyList);

	if (isLoading) return <div> </div>;

	return (
		<div>
			{data.result.userGoalResponseList.length || data.result.emptyGoalStudyGroup.length ? (
				<HomeScreen studyGoalData={data.result} />
			) : (
				<InitHomeScreen />
			)}
		</div>
	);
};

export default Home;
