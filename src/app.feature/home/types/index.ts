import { TGoalStatus, TGroupCategory, TGroupStatus } from '@app.modules/types/group';

export interface IUserList {
	userNickname: string;
	userGoalResponseList: {
		studyGroupId: number;
		goalId: number;
		studyGroupCategory: TGroupCategory;
		studyGroupStatus: TGroupStatus;
		goalStatus: TGoalStatus;
		goalContent: string;
		studyGroupContent: string;
		questionBookSubmitted: boolean;
		groupEndDate: string; // YYYY-MM-DD
	}[];
	emptyGoalStudyGroup: {
		studyGroupId: number;
		studyGroupCategory: TGroupCategory;
		studyGroupStatus: TGroupStatus;
		studyGroupContent: string;
		studyGroupEndDate: string; // YYYY-MM-DD
	}[];
}
