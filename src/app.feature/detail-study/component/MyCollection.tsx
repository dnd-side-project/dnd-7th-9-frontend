import { useState } from 'react';

import DefaultButton from '@app.component/button/DefaultButton';
import ArrowBottomIcon from '@assets/main/arrow-bottom.svg';
import ArrowTopIcon from '@assets/main/arrow-top.svg';

export default function MyCollection() {
	const [isOpenedAccordion, setIsOpenedAccordion] = useState(false);

	return (
		<div className="bg-[#EFF3F6] rounded w-full">
			<div className="rounded-t  p-[16px] space-y-[15px]">
				<span className="font-medium text-black-500 text-headline">내 문제집</span>
				<div className="flex justify-between">
					<div className="flex items-center space-x-[6px]">
						<div className="bg-[#E2EFFF] rounded-full w-[30px] h-[30px]" />
						<span className="text-black-500 font-regular text-caption">박수정</span>
					</div>
					{true ? (
						<button
							type="button"
							onClick={() => setIsOpenedAccordion((prev) => !prev)}
							className="flex items-center space-x-[10.56px]"
						>
							<span className="text-brown font-bold text-small2">7명 풀이 완료</span>
							{isOpenedAccordion ? <ArrowTopIcon /> : <ArrowBottomIcon />}
						</button>
					) : (
						<DefaultButton text="수정하기" size="small" width="w-[109.77px]" />
					)}
				</div>
			</div>
			<div
				className={`
	${isOpenedAccordion ? 'visible  ' : 'invisible h-0'}
 
	`}
			>
				<hr className="text-[#D9D9D9] mb-[16px]" />
				<div className="   pb-[16px] grid grid-cols-3 place-items-center  gap-y-[25px]">
					{[1, 1, 1, 1, 1, 1].map((_, index) => (
						// eslint-disable-next-line react/no-array-index-key
						<div key={index} className="flex items-center space-x-[6px]">
							<div className="bg-[#E2EFFF] rounded-full w-[30px] h-[30px]" />
							<span className="text-black-500 font-regular text-caption">박수정</span>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
