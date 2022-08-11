interface Props {
	progress: number; // 0 to 100
}
export default function ProgressBar({ progress }: Props) {
	return (
		<div className=" w-full h-[6px]  bg-background-white ">
			<div className="h-full bg-main" style={{ width: `${progress}%` }} />
		</div>
	);
}
