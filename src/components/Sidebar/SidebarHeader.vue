<script setup lang="ts"></script>

<template>
  <header class="SidebarHeader">
    <slot />
  </header>
</template>

<style scoped>
.SidebarHeader {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--padding-3);
  /* border-bottom: 1px solid var(--sidebar-border); */
}
</style>
