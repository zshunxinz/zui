<template>
  <div class="drawer-demo">
    <div class="demo-content">
      <Button @click="asyncDrawerVisible = true">异步关闭</Button>
      
      <!-- 异步关闭抽屉 -->
      <Drawer v-model:open="asyncDrawerVisible" title="异步关闭" :loading="isLoading" @ok="handleAsyncOk">
        <div class="drawer-content">
          <p>点击确定后将模拟异步操作，操作完成后自动关闭抽屉</p>
          <p>使用 loading 属性可以显示加载状态</p>
        </div>
      </Drawer>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
// 控制抽屉显示状态
const asyncDrawerVisible = ref(false);
const isLoading = ref(false);

// 处理异步操作
const handleAsyncOk = () => {
  isLoading.value = true;
  
  // 模拟异步操作
  setTimeout(() => {
    console.log('异步操作完成');
    isLoading.value = false;
    asyncDrawerVisible.value = false;
  }, 2000);
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

.drawer-content {
  padding: 20px 0;
}
</style>