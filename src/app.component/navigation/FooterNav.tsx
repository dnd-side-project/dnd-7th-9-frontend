import { useRouter } from 'next/router';
import UserIcon from '../../assets/nav/ant-design_user-outlined.svg';
import HomeIcon from '../../assets/nav/bx_home-alt-2.svg';
import QuizIcon from '../../assets/nav/material-symbols_quiz-outline.svg';

export default function FooterNav() {
	const router = useRouter();
	return (
		<div className="fixed bottom-0 w-full h-[77px]  bg-background-white dropShadow-white">
			<ul className="flex justify-between items-center px-[26px] my-[10px] ">
				<li className="flex flex-col items-center text-primarySlate ">
					<HomeIcon fill={router.pathname === '/' ? '#24cd88' : '#677A90'} />
					<span
						className={`font-400 text-sm ${router.pathname === '/' ? 'text-primaryGreen-100' : 'text-primarySlate'}`}
					>
						홈
					</span>
				</li>
				<li className="flex flex-col items-center">
					<QuizIcon fill="#677A90" />
					<span className="font-400 text-sm text-primarySlate">MY 목표</span>
				</li>
				<li className="flex flex-col items-center text-primary">
					<UserIcon fill="#677A90" />
					<span className="font-400 text-sm text-primarySlate">MY</span>
				</li>
			</ul>
		</div>
	);
}
