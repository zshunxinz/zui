<script setup lang="ts">
import { inject } from 'vue';
import { vk } from '@vueuse/core';

const group = inject('sidebar-group');
const open = group?.open;
const collapsible = group?.collapsible;
</script>

<template>
  <transition name="sidebar-group-content" mode="out-in">
    <div v-if="!collapsible || open" class="SidebarGroupContent">
      <slot />
    </div>
  </transition>
</template>

<style scoped>
.SidebarGroupContent {
  padding: 0;
  overflow: hidden;
}

.sidebar-group-content-enter-active,
.sidebar-group-content-leave-active {
  transition: all 0.3s ease;
}

.sidebar-group-content-enter-from,
.sidebar-group-content-leave-to {
  opacity: 0;
  max-height: 0;
}

.sidebar-group-content-enter-to,
.sidebar-group-content-leave-from {
  opacity: 1;
  max-height: 500px; /* 足够大的值来容纳内容 */
}
</style>