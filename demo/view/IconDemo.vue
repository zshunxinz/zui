<template>
  <div class="icon-demo">
    <h2>Icon 组件演示</h2>

    <div class="demo-section">
      <h3>基础图标</h3>
      <div class="icon-list">
        <Icon name="check" :size="24" />
        <Icon name="x" :size="24" />
        <Icon name="chevron-down" :size="24" />
        <Icon name="chevron-up" :size="24" />
        <Icon name="chevron-left" :size="24" />
        <Icon name="chevron-right" :size="24" />
        <Icon name="plus" :size="24" />
        <Icon name="minus" :size="24" />
      </div>
    </div>

    <div class="demo-section">
      <h3>不同尺寸</h3>
      <div class="icon-list">
        <Icon name="check" :size="16" />
        <Icon name="check" :size="24" />
        <Icon name="check" :size="32" />
        <Icon name="check" :size="48" />
      </div>
    </div>

    <div class="demo-section">
      <h3>不同颜色</h3>
      <div class="icon-list">
        <Icon name="check" :size="24" color="#409eff" />
        <Icon name="check" :size="24" color="#67c23a" />
        <Icon name="check" :size="24" color="#e6a23c" />
        <Icon name="check" :size="24" color="#f56c6c" />
      </div>
    </div>

    <div class="demo-section">
      <h3>自定义SVG</h3>
      <div class="icon-list">
        <Icon name="<path d='M12 2L2 7l10 5 10-5-10-5z' />" :size="24" />
      </div>
    </div>
  </div>
</template>

<script setup>
import Icon from '../components/Icon';
</script>

<style scoped>
.icon-demo {
  padding: 20px;
}

.demo-section {
  margin-bottom: 30px;
}

.icon-list {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  align-items: center;
}
</style>
