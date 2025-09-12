// https://vitepress.dev/reference/site-config
import { fileURLToPath } from 'url';
import { defineConfig } from 'vitepress';
export default defineConfig({
  outDir: './dist',
  title: 'zui',
  description: '一个自己的vue组件库',
  themeConfig: {
    outlineTitle: '页面目录',
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索',
            placeholder: '搜索',
          },
        },
      },
    },
    nav: [
      { text: '指南', link: '/guide/start' },
      { text: '组件', link: '/components/Button' },
      {
        text: '更新日志',
        items: [
          { text: '0.0.1', link: '/update/0.0.1' },
          { text: '0.0.2', link: '/update/0.0.2' },
          { text: '0.0.3', link: '/update/0.0.3' },
          { text: '0.0.4', link: '/update/0.0.4' },
          { text: '0.0.5', link: '/update/0.0.5' },
          { text: '0.0.6', link: '/update/0.0.6' },
        ],
      },
    ],
    sidebar: {
      guide: [
        {
          text: '开始',
          items: [
            { text: '介绍', link: '/guide/start' },
            { text: '安装', link: '/guide/install' },
            { text: '主题', link: '/guide/theme' },
            { text: '颜色体系', link: '/guide/color' },
            { text: '图标', link: '/guide/icon' },
          ],
        },
      ],
      '/components/': [
        {
          text: '基础组件',
          collapsed: false,
          items: [
            { text: 'Button 按钮', link: '/components/Button' },
            { text: 'ButtonGroup 组合按钮', link: '/components/ButtonGroup' },
            { text: 'Icon 图标', link: '/components/Icon' },
          ],
        },
        {
          text: '布局组件',
          collapsed: false,
          items: [
            { text: 'Grid 网格布局', link: '/components/grid' },
            { text: 'Space 间距', link: '/components/Space' },
            { text: 'Accordion 手风琴', link: '/components/Accordion' },
            { text: 'Card 卡片', link: '/components/Card' },
            { text: 'Divider 分割线', link: '/components/Divider' },
            { text: 'Tabs 选项卡', link: '/components/Tabs' },
          ],
        },
        {
          text: '表单组件',
          collapsed: false,
          items: [
            { text: 'Input 输入框', link: '/components/input' },
            { text: 'Textarea 文本域', link: '/components/Textarea' },
            { text: 'Radio 单选框', link: '/components/Radio' },
            { text: 'Checkbox 多选框', link: '/components/Checkbox' },
            { text: 'Switch 开关', link: '/components/Switch' },
            { text: 'Select 选择器', link: '/components/Select' },
            { text: 'Slider 滑动条', link: '/components/Slider' },
            { text: 'Form 表单', link: '/components/Form' },
          ],
        },
        {
          text: '交互反馈',
          collapsed: false,
          items: [
            { text: 'Tooltip 提示', link: '/components/Tooltip' },
            { text: 'Popover 弹出层', link: '/components/Popover' },
          ],
        },
        {
          text: '导航组件',
          collapsed: false,
          items: [{ text: 'Sidebar 侧边栏', link: '/components/Sidebar' }],
        },
      ],
    },
  },
});
