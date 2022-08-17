import create from 'zustand';

// temp

export interface IStudy {
	category: string; // TO DO : Uinion 으로 바꾸기
	name: string;
}
interface State {
	study: IStudy;
}
const useSolveQuizStore = create<State>((set) => ({
	study: {} as IStudy,
	setStudyName: (name: string) => set((state) => ({ study: { ...state.study, name } })),
}));

export default useSolveQuizStore;
