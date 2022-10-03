import React from 'react';

interface IFilteringInput {
	[key: string]: string;
}

interface Props {
	toggle: 'all' | 'EMPLOYMENT' | 'LANGUAGE' | 'CERTIFICATE' | 'ETC' | string | string[];
	activeStudyCount: number;
	completeStudyCount: number;
	handleFilteringMyPage: (input: IFilteringInput) => void;
}

export default function MyPageStudyStatusToggle({
	toggle,
	activeStudyCount,
	completeStudyCount,
	handleFilteringMyPage,
}: Props) {
	return (
		<div className="flex bg-background-white drop-shadow-white pt-[15px] mx-[-20px]">
			<div
				role="button"
				className="w-1/2 text-center"
				tabIndex={0}
				onClick={() => handleFilteringMyPage({ toggle: 'active', category: 'all' })}
				onKeyPress={() => handleFilteringMyPage({ toggle: 'active', category: 'all' })}
			>
				<p
					className={`${toggle === 'active' ? 'text-black-400' : 'text-slate'}
                    text-slate text-title1 font-bold`}
				>
					{activeStudyCount}
				</p>
				<p
					className={`${toggle === 'active' ? 'text-black-400' : 'text-slate'}
                    text-body2 font-medium mb-[13px]`}
				>
					진행 스터디
				</p>
				{toggle === 'active' && <hr className="rounded w-4/5 border-green-100 m-auto border-[3px]" />}
			</div>

			<div
				role="button"
				className="w-1/2 text-center"
				tabIndex={0}
				onClick={() => handleFilteringMyPage({ toggle: 'complete', category: 'all' })}
				onKeyPress={() => handleFilteringMyPage({ toggle: 'complete', category: 'all' })}
			>
				<p
					className={`${toggle === 'complete' ? 'text-black-400' : 'text-slate'}
                    text-slate text-title1 font-bold`}
				>
					{completeStudyCount}
				</p>
				<p
					className={`${toggle === 'complete' ? 'text-black-400' : 'text-slate'}
                    text-body2 font-medium mb-[13px]`}
				>
					완료 스터디
				</p>
				{toggle === 'complete' && <hr className="rounded w-4/5 border-green-100 m-auto border-[3px]" />}
			</div>
		</div>
	);
}
