import { TGoalStatus, TGroupCategory, TGroupStatus } from '@app.modules/types/group';

export interface IUserList {
	studyGroupListResponse: {
		groupId: number;
		groupName: string; // YYYY-MM-DD
		groupStartDate: string; // YYYY-MM-DD
		groupEndDate: string; // YYYY-MM-DD
		groupGoal: string;
		groupImageUrl: string; // TO DO
		groupCategory: TGroupCategory;
		groupStatus: TGroupStatus;
	};
	activeGoalResponse: {
		goalContent: string;
		goalStartDate: string; // YYYY-MM-DD
		goalEndDate: string; // YYYY-MM-DD
		goalStatus: TGoalStatus;
		achieveGoalStatus: boolean;
		checkSubmitQuestionBook: boolean;
		checkSolveQuestionBook: boolean;
		clearSolveQuestionBookNum: number;
		toSolveQuestionBookNum: number;
		questionPerQuestionBook: number; // 추가 (문제 생성 시, 세부 목표에 저장되어 있는 문제 개수 정보 필요)
	};
}
