import RequireMark from '@app.component/requireMark/RequireMark';
import React, { ChangeEvent, MouseEvent } from 'react';

interface Props {
	required?: boolean;
	className?: string;
	placeholder?: string;
	value?: string;
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
	onClick?: (e: MouseEvent<HTMLElement>) => void;
}

export default function Input({ className, required = false, ...props }: Props) {
	return (
		<div>
			{required && <RequireMark className="absolute z-10 m-[10px] right-[20px]" />}
			<input
				className={`relative drop-shadow-white placeholder:text-gray py-[19px] px-[18px] ${className}`}
				{...props}
			/>
		</div>
	);
}
