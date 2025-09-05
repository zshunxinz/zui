<template>
  <div class="demo-tabs-partial-closable">
    <Tabs
      v-model="partialClosableTab"
      :tabs="partialClosableTabs"
      @tab-close="handlePartialClose"
    >
      <template #tab1>
        <div class="tab-content">
          <h3>Tab 1</h3>
          <p>这个标签不可关闭</p>
        </div>
      </template>
      <template #tab2>
        <div class="tab-content">
          <h3>Tab 2</h3>
          <p>这个标签可关闭 (带close=true)</p>
        </div>
      </template>
      <template #tab3>
        <div class="tab-content">
          <h3>Tab 3</h3>
          <p>这个标签不可关闭</p>
        </div>
      </template>
      <template #tab4>
        <div class="tab-content">
          <h3>Tab 4</h3>
          <p>这个标签可关闭 (带close=true)</p>
        </div>
      </template>
    </Tabs>
  </div>
</template>

<script setup>
import { ref } from "vue";

const partialClosableTab = ref(0);
const partialClosableTabs = ref([
  { label: "Tab 1", name: "tab1" },
  { label: "Tab 2", name: "tab2", close: true },
  { label: "Tab 3", name: "tab3" },
  { label: "Tab 4", name: "tab4", close: true },
]);

const handlePartialClose = (index) => {
  // 防止关闭所有可关闭的标签页
  const closableCount = partialClosableTabs.value.filter(
    (tab) => tab.close
  ).length;
  if (closableCount <= 1) {
    // alert("至少需要保留一个可关闭的标签页");
    return;
  }

  // 从tabs数组中移除对应标签
  partialClosableTabs.value.splice(index, 1);

  // 如果关闭的是当前激活的标签页，自动激活前一个标签页
  if (partialClosableTab.value === index) {
    partialClosableTab.value = Math.min(
      index,
      partialClosableTabs.value.length - 1
    );
  }
};
</script>

<style scoped>
.demo-tabs-partial-closable {
  max-width: 600px;
  margin: 0 auto;
}

.tab-content {
  padding: 20px;
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
}
</style>