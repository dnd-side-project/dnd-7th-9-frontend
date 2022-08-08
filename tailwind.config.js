/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				main: '#24CD88',
				sub: '#FF8300',
				// effect
				'effect-gradation-start': '#00C883',
				'effect-gradation-end': '#01AEB7',
				'bright-effect-gradation-start': '#F1C93D',
				'bright-effect-gradation-end': '#93F358',
				// background
				'background-white': '#FFFFFF',
				'background-gray': '#EFF3F6',
				// error
				'error-red': '#FF8080',
				'error-green': 'rgba(36, 205, 136, 0.3)',
			},
			borderRadius: {
				DEFAULT: '10px',
			},
			dropShadow: {
				white: '0px 0px 7px rgba(139, 149, 161, 0.25)',
				colored: '0px 0px 7px rgba(0, 0, 0, 0.25)',
			},
		},
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

