import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  // 确保 SVG 文件被正确识别为资源
  assetsInclude: ['**/*.svg'],
  server: {
    // 允许访问父目录文件（解决 zui-01 库中 SVG 图标的访问问题）
    fs: {
      allow: ['../..'],
    },
  },
})
