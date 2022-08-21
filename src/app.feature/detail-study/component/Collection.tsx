import React from 'react';

interface Props {
	isSolved: boolean;
}
export default function Collection({ isSolved }: Props) {
	return (
		<div className="bg-[#EFF3F6] rounded w-full">
			<div className="rounded-t  p-[16px] space-y-[15px]">
				<div className="flex items-center justify-between">
					<span className="font-medium text-black-500 text-headline block  whitespace-nowrap">문제집 1</span>

					{isSolved && (
						<div className="w-full h-[11.31px] rounded mx-[21px]  bg-[#D9D9D9] ">
							<div
								className="h-full  rounded"
								style={{ width: '60%', background: 'linear-gradient(90deg, #3D93F1 50%, #02CABF 111.09%)' }}
							/>
						</div>
					)}
					<span className="text-body2 font-medium text-black-500">4/5</span>
				</div>
				<div className="flex justify-between">
					<div className="flex items-center space-x-[6px]">
						<div className="bg-[#E2EFFF] rounded-full w-[30px] h-[30px]" />
						<span className="text-black-500 font-regular text-caption">박수정</span>
					</div>

					<button
						type="button"
						className={`${
							isSolved ? 'bg-sub' : 'bg-gray'
						} text-white rounded px-[6px] py-[4px] text-caption font-regular`}
					>
						{isSolved ? '풀이 완료' : '풀이 미완료'}
					</button>
				</div>
			</div>
		</div>
	);
}
