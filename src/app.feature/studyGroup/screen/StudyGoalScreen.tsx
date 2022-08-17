import Box from '@app.component/box';
import CreateStudyLayout from '@app.feature/studyGroup/component/Layout';
import RequireMark from '../component/RequireMark';

export default function StudyGoalScreen() {
	const CUR_PAGE = 3;

	return (
		<CreateStudyLayout curPage={CUR_PAGE} todo="스터디 그룹의 목표를 적어 주세요">
			<>
				<span className="block mt-[12.39px]  text-slate text-small2 font-bold">최종 목표</span>

				<Box height="h-[88px]" className="relative px-[22.09px]  mt-[7.63px]">
					<input placeholder="최종 목표를 적어주세요." className="w-full  outline-none text-body1 font-medium" />
					<RequireMark className="absolute right-[16.05px] top-[13.98px]" />
				</Box>
			</>
		</CreateStudyLayout>
	);
}
