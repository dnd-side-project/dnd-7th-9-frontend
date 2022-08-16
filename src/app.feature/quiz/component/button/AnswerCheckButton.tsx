interface Props {
	checkHandler?: () => void;
	isChecked: boolean;
	ringColor?: string;
}
export default function AnswerCheckButton({ isChecked, checkHandler, ringColor }: Props) {
	return (
		<button type="button" onClick={checkHandler}>
			<div
				className={`bg-background-gray rounded-full   ${
					isChecked
						? `w-[16px] h-[16px] ring-[6px]  ${ringColor ?? 'ring-main'} -translate-x-[6px]`
						: 'w-[28px] h-[28px]'
				}  `}
			/>
		</button>
	);
}
