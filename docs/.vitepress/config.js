// https://vitepress.dev/reference/site-config
import { fileURLToPath } from 'url';
import { defineConfig } from 'vitepress';


export default defineConfig({
  title: "zui",
  description: "一个自己的vue组件库",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '指南', link: '/' },
      { text: '组件', link: '/components/Button' }
    ],
    sidebar: {
      '/components/': [
        { text: 'Button 按钮', link: '/components/Button' },
          { text: 'ButtonGroup 组合按钮', link: '/components/ButtonGroup' },
        { text: 'Grid 网格布局', link: '/components/grid' },
        { text: 'Input 输入框', link: '/components/input' },
      ]
    }
  }
})
