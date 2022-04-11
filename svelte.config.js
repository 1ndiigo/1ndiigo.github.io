import preprocess from "svelte-preprocess";
import adapter from '@sveltejs/adapter-static';

const dev = "production" === "development";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],

  kit: {
    adapter: adapter({
      pages: "dist",
      assets: "dist"
    }),
    paths: {
      // change below to your repo name
      base: dev ? "" : "/1ndiigo.github.io",
    },
    prerender: {
      default: true
    }
  }
};

export default config;
