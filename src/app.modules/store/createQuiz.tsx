import create from 'zustand';

// temp

const initQuiz = {
	question: '',
	choices: [{ id: 0, content: '', isAnswer: false }],
};

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
	quizzes: [initQuiz],
	setInitQuizzes: (quizLength: number) =>
		set(() => ({
			quizzes: Array.from({ length: quizLength }, () => initQuiz),
		})),

	editQuiz: (newQuiz: IQuiz, quizIdx: number) =>
		set((state) => {
			const prevQuizzes = state.quizzes.slice(0, quizIdx);
			const nextQuizzes = state.quizzes.slice(quizIdx + 1);
			return { quizzes: [...prevQuizzes, newQuiz, ...nextQuizzes] };
		}),
	editQuestion: (newQuestion: string, quizIdx: number) =>
		set((state) => {
			const prevQuizzes = state.quizzes.slice(0, quizIdx);
			const nextQuizzes = state.quizzes.slice(quizIdx + 1);
			const newQuiz = { ...state.quizzes[quizIdx], question: newQuestion };
			return { quizzes: [...prevQuizzes, newQuiz, ...nextQuizzes] };
		}),
	editChoice: (newChoiceContent: string, quizIdx: number, choiceId: number) =>
		set((state) => {
			const prevQuizzes = state.quizzes.slice(0, quizIdx);
			const nextQuizzes = state.quizzes.slice(quizIdx + 1);

			const newQuiz = {
				...state.quizzes[quizIdx],
				choices: state.quizzes[quizIdx].choices.map((choice) => {
					if (choice.id === choiceId) return { ...choice, content: newChoiceContent };
					return choice;
				}),
			} as IQuiz;
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
			quizzes: [initQuiz],
		}),
}));

export default useCreateQuizStore;
