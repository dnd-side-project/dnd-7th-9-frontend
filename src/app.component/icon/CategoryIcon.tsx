import React from 'react';
import CertificationIcon from '@assets/category/certification-icon.svg';
import CompanyIcon from '@assets/category/company-icon.svg';
import LanguageIcon from '@assets/category/language-icon.svg';
import TestIcon from '@assets/category/test-icon.svg';

interface Props {
	className?: string;
	type: 'certification' | 'company' | 'language' | 'test';
}

export default function CategoryIcon({ className, type }: Props) {
	const categoryInfo = {
		certification: {
			icon: <CertificationIcon className="m-auto" width="15px" height="15px" viewBox="0 0 30 30" />,
		},
		company: {
			icon: <CompanyIcon className="m-auto" width="15px" height="15px" viewBox="0 0 25 25" />,
		},
		language: {
			icon: <LanguageIcon className="m-auto" width="20px" height="20px" viewBox="0 0 40 40" />,
		},
		test: {
			icon: <TestIcon className="m-auto" width="20px" height="20px" viewBox="0 0 20 40" />,
		},
	};

	const categoryIcon = categoryInfo[type].icon;

	return (
		<section className={`inline-block w-[34px] h-[34px] py-2.5 rounded bg-background-gray ${className}`}>
			{categoryIcon}
		</section>
	);
}
