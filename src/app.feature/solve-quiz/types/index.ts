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

interface IQuestionList {
	questionId: number;
	questionContent: string;
	optionList: IQuestionBookQuizOption[];
}

export interface IQuestionBook {
	goalContent: string;
	questionBookContent: string;
	questionList: IQuestionList[];
}

export interface IQuestionBookQuizEnd {
	questionBookId: number;
	solveDtoList: IQuestionBookQuiz[];
}
