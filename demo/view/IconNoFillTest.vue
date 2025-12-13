<template>
  <div class="icon-no-fill-test">
    <h2>Icon No Fill Test</h2>

    <div class="test-section">
      <h3>无填充图标测试</h3>
      <div class="icon-list">
        <Icon name="check" :size="24" />
        <span>Check Icon (无填充)</span>
        <Icon name="heart" :size="24" />
        <span>Heart Icon (无填充)</span>
        <Icon name="star" :size="24" />
        <span>Star Icon (无填充)</span>
      </div>
    </div>

    <div class="test-section">
      <h3>带填充图标测试</h3>
      <div class="icon-list">
        <Icon name="heart" :size="24" fill="red" />
        <span>红色填充心形</span>
        <Icon name="star" :size="24" fill="gold" />
        <span>金色填充星星</span>
      </div>
    </div>

    <div class="test-section">
      <h3>自定义SVG测试</h3>
      <div class="icon-list">
        <Icon name="<path d='M12 2L2 7l10 5 10-5-10-5z' />" :size="24" />
        <span>自定义SVG (无填充)</span>
        <Icon name="<circle cx='12' cy='12' r='10' />" :size="24" fill="blue" />
        <span>蓝色填充圆形</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import Icon from '../components/Icon';
</script>

<style scoped>
.icon-no-fill-test {
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
