<template>
  <div class="icon-size-fix-test">
    <h2>Icon Size Fix Test</h2>

    <div class="test-section">
      <h3>数字尺寸测试</h3>
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
      <h3>字符串尺寸测试</h3>
      <div class="icon-list">
        <Icon name="heart" size="16px" />
        <span>16px</span>
        <Icon name="heart" size="24px" />
        <span>24px</span>
        <Icon name="heart" size="2em" />
        <span>2em</span>
        <Icon name="heart" size="3rem" />
        <span>3rem</span>
      </div>
    </div>

    <div class="test-section">
      <h3>自定义SVG尺寸测试</h3>
      <div class="icon-list">
        <Icon name="<path d='M12 2L2 7l10 5 10-5-10-5z' />" :size="16" />
        <span>16px</span>
        <Icon name="<path d='M12 2L2 7l10 5 10-5-10-5z' />" :size="24" />
        <span>24px</span>
        <Icon name="<path d='M12 2L2 7l10 5 10-5-10-5z' />" :size="32" />
        <span>32px</span>
      </div>
    </div>

    <div class="test-section">
      <h3>对比测试</h3>
      <div class="icon-list">
        <div style="display: flex; flex-direction: column; align-items: center">
          <Icon name="star" :size="24" />
          <span>24px</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center">
          <Icon name="star" :size="48" />
          <span>48px</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Icon from '../components/Icon';
</script>

<style scoped>
.icon-size-fix-test {
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
