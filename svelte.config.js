import adapter from '@sveltejs/adapter-auto'
// Enable use of PostCSS in <style> blocks
import { vitePreprocess } from '@sveltejs/kit/vite'
// Enable use of React components in Svelte
import preprocessReact from 'svelte-preprocess-react/preprocessReact'
import preprocess from 'svelte-preprocess'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	},
	preprocess: [
		vitePreprocess(),
		preprocessReact(),
		preprocess({
			sourceMap: true,
			postcss: true
		})
	]
}

export default config
