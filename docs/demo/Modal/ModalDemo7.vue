<template>
  <div>
    <h3>不同动画效果</h3>
    <div class="demo-buttons">
      <Button @click="openModal('zoom')">缩放动画 (zoom)</Button>
      <Button @click="openModal('slide')">滑动动画 (slide)</Button>
      <Button @click="openModal('fade')">淡入淡出 (fade)</Button>
      <Button @click="openModal('bounce')">弹跳动画 (bounce)</Button>
    </div>

    <!-- 缩放动画 -->
    <Modal
      v-model:open="modalStates.zoom"
      title="缩放动画示例"
      animation="zoom"
      size="md"
    >
      <div class="demo-content">
        <p>这是一个使用缩放动画的弹窗。</p>
        <p>弹窗出现时会从中心逐渐放大，关闭时会逐渐缩小消失。</p>
      </div>
    </Modal>

    <!-- 滑动动画 -->
    <Modal
      v-model:open="modalStates.slide"
      title="滑动动画示例"
      animation="slide"
      size="md"
      position="bottom"
    >
      <div class="demo-content">
        <p>这是一个使用滑动动画的弹窗。</p>
        <p>根据弹窗位置不同，滑动方向也会不同：</p>
        <ul>
          <li>顶部位置：从上方滑入</li>
          <li>底部位置：从下方滑入</li>
          <li>左侧位置：从左侧滑入</li>
          <li>右侧位置：从右侧滑入</li>
        </ul>
      </div>
    </Modal>

    <!-- 淡入淡出动画 -->
    <Modal
      v-model:open="modalStates.fade"
      title="淡入淡出示例"
      animation="fade"
      size="md"
    >
      <div class="demo-content">
        <p>这是一个使用淡入淡出动画的弹窗。</p>
        <p>弹窗出现和消失时只有透明度的变化，没有其他变换效果。</p>
      </div>
    </Modal>

    <!-- 弹跳动画 -->
    <Modal
      v-model:open="modalStates.bounce"
      title="弹跳动画示例"
      animation="bounce"
      size="md"
    >
      <div class="demo-content">
        <p>这是一个使用弹跳动画的弹窗。</p>
        <p>弹窗出现时会有弹性缩放效果，关闭时也会有弹性缩小消失的效果。</p>
      </div>
    </Modal>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';

// 弹窗状态
const modalStates = reactive({
  zoom: false,
  slide: false,
  fade: false,
  bounce: false,
});

// 打开弹窗
const openModal = (animation: 'zoom' | 'slide' | 'fade' | 'bounce') => {
  modalStates[animation] = true;
};
</script>

<style scoped>
.demo-buttons {
  display: flex;
  gap: 12px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.demo-content {
  padding: 20px 0;
}

.demo-content p {
  margin-bottom: 12px;
  line-height: 1.6;
}

.demo-content ul {
  margin-top: 12px;
  padding-left: 20px;
}

.demo-content li {
  margin-bottom: 8px;
  line-height: 1.6;
}
</style>
