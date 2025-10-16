import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      pages: 'docs',   // salida del build
      assets: 'docs',
      fallback: '404.html'
    }),
    paths: {
      base: ''         // dominio raíz: comisioncorograficadigital.github.io
    }
  }
};

export default config;
