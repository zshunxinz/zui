<script setup>
import Button from './components/Button.vue'
import Input from './components/Input.vue';
import ThemeToggle from './components/ThemeToggle.vue'
import { ref } from 'vue';

const value = ref('');
</script>

<template>
  <div class="app-container">
    <div class="app-header">
      <ThemeToggle />
    </div>
    <Input v-model="value" placeholder="输入框" />
    <div class="button-group">
      <Button type="primary">Primary Button</Button>
      <Button type="success">Success Button</Button>
      <Button type="warning">Warning Button</Button>
      <Button type="danger">Danger Button</Button>
      <Button type="info">Info Button</Button>
    </div>
  </div>
</template>



<style scoped>
.app-container {
  /* padding: 1rem; */
  min-height: 100vh;
  background-color: var(--color-background);
  color: var(--color-text);
  transition: background-color 0.3s, color 0.3s;
}

.app-header {
  display: flex;
  justify-content: flex-end;
}

.button-group {
  margin-left: 10px;
  margin-top: 2rem;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}
</style>
