import type { NextPage } from 'next';
import signIn from '../src/app.modules/api/sign';
import KAKAO_AUTH_URL from '../src/app.feature/sign/constant/KakaoAuthUrl';
import NAVER_AUTH_URL from '../src/app.feature/sign/constant/NaverAuthUrl';
import GOOGLE_AUTH_URL from '../src/app.feature/sign/constant/GoogleAuthUrl';

const Home: NextPage = () => {
	const handleKakoSignIn = () => signIn(KAKAO_AUTH_URL);
	const handleNaverSignIn = () => signIn(NAVER_AUTH_URL);
	const handleGoogleSignIn = () => signIn(GOOGLE_AUTH_URL);

	return (
		<div className="w-full">
			<ul className=" w-1/5 mx-auto">
				<li className="bg-yellow-400 text-black py-1.5 rounded mt-2">
					<button type="button" className="w-full relative" onClick={handleKakoSignIn}>
						<div className="absolute left-3">K</div>
						<span className="text-center font-semibold">카카오 로그인</span>
					</button>
				</li>
				<li className="bg-green-500 text-white py-1.5 rounded  mt-2">
					<button type="button" className="w-full relative" onClick={handleNaverSignIn}>
						<div className="absolute left-3">N</div>
						<span className="text-center font-semibold">네이버 로그인</span>
					</button>
				</li>
				<li className="bg-red-500 text-white py-1.5 rounded  mt-2">
					<button type="button" className="w-full relative" onClick={handleGoogleSignIn}>
						<div className="absolute left-3">G</div>
						<span className="text-center font-semibold">구글 로그인</span>
					</button>
				</li>
				<li className="bg-gray-500 text-white py-1.5 rounded  mt-2">
					<button type="button" className="w-full relative">
						<span className="text-center font-semibold">로그아웃</span>
					</button>
				</li>
			</ul>
		</div>
	);
};

export default Home;
