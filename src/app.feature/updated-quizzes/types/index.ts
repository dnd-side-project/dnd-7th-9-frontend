export interface IUpdatedQuiz {
	questionBookId: number;
	goalContent: string;
	userNickName: string;
	userProfileImageUrl?: string | null;
	studyGroupName: string;
	questionCreatedAt: string;
	solved: boolean;
}
