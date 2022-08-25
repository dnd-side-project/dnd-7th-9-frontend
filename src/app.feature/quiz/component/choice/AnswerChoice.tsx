import React from 'react';
import XIcon from '@assets/quiz/akar-icons_circle-x.svg';
import OIcon from '@assets/quiz/bi_check-circle-fill.svg';

interface Props {
	content: string;
	isChecked: boolean;
	isAnswer: boolean;
}

export default function AnswerChoice({ content, isChecked, isAnswer }: Props) {
	return (
		<div
			className={`w-full flex items-center  rounded justify-between px-[22.09px]  ${
				isAnswer && 'bg-green-200 border-[1px] border-[#1CB576]'
			}
				${isChecked && !isAnswer && 'bg-error-red '}
			}
			${!isChecked && isAnswer && 'opacity-50 '}
			}
			`}
		>
			<span className=" text-body1 font-medium ">{content}</span>
			{isAnswer && 'bg-error-red ' && <OIcon />}
			{isChecked && !isAnswer && 'bg-error-red ' && <XIcon />}
		</div>
	);
}
