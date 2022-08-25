const InitQuizCreatePayload = {
	goalId: 0,
	questionBookName: '',
	questionBookQuestionNum: '',
	questionDtoList: [
		{
			questionAnswer: 1,
			questionContent: '',
			questionType: 'TEXT',
			questionImageUrl: '',
			optionSaveDtoList: [
				{
					optionContent: '',
					optionImageEnable: false,
					optionImageUrl: '',
				},
			],
		},
	],
};

export default InitQuizCreatePayload;
