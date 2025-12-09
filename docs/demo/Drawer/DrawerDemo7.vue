<template>
  <div class="drawer-demo">
    <div class="demo-content">
      <h3>Drawer 遮罩测试</h3>

      <!-- 测试1: mask=false 隐藏遮罩 -->
      <div class="test-section">
        <h4>测试1: mask=false</h4>
        <Button type="primary" @click="drawer1Open = true"
          >打开无遮罩抽屉</Button
        >
        <Drawer
          v-model:open="drawer1Open"
          title="无遮罩抽屉"
          :mask="false"
          position="left"
        >
          <div class="drawer-content">
            <p>这个抽屉没有遮罩层，点击页面其他区域不会关闭。</p>
          </div>
        </Drawer>
      </div>

      <!-- 测试2: mask=true (默认) -->
      <div class="test-section">
        <h4>测试2: mask=true (默认)</h4>
        <Button type="primary" @click="drawer2Open = true"
          >打开有遮罩抽屉</Button
        >
        <Drawer
          v-model:open="drawer2Open"
          title="有遮罩抽屉"
          :mask="true"
          position="right"
        >
          <div class="drawer-content">
            <p>这个抽屉有默认遮罩层，点击遮罩区域可以关闭。</p>
          </div>
        </Drawer>
      </div>

      <!-- 测试3: 自定义遮罩样式 -->
      <div class="test-section">
        <h4>测试3: 自定义遮罩样式</h4>
        <Button type="primary" @click="drawer3Open = true"
          >打开自定义遮罩抽屉</Button
        >
        <Drawer
          v-model:open="drawer3Open"
          title="自定义遮罩抽屉"
          :mask="true"
          :mask-style="customMaskStyle"
          position="bottom"
        >
          <div class="drawer-content">
            <p>这个抽屉有自定义样式的遮罩层，模糊背景效果。</p>
          </div>
        </Drawer>
      </div>

      <!-- 函数式API测试 -->
      <div class="test-section">
        <h4>函数式API测试 (仅用于说明函数调用方法)</h4>
        <Button type="primary" @click="showNoMaskDrawer"
          >函数式调用 - 无遮罩</Button
        >
        <Button
          type="primary"
          style="margin-left: 10px"
          @click="showCustomMaskDrawer"
          >函数式调用 - 自定义遮罩</Button
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
// 控制抽屉显示状态
const drawer1Open = ref(false);
const drawer2Open = ref(false);
const drawer3Open = ref(false);

// 自定义遮罩样式
const customMaskStyle = {
  backgroundColor: 'rgba(255, 250, 255, 0.1)',
  backdropFilter: 'blur(15px)',
};

// 函数式调用 - 无遮罩（仅用于说明函数调用方法）
const showNoMaskDrawer = () => {
  showDrawer({
    title: '无遮罩抽屉',
    content: '这个抽屉没有遮罩层，点击页面其他区域不会关闭。',
    mask: false,
    position: 'right',
  });
};

// 函数式调用 - 自定义遮罩（仅用于说明函数调用方法）
const showCustomMaskDrawer = () => {
  showDrawer({
    title: '自定义遮罩抽屉',
    content: '这个抽屉有自定义样式的遮罩层，模糊背景效果。',
    mask: true,
    maskStyle: customMaskStyle,
    position: 'right',
  });
};
</script>

<style scoped>
.drawer-demo {
  padding: 20px;
  background-color: var(--bg-card);
  border-radius: var(--radius-md);
}

.demo-content {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.test-section {
  padding: 16px;
  background-color: var(--bg-secondary);
  border-radius: var(--radius-md);
}

.test-section h4 {
  margin-top: 0;
  margin-bottom: 12px;
}

.drawer-content {
  padding: 20px 0;
}
</style>
