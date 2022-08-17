import CreateStudyLayout from '@app.feature/studyGroup/component/Layout';
import Box from '@app.component/box';
import RequireMark from '../component/RequireMark';

export default function StudyDateScreen() {
	const CUR_PAGE = 2;
	// TODO : 코드 정리 필요
	return (
		<CreateStudyLayout curPage={CUR_PAGE} todo="스터디 날짜를 적어 주세요">
			<span className="block mt-[12px] text-slate text-small2 font-bold">시작 날짜</span>

			<div className="flex justify-between relative">
				<RequireMark className="absolute top-0 right-0" />
				<div className="space-x-[10px] flex items-center">
					<Box height="h-[88px]" className="relative px-[22.09px]  mt-[7.63px] w-[126px]">
						<input placeholder="" className="w-full  outline-none text-body1 font-medium text-center" />
					</Box>
					<span className="text-slate font-medium text-headline">월</span>
				</div>
				<div className="space-x-[10px] flex items-center">
					<Box height="h-[88px]" className="relative px-[22.09px]  mt-[7.63px] w-[126px]">
						<input placeholder="" className="w-full  outline-none text-body1 font-medium text-center" />
					</Box>
					<span className="text-slate font-medium text-headline">일</span>
				</div>
			</div>
			<span className="block mt-[42.39px]  text-slate text-small2 font-bold">목표 마무리 날짜</span>
			<div className="flex justify-between">
				<div className="space-x-[10px] flex items-center">
					<Box height="h-[88px]" className="relative px-[22.09px]  mt-[7.63px] w-[126px]">
						<input placeholder="" className="w-full  outline-none text-body1 font-medium text-center" />
					</Box>
					<span className="text-slate font-medium text-headline">월</span>
				</div>
				<div className="space-x-[10px] flex items-center">
					<Box height="h-[88px]" className="relative px-[22.09px]  mt-[7.63px] w-[126px]">
						<input placeholder="" className="w-full  outline-none text-body1 font-medium text-center" />
					</Box>
					<span className="text-slate font-medium text-headline">일</span>
				</div>
			</div>
		</CreateStudyLayout>
	);
}
