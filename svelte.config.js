import adapter from '@sveltejs/adapter-netlify';
import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess({
        scss: {
            prependData: `@import 'src/variables.scss';`
        }
    }),

	kit: {
		adapter: adapter()
	}
};

export default config;