<template>
  <div class="demo" :class="{ 'demo-center': props.center }">
    <div style="position: absolute;right: 16px;top: 16px;">
      <slot name="top-right"></slot>
    </div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'


const props = defineProps({
  center: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    default: 'medium',
  }

})
const size = ref(props.size)
watch(() => props.size, (newVal) => {
  size.value = newVal
})


</script>

<style scoped>
.demo {
  margin: 0.5rem 0;
  min-height: 130px;
  position: relative;
  /* width: 100%; */
  /* display: flex; */
  /* align-items: center; */
  padding: 60px 50px;
  border: 1px solid var(--color-border-1);
  /* box-shadow: 1px 4px 3px rgba(0, 0, 0, 0.1); */
}

.demo-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
