<script setup lang="ts"></script>

<template>
  <footer class="SidebarFooter">
    <slot />
  </footer>
</template>

<style scoped>
.SidebarFooter {
  width: 100%;
  border-top: 1px solid var(--sidebar-border);
}
</style>
