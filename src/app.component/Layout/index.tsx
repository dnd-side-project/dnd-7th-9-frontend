import FooterNav from '../navigation/FooterNav';

interface Props {
	children: React.ReactNode;
}

export default function Layout({ children }: Props) {
	return (
		<>
			<main className="px-4">{children}</main>
			<FooterNav />
		</>
	);
}
