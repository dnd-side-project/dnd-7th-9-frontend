import create from 'zustand';
import { PostDetailGoalBody } from '../types';

interface State {
	detailGoal: PostDetailGoalBody;
	initDetailGoal: () => void;
	setStudyGroupId: (studyGroupId: number) => void;
	setGoalContent: (goalContent: string) => void;
	setGoalStartDate: (goalStartDate: string) => void;
	setGoalEndDate: (goalEndDate: string) => void;
	setMinAnswerPerQuestionBook: (minAnswerPerQuestionBook: number) => void;
	setMinSolveQuestionBook: (minSolveQuestionBook: number) => void;
	setMinQuestionPerQuestionBook: (minQuestionPerQuestionBook: number) => void;
	setMinPersonPerQuestionBook: (minPersonPerQuestionBook: number) => void;
}

const INIT_STATE = {
	studyGroupId: 41,
	minAnswerPerQuestionBook: 1,
	minSolveQuestionBook: 1,
	minQuestionPerQuestionBook: 1,
	minPersonPerQuestionBook: 1,
} as PostDetailGoalBody;

const useCreateDetailGoalStore = create<State>((set) => ({
	detailGoal: INIT_STATE,
	initDetailGoal: () => set(() => ({ detailGoal: INIT_STATE })),
	setStudyGroupId: (studyGroupId: number) => set((state) => ({ detailGoal: { ...state.detailGoal, studyGroupId } })),
	setGoalContent: (goalContent: string) => set((state) => ({ detailGoal: { ...state.detailGoal, goalContent } })),
	setGoalStartDate: (goalStartDate: string) => set((state) => ({ detailGoal: { ...state.detailGoal, goalStartDate } })),
	setGoalEndDate: (goalEndDate: string) => set((state) => ({ detailGoal: { ...state.detailGoal, goalEndDate } })),
	setMinAnswerPerQuestionBook: (minAnswerPerQuestionBook: number) =>
		set((state) => ({ detailGoal: { ...state.detailGoal, minAnswerPerQuestionBook } })),
	setMinSolveQuestionBook: (minSolveQuestionBook: number) =>
		set((state) => ({ detailGoal: { ...state.detailGoal, minSolveQuestionBook } })),
	setMinQuestionPerQuestionBook: (minQuestionPerQuestionBook: number) =>
		set((state) => ({ detailGoal: { ...state.detailGoal, minQuestionPerQuestionBook } })),
	setMinPersonPerQuestionBook: (minPersonPerQuestionBook: number) =>
		set((state) => ({ detailGoal: { ...state.detailGoal, minPersonPerQuestionBook } })),
}));

export default useCreateDetailGoalStore;

interface DateState {
	goalStartMonth: string;
	goalStartDay: string;
	goalEndMonth: string;
	goalEndDay: string;
	setGoalStartMonth: (goalStartMonth: string) => void;
	setGoalStartDay: (goalStartDay: string) => void;
	setGoalEndMonth: (goalEndMonth: string) => void;
	setGoalEndDay: (goalEndDay: string) => void;
}
export const useSetDetailGoalDateStore = create<DateState>((set) => ({
	goalStartMonth: '',
	goalStartDay: '',
	goalEndMonth: '',
	goalEndDay: '',
	setGoalStartMonth: (goalStartMonth: string) => set(() => ({ goalStartMonth })),
	setGoalStartDay: (goalStartDay: string) => set(() => ({ goalStartDay })),
	setGoalEndMonth: (goalEndMonth: string) => set(() => ({ goalEndMonth })),
	setGoalEndDay: (goalEndDay: string) => set(() => ({ goalEndDay })),
}));
