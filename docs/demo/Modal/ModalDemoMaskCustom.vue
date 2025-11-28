<template>
  <div class="modal-mask-demo">
    <div class="demo-header">
      <h2>遮罩层自定义演示</h2>
      <p>展示如何自定义遮罩层的颜色、透明度等属性</p>
    </div>

    <div class="demo-content">
      <!-- 基础演示 -->
      <div class="demo-section">
        <h3>基础遮罩层控制</h3>
        <div class="demo-buttons">
          <Button @click="openBasicMask">默认遮罩层</Button>
          <Button @click="openNoMask">无遮罩层</Button>
          <Button @click="openTransparentMask">透明遮罩层</Button>
        </div>
      </div>

      <!-- 颜色自定义演示 -->
      <div class="demo-section">
        <h3>遮罩层颜色自定义</h3>
        <div class="demo-buttons">
          <Button @click="openWhiteMask">白色遮罩层</Button>
          <Button @click="openBlueMask">蓝色遮罩层</Button>
          <Button @click="openCustomColorMask">自定义颜色遮罩层</Button>
        </div>
      </div>

      <!-- 透明度演示 -->
      <div class="demo-section">
        <h3>遮罩层透明度控制</h3>
        <div class="demo-buttons">
          <Button @click="openLowOpacityMask">低透明度遮罩层</Button>
          <Button @click="openMediumOpacityMask">中等透明度遮罩层</Button>
          <Button @click="openHighOpacityMask">高透明度遮罩层</Button>
        </div>
      </div>

      <!-- 组合效果演示 -->
      <div class="demo-section">
        <h3>组合效果演示</h3>
        <div class="demo-buttons">
          <Button @click="openBlueLowOpacity">蓝色低透明度</Button>
          <Button @click="openColorfulMask">彩色渐变遮罩</Button>
        </div>
      </div>

      <!-- 基础遮罩层弹窗 -->
      <Modal
        v-model:open="basicMaskOpen"
        title="默认遮罩层"
        @ok="handleOk"
        @cancel="handleCancel"
      >
        <div class="modal-body-content">
          <p>这是带有默认黑色半透明遮罩层的弹窗</p>
          <p>遮罩层颜色: rgba(0, 0, 0, 0.5)</p>
        </div>
      </Modal>

      <!-- 无遮罩层弹窗 -->
      <Modal
        v-model:open="noMaskOpen"
        title="无遮罩层"
        :mask="false"
        @ok="handleOk"
        @cancel="handleCancel"
      >
        <div class="modal-body-content">
          <p>这是一个没有遮罩层的弹窗</p>
          <p>弹窗直接浮动在页面上</p>
        </div>
      </Modal>

      <!-- 透明遮罩层弹窗 -->
       {{ transparentMaskOpen }}
      <Modal
        v-model:open="transparentMaskOpen"
        title="透明遮罩层"
        mask-background="transparent"
        @ok="handleOk"
        @cancel="handleCancel"
      >
        <div class="modal-body-content">
          <p>这是带有透明遮罩层的弹窗</p>
          <p>保留了遮罩层的交互特性，但视觉效果上不可见</p>
        </div>
      </Modal>

      <!-- 白色遮罩层弹窗 -->
      <Modal
        v-model:open="whiteMaskOpen"
        title="白色遮罩层"
        mask-background="rgba(255, 255, 255, 0.8)"
        @ok="handleOk"
        @cancel="handleCancel"
      >
        <div class="modal-body-content">
          <p>这是带有白色遮罩层的弹窗</p>
          <p>适合在深色主题中使用</p>
        </div>
      </Modal>

      <!-- 蓝色遮罩层弹窗 -->
      <Modal
        v-model:open="blueMaskOpen"
        title="蓝色遮罩层"
        mask-background="rgba(59, 130, 246, 0.6)"
        @ok="handleOk"
        @cancel="handleCancel"
      >
        <div class="modal-body-content">
          <p>这是带有蓝色遮罩层的弹窗</p>
          <p>遮罩层颜色: rgba(59, 130, 246, 0.6)</p>
        </div>
      </Modal>

      <!-- 自定义颜色遮罩层弹窗 -->
      <Modal
        v-model:open="customColorMaskOpen"
        title="自定义颜色遮罩层"
        mask-background="linear-gradient(45deg, #667eea 0%, #764ba2 100%)"
        @ok="handleOk"
        @cancel="handleCancel"
      >
        <div class="modal-body-content">
          <p>这是带有渐变色彩遮罩层的弹窗</p>
          <p>使用CSS渐变作为遮罩层背景</p>
        </div>
      </Modal>

      <!-- 低透明度遮罩层弹窗 -->
      <Modal
        v-model:open="lowOpacityMaskOpen"
        title="低透明度遮罩层"
        mask-background="black"
        :mask-opacity="0.2"
        @ok="handleOk"
        @cancel="handleCancel"
      >
        <div class="modal-body-content">
          <p>这是带有低透明度遮罩层的弹窗</p>
          <p>透明度: 0.2 (20%)</p>
        </div>
      </Modal>

      <!-- 中等透明度遮罩层弹窗 -->
      <Modal
        v-model:open="mediumOpacityMaskOpen"
        title="中等透明度遮罩层"
        mask-background="black"
        :mask-opacity="0.6"
        @ok="handleOk"
        @cancel="handleCancel"
      >
        <div class="modal-body-content">
          <p>这是带有中等透明度遮罩层的弹窗</p>
          <p>透明度: 0.6 (60%)</p>
        </div>
      </Modal>

      <!-- 高透明度遮罩层弹窗 -->
      <Modal
        v-model:open="highOpacityMaskOpen"
        title="高透明度遮罩层"
        mask-background="black"
        :mask-opacity="0.9"
        @ok="handleOk"
        @cancel="handleCancel"
      >
        <div class="modal-body-content">
          <p>这是带有高透明度遮罩层的弹窗</p>
          <p>透明度: 0.9 (90%)</p>
        </div>
      </Modal>

      <!-- 蓝色低透明度弹窗 -->
      <Modal
        v-model:open="blueLowOpacityOpen"
        title="蓝色低透明度"
        mask-background="rgba(59, 130, 246, 0.4)"
        :mask-opacity="0.3"
        @ok="handleOk"
        @cancel="handleCancel"
      >
        <div class="modal-body-content">
          <p>结合了蓝色背景和低透明度的遮罩层</p>
          <p>遮罩层颜色: rgba(59, 130, 246, 0.4)</p>
          <p>透明度: 0.3 (30%)</p>
        </div>
      </Modal>

      <!-- 彩色渐变遮罩弹窗 -->
      <Modal
        v-model:open="colorfulMaskOpen"
        title="彩色渐变遮罩"
        mask-background="linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)"
        :mask-opacity="0.7"
        @ok="handleOk"
        @cancel="handleCancel"
      >
        <div class="modal-body-content">
          <p>使用CSS渐变和自定义透明度的彩色遮罩层</p>
          <p>遮罩层背景: 多色渐变</p>
          <p>透明度: 0.7 (70%)</p>
        </div>
      </Modal>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Modal from '../../../src/components/Modal/Modal.vue';
import Button from '../../../src/components/Button/Button.vue';

const basicMaskOpen = ref(false);
const noMaskOpen = ref(false);
const transparentMaskOpen = ref(false);
const whiteMaskOpen = ref(false);
const blueMaskOpen = ref(false);
const customColorMaskOpen = ref(false);
const lowOpacityMaskOpen = ref(false);
const mediumOpacityMaskOpen = ref(false);
const highOpacityMaskOpen = ref(false);
const blueLowOpacityOpen = ref(false);
const colorfulMaskOpen = ref(false);

// 打开弹窗的函数
const openBasicMask = () => {
  basicMaskOpen.value = true;
};

const openNoMask = () => {
  noMaskOpen.value = true;
};

const openTransparentMask = () => {
  transparentMaskOpen.value = true;
};

const openWhiteMask = () => {
  whiteMaskOpen.value = true;
};

const openBlueMask = () => {
  blueMaskOpen.value = true;
};

const openCustomColorMask = () => {
  customColorMaskOpen.value = true;
};

const openLowOpacityMask = () => {
  lowOpacityMaskOpen.value = true;
};

const openMediumOpacityMask = () => {
  mediumOpacityMaskOpen.value = true;
};

const openHighOpacityMask = () => {
  highOpacityMaskOpen.value = true;
};

const openBlueLowOpacity = () => {
  blueLowOpacityOpen.value = true;
};

const openColorfulMask = () => {
  colorfulMaskOpen.value = true;
};

// 通用的事件处理函数
const handleOk = (modalName) => {
  console.log(`用户点击了确定: ${modalName}`);
};

const handleCancel = (modalName) => {
  basicMaskOpen.value = false;
  noMaskOpen.value= false;
  transparentMaskOpen.value = false;
  whiteMaskOpen.value = false;
  blueMaskOpen.value = false;
  customColorMaskOpen.value = false;
  lowOpacityMaskOpen.value = false;
  mediumOpacityMaskOpen.value = false;
  highOpacityMaskOpen.value = false;
  blueLowOpacityOpen.value = false;
  colorfulMaskOpen.value = false;
  console.log(`用户点击了取消: ${modalName}`);
};
</script>

<style scoped>
.modal-mask-demo {
  padding: 20px;
  background-color: var(--bg-card);
  border-radius: var(--radius-md);
}

.demo-header {
  margin-bottom: 24px;
}

.demo-header h2 {
  margin: 0 0 8px 0;
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-semibold);
  color: var(--text-primary);
}

.demo-header p {
  margin: 0;
  color: var(--text-secondary);
  font-size: var(--font-size-sm);
}

.demo-content {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.demo-section {
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  padding: 20px;
  background-color: var(--bg-secondary);
}

.demo-section h3 {
  margin: 0 0 16px 0;
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-medium);
  color: var(--text-primary);
}

.demo-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.modal-body-content {
  padding: 8px 0;
}

.modal-body-content p {
  margin: 12px 0;
  line-height: 1.6;
  color: var(--text-secondary);
}
</style>
