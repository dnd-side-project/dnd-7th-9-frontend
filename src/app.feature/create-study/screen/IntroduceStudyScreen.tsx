import CompanyIcon from '@assets/study/company_icon.svg';
import LanguageIcon from '@assets/study/language_icon.svg';
import CertificationIcon from '@assets/study/certification_icon.svg';
import ExamIcon from '@assets/study/exam_icon.svg';
import Box from '@app.component/box';
import CreateStudyLayout from '@app.feature/create-study/component/layout';
import RequireMark from '@app.component/requireMark/RequireMark';

export const STUDY_CATEGORIES = [
	{
		category: '취업',
		icon: <CompanyIcon />,
	},
	{
		category: '언어',
		icon: <LanguageIcon />,
	},
	{
		category: '자격증',
		icon: <CertificationIcon />,
	},
	{
		category: '기타',
		icon: <ExamIcon />,
	},
];

export default function IntroduceStudyScreenScreen() {
	const CUR_PAGE = 1;

	return (
		<CreateStudyLayout curPage={CUR_PAGE} todo="당신의 스터디를 소개해 주세요">
			<>
				<ul className="flex justify-between items-center ">
					{STUDY_CATEGORIES.map((study) => (
						<li key={study.category} className="flex flex-col items-center space-y-[8.61px]">
							<button type="button" className="bg-background-white rounded w-[72px] h-[72px] grid place-items-center">
								{study.icon}
							</button>
							<span className="text-slate text-body1 font-medium">{study.category}</span>
						</li>
					))}
				</ul>
				<span className="block mt-[42.39px]  text-slate text-small2 font-bold">스터디 그룹명</span>
				<Box height="h-[88px]" className="relative px-[22.09px]  mt-[7.63px]">
					<input placeholder="스터디 그룹명을 적어주세요." className="w-full  outline-none text-body1 font-medium" />
					<RequireMark className="absolute right-[16.05px] top-[13.98px]" />
				</Box>
			</>
		</CreateStudyLayout>
	);
}
