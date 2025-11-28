<template>
  <div class="drawer-demo">
    <div class="demo-content">
      <div class="button-group">
        <Button @click="() => showDrawer({ title: '小尺寸抽屉', content: '这是一个小尺寸抽屉', size: 'sm' })">小尺寸</Button>
        <Button @click="() => showDrawer({ title: '中尺寸抽屉', content: '这是一个中尺寸抽屉', size: 'md' })">中尺寸</Button>
        <Button @click="() => showDrawer({ title: '大尺寸抽屉', content: '这是一个大尺寸抽屉', size: 'lg' })">大尺寸</Button>
        <Button @click="() => showDrawer({ title: '全屏抽屉', content: '这是一个全屏抽屉', size: 'fullscreen' })">全屏</Button>
        <Button @click="() => showDrawer({ title: '自定义宽度抽屉', content: '这是一个宽度为 600px 的抽屉', width: 600 })" type="primary">自定义宽度</Button>
        <Button @click="() => showDrawer({ title: '自定义高度抽屉', content: '这是一个高度为 400px 的抽屉', height: 400, position: 'bottom' })" type="primary">自定义高度</Button>
      </div>
    </div>
  </div>
</template>

<script setup>
// 从全局 window 对象获取 showDrawer 函数
const showDrawer = window.showDrawer;
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

.button-group {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}
</style>
