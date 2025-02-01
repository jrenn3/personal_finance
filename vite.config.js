import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  build: {
    rollupOptions: {
        input: {
            main: './index.html', 
            releaseNotes: './src/pages/release-notes.html',
            moreTools: './src/pages/more-tools.html', 
        },
    },
  },
});
