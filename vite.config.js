import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  build: {
    rollupOptions: {
        input: {
            main: './index.html', // Main page
            releaseNotes: './src/pages/release-notes.html', // Additional page
        },
    },
  },
});
