import { join } from 'path'
import type { Config } from 'tailwindcss'
import { skeleton } from '@skeletonlabs/tw-plugin'
import forms from '@tailwindcss/forms'
import typography from '@tailwindcss/typography'


/** @type {import('tailwindcss').Config} */
const config = {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}',
	// 3. Append the path to the Skeleton package
	join(require.resolve(
		'@skeletonlabs/skeleton'),
		'../**/*.{html,js,svelte,ts}')],
	theme: {
		extend: {
			screens: {
				'2xl': {'max': '1535px'},
				// => @media (max-width: 1535px) { ... }
				
				'lap': { 'max': '1440px' },
				
				'xl': {'max': '1320px'},
				// => @media (max-width: 1279px) { ... }
				
				'md-b': { 'max': '1125px'},
				
				'lg': {'max': '1023px'},
				// => @media (max-width: 1023px) { ... }
		  
		  
				'md': {'max': '767px'},
				// => @media (max-width: 767px) { ... }
		  
				'sm': {'max': '611px'},
				// => @media (max-width: 639px) { ... }
		  
		  // ---------------------------------------------------------------------------------------------------
		  
				// 'sm-min': '640px',
				// => @media (min-width: 640px) { ... }
		  
				// 'md-min': '768px',
				// => @media (min-width: 768px) { ... }
		  
				// 'lg-min': '1024px',
				// => @media (min-width: 1024px) { ... }
		  
				// 'xl-min': '1280px',
				// => @media (min-width: 1280px) { ... }
		  
				// '2xl-min': '1536px',
				// => @media (min-width: 1536px) { ... }
			  },
		},
	},
	plugins: [
		forms,
		typography, 
		skeleton({
			themes: {
				preset: ["skeleton", "gold-nouveau", "wintry", "crimson", "hamlindigo", "modern", "rocket", "sahara", "seafoam", "vintage" ],
			},
		}),
	]
} satisfies Config

export default config
