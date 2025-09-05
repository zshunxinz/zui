<template>
  <div class="textarea-group">
    <Textarea
      v-model="value"
      placeholder="请输入内容查看控制台输出"
      @mouse-enter="handleMouseEnter"
      @mouse-leave="handleMouseLeave"
      @click="handleClick"
      @enter="handleEnter"
      @focus="handleFocus"
      @blur="handleBlur"
      @input="handleInput"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const value = ref('')

const handleMouseEnter = () => {
  console.log("鼠标移入文本域");
};

const handleMouseLeave = () => {
  console.log("鼠标移出文本域");
};

const handleClick = () => {
  console.log("文本域被点击");
};

const handleEnter = (value) => {
  console.log("按下Enter键，输入值为:", value);
};

const handleFocus = (e) => {
  console.log("聚焦事件", e);
};

const handleBlur = (e) => {
  console.log("失焦事件", e);
};

const handleInput = (val) => {
  console.log("输入事件", val);
};
</script>