import React from 'react';
import UserIcon from '@assets/mypage/user.svg';
import BellIcon from '@assets/mypage/bell.svg';

interface Props {
	username: string;
}

export default function MyPageUserProfile({ username }: Props) {
	return (
		<section className="bg-background-white pt-[27px] pb-[33px] mx-[-20px]">
			<div className="absolute top-[40px] right-[20px]">
				<BellIcon />
			</div>
			<div className="m-auto mb-[13px] grid place-content-center rounded-full bg-profile-green w-[176px] h-[176px]">
				<div className="grid place-content-center rounded-full bg-profile-green w-[142px] h-[142px]">
					<div className="grid place-content-center rounded-full drop-shadow-colored border-[1px] border-background-white bg-[#E2EFFF] w-[69px] h-[69px]">
						<div className="ml-[1px]">
							<UserIcon />
						</div>
					</div>
				</div>
			</div>
			<h1 className="text-center text-title1 font-bold text-black-400">{username}</h1>
		</section>
	);
}
