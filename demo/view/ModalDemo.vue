<template>
  <div class="demo-container">
    <h2 class="demo-title">Modal 弹窗组件</h2>
    <p class="demo-description">用于展示重要信息或收集用户输入的弹窗组件。</p>

    <!-- 基础用法 -->
    <section class="demo-section">
      <h3 class="demo-subtitle">基础用法</h3>
      <p class="demo-subdescription">最简单的Modal使用方式，点击按钮显示弹窗。</p>
      <div class="demo-example">
        <Button @click="openBasicModal">打开基础弹窗</Button>
        <Modal
          v-model:open="basicModalVisible"
          title="基础弹窗"
          @ok="handleBasicModalOk"
          @cancel="handleBasicModalCancel"
        >
          <p>这是一个基础的弹窗内容。</p>
          <p>点击确定或取消按钮可以关闭弹窗。</p>
        </Modal>
      </div>
    </section>

    <!-- 不同尺寸 -->
    <section class="demo-section">
      <h3 class="demo-subtitle">不同尺寸</h3>
      <p class="demo-subdescription">Modal支持多种预设尺寸和自定义尺寸。</p>
      <div class="demo-example">
        <Space>
          <Button @click="openModal('sm')">小尺寸</Button>
          <Button @click="openModal('md')">中尺寸</Button>
          <Button @click="openModal('lg')">大尺寸</Button>
          <Button @click="openModal('xl')">超大尺寸</Button>
          <Button @click="openModal('fullscreen')">全屏</Button>
        </Space>
        <Modal
          v-model:open="sizeModalVisible"
          :size="currentSize"
          title="尺寸演示"
          @cancel="sizeModalVisible = false"
        >
          <p>当前尺寸: {{ currentSize }}</p>
        </Modal>
      </div>
    </section>

    <!-- 不同位置 -->
    <section class="demo-section">
      <h3 class="demo-subtitle">不同位置</h3>
      <p class="demo-subdescription">Modal可以显示在屏幕的不同位置。</p>
      <div class="demo-example">
        <Space>
          <Button @click="openPositionModal('center')">居中</Button>
          <Button @click="openPositionModal('top')">顶部</Button>
          <Button @click="openPositionModal('bottom')">底部</Button>
          <Button @click="openPositionModal('left')">左侧</Button>
          <Button @click="openPositionModal('right')">右侧</Button>
        </Space>
        <Modal
          v-model:open="positionModalVisible"
          :position="currentPosition"
          title="位置演示"
          @cancel="positionModalVisible = false"
        >
          <p>当前位置: {{ currentPosition }}</p>
        </Modal>
      </div>
    </section>

    <!-- 自定义按钮 -->
    <section class="demo-section">
      <h3 class="demo-subtitle">自定义按钮</h3>
      <p class="demo-subdescription">可以自定义底部按钮组。</p>
      <div class="demo-example">
        <Button @click="customBtnModalVisible = true">自定义按钮</Button>
        <Modal
          v-model:open="customBtnModalVisible"
          title="自定义按钮"
          @cancel="customBtnModalVisible = false"
        >
          <p>这是一个带有自定义底部按钮的弹窗。</p>
          <template #footer>
            <Space>
              <Button @click="customBtnModalVisible = false">关闭</Button>
              <Button type="primary" @click="handleCustomBtnOk">确认操作</Button>
              <Button type="danger" @click="handleDangerAction">危险操作</Button>
            </Space>
          </template>
        </Modal>
      </div>
    </section>

    <!-- 无头部无底部 -->
    <section class="demo-section">
      <h3 class="demo-subtitle">无头部无底部</h3>
      <p class="demo-subdescription">可以隐藏头部或底部。</p>
      <div class="demo-example">
        <Space>
          <Button @click="noHeaderModalVisible = true">无头部</Button>
          <Button @click="noFooterModalVisible = true">无底部</Button>
          <Button @click="noHeaderFooterModalVisible = true">无头部无底部</Button>
        </Space>
        <Modal
          v-model:open="noHeaderModalVisible"
          :title="''"
          :closable="false"
          footer
          @cancel="noHeaderModalVisible = false"
        >
          <div style="text-align: center; padding: 20px;">
            <p>这是一个没有头部的弹窗</p>
          </div>
        </Modal>
        <Modal
          v-model:open="noFooterModalVisible"
          title="无底部弹窗"
          :footer="false"
          @cancel="noFooterModalVisible = false"
        >
          <p>这是一个没有底部按钮的弹窗</p>
          <p>点击右上角的关闭按钮或按ESC键关闭</p>
        </Modal>
        <Modal
          v-model:open="noHeaderFooterModalVisible"
          :title="''"
          :closable="false"
          :footer="false"
          @cancel="noHeaderFooterModalVisible = false"
        >
          <div style="text-align: center; padding: 20px;">
            <p>这是一个没有头部和底部的弹窗</p>
            <Button @click="noHeaderFooterModalVisible = false" style="margin-top: 20px;">关闭</Button>
          </div>
        </Modal>
      </div>
    </section>

    <!-- API调用 -->
    <section class="demo-section">
      <h3 class="demo-subtitle">API调用</h3>
      <p class="demo-subdescription">除了组件方式，还可以通过函数API调用。</p>
      <div class="demo-example">
        <Button @click="showApiModal">API调用打开弹窗</Button>
        <Button @click="showConfirmModal">确认弹窗</Button>
      </div>
    </section>

    <!-- 异步关闭 -->
    <section class="demo-section">
      <h3 class="demo-subtitle">异步关闭</h3>
      <p class="demo-subdescription">支持异步操作后关闭弹窗。</p>
      <div class="demo-example">
        <Button @click="asyncModalVisible = true">异步关闭示例</Button>
        <Modal
          v-model:open="asyncModalVisible"
          title="异步关闭"
          :loading="modalLoading"
          @ok="handleAsyncOk"
          @cancel="asyncModalVisible = false"
        >
          <p>点击确定按钮后，会模拟一个异步操作，操作完成后关闭弹窗。</p>
        </Modal>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Button, Space } from '../components';
import { showModal } from '../components/Modal';

// 基础弹窗
const basicModalVisible = ref(false);
const openBasicModal = () => {
  basicModalVisible.value = true;
};
const handleBasicModalOk = () => {
  console.log('确定');
  basicModalVisible.value = false;
};
const handleBasicModalCancel = () => {
  console.log('取消');
  basicModalVisible.value = false;
};

// 尺寸弹窗
const sizeModalVisible = ref(false);
const currentSize = ref('md');
const openModal = (size: string) => {
  currentSize.value = size;
  sizeModalVisible.value = true;
};

// 位置弹窗
const positionModalVisible = ref(false);
const currentPosition = ref('center');
const openPositionModal = (position: string) => {
  currentPosition.value = position;
  positionModalVisible.value = true;
};

// 自定义按钮弹窗
const customBtnModalVisible = ref(false);
const handleCustomBtnOk = () => {
  console.log('确认操作');
  customBtnModalVisible.value = false;
};
const handleDangerAction = () => {
  console.log('危险操作');
  customBtnModalVisible.value = false;
};

// 无头部弹窗
const noHeaderModalVisible = ref(false);

// 无底部弹窗
const noFooterModalVisible = ref(false);

// 无头部无底部弹窗
const noHeaderFooterModalVisible = ref(false);

// API调用弹窗
const showApiModal = () => {
  const modal = showModal({
    title: 'API调用弹窗',
    content: '这是通过API调用显示的弹窗',
    size: 'md',
    onOk: () => {
      console.log('API弹窗确认');
    },
    onCancel: () => {
      console.log('API弹窗取消');
    },
    onClose: () => {
      console.log('API弹窗关闭');
    }
  });
};

// 确认弹窗
const showConfirmModal = () => {
  showModal({
    title: '确认操作',
    content: '确定要执行此操作吗？',
    size: 'sm',
    footer: true,
    onOk: () => {
      console.log('确认操作执行');
    },
    onCancel: () => {
      console.log('取消操作');
    }
  });
};

// 异步关闭弹窗
const asyncModalVisible = ref(false);
const modalLoading = ref(false);
const handleAsyncOk = () => {
  modalLoading.value = true;
  // 模拟异步操作
  setTimeout(() => {
    console.log('异步操作完成');
    modalLoading.value = false;
    asyncModalVisible.value = false;
  }, 2000);
};
</script>

<style scoped>
.demo-container {
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
}

.demo-title {
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 16px;
  color: var(--color-text);
}

.demo-description {
  font-size: 16px;
  color: var(--color-text-2);
  margin-bottom: 32px;
}

.demo-section {
  margin-bottom: 40px;
}

.demo-subtitle {
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 8px;
  color: var(--color-text);
}

.demo-subdescription {
  font-size: 14px;
  color: var(--color-text-3);
  margin-bottom: 16px;
}

.demo-example {
  padding: 20px;
  background-color: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius-0);
  box-shadow: var(--box-shadow-1);
}

/* 响应式调整 */
@media (max-width: 768px) {
  .demo-container {
    padding: 16px;
  }
  
  .demo-title {
    font-size: 24px;
  }
  
  .demo-subtitle {
    font-size: 18px;
  }
}
</style>