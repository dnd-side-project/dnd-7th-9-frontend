import create from 'zustand';

// temp
export interface IQuiz {
	question: string;
	choices: { id: number; content: string; isAnswer: boolean }[];
}

const tempFunc = (curQuizzes: IQuiz[], quizIdx: number) => {
	const prevQuizzes = curQuizzes.slice(0, quizIdx);
	const nextQuizzes = curQuizzes.slice(quizIdx + 1);
	return [prevQuizzes, nextQuizzes];
};

const initQuiz = {
	question: '',
	choices: [{ id: 0, content: '', isAnswer: false }],
};

interface State {
	quizzes: IQuiz[];
}
const useCreateQuizStore = create<State>((set) => ({
	quizzes: [initQuiz],
	setInitQuizzes: (quizLength: number) =>
		set(() => ({
			quizzes: Array.from({ length: quizLength }, () => initQuiz),
		})),

	editQuestion: (newQuestion: string, quizIdx: number) =>
		set((state) => {
			const [prevQuizzes, nextQuizzes] = tempFunc(state.quizzes, quizIdx);
			const newQuiz: IQuiz = { ...state.quizzes[quizIdx], question: newQuestion };
			return { quizzes: [...prevQuizzes, newQuiz, ...nextQuizzes] };
		}),
	editChoice: (newChoiceContent: string, quizIdx: number, choiceId: number) =>
		set((state) => {
			const [prevQuizzes, nextQuizzes] = tempFunc(state.quizzes, quizIdx);
			const newQuiz: IQuiz = {
				...state.quizzes[quizIdx],
				choices: state.quizzes[quizIdx].choices.map((choice) => {
					if (choice.id === choiceId) return { ...choice, content: newChoiceContent };
					return choice;
				}),
			};
			return { quizzes: [...prevQuizzes, newQuiz, ...nextQuizzes] };
		}),
	addChoice: (quizIdx: number) =>
		set((state) => {
			if (state.quizzes[quizIdx].choices.length >= 5) return { quizzes: state.quizzes };
			const [prevQuizzes, nextQuizzes] = tempFunc(state.quizzes, quizIdx);
			const newQuiz: IQuiz = {
				...state.quizzes[quizIdx],
				choices: [
					...state.quizzes[quizIdx].choices,
					{ id: state.quizzes[quizIdx].choices.length, content: '', isAnswer: false },
				],
			};
			return { quizzes: [...prevQuizzes, newQuiz, ...nextQuizzes] };
		}),
	checkAnswer: (quizIdx: number, choiceId: number) =>
		set((state) => {
			const [prevQuizzes, nextQuizzes] = tempFunc(state.quizzes, quizIdx);
			const newQuiz: IQuiz = {
				...state.quizzes[quizIdx],
				choices: state.quizzes[quizIdx].choices.map((choice) => {
					if (choice.id === choiceId) return { ...choice, isAnswer: !choice.isAnswer };
					return choice;
				}),
			};
			return { quizzes: [...prevQuizzes, newQuiz, ...nextQuizzes] };
		}),
	deleteChoice: (quizIdx: number, choiceId: number) =>
		set((state) => {
			const [prevQuizzes, nextQuizzes] = tempFunc(state.quizzes, quizIdx);
			const newQuiz: IQuiz = {
				...state.quizzes[quizIdx],
				choices: state.quizzes[quizIdx].choices.filter((choice) => choice.id !== choiceId),
			};
			return { quizzes: [...prevQuizzes, newQuiz, ...nextQuizzes] };
		}),
}));

export default useCreateQuizStore;
