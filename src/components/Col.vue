<template>
  <div class="grid-col" :class="colClasses" :style="colStyles">
    <slot />
  </div>
</template>

<script setup>
import { computed, inject } from 'vue'

const props = defineProps({
  span: {
    type: Number,
    default: 24
  },
  offset: {
    type: Number,
    default: 0
  },
  push: {
    type: Number,
    default: 0
  },
  pull: {
    type: Number,
    default: 0
  },
  order: {
    type: Number
  },
  gutter: {
    type: [Number, Array],
    default: 0
  },
  xs: [Number, Object],
  sm: [Number, Object],
  md: [Number, Object],
  lg: [Number, Object],
  xl: [Number, Object],
  xxl: [Number, Object]
})

const gutter = inject('gutter', 0)

// 解析响应式配置
const parseResponsiveConfig = (config) => {
  if (typeof config === 'number') {
    return { span: config }
  }
  return config || {}
}

// 计算列的CSS类
const colClasses = computed(() => {
  const classes = []

  // 基础span类
  if (props.span <= 24) {
    classes.push(`grid-col-${props.span}`)
  }

  // offset类
  if (props.offset > 0) {
    classes.push(`grid-col-offset-${props.offset}`)
  }

  // push类
  if (props.push > 0) {
    classes.push(`grid-col-push-${props.push}`)
  }

  // pull类
  if (props.pull > 0) {
    classes.push(`grid-col-pull-${props.pull}`)
  }

  // 响应式类
  const breakpoints = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl']
  breakpoints.forEach(bp => {
    const config = parseResponsiveConfig(props[bp])
    if (config.span !== undefined) {
      classes.push(`grid-col-${bp}-${config.span}`)
    }
    if (config.offset) {
      classes.push(`grid-col-${bp}-offset-${config.offset}`)
    }
    if (config.push) {
      classes.push(`grid-col-${bp}-push-${config.push}`)
    }
    if (config.pull) {
      classes.push(`grid-col-${bp}-pull-${config.pull}`)
    }
  })

  return classes
})

// 计算列的样式
const colStyles = computed(() => {
  const styles = {}

  if (props.order !== undefined) {
    styles.order = props.order
  }

  if (gutter) {
    if (typeof gutter === 'number') {
      const gutterValue = gutter / 2
      styles.paddingLeft = `${gutterValue}px`
      styles.paddingRight = `${gutterValue}px`
    } else if (Array.isArray(gutter)) {
      const [horizontal] = gutter
      styles.paddingLeft = `${horizontal / 2}px`
      styles.paddingRight = `${horizontal / 2}px`
    }
  }

  return styles
})
</script>

<style scoped>
.grid-col {
  position: relative;
  max-width: 100%;
  min-height: 1px;
  flex: 0 0 auto;
}

/* 基础栅格类 */
.grid-col-1 {
  flex: 0 0 4.16666667%;
  max-width: 4.16666667%;
}

.grid-col-2 {
  flex: 0 0 8.33333333%;
  max-width: 8.33333333%;
}

.grid-col-3 {
  flex: 0 0 12.5%;
  max-width: 12.5%;
}

.grid-col-4 {
  flex: 0 0 16.66666667%;
  max-width: 16.66666667%;
}

.grid-col-5 {
  flex: 0 0 20.83333333%;
  max-width: 20.83333333%;
}

.grid-col-6 {
  flex: 0 0 25%;
  max-width: 25%;
}

.grid-col-7 {
  flex: 0 0 29.16666667%;
  max-width: 29.16666667%;
}

.grid-col-8 {
  flex: 0 0 33.33333333%;
  max-width: 33.33333333%;
}

.grid-col-9 {
  flex: 0 0 37.5%;
  max-width: 37.5%;
}

.grid-col-10 {
  flex: 0 0 41.66666667%;
  max-width: 41.66666667%;
}

.grid-col-11 {
  flex: 0 0 45.83333333%;
  max-width: 45.83333333%;
}

.grid-col-12 {
  flex: 0 0 50%;
  max-width: 50%;
}

.grid-col-13 {
  flex: 0 0 54.16666667%;
  max-width: 54.16666667%;
}

.grid-col-14 {
  flex: 0 0 58.33333333%;
  max-width: 58.33333333%;
}

.grid-col-15 {
  flex: 0 0 62.5%;
  max-width: 62.5%;
}

.grid-col-16 {
  flex: 0 0 66.66666667%;
  max-width: 66.66666667%;
}

.grid-col-17 {
  flex: 0 0 70.83333333%;
  max-width: 70.83333333%;
}

.grid-col-18 {
  flex: 0 0 75%;
  max-width: 75%;
}

.grid-col-19 {
  flex: 0 0 79.16666667%;
  max-width: 79.16666667%;
}

.grid-col-20 {
  flex: 0 0 83.33333333%;
  max-width: 83.33333333%;
}

.grid-col-21 {
  flex: 0 0 87.5%;
  max-width: 87.5%;
}

.grid-col-22 {
  flex: 0 0 91.66666667%;
  max-width: 91.66666667%;
}

.grid-col-23 {
  flex: 0 0 95.83333333%;
  max-width: 95.83333333%;
}

.grid-col-24 {
  flex: 0 0 100%;
  max-width: 100%;
}

/* offset类 */
.grid-col-offset-1 {
  margin-left: 4.16666667%;
}

.grid-col-offset-2 {
  margin-left: 8.33333333%;
}

.grid-col-offset-3 {
  margin-left: 12.5%;
}

.grid-col-offset-4 {
  margin-left: 16.66666667%;
}

.grid-col-offset-5 {
  margin-left: 20.83333333%;
}

.grid-col-offset-6 {
  margin-left: 25%;
}

.grid-col-offset-7 {
  margin-left: 29.16666667%;
}

.grid-col-offset-8 {
  margin-left: 33.33333333%;
}

.grid-col-offset-9 {
  margin-left: 37.5%;
}

.grid-col-offset-10 {
  margin-left: 41.66666667%;
}

.grid-col-offset-11 {
  margin-left: 45.83333333%;
}

.grid-col-offset-12 {
  margin-left: 50%;
}

.grid-col-offset-13 {
  margin-left: 54.16666667%;
}

.grid-col-offset-14 {
  margin-left: 58.33333333%;
}

.grid-col-offset-15 {
  margin-left: 62.5%;
}

.grid-col-offset-16 {
  margin-left: 66.66666667%;
}

.grid-col-offset-17 {
  margin-left: 70.83333333%;
}

.grid-col-offset-18 {
  margin-left: 75%;
}

.grid-col-offset-19 {
  margin-left: 79.16666667%;
}

.grid-col-offset-20 {
  margin-left: 83.33333333%;
}

.grid-col-offset-21 {
  margin-left: 87.5%;
}

.grid-col-offset-22 {
  margin-left: 91.66666667%;
}

.grid-col-offset-23 {
  margin-left: 95.83333333%;
}

/* push/pull类 */
.grid-col-push-1 {
  left: 4.16666667%;
}

.grid-col-push-2 {
  left: 8.33333333%;
}

.grid-col-push-3 {
  left: 12.5%;
}

.grid-col-push-4 {
  left: 16.66666667%;
}

.grid-col-push-5 {
  left: 20.83333333%;
}

.grid-col-push-6 {
  left: 25%;
}

.grid-col-push-7 {
  left: 29.16666667%;
}

.grid-col-push-8 {
  left: 33.33333333%;
}

.grid-col-push-9 {
  left: 37.5%;
}

.grid-col-push-10 {
  left: 41.66666667%;
}

.grid-col-push-11 {
  left: 45.83333333%;
}

.grid-col-push-12 {
  left: 50%;
}

.grid-col-push-13 {
  left: 54.16666667%;
}

.grid-col-push-14 {
  left: 58.33333333%;
}

.grid-col-push-15 {
  left: 62.5%;
}

.grid-col-push-16 {
  left: 66.66666667%;
}

.grid-col-push-17 {
  left: 70.83333333%;
}

.grid-col-push-18 {
  left: 75%;
}

.grid-col-push-19 {
  left: 79.16666667%;
}

.grid-col-push-20 {
  left: 83.33333333%;
}

.grid-col-push-21 {
  left: 87.5%;
}

.grid-col-push-22 {
  left: 91.66666667%;
}

.grid-col-push-23 {
  left: 95.83333333%;
}

.grid-col-pull-1 {
  right: 4.16666667%;
}

.grid-col-pull-2 {
  right: 8.33333333%;
}

.grid-col-pull-3 {
  right: 12.5%;
}

.grid-col-pull-4 {
  right: 16.66666667%;
}

.grid-col-pull-5 {
  right: 20.83333333%;
}

.grid-col-pull-6 {
  right: 25%;
}

.grid-col-pull-7 {
  right: 29.16666667%;
}

.grid-col-pull-8 {
  right: 33.33333333%;
}

.grid-col-pull-9 {
  right: 37.5%;
}

.grid-col-pull-10 {
  right: 41.66666667%;
}

.grid-col-pull-11 {
  right: 45.83333333%;
}

.grid-col-pull-12 {
  right: 50%;
}

.grid-col-pull-13 {
  right: 54.16666667%;
}

.grid-col-pull-14 {
  right: 58.33333333%;
}

.grid-col-pull-15 {
  right: 62.5%;
}

.grid-col-pull-16 {
  right: 66.66666667%;
}

.grid-col-pull-17 {
  right: 70.83333333%;
}

.grid-col-pull-18 {
  right: 75%;
}

.grid-col-pull-19 {
  right: 79.16666667%;
}

.grid-col-pull-20 {
  right: 83.33333333%;
}

.grid-col-pull-21 {
  right: 87.5%;
}

.grid-col-pull-22 {
  right: 91.66666667%;
}

.grid-col-pull-23 {
  right: 95.83333333%;
}

/* 响应式断点 */
/* xs: <576px */
@media (max-width: 575px) {
  .grid-col-xs-1 {
    flex: 0 0 4.16666667%;
    max-width: 4.16666667%;
  }

  .grid-col-xs-2 {
    flex: 0 0 8.33333333%;
    max-width: 8.33333333%;
  }

  .grid-col-xs-3 {
    flex: 0 0 12.5%;
    max-width: 12.5%;
  }

  .grid-col-xs-4 {
    flex: 0 0 16.66666667%;
    max-width: 16.66666667%;
  }

  .grid-col-xs-5 {
    flex: 0 0 20.83333333%;
    max-width: 20.83333333%;
  }

  .grid-col-xs-6 {
    flex: 0 0 25%;
    max-width: 25%;
  }

  .grid-col-xs-7 {
    flex: 0 0 29.16666667%;
    max-width: 29.16666667%;
  }

  .grid-col-xs-8 {
    flex: 0 0 33.33333333%;
    max-width: 33.33333333%;
  }

  .grid-col-xs-9 {
    flex: 0 0 37.5%;
    max-width: 37.5%;
  }

  .grid-col-xs-10 {
    flex: 0 0 41.66666667%;
    max-width: 41.66666667%;
  }

  .grid-col-xs-11 {
    flex: 0 0 45.83333333%;
    max-width: 45.83333333%;
  }

  .grid-col-xs-12 {
    flex: 0 0 50%;
    max-width: 50%;
  }

  .grid-col-xs-13 {
    flex: 0 0 54.16666667%;
    max-width: 54.16666667%;
  }

  .grid-col-xs-14 {
    flex: 0 0 58.33333333%;
    max-width: 58.33333333%;
  }

  .grid-col-xs-15 {
    flex: 0 0 62.5%;
    max-width: 62.5%;
  }

  .grid-col-xs-16 {
    flex: 0 0 66.66666667%;
    max-width: 66.66666667%;
  }

  .grid-col-xs-17 {
    flex: 0 0 70.83333333%;
    max-width: 70.83333333%;
  }

  .grid-col-xs-18 {
    flex: 0 0 75%;
    max-width: 75%;
  }

  .grid-col-xs-19 {
    flex: 0 0 79.16666667%;
    max-width: 79.16666667%;
  }

  .grid-col-xs-20 {
    flex: 0 0 83.33333333%;
    max-width: 83.33333333%;
  }

  .grid-col-xs-21 {
    flex: 0 0 87.5%;
    max-width: 87.5%;
  }

  .grid-col-xs-22 {
    flex: 0 0 91.66666667%;
    max-width: 91.66666667%;
  }

  .grid-col-xs-23 {
    flex: 0 0 95.83333333%;
    max-width: 95.83333333%;
  }

  .grid-col-xs-24 {
    flex: 0 0 100%;
    max-width: 100%;
  }
}

/* sm: ≥576px */
@media (min-width: 576px) {
  .grid-col-sm-1 {
    flex: 0 0 4.16666667%;
    max-width: 4.16666667%;
  }

  .grid-col-sm-2 {
    flex: 0 0 8.33333333%;
    max-width: 8.33333333%;
  }

  .grid-col-sm-3 {
    flex: 0 0 12.5%;
    max-width: 12.5%;
  }

  .grid-col-sm-4 {
    flex: 0 0 16.66666667%;
    max-width: 16.66666667%;
  }

  .grid-col-sm-5 {
    flex: 0 0 20.83333333%;
    max-width: 20.83333333%;
  }

  .grid-col-sm-6 {
    flex: 0 0 25%;
    max-width: 25%;
  }

  .grid-col-sm-7 {
    flex: 0 0 29.16666667%;
    max-width: 29.16666667%;
  }

  .grid-col-sm-8 {
    flex: 0 0 33.33333333%;
    max-width: 33.33333333%;
  }

  .grid-col-sm-9 {
    flex: 0 0 37.5%;
    max-width: 37.5%;
  }

  .grid-col-sm-10 {
    flex: 0 0 41.66666667%;
    max-width: 41.66666667%;
  }

  .grid-col-sm-11 {
    flex: 0 0 45.83333333%;
    max-width: 45.83333333%;
  }

  .grid-col-sm-12 {
    flex: 0 0 50%;
    max-width: 50%;
  }

  .grid-col-sm-13 {
    flex: 0 0 54.16666667%;
    max-width: 54.16666667%;
  }

  .grid-col-sm-14 {
    flex: 0 0 58.33333333%;
    max-width: 58.33333333%;
  }

  .grid-col-sm-15 {
    flex: 0 0 62.5%;
    max-width: 62.5%;
  }

  .grid-col-sm-16 {
    flex: 0 0 66.66666667%;
    max-width: 66.66666667%;
  }

  .grid-col-sm-17 {
    flex: 0 0 70.83333333%;
    max-width: 70.83333333%;
  }

  .grid-col-sm-18 {
    flex: 0 0 75%;
    max-width: 75%;
  }

  .grid-col-sm-19 {
    flex: 0 0 79.16666667%;
    max-width: 79.16666667%;
  }

  .grid-col-sm-20 {
    flex: 0 0 83.33333333%;
    max-width: 83.33333333%;
  }

  .grid-col-sm-21 {
    flex: 0 0 87.5%;
    max-width: 87.5%;
  }

  .grid-col-sm-22 {
    flex: 0 0 91.66666667%;
    max-width: 91.66666667%;
  }

  .grid-col-sm-23 {
    flex: 0 0 95.83333333%;
    max-width: 95.83333333%;
  }

  .grid-col-sm-24 {
    flex: 0 0 100%;
    max-width: 100%;
  }
}

/* md: ≥768px */
@media (min-width: 768px) {
  .grid-col-md-1 {
    flex: 0 0 4.16666667%;
    max-width: 4.16666667%;
  }

  .grid-col-md-2 {
    flex: 0 0 8.33333333%;
    max-width: 8.33333333%;
  }

  .grid-col-md-3 {
    flex: 0 0 12.5%;
    max-width: 12.5%;
  }

  .grid-col-md-4 {
    flex: 0 0 16.66666667%;
    max-width: 16.66666667%;
  }

  .grid-col-md-5 {
    flex: 0 0 20.83333333%;
    max-width: 20.83333333%;
  }

  .grid-col-md-6 {
    flex: 0 0 25%;
    max-width: 25%;
  }

  .grid-col-md-7 {
    flex: 0 0 29.16666667%;
    max-width: 29.16666667%;
  }

  .grid-col-md-8 {
    flex: 0 0 33.33333333%;
    max-width: 33.33333333%;
  }

  .grid-col-md-9 {
    flex: 0 0 37.5%;
    max-width: 37.5%;
  }

  .grid-col-md-10 {
    flex: 0 0 41.66666667%;
    max-width: 41.66666667%;
  }

  .grid-col-md-11 {
    flex: 0 0 45.83333333%;
    max-width: 45.83333333%;
  }

  .grid-col-md-12 {
    flex: 0 0 50%;
    max-width: 50%;
  }

  .grid-col-md-13 {
    flex: 0 0 54.16666667%;
    max-width: 54.16666667%;
  }

  .grid-col-md-14 {
    flex: 0 0 58.33333333%;
    max-width: 58.33333333%;
  }

  .grid-col-md-15 {
    flex: 0 0 62.5%;
    max-width: 62.5%;
  }

  .grid-col-md-16 {
    flex: 0 0 66.66666667%;
    max-width: 66.66666667%;
  }

  .grid-col-md-17 {
    flex: 0 0 70.83333333%;
    max-width: 70.83333333%;
  }

  .grid-col-md-18 {
    flex: 0 0 75%;
    max-width: 75%;
  }

  .grid-col-md-19 {
    flex: 0 0 79.16666667%;
    max-width: 79.16666667%;
  }

  .grid-col-md-20 {
    flex: 0 0 83.33333333%;
    max-width: 83.33333333%;
  }

  .grid-col-md-21 {
    flex: 0 0 87.5%;
    max-width: 87.5%;
  }

  .grid-col-md-22 {
    flex: 0 0 91.66666667%;
    max-width: 91.66666667%;
  }

  .grid-col-md-23 {
    flex: 0 0 95.83333333%;
    max-width: 95.83333333%;
  }

  .grid-col-md-24 {
    flex: 0 0 100%;
    max-width: 100%;
  }
}

/* lg: ≥992px */
@media (min-width: 992px) {
  .grid-col-lg-1 {
    flex: 0 0 4.16666667%;
    max-width: 4.16666667%;
  }

  .grid-col-lg-2 {
    flex: 0 0 8.33333333%;
    max-width: 8.33333333%;
  }

  .grid-col-lg-3 {
    flex: 0 0 12.5%;
    max-width: 12.5%;
  }

  .grid-col-lg-4 {
    flex: 0 0 16.66666667%;
    max-width: 16.66666667%;
  }

  .grid-col-lg-5 {
    flex: 0 0 20.83333333%;
    max-width: 20.83333333%;
  }

  .grid-col-lg-6 {
    flex: 0 0 25%;
    max-width: 25%;
  }

  .grid-col-lg-7 {
    flex: 0 0 29.16666667%;
    max-width: 29.16666667%;
  }

  .grid-col-lg-8 {
    flex: 0 0 33.33333333%;
    max-width: 33.33333333%;
  }

  .grid-col-lg-9 {
    flex: 0 0 37.5%;
    max-width: 37.5%;
  }

  .grid-col-lg-10 {
    flex: 0 0 41.66666667%;
    max-width: 41.66666667%;
  }

  .grid-col-lg-11 {
    flex: 0 0 45.83333333%;
    max-width: 45.83333333%;
  }

  .grid-col-lg-12 {
    flex: 0 0 50%;
    max-width: 50%;
  }

  .grid-col-lg-13 {
    flex: 0 0 54.16666667%;
    max-width: 54.16666667%;
  }

  .grid-col-lg-14 {
    flex: 0 0 58.33333333%;
    max-width: 58.33333333%;
  }

  .grid-col-lg-15 {
    flex: 0 0 62.5%;
    max-width: 62.5%;
  }

  .grid-col-lg-16 {
    flex: 0 0 66.66666667%;
    max-width: 66.66666667%;
  }

  .grid-col-lg-17 {
    flex: 0 0 70.83333333%;
    max-width: 70.83333333%;
  }

  .grid-col-lg-18 {
    flex: 0 0 75%;
    max-width: 75%;
  }

  .grid-col-lg-19 {
    flex: 0 0 79.16666667%;
    max-width: 79.16666667%;
  }

  .grid-col-lg-20 {
    flex: 0 0 83.33333333%;
    max-width: 83.33333333%;
  }

  .grid-col-lg-21 {
    flex: 0 0 87.5%;
    max-width: 87.5%;
  }

  .grid-col-lg-22 {
    flex: 0 0 91.66666667%;
    max-width: 91.66666667%;
  }

  .grid-col-lg-23 {
    flex: 0 0 95.83333333%;
    max-width: 95.83333333%;
  }

  .grid-col-lg-24 {
    flex: 0 0 100%;
    max-width: 100%;
  }
}

/* xl: ≥1200px */
@media (min-width: 1200px) {
  .grid-col-xl-1 {
    flex: 0 0 4.16666667%;
    max-width: 4.16666667%;
  }

  .grid-col-xl-2 {
    flex: 0 0 8.33333333%;
    max-width: 8.33333333%;
  }

  .grid-col-xl-3 {
    flex: 0 0 12.5%;
    max-width: 12.5%;
  }

  .grid-col-xl-4 {
    flex: 0 0 16.66666667%;
    max-width: 16.66666667%;
  }

  .grid-col-xl-5 {
    flex: 0 0 20.83333333%;
    max-width: 20.83333333%;
  }

  .grid-col-xl-6 {
    flex: 0 0 25%;
    max-width: 25%;
  }

  .grid-col-xl-7 {
    flex: 0 0 29.16666667%;
    max-width: 29.16666667%;
  }

  .grid-col-xl-8 {
    flex: 0 0 33.33333333%;
    max-width: 33.33333333%;
  }

  .grid-col-xl-9 {
    flex: 0 0 37.5%;
    max-width: 37.5%;
  }

  .grid-col-xl-10 {
    flex: 0 0 41.66666667%;
    max-width: 41.66666667%;
  }

  .grid-col-xl-11 {
    flex: 0 0 45.83333333%;
    max-width: 45.83333333%;
  }

  .grid-col-xl-12 {
    flex: 0 0 50%;
    max-width: 50%;
  }

  .grid-col-xl-13 {
    flex: 0 0 54.16666667%;
    max-width: 54.16666667%;
  }

  .grid-col-xl-14 {
    flex: 0 0 58.33333333%;
    max-width: 58.33333333%;
  }

  .grid-col-xl-15 {
    flex: 0 0 62.5%;
    max-width: 62.5%;
  }

  .grid-col-xl-16 {
    flex: 0 0 66.66666667%;
    max-width: 66.66666667%;
  }

  .grid-col-xl-17 {
    flex: 0 0 70.83333333%;
    max-width: 70.83333333%;
  }

  .grid-col-xl-18 {
    flex: 0 0 75%;
    max-width: 75%;
  }

  .grid-col-xl-19 {
    flex: 0 0 79.16666667%;
    max-width: 79.16666667%;
  }

  .grid-col-xl-20 {
    flex: 0 0 83.33333333%;
    max-width: 83.33333333%;
  }

  .grid-col-xl-21 {
    flex: 0 0 87.5%;
    max-width: 87.5%;
  }

  .grid-col-xl-22 {
    flex: 0 0 91.66666667%;
    max-width: 91.66666667%;
  }

  .grid-col-xl-23 {
    flex: 0 0 95.83333333%;
    max-width: 95.83333333%;
  }

  .grid-col-xl-24 {
    flex: 0 0 100%;
    max-width: 100%;
  }
}

/* xxl: ≥1600px */
@media (min-width: 1600px) {
  .grid-col-xxl-1 {
    flex: 0 0 4.16666667%;
    max-width: 4.16666667%;
  }

  .grid-col-xxl-2 {
    flex: 0 0 8.33333333%;
    max-width: 8.33333333%;
  }

  .grid-col-xxl-3 {
    flex: 0 0 12.5%;
    max-width: 12.5%;
  }

  .grid-col-xxl-4 {
    flex: 0 0 16.66666667%;
    max-width: 16.66666667%;
  }

  .grid-col-xxl-5 {
    flex: 0 0 20.83333333%;
    max-width: 20.83333333%;
  }

  .grid-col-xxl-6 {
    flex: 0 0 25%;
    max-width: 25%;
  }

  .grid-col-xxl-7 {
    flex: 0 0 29.16666667%;
    max-width: 29.16666667%;
  }

  .grid-col-xxl-8 {
    flex: 0 0 33.33333333%;
    max-width: 33.33333333%;
  }

  .grid-col-xxl-9 {
    flex: 0 0 37.5%;
    max-width: 37.5%;
  }

  .grid-col-xxl-10 {
    flex: 0 0 41.66666667%;
    max-width: 41.66666667%;
  }

  .grid-col-xxl-11 {
    flex: 0 0 45.83333333%;
    max-width: 45.83333333%;
  }

  .grid-col-xxl-12 {
    flex: 0 0 50%;
    max-width: 50%;
  }

  .grid-col-xxl-13 {
    flex: 0 0 54.16666667%;
    max-width: 54.16666667%;
  }

  .grid-col-xxl-14 {
    flex: 0 0 58.33333333%;
    max-width: 58.33333333%;
  }

  .grid-col-xxl-15 {
    flex: 0 0 62.5%;
    max-width: 62.5%;
  }

  .grid-col-xxl-16 {
    flex: 0 0 66.66666667%;
    max-width: 66.66666667%;
  }

  .grid-col-xxl-17 {
    flex: 0 0 70.83333333%;
    max-width: 70.83333333%;
  }

  .grid-col-xxl-18 {
    flex: 0 0 75%;
    max-width: 75%;
  }

  .grid-col-xxl-19 {
    flex: 0 0 79.16666667%;
    max-width: 79.16666667%;
  }

  .grid-col-xxl-20 {
    flex: 0 0 83.33333333%;
    max-width: 83.33333333%;
  }

  .grid-col-xxl-21 {
    flex: 0 0 87.5%;
    max-width: 87.5%;
  }

  .grid-col-xxl-22 {
    flex: 0 0 91.66666667%;
    max-width: 91.66666667%;
  }

  .grid-col-xxl-23 {
    flex: 0 0 95.83333333%;
    max-width: 95.83333333%;
  }

  .grid-col-xxl-24 {
    flex: 0 0 100%;
    max-width: 100%;
  }
}
</style>