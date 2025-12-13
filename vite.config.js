import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import { readFileSync } from 'fs';

// 读取 package.json
const packageJson = JSON.parse(
  readFileSync(resolve(__dirname, 'package.json'), 'utf-8')
);

export default defineConfig({
  plugins: [
    vue(),
    // 静态资源路径
    // resolve({
    //   alias: {
    //     '@': resolve(__dirname, 'src'),
    //   },
    // }),
  ],
  // 库模式构建
  build: {
    lib: {
      // 库的入口文件
      entry: resolve(__dirname, 'src/index.ts'),
      // 库的全局变量名（CDN 引入时使用）
      name: 'Zui01',
      // 输出文件名格式
      fileName: format => `zui-01.${format}.js`,
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue',
        },
        // 替换版本号
        banner: `/*! ${packageJson.name} v${packageJson.version} */`,
      },
    },
    // 输出目录
    outDir: 'dist',
    // 清空输出目录
    emptyOutDir: true,
  },
});
