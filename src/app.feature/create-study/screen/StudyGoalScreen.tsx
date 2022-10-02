import Box from '@app.component/box';
import CreateStudyLayout from '@app.feature/create-study/component/layout';
import RequireMark from '@app.component/requireMark/RequireMark';
import useCreateStudyStore from '../store';

interface Props {
	submitHandler: () => void;
}
export default function StudyGoalScreen({ submitHandler }: Props) {
	const CUR_PAGE = 3;
	const { study, setGroupGoal } = useCreateStudyStore();

	return (
		<CreateStudyLayout curPage={CUR_PAGE} todo="스터디 그룹의 목표를 적어 주세요" finishHandler={submitHandler}>
			<>
				<span className="block mt-[12.39px]  text-slate text-small2 font-bold">최종 목표</span>

				<Box height="h-[88px]" className="relative px-[22.09px]  mt-[7.63px]">
					<input
						value={study.groupGoal ?? ''}
						onChange={(event: React.ChangeEvent<HTMLInputElement>) => setGroupGoal(event.currentTarget.value)}
						placeholder="최종 목표를 적어주세요."
						className="w-full  outline-none text-body1 font-medium"
					/>
					<RequireMark className="absolute right-[16.05px] top-[13.98px]" />
				</Box>
			</>
		</CreateStudyLayout>
	);
}
