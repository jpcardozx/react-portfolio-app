// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/react-portfolio-app/', // 👈 obrigatório no GitHub Pages!
  plugins: [react()],
});
