interface Props {
	checkHandler: () => void;
	isChecked: boolean;
}
export default function AnswerCheckButton({ isChecked, checkHandler }: Props) {
	return (
		<button type="button" onClick={checkHandler}>
			<div
				className={`bg-background-gray rounded-full   ${
					isChecked ? 'w-[16px] h-[16px] ring-[6px]  ring-main -translate-x-[6px]' : 'w-[28px] h-[28px]'
				}  `}
			/>
		</button>
	);
}
