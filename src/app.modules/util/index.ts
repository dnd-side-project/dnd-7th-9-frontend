// 줄바꿈을 위한 함수
export const lineBreak = (str: string) => {
	return str.split('\n');
};

// 초 -> 초/분/시간/일/개월/연도 변환 함수
export const transformSecond = (second: number) => {
	const min = 60;
	const hour = 60 * 60;
	const day = 60 * 60 * 24;
	const week = 60 * 60 * 24 * 7;
	const month = 60 * 60 * 24 * 7 * 4;

	const getTimeStringFromSecond = (time: number) => parseInt((second / time).toString(), 10);

	if (second >= month) return `${getTimeStringFromSecond(month)}개월`;
	if (second >= week) return `${getTimeStringFromSecond(week)}주`;
	if (second >= day) return `${getTimeStringFromSecond(day)}일`;
	if (second >= hour) return `${getTimeStringFromSecond(hour)}시간`;
	if (second >= min) return `${getTimeStringFromSecond(min)}분`;
	return `${second}초`;
};
