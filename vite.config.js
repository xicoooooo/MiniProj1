import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import { viteSingleFile } from 'vite-plugin-singlefile'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    // Inlines all JS, CSS and assets into a single index.html,
    // as required by the assignment ("aggregated into a single file").
    viteSingleFile(),
  ],
  // Relative paths so the build works from file:// and from a GitHub Pages subpath.
  base: './',
  build: {
    // The built single-file app is committed to docs/ so it can be opened
    // directly from the repository (and optionally served by GitHub Pages).
    outDir: 'docs',
    emptyOutDir: true,
  },
})
