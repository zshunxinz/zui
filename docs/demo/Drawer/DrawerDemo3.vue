<template>
  <div class="drawer-demo">
    <div class="demo-content">
      <div class="button-group">
        <Button @click="smDrawerVisible = true">小尺寸</Button>
        <Button @click="mdDrawerVisible = true">中尺寸</Button>
        <Button @click="lgDrawerVisible = true">大尺寸</Button>
        <Button @click="fullscreenDrawerVisible = true">全屏</Button>
        <Button @click="customWidthDrawerVisible = true" type="primary">自定义宽度</Button>
        <Button @click="customHeightDrawerVisible = true" type="primary">自定义高度</Button>
      </div>
      
      <!-- 小尺寸抽屉 -->
      <Drawer v-model:open="smDrawerVisible" title="小尺寸抽屉" size="sm">
        <div class="drawer-content">
          <p>这是一个小尺寸抽屉</p>
          <p>使用 size="sm" 属性控制</p>
        </div>
      </Drawer>
      
      <!-- 中尺寸抽屉 -->
      <Drawer v-model:open="mdDrawerVisible" title="中尺寸抽屉" size="md">
        <div class="drawer-content">
          <p>这是一个中尺寸抽屉</p>
          <p>使用 size="md" 属性控制（默认）</p>
        </div>
      </Drawer>
      
      <!-- 大尺寸抽屉 -->
      <Drawer v-model:open="lgDrawerVisible" title="大尺寸抽屉" size="lg">
        <div class="drawer-content">
          <p>这是一个大尺寸抽屉</p>
          <p>使用 size="lg" 属性控制</p>
        </div>
      </Drawer>
      
      <!-- 全屏抽屉 -->
      <Drawer v-model:open="fullscreenDrawerVisible" title="全屏抽屉" size="fullscreen">
        <div class="drawer-content">
          <p>这是一个全屏抽屉</p>
          <p>使用 size="fullscreen" 属性控制</p>
        </div>
      </Drawer>
      
      <!-- 自定义宽度抽屉 -->
      <Drawer v-model:open="customWidthDrawerVisible" title="自定义宽度抽屉" :width="600">
        <div class="drawer-content">
          <p>这是一个宽度为 600px 的抽屉</p>
          <p>使用 :width="600" 属性控制</p>
        </div>
      </Drawer>
      
      <!-- 自定义高度抽屉 -->
      <Drawer v-model:open="customHeightDrawerVisible" title="自定义高度抽屉" :height="400" position="bottom">
        <div class="drawer-content">
          <p>这是一个高度为 400px 的抽屉</p>
          <p>使用 :height="400" 和 position="bottom" 属性控制</p>
        </div>
      </Drawer>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
// 控制不同尺寸抽屉的显示状态
const smDrawerVisible = ref(false);
const mdDrawerVisible = ref(false);
const lgDrawerVisible = ref(false);
const fullscreenDrawerVisible = ref(false);
const customWidthDrawerVisible = ref(false);
const customHeightDrawerVisible = ref(false);
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