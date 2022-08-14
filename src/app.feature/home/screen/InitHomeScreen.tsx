import DefaultButton from '@app.component/button/DefaultButton';
import QuestionIcon from '@assets/home/eva_question-mark-outline.svg';

export default function InitHomeScreen() {
	return (
		<div className="w-full ">
			<h1 className="text-title2 font-bold text-black-400 mt-[72px] mb-[10px]">안녕하세요, 수정님</h1>
			<h2 className="text-body2 font-medium text-slate ">
				스터디 그룹을 만들어서
				<br />
				함께 원하는 목표를 달성해 봐요!
			</h2>
			<div className="flex flex-col items-center">
				<div className="flex flex-col items-center mx-auto bg-white w-[209px]   mt-[98px] mb-[19.78px] rounded drop-shadow-white">
					<div className="grid place-items-center mt-[34px] bg-background-gray w-[73px] rounded-[19px] p-[22px] mb-[27px] ">
						<QuestionIcon />
					</div>
					<span className="text-[#079985] font-bold text-[22.8px]">당신의 스터디</span>
					<span className="mt-[4px] text-[#079985] text-[15.8px] mb-[28.71px]">당신의 목표</span>
				</div>

				<span className="text-slate font-medium text-body2 mb-[98px]">아직 스터디 그룹이 없어요.</span>

				<DefaultButton text="스터디 그룹 만들기" />
				<div className="mb-[118px]" />
			</div>
		</div>
	);
}
