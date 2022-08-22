import create from 'zustand';

export interface ICreateDetailGoalRequest {
	studyGroupId: number;
	goalContent: string;
	goalStartDate: string;
	goalEndDate: string;
	minQuestionPerQuestionBook: number;
	minSolveQuestionBook: number;
	minAnswerPerQuestionBook: number;
	minPersonPerQuestionBook: number;
}

interface State {
	request: ICreateDetailGoalRequest;
	updateDetailGoalContent: (input: { [key: string]: string }) => void;
	resetRequest: () => void;
}

const initRequest: ICreateDetailGoalRequest = {
	studyGroupId: 0,
	goalContent: '',
	goalStartDate: '',
	goalEndDate: '',
	minQuestionPerQuestionBook: 1,
	minSolveQuestionBook: 1,
	minAnswerPerQuestionBook: 1,
	minPersonPerQuestionBook: 1,
};

export const useCreateDetailGoalStore = create<State>((set) => ({
	request: initRequest,
	updateDetailGoalContent: (input) => set((state) => ({ request: { ...state.request, ...input } })),
	resetRequest: () => set(() => ({ request: initRequest })),
}));
