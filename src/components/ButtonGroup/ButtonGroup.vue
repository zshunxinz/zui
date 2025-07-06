<template>
  <div class="btn-group" :class="{ 'btn-group--vertical': vertical }">
    <slot></slot>
  </div>
</template>

<script setup>
import './index.css'
import { defineProps } from 'vue'

const props = defineProps({
  /**
   * 是否垂直排列按钮
   */
  vertical: {
    type: Boolean,
    default: false
  }
})
</script>

<style scoped>
.btn-group {
  display: inline-flex;
  overflow: hidden;
}

.btn-group--vertical {
  flex-direction: column;
}

/* 移除按钮之间的间距并处理圆角 */
.btn-group > .btn {
  margin: 0;
  border-radius: 0 !important;
}

/* 第一个按钮的左侧圆角 */
.btn-group > .btn:first-child:not(:last-child) {
  border-top-right-radius: 0 !important;
  border-bottom-right-radius: 0 !important;
}

/* 最后一个按钮的右侧圆角 */
.btn-group > .btn:last-child:not(:first-child) {
  border-top-left-radius: 0 !important;
  border-bottom-left-radius: 0 !important;
}

/* 垂直排列时的圆角处理 */
.btn-group--vertical > .btn:first-child:not(:last-child) {
  border-bottom-left-radius: 0 !important;
  border-bottom-right-radius: 0 !important;
  border-top-right-radius: 6px !important;
}

.btn-group--vertical > .btn:last-child:not(:first-child) {
  border-top-left-radius: 0 !important;
  border-top-right-radius: 0 !important;
  border-bottom-left-radius: 6px !important;
}

/* 中间按钮的圆角处理 */
.btn-group > .btn:not(:first-child):not(:last-child) {
  border-radius: 0 !important;
}
</style>