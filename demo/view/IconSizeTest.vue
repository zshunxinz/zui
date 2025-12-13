<template>
  <div class="icon-size-test">
    <h2>Icon Size Test</h2>

    <div class="test-section">
      <h3>不同尺寸的check图标</h3>
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
      <h3>不同尺寸的user图标</h3>
      <div class="icon-list">
        <Icon name="user" :size="16" />
        <span>16px</span>
        <Icon name="user" :size="24" />
        <span>24px</span>
        <Icon name="user" :size="32" />
        <span>32px</span>
        <Icon name="user" :size="48" />
        <span>48px</span>
      </div>
    </div>

    <div class="test-section">
      <h3>自定义SVG图标</h3>
      <div class="icon-list">
        <Icon name="<path d='M12 2L2 7l10 5 10-5-10-5z' />" :size="16" />
        <span>16px</span>
        <Icon name="<path d='M12 2L2 7l10 5 10-5-10-5z' />" :size="24" />
        <span>24px</span>
        <Icon name="<path d='M12 2L2 7l10 5 10-5-10-5z' />" :size="32" />
        <span>32px</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import Icon from '../components/Icon';
</script>

<style scoped>
.icon-size-test {
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
