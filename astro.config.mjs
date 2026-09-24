import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://your-domain.com',
  integrations: [
    tailwind(),
    react(),
    mdx(),
    sitemap()
  ],
  vite: {
    build: {
      assetsInlineLimit: 4096
    }
  }
});
