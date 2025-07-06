<template>
  <div class="grid-row" :class="rowClasses" :style="rowStyles">
    <slot />
  </div>
</template>

<script setup>
import { computed, provide } from 'vue'

const props = defineProps({
  gutter: {
    type: [Number, Array, Object],
    default: 0
  },
  align: {
    type: String,
    default: 'top',
    validator: (value) => ['top', 'middle', 'bottom'].includes(value)
  },
  justify: {
    type: String,
    default: 'start',
    validator: (value) => ['start', 'end', 'center', 'space-around', 'space-between', 'space-evenly'].includes(value)
  },
  wrap: {
    type: Boolean,
    default: true
  }
})

// 计算行的CSS类
const rowClasses = computed(() => ({
  [`grid-row-${props.align}`]: props.align !== 'top',
  [`grid-row-${props.justify}`]: props.justify !== 'start',
  'grid-row-nowrap': !props.wrap
}))

// 计算行的样式
const rowStyles = computed(() => {
  const styles = {}

  if (props.gutter) {
    if (typeof props.gutter === 'number') {
      const gutterValue = props.gutter / 2
      styles.marginLeft = `-${gutterValue}px`
      styles.marginRight = `-${gutterValue}px`
    } else if (Array.isArray(props.gutter)) {
      const [horizontal, vertical = 0] = props.gutter
      styles.marginLeft = `-${horizontal / 2}px`
      styles.marginRight = `-${horizontal / 2}px`
      styles.rowGap = `${vertical}px`
    }
  }

  return styles
})

// 提供gutter给子组件
provide('gutter', props.gutter)
</script>

<style scoped>
.grid-row {
  display: flex;
  flex-flow: row wrap;
  min-width: 0;
}

.grid-row-top {
  align-items: flex-start;
}

.grid-row-middle {
  align-items: center;
}

.grid-row-bottom {
  align-items: flex-end;
}

.grid-row-start {
  justify-content: flex-start;
}

.grid-row-end {
  justify-content: flex-end;
}

.grid-row-center {
  justify-content: center;
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
  flex-wrap: nowrap;
}
</style>