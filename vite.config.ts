import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    build: {
        target: 'es2020',
        lib: { entry: 'src/index.ts', formats: ['es'], fileName: 'index' },
        rollupOptions: {
            external: (id) => /^(react|react-dom)(\/|$)/.test(id),
        },
    },
});
