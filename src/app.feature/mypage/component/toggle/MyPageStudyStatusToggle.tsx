import React from 'react';

interface IFilteringInput {
	[key: string]: string;
}

interface Props {
	toggle: 'proceeding' | 'completed' | string | string[];
	handleFilteringMyPage: (input: IFilteringInput) => void;
}

export default function MyPageStudyStatusToggle({ toggle, handleFilteringMyPage }: Props) {
	return (
		<div className="flex bg-background-white drop-shadow-white pt-[15px] mx-[-20px]">
			<div
				role="button"
				className="w-1/2 text-center"
				tabIndex={0}
				onClick={() => handleFilteringMyPage({ toggle: 'proceeding' })}
				onKeyPress={() => handleFilteringMyPage({ toggle: 'proceeding' })}
			>
				<p
					className={`${toggle === 'proceeding' ? 'text-black-400' : 'text-slate'}
                    text-slate text-title1 font-bold`}
				>
					2
				</p>
				<p
					className={`${toggle === 'proceeding' ? 'text-black-400' : 'text-slate'}
                    text-body2 font-medium mb-[13px]`}
				>
					진행 스터디
				</p>
				{toggle === 'proceeding' && <hr className="rounded w-4/5 border-green-100 m-auto border-[3px]" />}
			</div>

			<div
				role="button"
				className="w-1/2 text-center"
				tabIndex={0}
				onClick={() => handleFilteringMyPage({ toggle: 'completed' })}
				onKeyPress={() => handleFilteringMyPage({ toggle: 'completed' })}
			>
				<p
					className={`${toggle === 'completed' ? 'text-black-400' : 'text-slate'}
                    text-slate text-title1 font-bold`}
				>
					8
				</p>
				<p
					className={`${toggle === 'completed' ? 'text-black-400' : 'text-slate'}
                    text-body2 font-medium mb-[13px]`}
				>
					완료 스터디
				</p>
				{toggle === 'completed' && <hr className="rounded w-4/5 border-green-100 m-auto border-[3px]" />}
			</div>
		</div>
	);
}
