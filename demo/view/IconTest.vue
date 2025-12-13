<template>
  <div class="icon-test">
    <h2>Icon Component Test</h2>

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
      <h3>自定义颜色测试</h3>
      <div class="icon-list">
        <Icon name="check" :size="24" color="red" />
        <span>Red Check</span>
        <Icon name="check" :size="24" color="blue" />
        <span>Blue Check</span>
        <Icon name="check" :size="24" color="green" />
        <span>Green Check</span>
      </div>
    </div>

    <div class="test-section">
      <h3>自定义SVG测试</h3>
      <div class="icon-list">
        <Icon name="<path d='M12 2L2 7l10 5 10-5-10-5z' />" :size="24" />
        <span>Custom SVG</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import Icon from '../components/Icon';
</script>

<style scoped>
.icon-test {
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
