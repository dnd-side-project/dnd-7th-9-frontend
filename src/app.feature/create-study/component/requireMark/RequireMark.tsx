interface Props {
	className?: string;
}
export default function RequireMark({ className }: Props) {
	return <span className={` text-error-red font-bold text-body1 ${className}`}>*</span>;
}
