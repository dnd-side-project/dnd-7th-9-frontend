import create from 'zustand';
import { Category, PostStudyBody } from '../types';

interface State {
	study: PostStudyBody; // TODO: key 이름 바꾸기
	inviteLink: string | null;
	studyId: number | string | null;
	memberList: string[];
	initStudy: () => void;
	setGroupCategory: (groupCategory: Category) => void;
	setGroupName: (groupName: string) => void;
	setGroupStartDate: (groupStartDate: string) => void;
	setGroupEndDate: (groupEndDate: string) => void;
	setGroupGoal: (groupGoal: string) => void;
	setInviteLink: (inviteUrl: string) => void;
	setStudyId: (groupId: string | number) => void;
	setMemberList: (memberList: string[]) => void;
}
const useCreateStudyStore = create<State>((set) => ({
	study: {} as PostStudyBody,
	inviteLink: null,
	studyId: null,
	memberList: [],
	initStudy: () =>
		set(() => ({
			study: {} as PostStudyBody,
			inviteLink: null,
			studyId: null,
			inviteMemberEmail: null,
			memberList: [],
		})),
	setGroupCategory: (groupCategory: Category) =>
		set((state) => ({ ...state, study: { ...state.study, groupCategory } })),
	setGroupName: (groupName: string) => set((state) => ({ ...state, study: { ...state.study, groupName } })),
	setGroupStartDate: (groupStartDate: string) =>
		set((state) => ({ ...state, study: { ...state.study, groupStartDate } })),
	setGroupEndDate: (groupEndDate: string) => set((state) => ({ ...state, study: { ...state.study, groupEndDate } })),
	setGroupGoal: (groupGoal: string) => set((state) => ({ ...state, study: { ...state.study, groupGoal } })),
	setInviteLink: (inviteLink: string) => set((state) => ({ ...state, inviteLink })),
	setStudyId: (studyId: string | number) => set((state) => ({ ...state, studyId })),
	setMemberList: (memberList: string[]) => set((state) => ({ ...state, memberList })),
}));
/* setInvitedUserEmailList: (invitedUserEmailList: string[]) =>
		set((state) => ({ study: { ...state.study, invitedUserEmailList } })), */
export default useCreateStudyStore;

interface InviteMemberState {
	inviteMemberEmail: string | null;
	initInviteMemberEmail: () => void;
	setInviteMemberEmail: (userEmail: string) => void;
}
export const useInviteMemberEmailStore = create<InviteMemberState>((set) => ({
	inviteMemberEmail: null,
	initInviteMemberEmail: () => set(() => ({ inviteMemberEmail: null })),
	setInviteMemberEmail: (userEmail: string) => set(() => ({ inviteMemberEmail: userEmail })),
}));

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
