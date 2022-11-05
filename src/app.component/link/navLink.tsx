import React from 'react';
import Link from 'next/link';
import BellIcon from '@assets/main/colored-bell.svg';
import ProfileIcon from '@assets/main/colored-profile.svg';

export default function NavLink() {
	return (
		<div className="flex justify-between">
			<Link href="/mypage">
				<ProfileIcon className="cursor-pointer mr-2" />
			</Link>
			<Link href="/alarm">
				<BellIcon className="cursor-pointer" />
			</Link>
		</div>
	);
}
