# 组件列表

欢迎使用 zui 组件库。这里提供了丰富的 Vue 组件，帮助您快速构建美观、功能完备的用户界面。

## 组件分类

<details open>
<summary><strong>基础组件</strong></summary>
- <a href="./Button">Button 按钮</a> - 用于触发操作的基础按钮组件
- <a href="./ButtonGroup">ButtonGroup 组合按钮</a> - 将多个按钮组合在一起使用
- <a href="./Icon">Icon 图标</a> - 提供丰富的图标支持
- <a href="./Divider">Divider 分割线</a> - 用于分隔内容区域
</details>

<details open>
<summary><strong>布局组件</strong></summary>
- <a href="./grid">Grid 网格布局</a> - 基于行和列的灵活布局系统
- <a href="./Space">Space 间距</a> - 控制组件之间的间距
- <a href="./Accordion">Accordion 手风琴</a> - 可折叠的内容面板
- <a href="./Card">Card 卡片</a> - 用于展示相关信息的卡片容器
- <a href="./Tabs">Tabs 选项卡</a> - 用于切换不同内容区域
</details>

<details open>
<summary><strong>表单组件</strong></summary>
- <a href="./input">Input 输入框</a> - 用于文本输入
- <a href="./Textarea">Textarea 文本域</a> - 用于多行文本输入
- <a href="./Radio">Radio 单选框</a> - 用于单选操作
- <a href="./Checkbox">Checkbox 多选框</a> - 用于多选操作
- <a href="./Switch">Switch 开关</a> - 用于开关状态切换
- <a href="./Select">Select 选择器</a> - 用于从选项列表中选择
- <a href="./Slider">Slider 滑动条</a> - 用于通过拖拽滑块来输入数值
- <a href="./Form">Form 表单</a> - 表单容器，支持数据收集和验证
</details>

<details open>
<summary><strong>交互反馈</strong></summary>
- <a href="./Tooltip">Tooltip 提示</a> - 鼠标悬停时显示的提示信息
- <a href="./Popover">Popover 弹出层</a> - 点击元素时弹出的内容面板
</details>

<details open>
<summary><strong>导航组件</strong></summary>
- <a href="./Sidebar">Sidebar 侧边栏</a> - 提供导航菜单的侧边栏组件
</details>

## 使用指南

### 安装

```bash
npm install zui
# 或
yarn add zui
```

### 引入组件

```javascript
// 全局引入
import { createApp } from 'vue'
import App from './App.vue'
import zui from 'zui'
import 'zui/dist/style.css'

const app = createApp(App)
app.use(zui)
app.mount('#app')

// 按需引入
import { Button, Input } from 'zui'
import 'zui/dist/style.css'

export default {
  components: {
    Button,
    Input
  }
}
```

### 版本说明

请查看 <a href="/update/0.0.6">更新日志</a> 了解各版本的更新内容。