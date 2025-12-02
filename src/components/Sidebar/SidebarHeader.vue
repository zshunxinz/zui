<script setup lang="ts" >
defineProps({
  title: {
    type: String,
    default: '',
  },
  border: {
    type: Boolean,
    default: true,
  }
})
</script>

<template>
  <header class="SidebarHeader" :class="{'border-bottom': border}">
    <slot />
  </header>
</template>

<style scoped>
.SidebarHeader {
}

.border-bottom {
  border-bottom: 1px solid var(--sidebar-border);
}
</style>
