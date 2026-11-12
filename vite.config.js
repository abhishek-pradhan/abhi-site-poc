import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (
            id.includes('/node_modules/react-dom/') ||
            id.includes('/node_modules/react/') ||
            id.includes('/node_modules/scheduler/')
          ) {
            return 'react-vendor';
          }

          if (
            id.includes('/node_modules/react-router/') ||
            id.includes('/node_modules/@remix-run/')
          ) {
            return 'router-vendor';
          }

          if (id.includes('/node_modules/@formatjs/')) {
            return 'i18n-vendor';
          }

          if (id.includes('/node_modules/@astryxdesign/core/')) {
            return 'astryx-core';
          }
        },
      },
    },
  },
  server: {
    port: 5173,
    open: true,
  },
});
