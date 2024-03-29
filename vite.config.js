import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgrPlugin from 'vite-plugin-svgr';

export default defineConfig(() => {
  return {
    server: {
      open: true,
    },
    build: {
      outDir: 'build',
    },
    plugins: [react({ jsxImportSource: '@emotion/react' }), svgrPlugin()],
    optimizeDeps: {
      exclude: ['js-big-decimal']
    }
  };
});