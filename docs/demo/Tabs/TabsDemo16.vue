<template>
  <div class="demo-tabs-closable">
    <Tabs
      v-model="activeClosableTab"
      :tabs="closableTabs"
      :closable="true"
      @tab-close="handleTabClose"
    >
      <template #home>
        <div class="tab-content">
          <h3>首页</h3>
          <p>这是首页内容区域</p>
        </div>
      </template>
      <template #products>
        <div class="tab-content">
          <h3>产品</h3>
          <p>这是产品内容区域</p>
        </div>
      </template>
      <template #services>
        <div class="tab-content">
          <h3>服务</h3>
          <p>这是服务内容区域</p>
        </div>
      </template>
      <template #about>
        <div class="tab-content">
          <h3>关于我们</h3>
          <p>这是关于我们内容区域</p>
        </div>
      </template>
    </Tabs>
  </div>
</template>

<script setup>
import { ref } from "vue";

const activeClosableTab = ref(0);
const closableTabs = ref([
  { label: "Home", name: "home" },
  { label: "Products", name: "products" },
  { label: "Services", name: "services" },
  { label: "About", name: "about" },
]);

const handleTabClose = (index) => {
  // 防止关闭最后一个标签页
  if (closableTabs.value.length <= 1) {
    // alert("至少需要保留一个标签页");
    return;
  }

  // 从tabs数组中移除对应标签
  closableTabs.value.splice(index, 1);

  // 如果关闭的是当前激活的标签页，自动激活前一个标签页
  if (activeClosableTab.value === index) {
    activeClosableTab.value = Math.min(index, closableTabs.value.length - 1);
  }
};
</script>

<style scoped>
.demo-tabs-closable {
  max-width: 600px;
  margin: 0 auto;
}

.tab-content {
  padding: 20px;
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
}
</style>