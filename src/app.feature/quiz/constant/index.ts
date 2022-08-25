export const InitSolvedQuestionBookDetail = [
	{
		questionId: 0,
		questionContent: '',
		optionList: [
			{
				optionId: 1,
				optionContent: '',
				optionImageEnable: false,
				optionImageUrl: '',
			},
			{
				optionId: 2,
				optionContent: '',
				optionImageEnable: false,
				optionImageUrl: '',
			},
			{
				optionId: 3,
				optionContent: '',
				optionImageEnable: false,
				optionImageUrl: '',
			},
			{
				optionId: 4,
				optionContent: '',
				optionImageEnable: false,
				optionImageUrl: '',
			},
		],
		pickOption: 1,
		answerOption: 1,
		rightCheck: true,
	},
];

export const InitQuizCreatePayload = {
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
