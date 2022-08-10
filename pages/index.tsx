import type { NextPage } from 'next';
import Router from 'next/router';

import { KAKAO_AUTH_URL, NAVER_AUTH_URL, GOOGLE_AUTH_URL } from '@app.feature/sign/constant/SocialAuthUrl';
import HomeScreen from '@app.feature/home/screen/HomeScreen';

const Home: NextPage = () => {
	return <HomeScreen />;
	// <div className="w-full">
	// 	<ul className=" w-1/5 mx-auto">
	// 		<li className="bg-yellow-400 text-black py-1.5 rounded mt-2">
	// 			<button type="button" className="w-full relative" onClick={() => Router.push(KAKAO_AUTH_URL)}>
	// 				<div className="absolute left-3">K</div>

	// 				<span className="text-center font-regular text-caption">카카오 로그인</span>
	// 			</button>
	// 		</li>
	// 		<li className="bg-green-500 text-white py-1.5 rounded  mt-2">
	// 			<button type="button" className="w-full relative" onClick={() => Router.push(NAVER_AUTH_URL)}>
	// 				<div className="absolute left-3">N</div>
	// 				<span className="text-center font-medium text-xl">네이버 로그인</span>
	// 			</button>
	// 		</li>
	// 		<li className="bg-red-500 text-white py-1.5 rounded  mt-2">
	// 			<button type="button" className="w-full relative" onClick={() => Router.push(GOOGLE_AUTH_URL)}>
	// 				<div className="absolute left-3">G</div>
	// 				<span className="text-center font-bold text-2xl">구글 로그인</span>
	// 			</button>
	// 		</li>
	// 		<li className="bg-gray-500 text-white py-1.5 rounded  mt-2">
	// 			<button type="button" className="w-full relative">
	// 				<span className="text-center font-bold text-title1">로그아웃</span>
	// 			</button>
	// 		</li>
	// 	</ul>

	// </div>
};

export default Home;
