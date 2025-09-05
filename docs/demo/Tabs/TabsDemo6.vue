<template>
  <div class="demo-tabs-button-style-types">
    <Tabs
      v-model="buttonStyleTypeTab"
      :tabs="buttonStyleTypeTabs"
      buttonStyle="true"
      type="primary"
    >
      <template #primary1>
        <div class="tab-content">
          <h3>主要按钮样式</h3>
          <p>这是主要颜色的按钮样式标签页</p>
        </div>
      </template>
      <template #primary2>
        <div class="tab-content">
          <h3>主要按钮样式</h3>
          <p>这是主要颜色的按钮样式标签页</p>
        </div>
      </template>
      <template #primary3>
        <div class="tab-content">
          <h3>主要按钮样式</h3>
          <p>这是主要颜色的按钮样式标签页</p>
        </div>
      </template>
    </Tabs>
  </div>
</template>

<script setup>
import { ref } from "vue";

const buttonStyleTypeTab = ref(0);
const buttonStyleTypeTabs = ref([
  { label: "主要", name: "primary1" },
  { label: "成功", name: "primary2" },
  { label: "警告", name: "primary3" },
]);
</script>

<style scoped>
.demo-tabs-button-style-types {
  max-width: 600px;
  margin: 0 auto;
}

.tab-content {
  padding: 20px;
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
}
</style>