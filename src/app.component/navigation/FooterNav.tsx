import { useRouter } from 'next/router';
import Link from 'next/link';
import React from 'react';
import UserIcon from '../../assets/nav/ant-design_user-outlined.svg';
import HomeIcon from '../../assets/nav/bx_home-alt-2.svg';
import QuizIcon from '../../assets/nav/material-symbols_quiz-outline.svg';

export default function FooterNav() {
	const router = useRouter();
	const fillColor = (path: string) => (router.pathname === path ? '#24cd88' : '#677A90');
	const Links = [
		{ path: '/', Icon: <HomeIcon fill={fillColor('/')} />, name: '홈' },
		{
			path: '/my-goal',
			Icon: <QuizIcon fill={fillColor('/my-goal')} />,
			name: 'MY 목표',
		},
		{ path: '/mypage', Icon: <UserIcon fill={fillColor('/mypage')} />, name: 'MY' },
	];

	return (
		<div className="fixed bottom-0 w-full h-[77px]  bg-background-white dropShadow-white">
			<ul className="flex justify-between items-center px-[26px] my-[10px] ">
				{Links.map(({ path, Icon, name }) => (
					<Link href={path} key={path}>
						<li className="flex flex-col items-center text-primarySlate cursor-pointer">
							{Icon}
							<span
								className={`font-regular text-caption ${
									router.pathname === path ? 'text-primaryGreen-100' : 'text-primarySlate'
								}`}
							>
								{name}
							</span>
						</li>
					</Link>
				))}
			</ul>
		</div>
	);
}
