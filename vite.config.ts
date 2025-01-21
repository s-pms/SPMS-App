import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [uni()],
  build: {
    minify: 'terser',
    terserOptions: {
      keep_classnames: true,
      keep_fnames: true,
    },
  },
  server: {
    open: true,
    host: '0.0.0.0',
    port: 3000,
    https: false,
    proxy: {
      '/api': {
        target: 'http://localhost:8080/',
        rewrite: (path) => path.replace(/^\/api/, ''),
        changeOrigin: true,
      },
      '/oauth2': 'http://127.0.0.1:8080',
    },
  },
})
