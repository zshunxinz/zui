<template>
  <div class="demo">
    <slot></slot>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.demo {
  margin: 0.5rem 0;
  min-height: 130px;
  /* width: 100%; */
  /* display: flex; */
  /* align-items: center; */
  padding: 50px 50px;
  border: 1px solid var(--color-border-1);
  /* box-shadow: 1px 4px 3px rgba(0, 0, 0, 0.1); */
}
</style>
