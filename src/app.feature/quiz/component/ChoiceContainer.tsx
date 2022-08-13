interface Props {
	children: React.ReactNode;
}
export default function ChoiceContainer({ children }: Props) {
	return <div className="flex mb-[12px] h-[64px] justify-between bg-white rounded drop-shadow-white ">{children}</div>;
}
