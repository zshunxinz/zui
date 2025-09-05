<template>
  <div class="demo-switch">
    <Switch v-model="value" @change="handleChange1" />
    <span style="margin-left: 12px">状态：{{ changeText }}</span>
  </div>
</template>

<script setup>
import { ref } from "vue";

const value = ref(true);
const changeText = ref("未改变");
const handleChange1 = (value) => {
  changeText.value = value ? "已开启" : "已关闭";
};
</script>

<style scoped>
.switch-demo {
  padding: 20px 0;
}
.demo-switch {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
  padding: 20px;
}
</style>
