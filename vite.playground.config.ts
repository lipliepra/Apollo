import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    root: 'playground',
    plugins: [react()],
    server: { port: 6006, strictPort: true },
    build: { outDir: '../playground-dist', emptyOutDir: true },
});
