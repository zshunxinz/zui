// https://vitepress.dev/reference/site-config
import { fileURLToPath } from 'url';
import { defineConfig } from 'vitepress';


export default defineConfig({
  outDir: './dist',
  title: "zui",
  description: "一个自己的vue组件库",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索',
            placeholder: '搜索'
          },
        }
      }
    },
    nav: [
      { text: '指南', link: '/' },
      { text: '组件', link: '/components/Button' },
      {
        text: '更新日志',
        items: [
          { text: '0.0.1', link: '/update/0.0.1' },
          { text: '0.0.2', link: '/update/0.0.2' },
        ]
      }
    ],
    sidebar: {
      'guide': [
        {
          text: '开始',
          items: [
            { text: '介绍', link: '/guide/start' },
            { text: '安装', link: '/guide/install' },
          ]
        },
      ],
      '/components/': [{
        text: '基础组件',
        items: [
          { text: 'Button 按钮', link: '/components/Button' },
          { text: 'ButtonGroup 组合按钮', link: '/components/ButtonGroup' },
          { text: 'Grid 网格布局', link: '/components/grid' },
          { text: 'Input 输入框', link: '/components/input' },
        ]
      }
      ]
    }
  }
})
