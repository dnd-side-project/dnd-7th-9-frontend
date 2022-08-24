import create from 'zustand';

// temp

export interface IStudy {
	groupName: string;
	groupStartDate: string; // TO DO "YYYY-MM-DD" 형식에 맞춰지게 타입 부여
	groupEndDate: string; // TO DO "YYYY-MM-DD" 형식에 맞춰지게 타입 부여
	groupGoal: string;
	groupCategory: string; // get study categories api를 통해 받아옴
	invitedUserEmailList: string[];
}
interface State {
	study: IStudy;
}
const useCreateStudyStore = create<State>((set) => ({
	study: {} as IStudy,
	initStudy: () => set(() => ({ study: {} as IStudy })),
	setGroupCategory: (groupCategory: string) => set((state) => ({ study: { ...state.study, groupCategory } })),
	setGroupName: (groupName: string) => set((state) => ({ study: { ...state.study, groupName } })),
	setGroupStartDate: (groupStartDate: string) => set((state) => ({ study: { ...state.study, groupStartDate } })),
	setEndDate: (groupEndDate: string) => set((state) => ({ study: { ...state.study, groupEndDate } })),
	setGroupGoal: (groupGoal: string) => set((state) => ({ study: { ...state.study, groupGoal } })),
	setinvitedUserEmailList: (invitedUserEmailList: string[]) =>
		set((state) => ({ study: { ...state.study, invitedUserEmailList } })),
}));

export default useCreateStudyStore;
