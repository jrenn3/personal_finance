import { defineConfig } from 'vite';
import mpa from 'vite-plugin-mpa';

export default defineConfig({
    plugins: [
        mpa({
            scanDir: 'src/pages', // Directory containing your additional HTML files
        }),
    ],
    build: {
        rollupOptions: {
            input: {
                main: './index.html',                  // Main entry point
                releaseNotes: './src/pages/release-notes.html', // Additional page
            },
        },
    },
});
