import React, { ChangeEvent, MouseEvent } from 'react';

interface Props {
	className?: string;
	placeholder?: string;
	value?: string;
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
	onClick?: (e: MouseEvent<HTMLElement>) => void;
}

export default function Input({ className, ...props }: Props) {
	return <input className={`drop-shadow-white placeholder:text-gray py-[19px] px-[18px] ${className}`} {...props} />;
}
