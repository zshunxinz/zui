import DefaultTheme from 'vitepress/theme';
import zui from '../../../src/install';
import '../../../src/styles/variables.css';
import '../../../src/style.css';
import '../../../src/styles/theme.css';
import './style.css';
import Demo from './Demo.vue';
import CollapsibleCode from './CollapsibleCode.vue';

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // 全局注册组件库
    app.use(zui);
    // 全局注册组件
    app.component('Demo', Demo);
    app.component('CollapsibleCode', CollapsibleCode);
  },
};
