import PageTransitionButton from '@app.component/button/PageTransitionButton';
import React from 'react';

interface Props {
	curPage: number;
	pagesLength: number;
	finishWord: '끝내기' | '제출하기' | '시작하기' | '스터디 생성하기' | '';
	toPrevHandler: () => void;
	toNextHandler: () => void;
	finishHandler?: () => void;
}
export default function PageController({
	curPage,
	pagesLength,
	finishWord,
	toNextHandler,
	toPrevHandler,
	finishHandler,
}: Props) {
	return (
		<div className="flex justify-between items-center">
			<div className=" fixed left-[20px]  bottom-[22.2px]">
				<PageTransitionButton pageTo="before" onClick={toPrevHandler} isActive={curPage > 1} />
			</div>
			<div className=" fixed  right-[20px] bottom-[22.2px]">
				{curPage >= pagesLength ? (
					<button type="button" onClick={finishHandler} className="p-[10px]">
						<span className="text-body1 text-[#999999] font-medium">{finishWord}</span>
					</button>
				) : (
					<PageTransitionButton pageTo="next" onClick={toNextHandler} isActive={curPage < pagesLength} />
				)}
			</div>
		</div>
	);
}
