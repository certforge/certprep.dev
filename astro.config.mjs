import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://certprep.dev',
  integrations: [],
  build: {
    format: 'directory',
    inlineStylesheets: 'auto'
  }
});
