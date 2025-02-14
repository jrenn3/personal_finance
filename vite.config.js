import { defineConfig } from 'vite';

export default defineConfig({
  base: '/personal_finance/',
  build: {
    rollupOptions: {
        input: {
            main: './index.html', 
            releaseNotes: './src/pages/release-notes.html',
            moreTools: './src/pages/more.html', 
        },
    },
  },
});
