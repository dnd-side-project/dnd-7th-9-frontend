import BackIcon from '@assets/quiz/ic_round-navigate-next.svg';

export default function GoBackHeader() {
	return (
		<div className="fixed top-0 py-[19.07px] left-0 right-0  bg-background-gray  ">
			<button type="button">
				<BackIcon />
			</button>
		</div>
	);
}
