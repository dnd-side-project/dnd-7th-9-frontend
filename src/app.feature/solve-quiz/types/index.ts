interface IQuestionBookQuizOption {
	optionId: number;
	optionContent: string;
	optionImageEnable: boolean;
	optionImageUrl: string;
}

interface IQuestionBookQuiz {
	questionId: number;
	checkAnswer: number;
}

export interface IQuestionBook {
	questionId: number;
	questionContent: string;
	optionList: IQuestionBookQuizOption[];
}

export interface IQuestionBookQuizEnd {
	questionBookId: number;
	solveDtoList: IQuestionBookQuiz[];
}
