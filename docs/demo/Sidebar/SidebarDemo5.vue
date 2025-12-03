<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const menuConfig: any[] = [
  {
    id: 'home',
    label: '首页',
    icon: 'house',
    component: defineAsyncComponent(() => import('../Card/CardDemo1.vue'))
  },
  {
    id: 'dashboard',
    label: '仪表盘',
    icon: 'chart-area',
    component: defineAsyncComponent(() => import('../Tabs/TabsDemo1.vue'))
  },
  {
    id: 'system',
    label: '系统',
    icon: 'codepen',
    children: [
      {
        id: 'settings',
        label: '设置',
        icon: 'settings',
        component: defineAsyncComponent(() => import('../Grid/GridDemo1.vue'))
      },
      {
        id: 'help',
        label: '帮助',
        icon: 'hand-helping',
        component: defineAsyncComponent(() => import('../Grid/GridDemo2.vue'))
      }
    ]
  }
]
</script>

<template>
  <SidebarLayout v-model:collapsed="isCollapsed" :menuConfig="menuConfig" defaultActiveId="home" />
</template>