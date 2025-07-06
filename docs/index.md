---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "zui"
  text: "一个自己的组件库"
  tagline: 简单、好用的组件库
  actions:
    - theme: brand
      text: 开始使用
      link: /guide/install
    - theme: alt
      text: 组件
      link: /components/Button

      
features:
  - icon: 📦
    title: 丰富的组件
    details: 提供多种常用的组件，覆盖各种UI场景
  - icon: 🎨
    title: 主题定制
    details: 支持自定义主题，满足个性化需求
  - icon: 📱
    title: 响应式设计
    details: 支持自适应布局，适应各种屏幕尺寸
  - icon: 📃
    title: 配置化表单
    details: 支持配置化表单，减少重复开发，提高开发效率

---



```bash
npm install zui --save
```








<div style="position: absolute;top:-500px;width:100%;z-index:10">
  <Row justify="end" :gutter="0">
    <Col :span="1"><Button text>默认按钮</Button></Col>
    <Col :span="1"><Button text type="primary">主要按钮</Button></Col>
    <Col :span="1"><Button text type="success">成功按钮</Button></Col>
    <Col :span="1"><Button text type="warning">警告按钮</Button></Col>
    <Col :span="1"><Button text type="danger">危险按钮</Button></Col>
    <Col :span="1"><Button text type="info">信息按钮</Button></Col>
    <Col :span="1"><Button >默认按钮</Button></Col>
    <Col :span="1"><Button type="primary">主要按钮</Button></Col>
    <Col :span="1"><Button type="success">成功按钮</Button></Col>
    <Col :span="1"><Button type="warning">警告按钮</Button></Col>
    <Col :span="1"><Button type="danger">危险按钮</Button></Col>
    <Col :span="1"><Button type="info">信息按钮</Button></Col>
  </Row>
  <Row justify="end" style="margin-top:10px">
    <Input placeholder="开始 zui 使用之旅" width="540px" height="50px" />
  </Row>
</div>

<style>
  .start-button{
    border-radius: 10px;
    background-color: #007aff;
    color: #fff;
    padding: 10px 20px;
    font-size: 16px;
    font-weight: 500;
    border: none;
    cursor: pointer;
  }
</style>

## 核心特性

### 🚀 高效开发体验
- **TypeScript原生支持**：完善的类型定义，提供精准的代码提示和类型检查
- **按需引入**：支持组件和样式的按需加载，减小打包体积
- **友好的API设计**：简洁直观的API，降低学习成本

### 🎨 视觉设计
- **主题定制**：通过CSS变量实现全局主题定制，支持明暗模式切换
- **精致动画**：内置过渡动画效果，提升用户体验
- **响应式布局**：适配移动端、平板和桌面端等多种设备尺寸

### 🔋 功能完备
- **核心组件**：提供Button（支持6种类型/3种尺寸/加载状态）、Input（带清除/密码切换）、Grid(Row/Col)栅格系统、ButtonGroup按钮组等基础UI组件
- **主题切换**：通过ThemeToggle组件实现明暗主题无缝切换，支持16种CSS变量自定义主题色、圆角半径和间距
- **响应式布局**：基于Row和Col组件实现24列栅格系统，支持5种响应式断点（xs/sm/md/lg/xl）和灵活的列偏移

### ⚡ 性能优化
- **轻量无依赖**：核心包体积仅30KB(gzipped)，无第三方依赖，通过Rollup优化打包
- **Scoped CSS隔离**：组件样式通过Vue单文件组件的scoped特性隔离，避免样式冲突
- **Tree-shaking支持**：基于ES模块设计，支持按需引入，减小最终打包体积
- **细粒度响应式**：基于Vue3的Composition API和Proxy响应式系统，实现组件精准更新

## 安装指南

### 安装

```bash
npm install zui --save
```

### 引入组件

#### 全局引入

```javascript
import { createApp } from 'vue'
import Zui from 'zui'
import 'zui/dist/style.css'
import App from './App.vue'

const app = createApp(App)
app.use(Zui)
app.mount('#app')
```

#### 按需引入

```javascript
import { Input } from 'zui'
import 'zui/dist/input.css'

export default {
  components: {
    Input
  }
}
```

### 基本使用

```vue
<template>
  <Input placeholder="请输入内容" />
</template>
```

<script setup lang="ts">
import { ref } from 'vue'
</script>
<style>
  /* .button-group {
    padding:20px 0px ;
    display:flex;
    gap:10px;
  } */
</style>
<div style="display: flex; gap: 40px; margin: 0 auto; max-width: 1200px;">
<div style="flex: 1;">
<!-- 主内容区域 -->
<div class="button-group">
  <Button>默认按钮</Button>
  <Button type="primary">主要按钮</Button>
  <Button type="success">成功按钮</Button>
  <Button type="warning">警告按钮</Button>
  <Button type="danger">危险按钮</Button>
  <Button type="info">信息按钮</Button>
</div>
</div>

</div>
<div class="button-group">
  <Button>默认按钮</Button>
  <Button type="primary" text>主要按钮</Button>
  <Button type="success" text>成功按钮</Button>
  <Button type="warning" text>警告按钮</Button>
  <Button type="danger" text>危险按钮</Button>
  <Button type="info" text>信息按钮</Button>
</div>
<div class="button-group">
  <Button>默认按钮</Button>
  <Button type="primary" text border>主要按钮</Button>
  <Button type="success" text border>成功按钮</Button>
  <Button type="warning" text border>警告按钮</Button>
  <Button type="danger" text border>危险按钮</Button>
  <Button type="info" text border>信息按钮</Button>
</div>
