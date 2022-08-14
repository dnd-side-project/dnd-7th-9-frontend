import type { NextPage } from 'next';
import QuizSolveCompleteScreen from '@app.feature/complete/screen/QuizSolveCompleteScreen';

const QuizSolve: NextPage = () => {
	// TO DO : 해당 페이지에 접근했을 때 수치가 얼마나 올라간지 어떻게 알려줄지 정해야 함
	// 의견 : 문제 생성 / 풀이 완료 후, complete 화면으로 넘어올때 라우터 뒤에 파라미터로 type = "create" | "solve" , 증가 혹은 감소되는 percentage 담아주면 좋을 것 같다.
	return <QuizSolveCompleteScreen />;
};

export default QuizSolve;
