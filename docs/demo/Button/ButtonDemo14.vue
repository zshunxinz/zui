<template>
  <div class="button-group">
    <Button @click="handleClick">点击事件</Button>
    <Button @hover="handleMouseEnter" @mouseleave="handleMouseLeave"
      >悬停事件</Button
    >
    <Button @focus="handleFocus" @blur="handleBlur">聚焦/失焦事件</Button>
    <Button @contextmenu.prevent="handleContextMenu">右键菜单事件</Button>
  </div>
</template>

<script setup>
const handleClick = () => {
  console.log("按钮被点击了");
  alert("按钮被点击了");
};

const handleMouseEnter = () => {
  console.log("鼠标进入按钮");
};

const handleMouseLeave = () => {
  console.log("鼠标离开按钮");
};

const handleFocus = () => {
  console.log("按钮获得焦点");
};

const handleBlur = () => {
  console.log("按钮失去焦点");
};

const handleContextMenu = () => {
  console.log("右键菜单被触发");
  alert("右键菜单被触发");
};
</script>
