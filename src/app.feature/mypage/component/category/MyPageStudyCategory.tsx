import React from 'react';
import TestIcon from '@assets/category/test-icon.svg';
import CompanyIcon from '@assets/category/company-icon.svg';
import LanguageIcon from '@assets/category/language-icon.svg';
import CertificationIcon from '@assets/category/certification-icon.svg';

interface IFilteringInput {
	[key: string]: string;
}

interface Props {
	category: 'all' | 'EMPLOYMENT' | 'LANGUAGE' | 'CERTIFICATE' | 'ETC' | string | string[];
	handleFilteringMyPage: (input: IFilteringInput) => void;
}

export default function MyPageStudyCategory({ category, handleFilteringMyPage }: Props) {
	const checkCategoryFiltering = (categoryInput: string) => {
		return category === categoryInput ? 'all' : categoryInput;
	};

	return (
		<div className="flex justify-between my-[29px]">
			<div
				role="button"
				className={`${
					category === 'EMPLOYMENT' ? 'bg-green-100 text-background-white' : 'bg-background-white text-slate'
				}
				flex justify-between bg-background-white drop-shadow-white px-[11px] py-[4px] rounded-[20px]`}
				tabIndex={0}
				onClick={() => handleFilteringMyPage({ category: checkCategoryFiltering('EMPLOYMENT') })}
				onKeyPress={() => handleFilteringMyPage({ category: checkCategoryFiltering('EMPLOYMENT') })}
			>
				<div className="pt-[3px] mr-[10px]">
					<CompanyIcon width="20" height="20" viewBox="0 0 30 30" />
				</div>
				<p className="text-small font-regular">기업</p>
			</div>

			<div
				role="button"
				className={`${category === 'LANGUAGE' ? 'bg-green-100 text-background-white' : 'bg-background-white text-slate'}
				flex justify-between bg-background-white drop-shadow-white px-[11px] py-[4px] rounded-[20px]`}
				tabIndex={0}
				onClick={() => handleFilteringMyPage({ category: checkCategoryFiltering('LANGUAGE') })}
				onKeyPress={() => handleFilteringMyPage({ category: checkCategoryFiltering('LANGUAGE') })}
			>
				<div className="pt-[2px] mr-[10px]">
					<LanguageIcon width="20" height="20" viewBox="0 0 35 30" />
				</div>
				<p className="text-small font-regular">언어</p>
			</div>

			<div
				role="button"
				className={`${
					category === 'CERTIFICATE' ? 'bg-green-100 text-background-white' : 'bg-background-white text-slate'
				}
				flex justify-between bg-background-white drop-shadow-white px-[11px] py-[4px] rounded-[20px]`}
				tabIndex={0}
				onClick={() => handleFilteringMyPage({ category: checkCategoryFiltering('CERTIFICATE') })}
				onKeyPress={() => handleFilteringMyPage({ category: checkCategoryFiltering('CERTIFICATE') })}
			>
				<div className="pt-[3px] mr-[10px]">
					<CertificationIcon width="20" height="20" viewBox="0 0 30 30" />
				</div>
				<p className="text-small font-regular">자격증</p>
			</div>

			<div
				role="button"
				className={`${category === 'ETC' ? 'bg-green-100 text-background-white' : 'bg-background-white text-slate'}
				flex justify-between bg-background-white drop-shadow-white px-[11px] py-[4px] rounded-[20px]`}
				tabIndex={0}
				onClick={() => handleFilteringMyPage({ category: checkCategoryFiltering('ETC') })}
				onKeyPress={() => handleFilteringMyPage({ category: checkCategoryFiltering('ETC') })}
			>
				<div className="pt-[1px] mr-[10px]">
					<TestIcon width="20" height="20" viewBox="0 0 30 30" />
				</div>
				<p className="text-small font-regular">기타</p>
			</div>
		</div>
	);
}
