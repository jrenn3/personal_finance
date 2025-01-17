import { defineConfig } from 'vite';
import mpa from 'vite-plugin-mpa';

export default defineConfig({
  base: './', // Keeps relative paths for deployment
  build: {
    outDir: 'dist', // Build output directory
    // rollupOptions: {
    //   input: {
    //     main: './src/pages/index.html',
    //     releaseNotes: './src/pages/release-notes.html',
    //   },
    // },
  },
  // plugins: [
  //   mpa({
  //     scanDir: 'src/pages',
  //     filename: '[name].html',
  //     onBuildStart: (files) => {
  //       console.log('MPA files detected:', files);
  //     },
  //   }),
  // ],
});