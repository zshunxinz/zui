---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "zui"
  text: "一个自己的vue组件库"
  tagline: 一个基于vue3的组件库
  actions:
    - theme: brand
      text: 开始使用
      link: /markdown-examples
    - theme: alt
      text: 组件
      link: /components/Button

# features:
#   - title: 动态表单
#     details: 基于element-plus的动态表单组件，支持json配置表单，自动生成表单组件
#   - title: 动态时间线
#     details: 基于element-plus的动态时间线组件，支持json配置时间线，自动生成时间线组件
#   - title: Feature C
#     details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
---

<script setup>
import Button from '../src/components/Button.vue'
</script>
<style>
  .button-group {
    padding:20px 0px ;
    display:flex;
    gap:10px;
  }
</style>
<div class="button-group">
  <Button>默认按钮</Button>
  <Button type="primary">主要按钮</Button>
  <Button type="success">成功按钮</Button>
  <Button type="warning">警告按钮</Button>
  <Button type="danger">危险按钮</Button>
  <Button type="info">信息按钮</Button>
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
