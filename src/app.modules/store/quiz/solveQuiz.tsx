import create from 'zustand';

// temp

const initQuiz = {
	question: '',
	choices: [{ id: 0, content: '', isChecked: false }],
};

export interface IQuiz {
	question: string;
	choices: { id: number; content: string; isChecked: boolean }[];
}
interface State {
	quizzes: IQuiz[];
	setInitQuizzes: (quizzes: IQuiz[]) => void;
	checkAnswer: (quizIdx: number, choiceId: number) => void;
}
const useSolveQuizStore = create<State>((set) => ({
	quizzes: [initQuiz],
	setInitQuizzes: (quizzes: IQuiz[]) =>
		set(() => ({
			quizzes,
		})),

	checkAnswer: (quizIdx: number, choiceId: number) =>
		set((state) => {
			const prevQuizzes = state.quizzes.slice(0, quizIdx);
			const nextQuizzes = state.quizzes.slice(quizIdx + 1);

			const newQuiz: IQuiz = {
				...state.quizzes[quizIdx],
				choices: state.quizzes[quizIdx].choices.map((choice) => {
					if (choice.id === choiceId) return { ...choice, isChecked: !choice.isChecked };
					return choice;
				}),
			};
			return { quizzes: [...prevQuizzes, newQuiz, ...nextQuizzes] };
		}),
}));

export default useSolveQuizStore;
