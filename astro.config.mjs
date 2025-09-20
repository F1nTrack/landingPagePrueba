
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [tailwind(), react()],
  site: 'https://f1ntrack.github.io/landingPagePrueba',
  base: '/landingPagePrueba/',
});