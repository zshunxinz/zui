<script setup>
import Button from './components/Button.vue'
import ButtonGroup from './components/ButtonGroup.vue'
import Col from './components/Col.vue'
import Row from './components/Row.vue'
import HelloWorld from './components/HelloWorld.vue'
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

    <div class="component-section">
      <h2>Input 组件</h2>
      <Input v-model="value" placeholder="请输入内容" />
    </div>

    <div class="component-section">
      <h2>Button 组件</h2>
      <div class="button-group">
        <Button type="primary">Primary Button</Button>
        <Button type="success">Success Button</Button>
        <Button type="warning">Warning Button</Button>
        <Button type="danger">Danger Button</Button>
        <Button type="info">Info Button</Button>
      </div>
    </div>

    <div class="component-section">
      <h2>ButtonGroup 组件</h2>
      <ButtonGroup>
        <Button type="primary">Left</Button>
        <Button type="primary">Middle</Button>
        <Button type="primary">Right</Button>
      </ButtonGroup>
    </div>

    <div class="component-section">
      <h2>Grid 组件</h2>
      <Row>
        <Col span="8"><div class="grid-content">Col-8</div></Col>
        <Col span="8"><div class="grid-content">Col-8</div></Col>
        <Col span="8"><div class="grid-content">Col-8</div></Col>
      </Row>
      <Row>
        <Col span="12"><div class="grid-content">Col-12</div></Col>
        <Col span="12"><div class="grid-content">Col-12</div></Col>
      </Row>
    </div>

    <div class="component-section">
      <h2>HelloWorld 组件</h2>
      <HelloWorld msg="Welcome to Your Vue.js App" />
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

.component-section {
  margin: 2rem 1rem;
  padding: 1rem;
  border: 1px solid var(--color-border);
  border-radius: 4px;
}

.button-group {
  margin-top: 1rem;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.grid-content {
  background-color: var(--color-primary-light);
  color: var(--color-text);
  text-align: center;
  padding: 1rem;
  border-radius: 4px;
  height: 100%;
}
</style>
