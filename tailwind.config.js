/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class', // or 'media' or falses
  daisyui: {
    themes: ["cupcake"],
  },
	theme: {
		screens: {
			sm: '540px',
			// => @media (min-width: 576px) { ... }

			md: '720px',
			// => @media (min-width: 768px) { ... }

			lg: '960px',
			// => @media (min-width: 992px) { ... }

			xl: '1140px',
			// => @media (min-width: 1200px) { ... }

			'2xl': '1320px'
			// => @media (min-width: 1400px) { ... }
		},
		container: {
			center: true,
			padding: '16px'
		},
		extend: {
			backgroundImage: {
				'hero-pattern': "url('https://images.unsplash.com/photo-1717983319625-190ac846ef58?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIxfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D')",
			},
			colors: {
				black: '#212b36',
				dark: '#090E34',
				'dark-700': '#090e34b3',
				primary: '#3056D3',
				secondary: '#13C296',
				'body-color': '#637381',
				warning: '#FBBF24'
			},
			boxShadow: {
				input: '0px 7px 20px rgba(0, 0, 0, 0.03)',
				pricing: '0px 39px 23px -27px rgba(0, 0, 0, 0.04)',
				'switch-1': '0px 0px 5px rgba(0, 0, 0, 0.15)',
				testimonial: '0px 60px 120px -20px #EBEFFD'
			}
		}
	},
	theme: {
		extend: {
			fontFamily: {
				Mogra: ['"Mogra"', 'cursive']
			}
		}
	},
	variants: {
		extend: {
			backgroundOpacity: ['dark']
		}
	},
	plugins: [require('daisyui')]
};
