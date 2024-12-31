import { defineConfig } from 'vite';
import copy from 'rollup-plugin-copy';

export default defineConfig({
  base: './', // Ensures relative paths for GitHub Pages
  build: {
    outDir: 'dist', // Default output directory for Vite
  },
  plugins: [
    copy({
      targets: [
        { src: 'budget-spreadsheet.xlsx', dest: 'dist' }, // Ensure the file is copied to the build folder
      ],
      hook: 'buildEnd', // Trigger the copy after build ends
    }),
  ],
});
