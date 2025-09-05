<template>
  <div class="input-group">
    <Input
      v-model="eventValue"
      placeholder="请输入内容查看控制台输出"
      clearable
      @click="handleClick"
      @input="handleInput"
      @clear="handleClear"
      @focus="handleFocus"
      @blur="handleBlur"
      @enter="handleEnter"
      @mouse-enter="handleMouseEnter"
      @mouse-leave="handleMouseLeave"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
const eventValue = ref("");

const handleClick = () => {
  console.log("点击事件");
};
const handleInput = (val) => {
  console.log("输入事件", val);
};
const handleClear = () => {
  console.log("清空事件");
};
const handleFocus = (e) => {
  console.log("聚焦事件", e);
};
const handleBlur = (e) => {
  console.log("失焦事件", e);
};
const handleEnter = (val) => {
  console.log("回车事件", val);
};
const handleMouseEnter = () => {
  console.log("鼠标移入输入框");
};
const handleMouseLeave = () => {
  console.log("鼠标移出输入框");
};
</script>