import create from 'zustand';
import { Category, PostStudyBody } from '../types';

interface State {
	study: PostStudyBody;
	initStudy: () => void;
	setGroupCategory: (groupCategory: Category) => void;
	setGroupName: (groupName: string) => void;
	setGroupStartDate: (groupStartDate: string) => void;
	setGroupEndDate: (groupEndDate: string) => void;

	setGroupGoal: (groupGoal: string) => void;
	setInvitedUserEmailList: (invitedUserEmailList: string[]) => void;
}
const useCreateStudyStore = create<State>((set) => ({
	study: {} as PostStudyBody,
	initStudy: () => set(() => ({ study: {} as PostStudyBody })),
	setGroupCategory: (groupCategory: Category) => set((state) => ({ study: { ...state.study, groupCategory } })),
	setGroupName: (groupName: string) => set((state) => ({ study: { ...state.study, groupName } })),
	setGroupStartDate: (groupStartDate: string) => set((state) => ({ study: { ...state.study, groupStartDate } })),
	setGroupEndDate: (groupEndDate: string) => set((state) => ({ study: { ...state.study, groupEndDate } })),
	setGroupGoal: (groupGoal: string) => set((state) => ({ study: { ...state.study, groupGoal } })),
	setInvitedUserEmailList: (invitedUserEmailList: string[]) =>
		set((state) => ({ study: { ...state.study, invitedUserEmailList } })),
}));

export default useCreateStudyStore;

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
export const useSetStudyDateStore = create<DateState>((set) => ({
	groupStartMonth: '',
	groupStartDay: '',
	groupEndMonth: '',
	groupEndDay: '',
	setGroupStartMonth: (groupStartMonth: string) => set(() => ({ groupStartMonth })),
	setGroupStartDay: (groupStartDay: string) => set(() => ({ groupStartDay })),
	setGroupEndMonth: (groupEndMonth: string) => set(() => ({ groupEndMonth })),
	setGroupEndDay: (groupEndDay: string) => set(() => ({ groupEndDay })),
}));
