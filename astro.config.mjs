import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://certforge.dev',
  integrations: [],
  build: {
    format: 'directory',
    inlineStylesheets: 'auto'
  }
});
