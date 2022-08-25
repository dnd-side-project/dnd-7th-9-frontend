interface IQuestionOption {
	optionId: number;
	optionContent: string;
	optionImageEnable: boolean;
	optionImageUrl: string;
}

export interface IQuestionBookDetail {
	questionId: number;
	questionContent: string;
	optionList: IQuestionOption[];
	pickOption: number;
	answerOption: number;
	rightCheck: boolean;
}

interface IQuestionOptionList {
	optionContent: string;
	optionImageEnable: boolean;
	optionImageUrl: string;
}

interface IQuestionList {
	questionAnswer: string;
	questionContent: string;
	questionType: string; // TO DO : questionType Enum 형태로 변경
	questionImageUrl: string;
	optionSaveDtoList: IQuestionOptionList[] | null;
}

export interface ICreateQuestion {
	goalId: string;
	questionBookName: string;
	questionBookQuestionNum: number;
	questionDtoList: IQuestionList[] | null;
}
