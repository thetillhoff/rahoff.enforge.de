import adapter from '@sveltejs/adapter-netlify';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
      edge: false,
      split: false
    })
	},
  files: {
    lib: "/src/lib"
  }
};

export default config;
