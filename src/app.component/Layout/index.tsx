import FooterNav from '../navigation/FooterNav';

interface Props {
	children: React.ReactNode;
}

export default function Layout({ children }: Props) {
	return (
		<>
			<main>{children}</main>
			<FooterNav />
		</>
	);
}
