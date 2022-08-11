import Link from 'next/link';
import React from 'react';
import UserIcon from '@assets/nav/ant-design_user-outlined.svg';
import HomeIcon from '@assets/nav/bx_home-alt-2.svg';
import QuizIcon from '@assets/nav/material-symbols_quiz-outline.svg';
import Url from '@app.modules/constant/url';

interface Props {
	curUrl: string;
}
export default function FooterNav({ curUrl }: Props) {
	const fillColor = (iconUrl: string) => (curUrl === iconUrl ? '#24cd88' : '#677A90');
	const Links = [
		{ iconUrl: Url.home, Icon: <HomeIcon fill={fillColor(Url.home)} />, name: '홈' },
		{
			iconUrl: Url.updatedQuizzes,
			Icon: <QuizIcon fill={fillColor(Url.updatedQuizzes)} />,
			name: '실시간 문제지',
		},
		{ iconUrl: Url.mypage, Icon: <UserIcon fill={fillColor(Url.mypage)} />, name: 'MY' },
	];

	return (
		<div className="fixed bottom-0 w-full h-[77px]  bg-background-white  drop-shadow-white">
			<ul className="flex justify-between items-center px-[26px] my-[10px] ">
				{Links.map(({ iconUrl, Icon, name }) => (
					<Link href={iconUrl} key={iconUrl}>
						<li className="flex flex-col items-center text-primarySlate cursor-pointer">
							{Icon}
							<span className={`font-regular text-caption ${curUrl === iconUrl ? 'text-green-100' : 'text-slate'}`}>
								{name}
							</span>
						</li>
					</Link>
				))}
			</ul>
		</div>
	);
}
