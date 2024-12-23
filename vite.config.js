import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
    plugins: [
        react(),
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            ssr: 'resources/js/ssr.js',
        }),
        visualizer({
            filename: './bundle-visualizer.html',
        }),
    ],
    build: {
        rollupOptions: {
            output: {
                chunkFileNames: 'assets/js/[name]-[hash].js',
                entryFileNames: 'assets/js/[name]-[hash].js',
                assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
            },
        },
    },
    esbuild: {
        loader: 'jsx',
        include: /.*\.jsx?$/,
        exclude: []
    },
    optimizeDeps: {
        include: ['react', 'react-dom', '@inertiajs/react'],
        esbuildOptions: {
            loader: {
                '.js': 'jsx',
            },
        },
    },
});
