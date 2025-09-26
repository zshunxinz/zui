<script setup lang="ts"></script>

<template>
  <nav class="SidebarMenu">
    <slot />
  </nav>
</template>

<style scoped>
.SidebarMenu {
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
}
</style>
