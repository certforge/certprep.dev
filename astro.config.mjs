import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://certforge.github.io/GITHUB_README',
  integrations: [],
  build: {
    format: 'directory',
    inlineStylesheets: 'auto'
  }
});
