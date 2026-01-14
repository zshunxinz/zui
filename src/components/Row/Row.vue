<template>
  <div class="grid-row" :class="rowClasses" :style="rowStyles">
    <slot />
  </div>
</template>

<script setup>
import { computed, provide } from 'vue';

const props = defineProps({
  gutter: {
    type: [Number, Array, Object],
    default: 0,
  },
  align: {
    type: String,
    default: 'top',
    validator: value => ['top', 'middle', 'bottom'].includes(value),
  },
  justify: {
    type: String,
    default: 'start',
    validator: value =>
      ['start', 'end', 'center', 'space-around', 'space-between'].includes(
        value
      ),
  },
  wrap: {
    type: Boolean,
    default: true,
  },
});

// 计算行的CSS类
const rowClasses = computed(() => ({
  [`grid-row-${props.align}`]: props.align !== 'top',
  [`grid-row-${props.justify}`]: props.justify !== 'start',
  'grid-row-nowrap': !props.wrap,
}));

// 计算行的样式
const rowStyles = computed(() => {
  const styles = {};

  if (props.gutter) {
    if (typeof props.gutter === 'number') {
      styles.gap = `${props.gutter}px`;
    } else if (Array.isArray(props.gutter)) {
      const [horizontal, vertical = horizontal] = props.gutter;
      styles.gap = `${vertical}px ${horizontal}px`;
    }
  }

  return styles;
});

// 提供gutter给子组件
provide('gutter', props.gutter);
</script>

<style scoped>
.grid-row {
  display: grid;
  grid-template-columns: repeat(24, 1fr);
  grid-auto-flow: row;
  min-width: 0;
}

.grid-row-top {
  align-items: start;
}

.grid-row-middle {
  align-items: center;
}

.grid-row-bottom {
  align-items: end;
}

.grid-row-start {
  justify-items: start;
}

.grid-row-end {
  justify-items: end;
}

.grid-row-center {
  justify-items: center;
}

.grid-row-space-around {
  justify-content: space-around;
}

.grid-row-space-between {
  justify-content: space-between;
}

.grid-row-space-evenly {
  justify-content: space-evenly;
}

.grid-row-nowrap {
  grid-auto-flow: column;
}
</style>
