import type { NextPage } from 'next';
import useStore from '../src/store/store';

const Home: NextPage = () => {
	return (
		<div className="w-full">
			<ul className=" w-1/5 mx-auto">
				<li className="bg-yellow-400 text-black py-1.5 rounded mt-2">
					<button type="button" className="w-full relative">
						<div className="absolute left-3">K</div>
						<span className="text-center font-semibold">카카오 로그인</span>
					</button>
				</li>
				<li className="bg-green-500 text-white py-1.5 rounded  mt-2">
					<button type="button" className="w-full relative">
						<div className="absolute left-3">N</div>
						<span className="text-center font-semibold">네이버 로그인</span>
					</button>
				</li>
				<li className="bg-red-500 text-white py-1.5 rounded  mt-2">
					<button type="button" className="w-full relative">
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
