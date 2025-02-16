import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        releaseNotes: './src/pages/release-notes.html',
        moreTools: './src/pages/more.html',
      },
    },
  },
  server: {
    host: '0.0.0.0', // Allow access from Render
    port: process.env.PORT || 5173, // Use Render's provided port or default to 5173
    strictPort: true, // Ensure it does not try another port
  },
  preview: {
    host: '0.0.0.0',
    port: process.env.PORT || 5173,
  },
});
