import React from 'react';
import CertificationIcon from '@assets/category/certification-icon.svg';
import CompanyIcon from '@assets/category/company-icon.svg';
import LanguageIcon from '@assets/category/language-icon.svg';
import TestIcon from '@assets/category/test-icon.svg';

interface Props {
	className?: string;
	type: 'EMPLOYMENT' | 'LANGUAGE' | 'CERTIFICATE' | 'ETC';
	colored?: boolean;
}

export default function CategoryIcon({ className, type, colored = true }: Props) {
	const baseStyle = `inline-block w-[34px] h-[34px] py-2.5 px-2 rounded ${className} `;
	const categoryInfo = {
		CERTIFICATE: {
			icon: (
				<section className={`${colored ? 'bg-[#C4DDFF]' : 'bg-background-white'} ${baseStyle}`}>
					<CertificationIcon className="m-auto" width="15px" height="15px" viewBox="0 0 30 30" />
				</section>
			),
		},
		EMPLOYMENT: {
			icon: (
				<section className={`${colored ? 'bg-[#E2EFFF]' : 'bg-background-white'} ${baseStyle}`}>
					<CompanyIcon className="m-auto" width="15px" height="15px" viewBox="0 0 25 25" />
				</section>
			),
		},
		LANGUAGE: {
			icon: (
				<section className={`${colored ? 'bg-[#EFF3F6]' : 'bg-background-white'}  ${baseStyle}`}>
					<LanguageIcon className="m-auto" width="20px" height="20px" viewBox="0 0 40 40" />
				</section>
			),
		},
		ETC: {
			icon: (
				<section className={`${colored ? 'bg-[#F5F7F5]' : 'bg-background-white'} ${baseStyle}`}>
					<TestIcon className="m-auto" width="20px" height="20px" viewBox="0 0 20 40" />
				</section>
			),
		},
	};

	return categoryInfo[type].icon;
}
