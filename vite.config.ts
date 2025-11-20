import { defineConfig } from 'vite';

// Use './' for Electron compatibility, or set VITE_BASE_PATH for GitHub Pages
export default defineConfig({
  base: process.env.VITE_BASE_PATH || './'
});
