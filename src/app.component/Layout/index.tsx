import Url from '@app.modules/constant/url';
import { useRouter } from 'next/router';
import FooterNav from '../navigation/FooterNav';

interface Props {
	children: React.ReactNode;
}
const hasNav = [Url.home, Url.mypage, Url.updatedQuizzes];
export default function Layout({ children }: Props) {
	const router = useRouter();
	return (
		<>
			<main className="px-[20px]">{children}</main>
			{hasNav.includes(router.pathname) && <FooterNav curUrl={router.pathname} />}
		</>
	);
}
