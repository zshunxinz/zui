---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: 'zui'
  text: '一个自己的组件库'
  tagline: 简单、好用的组件库
  actions:
    - theme: brand
      text: 开始使用
      link: /guide/install
    - theme: alt
      text: 组件
      link: /components/Button
---

<script setup lang="ts">
import { ref } from 'vue'
import index from './view/index.vue'
</script>

<index />
