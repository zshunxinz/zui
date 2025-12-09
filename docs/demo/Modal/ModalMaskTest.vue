<template>
  <div class="modal-mask-test">
    <h3>Mask 测试</h3>

    <!-- 测试1: mask=false 应该隐藏遮罩 -->
    <div class="test-section">
      <h4>测试1: mask=false</h4>
      <Button type="primary" @click="openModal1">打开无遮罩弹窗</Button>
      <Modal
        v-model:open="modal1Open"
        title="无遮罩弹窗"
        :mask="false"
        position="center"
        size="md"
      >
        <div>这个弹窗没有遮罩层，点击页面其他区域不会关闭。</div>
      </Modal>
    </div>

    <!-- 测试2: mask=true 应该显示默认遮罩 -->
    <div class="test-section">
      <h4>测试2: mask=true (默认)</h4>
      <Button type="primary" @click="openModal2">打开有遮罩弹窗</Button>
      <Modal
        v-model:open="modal2Open"
        title="有遮罩弹窗"
        :mask="true"
        mask-closable
        position="center"
        size="md"
      >
        <div>这个弹窗有默认遮罩层，点击遮罩区域可以关闭。</div>
      </Modal>
    </div>

    <!-- 测试3: 自定义遮罩样式 -->
    <div class="test-section">
      <h4>测试3: 自定义遮罩样式</h4>
      <Button type="primary" @click="openModal3">打开自定义遮罩弹窗</Button>
      <Modal
        v-model:open="modal3Open"
        title="自定义遮罩弹窗"
        :mask="true"
        :mask-style="customMaskStyle"
        mask-closable
        position="center"
        size="md"
      >
        <div>这个弹窗有自定义样式的遮罩层，模糊背景效果</div>
      </Modal>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// 测试1: mask=false
const modal1Open = ref(false);
const openModal1 = () => {
  modal1Open.value = true;
};

// 测试2: mask=true
const modal2Open = ref(false);
const openModal2 = () => {
  modal2Open.value = true;
};

// 测试3: 自定义遮罩样式
const modal3Open = ref(false);
const customMaskStyle = {
  backgroundColor: 'rgba(255, 250,255, 0.1)',
  backdropFilter: 'blur(15px)', // 模糊效果
};
const openModal3 = () => {
  modal3Open.value = true;
};
</script>

<style scoped>
.modal-mask-test {
  padding: 20px;
}

.test-section {
  margin-bottom: 20px;
}

.test-section h4 {
  margin-bottom: 10px;
  font-size: 16px;
  color: #333;
}
</style>
