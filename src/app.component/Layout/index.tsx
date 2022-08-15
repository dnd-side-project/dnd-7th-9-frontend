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
			{/* padding-bottom : 네비게이션에 의해 가려지는 영역 문제가 있어 패딩 값 줌 */}
			<main className="px-[20px]">{children}</main>
			{hasNav.includes(router.pathname) && (
				<>
					<div className="mt-[80px]" />
					<FooterNav curUrl={router.pathname} />
				</>
			)}
		</>
	);
}
