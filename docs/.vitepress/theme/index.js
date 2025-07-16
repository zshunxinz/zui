import DefaultTheme from "vitepress/theme";
import zui from "../../../src/install";
import "../../../src/styles/variables.css";
import "../../../src/style.css";
import "../../../src/styles/theme.css";
import "./style.css";

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // 全局注册组件库
    app.use(zui);
  },
};
