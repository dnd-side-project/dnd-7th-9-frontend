import Url from '@app.modules/constant/url';
import { useRouter } from 'next/router';
import FooterNav from '../navigation/FooterNav';

interface Props {
	children: React.ReactNode;
}
const notHasNav = [Url.login];
export default function Layout({ children }: Props) {
	const router = useRouter();
	return (
		<>
			<main className="px-4">{children}</main>
			{!notHasNav.includes(router.pathname) && <FooterNav curUrl={router.pathname} />}
		</>
	);
}
