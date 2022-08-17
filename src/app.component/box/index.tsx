interface Props {
	children: React.ReactNode;
	height: 'h-[64px]' | 'h-[88px]';
	className?: string;
}
// flex w-full  h-[64px] justify-between bg-white rounded drop-shadow-white
export default function Box({ height, children, className }: Props) {
	return (
		<div className={`flex w-full ${height} justify-between bg-white rounded drop-shadow-white ${className}`}>
			{children}
		</div>
	);
}
