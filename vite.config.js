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
            refresh: true,
        }),
        visualizer({
            filename: './bundle-visualizer.html',
        }),
    ],
    ssr: {
        noExternal: [
            "swiper/react",
            "react-player",
        ],
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
