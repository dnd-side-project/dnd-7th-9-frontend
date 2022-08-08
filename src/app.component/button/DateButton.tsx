import React from 'react';

interface IProps {
	remainDate: number;
}

function DateButton({ remainDate, ...props }: IProps) {
	return (
		<button type="button" className="bg-sub rounded px-[6px] py-[4px] text-white text-xs cursor-default" {...props}>
			{/* TO DO : 남은 date 없는 경우 어떻게 보여지는지 추후 수정 */}
			{remainDate > 0 ? `${remainDate}일 남음` : '종료'}
		</button>
	);
}

export default DateButton;
