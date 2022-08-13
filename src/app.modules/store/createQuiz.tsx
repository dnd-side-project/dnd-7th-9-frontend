import create from 'zustand';

// temp

interface IQuiz {
	question: string;
	choices: { id: number; content: string; isAnswer: boolean }[];
}
interface State {
	quizLength: number;
	quizzes: IQuiz[];
}
const useCreateQuizStore = create<State>((set) => ({
	quizLength: 1,
	quizzes: [
		{
			question: '',
			choices: [{ id: 0, content: '', isAnswer: false }],
		},
	],
	setInitQuizzes: (quizLength: number) =>
		set(() => ({
			quizzes: Array.from({ length: quizLength }, () => ({
				question: '',
				choices: [{ id: 0, content: '', isAnswer: false }],
			})),
		})),
	pushQuiz: (newQuiz: IQuiz) => set((state) => ({ quizzes: [...state.quizzes, newQuiz] })),
	editQuiz: (newQuiz: IQuiz, quizIdx: number) =>
		set((state) => {
			const prevQuizzes = state.quizzes.slice(0, quizIdx);
			const nextQuizzes = state.quizzes.slice(quizIdx + 1);
			return { quizzes: [...prevQuizzes, newQuiz, ...nextQuizzes] };
		}),
	addChoice: (quizIdx: number) =>
		set((state) => {
			if (state.quizzes[quizIdx].choices.length >= 5) return { quizzes: state.quizzes };
			const prevQuizzes = state.quizzes.slice(0, quizIdx);
			const nextQuizzes = state.quizzes.slice(quizIdx + 1);
			const newQuiz = {
				...state.quizzes[quizIdx],
				choices: [
					...state.quizzes[quizIdx].choices,
					{ id: state.quizzes[quizIdx].choices.length, content: '', isAnswer: false },
				],
			} as IQuiz;
			return { quizzes: [...prevQuizzes, newQuiz, ...nextQuizzes] };
		}),
	checkAnswer: (quizIdx: number, choiceId: number) =>
		set((state) => {
			const prevQuizzes = state.quizzes.slice(0, quizIdx);
			const nextQuizzes = state.quizzes.slice(quizIdx + 1);

			const newQuiz = {
				...state.quizzes[quizIdx],
				choices: state.quizzes[quizIdx].choices.map((choice) => {
					if (choice.id === choiceId) return { ...choice, isAnswer: !choice.isAnswer };
					return choice;
				}),
			} as IQuiz;
			return { quizzes: [...prevQuizzes, newQuiz, ...nextQuizzes] };
		}),
	deleteChoice: (quizIdx: number, choiceId: number) =>
		set((state) => {
			const prevQuizzes = state.quizzes.slice(0, quizIdx);
			const nextQuizzes = state.quizzes.slice(quizIdx + 1);

			const newQuiz = {
				...state.quizzes[quizIdx],
				choices: state.quizzes[quizIdx].choices.filter((choice) => choice.id !== choiceId),
			} as IQuiz;
			return { quizzes: [...prevQuizzes, newQuiz, ...nextQuizzes] };
		}),
	initQuizzes: () =>
		set({
			quizzes: [
				{
					question: '',
					choices: [{ id: 0, content: '', isAnswer: false }],
				},
			],
		}),
}));

export default useCreateQuizStore;
