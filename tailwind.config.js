/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {},
		fontWeight: {
			light: 300,
			regular: 400,
			medium: 500,
			bold: 700,
		},
		fontSize: {
			'3xl': '28px',
			'2xl': '24px',
			xl: '20px',
			lg: '18px',
			base: '16px',
			tiny: '14px',
			sm: '12px',
			xs: '10px',
		},
	},
	plugins: [],
};
