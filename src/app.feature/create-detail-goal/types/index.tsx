export interface PostDetailGoalBody {
	studyGroupId: number;
	goalContent: string;
	goalStartDate: string;
	goalEndDate: string;
	minAnswerPerQuestionBook: number;
	minSolveQuestionBook: number;
	minQuestionPerQuestionBook: number;
	minPersonPerQuestionBook: number;
}
