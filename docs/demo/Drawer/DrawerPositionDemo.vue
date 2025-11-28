<template>
  <div class="drawer-demo">
    <div class="demo-content">
      <div class="button-group">
        <Button @click="() => showDrawer({ title: '左侧抽屉', content: '这是一个左侧抽屉', position: 'left' })">左侧抽屉</Button>
        <Button @click="() => showDrawer({ title: '右侧抽屉', content: '这是一个右侧抽屉', position: 'right' })">右侧抽屉</Button>
        <Button @click="() => showDrawer({ title: '顶部抽屉', content: '这是一个顶部抽屉', position: 'top' })">顶部抽屉</Button>
        <Button @click="() => showDrawer({ title: '底部抽屉', content: '这是一个底部抽屉', position: 'bottom' })">底部抽屉</Button>
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
