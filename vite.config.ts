import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      exportAsDefault: true,
    }),
  ],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: '/src',
      },
    ],
  },
  define: {
    GLOBAL_IS_DEV: JSON.stringify(true),
    GLOBAL_API_URL: JSON.stringify('http://localhost:8000'),
    GLOBAL_PROJECT: JSON.stringify('frontend'),
  },
});
