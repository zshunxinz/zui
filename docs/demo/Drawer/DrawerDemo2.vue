<template>
  <div class="drawer-demo">
    <div class="demo-content">
      <div class="button-group">
        <Button @click="leftDrawerVisible = true">左侧抽屉</Button>
        <Button @click="rightDrawerVisible = true">右侧抽屉</Button>
        <Button @click="topDrawerVisible = true">顶部抽屉</Button>
        <Button @click="bottomDrawerVisible = true">底部抽屉</Button>
      </div>
      
      <!-- 左侧抽屉 -->
      <Drawer v-model:open="leftDrawerVisible" title="左侧抽屉" position="left">
        <div class="drawer-content">
          <p>这是一个从左侧打开的抽屉</p>
          <p>使用 position="left" 属性控制</p>
        </div>
      </Drawer>
      
      <!-- 右侧抽屉 -->
      <Drawer v-model:open="rightDrawerVisible" title="右侧抽屉" position="right">
        <div class="drawer-content">
          <p>这是一个从右侧打开的抽屉</p>
          <p>使用 position="right" 属性控制（默认）</p>
        </div>
      </Drawer>
      
      <!-- 顶部抽屉 -->
      <Drawer v-model:open="topDrawerVisible" title="顶部抽屉" position="top">
        <div class="drawer-content">
          <p>这是一个从顶部打开的抽屉</p>
          <p>使用 position="top" 属性控制</p>
        </div>
      </Drawer>
      
      <!-- 底部抽屉 -->
      <Drawer v-model:open="bottomDrawerVisible" title="底部抽屉" position="bottom">
        <div class="drawer-content">
          <p>这是一个从底部打开的抽屉</p>
          <p>使用 position="bottom" 属性控制</p>
        </div>
      </Drawer>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// 控制不同位置抽屉的显示状态
const leftDrawerVisible = ref(false);
const rightDrawerVisible = ref(false);
const topDrawerVisible = ref(false);
const bottomDrawerVisible = ref(false);
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

.drawer-content {
  padding: 20px 0;
}
</style>