import CreateStudyLayout from '@app.feature/create-study/component/layout';
import Box from '@app.component/box';
import RequireMark from '@app.component/requireMark/RequireMark';
import { useSetStudyDateStore } from '../store';

export default function StudyDateScreen() {
	const {
		groupStartMonth,
		groupStartDay,
		groupEndMonth,
		groupEndDay,
		setGroupStartMonth,
		setGroupStartDay,
		setGroupEndMonth,
		setGroupEndDay,
	} = useSetStudyDateStore();
	const CUR_PAGE = 2;

	// TODO : 코드 정리 필요
	return (
		<CreateStudyLayout curPage={CUR_PAGE} todo="스터디 날짜를 적어 주세요">
			<span className="block mt-[12px] text-slate text-small2 font-bold">시작 날짜</span>

			<div className="flex justify-between relative">
				<RequireMark className="absolute top-0 right-0" />
				<div className="space-x-[10px] flex items-center">
					<Box height="h-[88px]" className="relative px-[22.09px]  mt-[7.63px] w-[126px]">
						<input
							type="text"
							value={groupStartMonth ?? ''}
							onChange={(event: React.ChangeEvent<HTMLInputElement>) => setGroupStartMonth(event.currentTarget.value)}
							placeholder=""
							className="w-full  outline-none text-body1 font-medium text-center"
						/>
					</Box>
					<span className="text-slate font-medium text-headline">월</span>
				</div>
				<div className="space-x-[10px] flex items-center">
					<Box height="h-[88px]" className="relative px-[22.09px]  mt-[7.63px] w-[126px]">
						<input
							value={groupStartDay ?? ''}
							onChange={(event: React.ChangeEvent<HTMLInputElement>) => setGroupStartDay(event.currentTarget.value)}
							placeholder=""
							className="w-full  outline-none text-body1 font-medium text-center"
						/>
					</Box>
					<span className="text-slate font-medium text-headline">일</span>
				</div>
			</div>
			<span className="block mt-[42.39px]  text-slate text-small2 font-bold">목표 마무리 날짜</span>
			<div className="flex justify-between">
				<div className="space-x-[10px] flex items-center">
					<Box height="h-[88px]" className="relative px-[22.09px]  mt-[7.63px] w-[126px]">
						<input
							value={groupEndMonth ?? ''}
							onChange={(event: React.ChangeEvent<HTMLInputElement>) => setGroupEndMonth(event.currentTarget.value)}
							placeholder=""
							className="w-full  outline-none text-body1 font-medium text-center"
						/>
					</Box>
					<span className="text-slate font-medium text-headline">월</span>
				</div>
				<div className="space-x-[10px] flex items-center">
					<Box height="h-[88px]" className="relative px-[22.09px]  mt-[7.63px] w-[126px]">
						<input
							value={groupEndDay ?? ''}
							onChange={(event: React.ChangeEvent<HTMLInputElement>) => setGroupEndDay(event.currentTarget.value)}
							placeholder=""
							className="w-full  outline-none text-body1 font-medium text-center"
						/>
					</Box>
					<span className="text-slate font-medium text-headline">일</span>
				</div>
			</div>
		</CreateStudyLayout>
	);
}
