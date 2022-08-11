import { useRouter } from 'next/router';
import FooterNav from '../navigation/FooterNav';

interface Props {
	children: React.ReactNode;
}

export default function Layout({ children }: Props) {
	const router = useRouter();
	return (
		<>
			<main className="px-[20px]">{children}</main>
			<FooterNav curUrl={router.pathname} />
		</>
	);
}
