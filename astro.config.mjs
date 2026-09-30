// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({ site: 'https://brilliant-lily-57de5c.netlify.app', devToolbar: { enabled: false }, integrations: [sitemap()] });

