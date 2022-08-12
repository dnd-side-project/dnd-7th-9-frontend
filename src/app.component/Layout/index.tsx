import { useRouter } from 'next/router';
import FooterNav from '../navigation/FooterNav';

interface Props {
	children: React.ReactNode;
}

export default function Layout({ children }: Props) {
	const router = useRouter();
	return (
		<>
			{/* padding-bottom : 네비게이션에 의해 가려지는 영역 문제가 있어 패딩 값 줌 */}
			<main className="px-[20px] pb-[80px]">{children}</main>
			<FooterNav curUrl={router.pathname} />
		</>
	);
}
