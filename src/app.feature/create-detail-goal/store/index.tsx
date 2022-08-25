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
const useCreateDetailGoalStore = create<State>((set) => ({
	detailGoal: {} as PostDetailGoalBody,
	initDetailGoal: () => set(() => ({ detailGoal: {} as PostDetailGoalBody })),
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
	groupStartMonth: string;
	groupStartDay: string;
	groupEndMonth: string;
	groupEndDay: string;
	setGroupStartMonth: (groupStartMonth: string) => void;
	setGroupStartDay: (groupStartDay: string) => void;
	setGroupEndMonth: (groupEndMonth: string) => void;
	setGroupEndDay: (groupEndDay: string) => void;
}
export const useSetDetailGoalDateStore = create<DateState>((set) => ({
	groupStartMonth: '',
	groupStartDay: '',
	groupEndMonth: '',
	groupEndDay: '',
	setGroupStartMonth: (groupStartMonth: string) => set(() => ({ groupStartMonth })),
	setGroupStartDay: (groupStartDay: string) => set(() => ({ groupStartDay })),
	setGroupEndMonth: (groupEndMonth: string) => set(() => ({ groupEndMonth })),
	setGroupEndDay: (groupEndDay: string) => set(() => ({ groupEndDay })),
}));
