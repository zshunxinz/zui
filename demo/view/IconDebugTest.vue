<template>
  <div class="icon-debug-test">
    <h2>Icon Debug Test</h2>

    <div class="test-section">
      <h3>基础图标测试</h3>
      <div class="icon-list">
        <Icon name="check" :size="24" />
        <span>Check Icon</span>
        <Icon name="x" :size="24" />
        <span>X Icon</span>
        <Icon name="user" :size="24" />
        <span>User Icon</span>
      </div>
    </div>

    <div class="test-section">
      <h3>尺寸测试</h3>
      <div class="icon-list">
        <Icon name="check" :size="16" />
        <span>16px</span>
        <Icon name="check" :size="24" />
        <span>24px</span>
        <Icon name="check" :size="32" />
        <span>32px</span>
        <Icon name="check" :size="48" />
        <span>48px</span>
      </div>
    </div>

    <div class="test-section">
      <h3>颜色测试</h3>
      <div class="icon-list">
        <Icon name="check" :size="24" color="red" />
        <span>Red</span>
        <Icon name="check" :size="24" color="blue" />
        <span>Blue</span>
        <Icon name="check" :size="24" color="green" />
        <span>Green</span>
      </div>
    </div>

    <div class="test-section">
      <h3>填充测试</h3>
      <div class="icon-list">
        <Icon name="heart" :size="24" />
        <span>No Fill (默认)</span>
        <Icon name="heart" :size="24" fill="red" />
        <span>Red Fill</span>
        <Icon name="star" :size="24" />
        <span>No Fill (默认)</span>
        <Icon name="star" :size="24" fill="gold" />
        <span>Gold Fill</span>
      </div>
    </div>

    <div class="test-section">
      <h3>自定义SVG测试</h3>
      <div class="icon-list">
        <Icon name="<path d='M12 2L2 7l10 5 10-5-10-5z' />" :size="24" />
        <span>Custom Path</span>
        <Icon name="<circle cx='12' cy='12' r='10' />" :size="24" />
        <span>Custom Circle</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import Icon from '../components/Icon';
</script>

<style scoped>
.icon-debug-test {
  padding: 20px;
}

.test-section {
  margin-bottom: 30px;
}

.icon-list {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
}
</style>
