import React from 'react';
import PageTitle from '@app.component/title/PageTitle';
import BellIcon from '@assets/main/eva_bell-outline.svg';

export default function UpdatedQuizScreen() {
	return (
		<div>
			<div className="flex justify-between mt-[40px] mb-[55px]">
				<PageTitle title="실시간 퀴즈" />
				<BellIcon className="cursor-pointer" />
			</div>
		</div>
	);
}
