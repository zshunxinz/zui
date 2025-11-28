<template>
  <div class="drawer-demo">
    <div class="demo-content">
      <Button @click="showAsyncDrawer">异步关闭</Button>
    </div>
  </div>
</template>

<script setup>
// 从全局 window 对象获取 showDrawer 函数
const showDrawer = window.showDrawer;

const showAsyncDrawer = () => {
  let drawer;

  drawer = showDrawer({
    title: '异步关闭',
    content: '点击确定后将模拟异步操作，操作完成后自动关闭抽屉',
    onOk: () => {
      // 模拟异步操作
      setTimeout(() => {
        console.log('异步操作完成');
        drawer.close();
      }, 2000);
    }
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
</style>
