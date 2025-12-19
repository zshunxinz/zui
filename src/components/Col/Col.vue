<template>
  <div class="grid-col" :class="colClasses" :style="colStyles">
    <slot />
  </div>
</template>

<script setup>
import { computed, inject } from 'vue';

const props = defineProps({
  span: {
    type: Number,
    default: 24,
    validator: value => value >= 0 && value <= 24,
  },
  offset: {
    type: Number,
    default: 0,
    validator: value => value >= 0 && value <= 24,
  },
  push: {
    type: Number,
    default: 0,
    validator: value => value >= 0 && value <= 24,
  },
  pull: {
    type: Number,
    default: 0,
    validator: value => value >= 0 && value <= 24,
  },
  order: {
    type: Number,
    default: 0,
  },
  gutter: {
    type: [Number, Array],
    default: 0,
  },
  xs: [Number, Object],
  sm: [Number, Object],
  md: [Number, Object],
  lg: [Number, Object],
  xl: [Number, Object],
  xxl: [Number, Object],
});

const gutter = inject('gutter', 0);

// 解析响应式配置
const parseResponsiveConfig = config => {
  if (typeof config === 'number') {
    return { span: config };
  }
  return config || {};
};

// 计算列的CSS类
const colClasses = computed(() => {
  const classes = [];

  // 基础span类
  if (props.span <= 24) {
    classes.push(`grid-col-${props.span}`);
  }

  // offset类
  if (props.offset > 0) {
    classes.push(`grid-col-offset-${props.offset}`);
  }

  // push类
  if (props.push > 0) {
    classes.push(`grid-col-push-${props.push}`);
  }

  // pull类
  if (props.pull > 0) {
    classes.push(`grid-col-pull-${props.pull}`);
  }

  // 响应式类
  const breakpoints = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];
  breakpoints.forEach(bp => {
    const config = parseResponsiveConfig(props[bp]);
    if (config.span !== undefined) {
      classes.push(`grid-col-${bp}-${config.span}`);
    }
    if (config.offset) {
      classes.push(`grid-col-${bp}-offset-${config.offset}`);
    }
    if (config.push) {
      classes.push(`grid-col-${bp}-push-${config.push}`);
    }
    if (config.pull) {
      classes.push(`grid-col-${bp}-pull-${config.pull}`);
    }
  });

  return classes;
});

// 计算列的样式
const colStyles = computed(() => {
  const styles = {};

  if (props.order !== undefined) {
    styles.order = props.order;
  }

  // 不再需要处理gutter，因为现在在Row组件中使用gap

  return styles;
});
</script>

<style scoped>
.grid-col {
  position: relative;
  max-width: 100%;
  min-height: 1px;
  box-sizing: border-box;
}

/* 基础栅格类 */
.grid-col-1 {
  grid-column: span 1;
}

.grid-col-2 {
  grid-column: span 2;
}

.grid-col-3 {
  grid-column: span 3;
}

.grid-col-4 {
  grid-column: span 4;
}

.grid-col-5 {
  grid-column: span 5;
}

.grid-col-6 {
  grid-column: span 6;
}

.grid-col-7 {
  grid-column: span 7;
}

.grid-col-8 {
  grid-column: span 8;
}

.grid-col-9 {
  grid-column: span 9;
}

.grid-col-10 {
  grid-column: span 10;
}

.grid-col-11 {
  grid-column: span 11;
}

.grid-col-12 {
  grid-column: span 12;
}

.grid-col-13 {
  grid-column: span 13;
}

.grid-col-14 {
  grid-column: span 14;
}

.grid-col-15 {
  grid-column: span 15;
}

.grid-col-16 {
  grid-column: span 16;
}

.grid-col-17 {
  grid-column: span 17;
}

.grid-col-18 {
  grid-column: span 18;
}

.grid-col-19 {
  grid-column: span 19;
}

.grid-col-20 {
  grid-column: span 20;
}

.grid-col-21 {
  grid-column: span 21;
}

.grid-col-22 {
  grid-column: span 22;
}

.grid-col-23 {
  grid-column: span 23;
}

.grid-col-24 {
  grid-column: span 24;
}

/* offset类 */
.grid-col-offset-1 {
  grid-column-start: 2;
}

.grid-col-offset-2 {
  grid-column-start: 3;
}

.grid-col-offset-3 {
  grid-column-start: 4;
}

.grid-col-offset-4 {
  grid-column-start: 5;
}

.grid-col-offset-5 {
  grid-column-start: 6;
}

.grid-col-offset-6 {
  grid-column-start: 7;
}

.grid-col-offset-7 {
  grid-column-start: 8;
}

.grid-col-offset-8 {
  grid-column-start: 9;
}

.grid-col-offset-9 {
  grid-column-start: 10;
}

.grid-col-offset-10 {
  grid-column-start: 11;
}

.grid-col-offset-11 {
  grid-column-start: 12;
}

.grid-col-offset-12 {
  grid-column-start: 13;
}

.grid-col-offset-13 {
  grid-column-start: 14;
}

.grid-col-offset-14 {
  grid-column-start: 15;
}

.grid-col-offset-15 {
  grid-column-start: 16;
}

.grid-col-offset-16 {
  grid-column-start: 17;
}

.grid-col-offset-17 {
  grid-column-start: 18;
}

.grid-col-offset-18 {
  grid-column-start: 19;
}

.grid-col-offset-19 {
  grid-column-start: 20;
}

.grid-col-offset-20 {
  grid-column-start: 21;
}

.grid-col-offset-21 {
  grid-column-start: 22;
}

.grid-col-offset-22 {
  grid-column-start: 23;
}

.grid-col-offset-23 {
  grid-column-start: 24;
}

/* push/pull类 */
/* 在grid布局中，push和pull的实现方式与flex布局不同 */
/* 我们使用grid-column-start和grid-column-end来实现类似的效果 */
/* 注意：这些类的效果可能与flex布局下不完全一致 */

.grid-col-push-1 {
  grid-column-start: span 1 / span 1;
}

.grid-col-push-2 {
  grid-column-start: span 2 / span 2;
}

.grid-col-push-3 {
  grid-column-start: span 3 / span 3;
}

.grid-col-push-4 {
  grid-column-start: span 4 / span 4;
}

.grid-col-push-5 {
  grid-column-start: span 5 / span 5;
}

.grid-col-push-6 {
  grid-column-start: span 6 / span 6;
}

.grid-col-push-7 {
  grid-column-start: span 7 / span 7;
}

.grid-col-push-8 {
  grid-column-start: span 8 / span 8;
}

.grid-col-push-9 {
  grid-column-start: span 9 / span 9;
}

.grid-col-push-10 {
  grid-column-start: span 10 / span 10;
}

.grid-col-push-11 {
  grid-column-start: span 11 / span 11;
}

.grid-col-push-12 {
  grid-column-start: span 12 / span 12;
}

.grid-col-push-13 {
  grid-column-start: span 13 / span 13;
}

.grid-col-push-14 {
  grid-column-start: span 14 / span 14;
}

.grid-col-push-15 {
  grid-column-start: span 15 / span 15;
}

.grid-col-push-16 {
  grid-column-start: span 16 / span 16;
}

.grid-col-push-17 {
  grid-column-start: span 17 / span 17;
}

.grid-col-push-18 {
  grid-column-start: span 18 / span 18;
}

.grid-col-push-19 {
  grid-column-start: span 19 / span 19;
}

.grid-col-push-20 {
  grid-column-start: span 20 / span 20;
}

.grid-col-push-21 {
  grid-column-start: span 21 / span 21;
}

.grid-col-push-22 {
  grid-column-start: span 22 / span 22;
}

.grid-col-push-23 {
  grid-column-start: span 23 / span 23;
}

/* pull类在grid布局中较难直接实现，这里暂时保留但标记为不推荐使用 */
/* 如果需要重新排序，建议使用grid-template-areas或order属性 */
.grid-col-pull-1 {
  order: -1;
}

.grid-col-pull-2 {
  order: -2;
}

.grid-col-pull-3 {
  order: -3;
}

.grid-col-pull-4 {
  order: -4;
}

.grid-col-pull-5 {
  order: -5;
}

.grid-col-pull-6 {
  order: -6;
}

.grid-col-pull-7 {
  order: -7;
}

.grid-col-pull-8 {
  order: -8;
}

.grid-col-pull-9 {
  order: -9;
}

.grid-col-pull-10 {
  order: -10;
}

.grid-col-pull-11 {
  order: -11;
}

.grid-col-pull-12 {
  order: -12;
}

.grid-col-pull-13 {
  order: -13;
}

.grid-col-pull-14 {
  order: -14;
}

.grid-col-pull-15 {
  order: -15;
}

.grid-col-pull-16 {
  order: -16;
}

.grid-col-pull-17 {
  order: -17;
}

.grid-col-pull-18 {
  order: -18;
}

.grid-col-pull-19 {
  order: -19;
}

.grid-col-pull-20 {
  order: -20;
}

.grid-col-pull-21 {
  order: -21;
}

.grid-col-pull-22 {
  order: -22;
}

.grid-col-pull-23 {
  order: -23;
}

/* 响应式断点 */
/* xs: <576px */
@media (max-width: 575px) {
  /* xs span classes */
  .grid-col-xs-1 {
    grid-column: span 1;
  }
  .grid-col-xs-2 {
    grid-column: span 2;
  }
  .grid-col-xs-3 {
    grid-column: span 3;
  }
  .grid-col-xs-4 {
    grid-column: span 4;
  }
  .grid-col-xs-5 {
    grid-column: span 5;
  }
  .grid-col-xs-6 {
    grid-column: span 6;
  }
  .grid-col-xs-7 {
    grid-column: span 7;
  }
  .grid-col-xs-8 {
    grid-column: span 8;
  }
  .grid-col-xs-9 {
    grid-column: span 9;
  }
  .grid-col-xs-10 {
    grid-column: span 10;
  }
  .grid-col-xs-11 {
    grid-column: span 11;
  }
  .grid-col-xs-12 {
    grid-column: span 12;
  }
  .grid-col-xs-13 {
    grid-column: span 13;
  }
  .grid-col-xs-14 {
    grid-column: span 14;
  }
  .grid-col-xs-15 {
    grid-column: span 15;
  }
  .grid-col-xs-16 {
    grid-column: span 16;
  }
  .grid-col-xs-17 {
    grid-column: span 17;
  }
  .grid-col-xs-18 {
    grid-column: span 18;
  }
  .grid-col-xs-19 {
    grid-column: span 19;
  }
  .grid-col-xs-20 {
    grid-column: span 20;
  }
  .grid-col-xs-21 {
    grid-column: span 21;
  }
  .grid-col-xs-22 {
    grid-column: span 22;
  }
  .grid-col-xs-23 {
    grid-column: span 23;
  }
  .grid-col-xs-24 {
    grid-column: span 24;
  }

  /* xs offset classes */
  .grid-col-xs-offset-1 {
    grid-column-start: 2;
  }
  .grid-col-xs-offset-2 {
    grid-column-start: 3;
  }
  .grid-col-xs-offset-3 {
    grid-column-start: 4;
  }
  .grid-col-xs-offset-4 {
    grid-column-start: 5;
  }
  .grid-col-xs-offset-5 {
    grid-column-start: 6;
  }
  .grid-col-xs-offset-6 {
    grid-column-start: 7;
  }
  .grid-col-xs-offset-7 {
    grid-column-start: 8;
  }
  .grid-col-xs-offset-8 {
    grid-column-start: 9;
  }
  .grid-col-xs-offset-9 {
    grid-column-start: 10;
  }
  .grid-col-xs-offset-10 {
    grid-column-start: 11;
  }
  .grid-col-xs-offset-11 {
    grid-column-start: 12;
  }
  .grid-col-xs-offset-12 {
    grid-column-start: 13;
  }
  .grid-col-xs-offset-13 {
    grid-column-start: 14;
  }
  .grid-col-xs-offset-14 {
    grid-column-start: 15;
  }
  .grid-col-xs-offset-15 {
    grid-column-start: 16;
  }
  .grid-col-xs-offset-16 {
    grid-column-start: 17;
  }
  .grid-col-xs-offset-17 {
    grid-column-start: 18;
  }
  .grid-col-xs-offset-18 {
    grid-column-start: 19;
  }
  .grid-col-xs-offset-19 {
    grid-column-start: 20;
  }
  .grid-col-xs-offset-20 {
    grid-column-start: 21;
  }
  .grid-col-xs-offset-21 {
    grid-column-start: 22;
  }
  .grid-col-xs-offset-22 {
    grid-column-start: 23;
  }
  .grid-col-xs-offset-23 {
    grid-column-start: 24;
  }

  /* xs push classes */
  .grid-col-xs-push-1 {
    grid-column-start: span 1 / span 1;
  }
  .grid-col-xs-push-2 {
    grid-column-start: span 2 / span 2;
  }
  .grid-col-xs-push-3 {
    grid-column-start: span 3 / span 3;
  }
  .grid-col-xs-push-4 {
    grid-column-start: span 4 / span 4;
  }
  .grid-col-xs-push-5 {
    grid-column-start: span 5 / span 5;
  }
  .grid-col-xs-push-6 {
    grid-column-start: span 6 / span 6;
  }
  .grid-col-xs-push-7 {
    grid-column-start: span 7 / span 7;
  }
  .grid-col-xs-push-8 {
    grid-column-start: span 8 / span 8;
  }
  .grid-col-xs-push-9 {
    grid-column-start: span 9 / span 9;
  }
  .grid-col-xs-push-10 {
    grid-column-start: span 10 / span 10;
  }
  .grid-col-xs-push-11 {
    grid-column-start: span 11 / span 11;
  }
  .grid-col-xs-push-12 {
    grid-column-start: span 12 / span 12;
  }
  .grid-col-xs-push-13 {
    grid-column-start: span 13 / span 13;
  }
  .grid-col-xs-push-14 {
    grid-column-start: span 14 / span 14;
  }
  .grid-col-xs-push-15 {
    grid-column-start: span 15 / span 15;
  }
  .grid-col-xs-push-16 {
    grid-column-start: span 16 / span 16;
  }
  .grid-col-xs-push-17 {
    grid-column-start: span 17 / span 17;
  }
  .grid-col-xs-push-18 {
    grid-column-start: span 18 / span 18;
  }
  .grid-col-xs-push-19 {
    grid-column-start: span 19 / span 19;
  }
  .grid-col-xs-push-20 {
    grid-column-start: span 20 / span 20;
  }
  .grid-col-xs-push-21 {
    grid-column-start: span 21 / span 21;
  }
  .grid-col-xs-push-22 {
    grid-column-start: span 22 / span 22;
  }
  .grid-col-xs-push-23 {
    grid-column-start: span 23 / span 23;
  }

  /* xs pull classes */
  .grid-col-xs-pull-1 {
    order: -1;
  }
  .grid-col-xs-pull-2 {
    order: -2;
  }
  .grid-col-xs-pull-3 {
    order: -3;
  }
  .grid-col-xs-pull-4 {
    order: -4;
  }
  .grid-col-xs-pull-5 {
    order: -5;
  }
  .grid-col-xs-pull-6 {
    order: -6;
  }
  .grid-col-xs-pull-7 {
    order: -7;
  }
  .grid-col-xs-pull-8 {
    order: -8;
  }
  .grid-col-xs-pull-9 {
    order: -9;
  }
  .grid-col-xs-pull-10 {
    order: -10;
  }
  .grid-col-xs-pull-11 {
    order: -11;
  }
  .grid-col-xs-pull-12 {
    order: -12;
  }
  .grid-col-xs-pull-13 {
    order: -13;
  }
  .grid-col-xs-pull-14 {
    order: -14;
  }
  .grid-col-xs-pull-15 {
    order: -15;
  }
  .grid-col-xs-pull-16 {
    order: -16;
  }
  .grid-col-xs-pull-17 {
    order: -17;
  }
  .grid-col-xs-pull-18 {
    order: -18;
  }
  .grid-col-xs-pull-19 {
    order: -19;
  }
  .grid-col-xs-pull-20 {
    order: -20;
  }
  .grid-col-xs-pull-21 {
    order: -21;
  }
  .grid-col-xs-pull-22 {
    order: -22;
  }
  .grid-col-xs-pull-23 {
    order: -23;
  }
}

/* sm: ≥576px */
@media (min-width: 576px) {
  /* sm span classes */
  .grid-col-sm-1 {
    grid-column: span 1;
  }
  .grid-col-sm-2 {
    grid-column: span 2;
  }
  .grid-col-sm-3 {
    grid-column: span 3;
  }
  .grid-col-sm-4 {
    grid-column: span 4;
  }
  .grid-col-sm-5 {
    grid-column: span 5;
  }
  .grid-col-sm-6 {
    grid-column: span 6;
  }
  .grid-col-sm-7 {
    grid-column: span 7;
  }
  .grid-col-sm-8 {
    grid-column: span 8;
  }
  .grid-col-sm-9 {
    grid-column: span 9;
  }
  .grid-col-sm-10 {
    grid-column: span 10;
  }
  .grid-col-sm-11 {
    grid-column: span 11;
  }
  .grid-col-sm-12 {
    grid-column: span 12;
  }
  .grid-col-sm-13 {
    grid-column: span 13;
  }
  .grid-col-sm-14 {
    grid-column: span 14;
  }
  .grid-col-sm-15 {
    grid-column: span 15;
  }
  .grid-col-sm-16 {
    grid-column: span 16;
  }
  .grid-col-sm-17 {
    grid-column: span 17;
  }
  .grid-col-sm-18 {
    grid-column: span 18;
  }
  .grid-col-sm-19 {
    grid-column: span 19;
  }
  .grid-col-sm-20 {
    grid-column: span 20;
  }
  .grid-col-sm-21 {
    grid-column: span 21;
  }
  .grid-col-sm-22 {
    grid-column: span 22;
  }
  .grid-col-sm-23 {
    grid-column: span 23;
  }
  .grid-col-sm-24 {
    grid-column: span 24;
  }

  /* sm offset classes */
  .grid-col-sm-offset-1 {
    grid-column-start: 2;
  }
  .grid-col-sm-offset-2 {
    grid-column-start: 3;
  }
  .grid-col-sm-offset-3 {
    grid-column-start: 4;
  }
  .grid-col-sm-offset-4 {
    grid-column-start: 5;
  }
  .grid-col-sm-offset-5 {
    grid-column-start: 6;
  }
  .grid-col-sm-offset-6 {
    grid-column-start: 7;
  }
  .grid-col-sm-offset-7 {
    grid-column-start: 8;
  }
  .grid-col-sm-offset-8 {
    grid-column-start: 9;
  }
  .grid-col-sm-offset-9 {
    grid-column-start: 10;
  }
  .grid-col-sm-offset-10 {
    grid-column-start: 11;
  }
  .grid-col-sm-offset-11 {
    grid-column-start: 12;
  }
  .grid-col-sm-offset-12 {
    grid-column-start: 13;
  }
  .grid-col-sm-offset-13 {
    grid-column-start: 14;
  }
  .grid-col-sm-offset-14 {
    grid-column-start: 15;
  }
  .grid-col-sm-offset-15 {
    grid-column-start: 16;
  }
  .grid-col-sm-offset-16 {
    grid-column-start: 17;
  }
  .grid-col-sm-offset-17 {
    grid-column-start: 18;
  }
  .grid-col-sm-offset-18 {
    grid-column-start: 19;
  }
  .grid-col-sm-offset-19 {
    grid-column-start: 20;
  }
  .grid-col-sm-offset-20 {
    grid-column-start: 21;
  }
  .grid-col-sm-offset-21 {
    grid-column-start: 22;
  }
  .grid-col-sm-offset-22 {
    grid-column-start: 23;
  }
  .grid-col-sm-offset-23 {
    grid-column-start: 24;
  }

  /* sm push classes */
  .grid-col-sm-push-1 {
    grid-column-start: span 1 / span 1;
  }
  .grid-col-sm-push-2 {
    grid-column-start: span 2 / span 2;
  }
  .grid-col-sm-push-3 {
    grid-column-start: span 3 / span 3;
  }
  .grid-col-sm-push-4 {
    grid-column-start: span 4 / span 4;
  }
  .grid-col-sm-push-5 {
    grid-column-start: span 5 / span 5;
  }
  .grid-col-sm-push-6 {
    grid-column-start: span 6 / span 6;
  }
  .grid-col-sm-push-7 {
    grid-column-start: span 7 / span 7;
  }
  .grid-col-sm-push-8 {
    grid-column-start: span 8 / span 8;
  }
  .grid-col-sm-push-9 {
    grid-column-start: span 9 / span 9;
  }
  .grid-col-sm-push-10 {
    grid-column-start: span 10 / span 10;
  }
  .grid-col-sm-push-11 {
    grid-column-start: span 11 / span 11;
  }
  .grid-col-sm-push-12 {
    grid-column-start: span 12 / span 12;
  }
  .grid-col-sm-push-13 {
    grid-column-start: span 13 / span 13;
  }
  .grid-col-sm-push-14 {
    grid-column-start: span 14 / span 14;
  }
  .grid-col-sm-push-15 {
    grid-column-start: span 15 / span 15;
  }
  .grid-col-sm-push-16 {
    grid-column-start: span 16 / span 16;
  }
  .grid-col-sm-push-17 {
    grid-column-start: span 17 / span 17;
  }
  .grid-col-sm-push-18 {
    grid-column-start: span 18 / span 18;
  }
  .grid-col-sm-push-19 {
    grid-column-start: span 19 / span 19;
  }
  .grid-col-sm-push-20 {
    grid-column-start: span 20 / span 20;
  }
  .grid-col-sm-push-21 {
    grid-column-start: span 21 / span 21;
  }
  .grid-col-sm-push-22 {
    grid-column-start: span 22 / span 22;
  }
  .grid-col-sm-push-23 {
    grid-column-start: span 23 / span 23;
  }

  /* sm pull classes */
  .grid-col-sm-pull-1 {
    order: -1;
  }
  .grid-col-sm-pull-2 {
    order: -2;
  }
  .grid-col-sm-pull-3 {
    order: -3;
  }
  .grid-col-sm-pull-4 {
    order: -4;
  }
  .grid-col-sm-pull-5 {
    order: -5;
  }
  .grid-col-sm-pull-6 {
    order: -6;
  }
  .grid-col-sm-pull-7 {
    order: -7;
  }
  .grid-col-sm-pull-8 {
    order: -8;
  }
  .grid-col-sm-pull-9 {
    order: -9;
  }
  .grid-col-sm-pull-10 {
    order: -10;
  }
  .grid-col-sm-pull-11 {
    order: -11;
  }
  .grid-col-sm-pull-12 {
    order: -12;
  }
  .grid-col-sm-pull-13 {
    order: -13;
  }
  .grid-col-sm-pull-14 {
    order: -14;
  }
  .grid-col-sm-pull-15 {
    order: -15;
  }
  .grid-col-sm-pull-16 {
    order: -16;
  }
  .grid-col-sm-pull-17 {
    order: -17;
  }
  .grid-col-sm-pull-18 {
    order: -18;
  }
  .grid-col-sm-pull-19 {
    order: -19;
  }
  .grid-col-sm-pull-20 {
    order: -20;
  }
  .grid-col-sm-pull-21 {
    order: -21;
  }
  .grid-col-sm-pull-22 {
    order: -22;
  }
  .grid-col-sm-pull-23 {
    order: -23;
  }
}

/* md: ≥768px */
@media (min-width: 768px) {
  /* md span classes */
  .grid-col-md-1 {
    grid-column: span 1;
  }
  .grid-col-md-2 {
    grid-column: span 2;
  }
  .grid-col-md-3 {
    grid-column: span 3;
  }
  .grid-col-md-4 {
    grid-column: span 4;
  }
  .grid-col-md-5 {
    grid-column: span 5;
  }
  .grid-col-md-6 {
    grid-column: span 6;
  }
  .grid-col-md-7 {
    grid-column: span 7;
  }
  .grid-col-md-8 {
    grid-column: span 8;
  }
  .grid-col-md-9 {
    grid-column: span 9;
  }
  .grid-col-md-10 {
    grid-column: span 10;
  }
  .grid-col-md-11 {
    grid-column: span 11;
  }
  .grid-col-md-12 {
    grid-column: span 12;
  }
  .grid-col-md-13 {
    grid-column: span 13;
  }
  .grid-col-md-14 {
    grid-column: span 14;
  }
  .grid-col-md-15 {
    grid-column: span 15;
  }
  .grid-col-md-16 {
    grid-column: span 16;
  }
  .grid-col-md-17 {
    grid-column: span 17;
  }
  .grid-col-md-18 {
    grid-column: span 18;
  }
  .grid-col-md-19 {
    grid-column: span 19;
  }
  .grid-col-md-20 {
    grid-column: span 20;
  }
  .grid-col-md-21 {
    grid-column: span 21;
  }
  .grid-col-md-22 {
    grid-column: span 22;
  }
  .grid-col-md-23 {
    grid-column: span 23;
  }
  .grid-col-md-24 {
    grid-column: span 24;
  }

  /* md offset classes */
  .grid-col-md-offset-1 {
    grid-column-start: 2;
  }
  .grid-col-md-offset-2 {
    grid-column-start: 3;
  }
  .grid-col-md-offset-3 {
    grid-column-start: 4;
  }
  .grid-col-md-offset-4 {
    grid-column-start: 5;
  }
  .grid-col-md-offset-5 {
    grid-column-start: 6;
  }
  .grid-col-md-offset-6 {
    grid-column-start: 7;
  }
  .grid-col-md-offset-7 {
    grid-column-start: 8;
  }
  .grid-col-md-offset-8 {
    grid-column-start: 9;
  }
  .grid-col-md-offset-9 {
    grid-column-start: 10;
  }
  .grid-col-md-offset-10 {
    grid-column-start: 11;
  }
  .grid-col-md-offset-11 {
    grid-column-start: 12;
  }
  .grid-col-md-offset-12 {
    grid-column-start: 13;
  }
  .grid-col-md-offset-13 {
    grid-column-start: 14;
  }
  .grid-col-md-offset-14 {
    grid-column-start: 15;
  }
  .grid-col-md-offset-15 {
    grid-column-start: 16;
  }
  .grid-col-md-offset-16 {
    grid-column-start: 17;
  }
  .grid-col-md-offset-17 {
    grid-column-start: 18;
  }
  .grid-col-md-offset-18 {
    grid-column-start: 19;
  }
  .grid-col-md-offset-19 {
    grid-column-start: 20;
  }
  .grid-col-md-offset-20 {
    grid-column-start: 21;
  }
  .grid-col-md-offset-21 {
    grid-column-start: 22;
  }
  .grid-col-md-offset-22 {
    grid-column-start: 23;
  }
  .grid-col-md-offset-23 {
    grid-column-start: 24;
  }

  /* md push classes */
  .grid-col-md-push-1 {
    grid-column-start: span 1 / span 1;
  }
  .grid-col-md-push-2 {
    grid-column-start: span 2 / span 2;
  }
  .grid-col-md-push-3 {
    grid-column-start: span 3 / span 3;
  }
  .grid-col-md-push-4 {
    grid-column-start: span 4 / span 4;
  }
  .grid-col-md-push-5 {
    grid-column-start: span 5 / span 5;
  }
  .grid-col-md-push-6 {
    grid-column-start: span 6 / span 6;
  }
  .grid-col-md-push-7 {
    grid-column-start: span 7 / span 7;
  }
  .grid-col-md-push-8 {
    grid-column-start: span 8 / span 8;
  }
  .grid-col-md-push-9 {
    grid-column-start: span 9 / span 9;
  }
  .grid-col-md-push-10 {
    grid-column-start: span 10 / span 10;
  }
  .grid-col-md-push-11 {
    grid-column-start: span 11 / span 11;
  }
  .grid-col-md-push-12 {
    grid-column-start: span 12 / span 12;
  }
  .grid-col-md-push-13 {
    grid-column-start: span 13 / span 13;
  }
  .grid-col-md-push-14 {
    grid-column-start: span 14 / span 14;
  }
  .grid-col-md-push-15 {
    grid-column-start: span 15 / span 15;
  }
  .grid-col-md-push-16 {
    grid-column-start: span 16 / span 16;
  }
  .grid-col-md-push-17 {
    grid-column-start: span 17 / span 17;
  }
  .grid-col-md-push-18 {
    grid-column-start: span 18 / span 18;
  }
  .grid-col-md-push-19 {
    grid-column-start: span 19 / span 19;
  }
  .grid-col-md-push-20 {
    grid-column-start: span 20 / span 20;
  }
  .grid-col-md-push-21 {
    grid-column-start: span 21 / span 21;
  }
  .grid-col-md-push-22 {
    grid-column-start: span 22 / span 22;
  }
  .grid-col-md-push-23 {
    grid-column-start: span 23 / span 23;
  }

  /* md pull classes */
  .grid-col-md-pull-1 {
    order: -1;
  }
  .grid-col-md-pull-2 {
    order: -2;
  }
  .grid-col-md-pull-3 {
    order: -3;
  }
  .grid-col-md-pull-4 {
    order: -4;
  }
  .grid-col-md-pull-5 {
    order: -5;
  }
  .grid-col-md-pull-6 {
    order: -6;
  }
  .grid-col-md-pull-7 {
    order: -7;
  }
  .grid-col-md-pull-8 {
    order: -8;
  }
  .grid-col-md-pull-9 {
    order: -9;
  }
  .grid-col-md-pull-10 {
    order: -10;
  }
  .grid-col-md-pull-11 {
    order: -11;
  }
  .grid-col-md-pull-12 {
    order: -12;
  }
  .grid-col-md-pull-13 {
    order: -13;
  }
  .grid-col-md-pull-14 {
    order: -14;
  }
  .grid-col-md-pull-15 {
    order: -15;
  }
  .grid-col-md-pull-16 {
    order: -16;
  }
  .grid-col-md-pull-17 {
    order: -17;
  }
  .grid-col-md-pull-18 {
    order: -18;
  }
  .grid-col-md-pull-19 {
    order: -19;
  }
  .grid-col-md-pull-20 {
    order: -20;
  }
  .grid-col-md-pull-21 {
    order: -21;
  }
  .grid-col-md-pull-22 {
    order: -22;
  }
  .grid-col-md-pull-23 {
    order: -23;
  }
}

/* lg: ≥992px */
@media (min-width: 992px) {
  /* lg span classes */
  .grid-col-lg-1 {
    grid-column: span 1;
  }
  .grid-col-lg-2 {
    grid-column: span 2;
  }
  .grid-col-lg-3 {
    grid-column: span 3;
  }
  .grid-col-lg-4 {
    grid-column: span 4;
  }
  .grid-col-lg-5 {
    grid-column: span 5;
  }
  .grid-col-lg-6 {
    grid-column: span 6;
  }
  .grid-col-lg-7 {
    grid-column: span 7;
  }
  .grid-col-lg-8 {
    grid-column: span 8;
  }
  .grid-col-lg-9 {
    grid-column: span 9;
  }
  .grid-col-lg-10 {
    grid-column: span 10;
  }
  .grid-col-lg-11 {
    grid-column: span 11;
  }
  .grid-col-lg-12 {
    grid-column: span 12;
  }
  .grid-col-lg-13 {
    grid-column: span 13;
  }
  .grid-col-lg-14 {
    grid-column: span 14;
  }
  .grid-col-lg-15 {
    grid-column: span 15;
  }
  .grid-col-lg-16 {
    grid-column: span 16;
  }
  .grid-col-lg-17 {
    grid-column: span 17;
  }
  .grid-col-lg-18 {
    grid-column: span 18;
  }
  .grid-col-lg-19 {
    grid-column: span 19;
  }
  .grid-col-lg-20 {
    grid-column: span 20;
  }
  .grid-col-lg-21 {
    grid-column: span 21;
  }
  .grid-col-lg-22 {
    grid-column: span 22;
  }
  .grid-col-lg-23 {
    grid-column: span 23;
  }
  .grid-col-lg-24 {
    grid-column: span 24;
  }

  /* lg offset classes */
  .grid-col-lg-offset-1 {
    grid-column-start: 2;
  }
  .grid-col-lg-offset-2 {
    grid-column-start: 3;
  }
  .grid-col-lg-offset-3 {
    grid-column-start: 4;
  }
  .grid-col-lg-offset-4 {
    grid-column-start: 5;
  }
  .grid-col-lg-offset-5 {
    grid-column-start: 6;
  }
  .grid-col-lg-offset-6 {
    grid-column-start: 7;
  }
  .grid-col-lg-offset-7 {
    grid-column-start: 8;
  }
  .grid-col-lg-offset-8 {
    grid-column-start: 9;
  }
  .grid-col-lg-offset-9 {
    grid-column-start: 10;
  }
  .grid-col-lg-offset-10 {
    grid-column-start: 11;
  }
  .grid-col-lg-offset-11 {
    grid-column-start: 12;
  }
  .grid-col-lg-offset-12 {
    grid-column-start: 13;
  }
  .grid-col-lg-offset-13 {
    grid-column-start: 14;
  }
  .grid-col-lg-offset-14 {
    grid-column-start: 15;
  }
  .grid-col-lg-offset-15 {
    grid-column-start: 16;
  }
  .grid-col-lg-offset-16 {
    grid-column-start: 17;
  }
  .grid-col-lg-offset-17 {
    grid-column-start: 18;
  }
  .grid-col-lg-offset-18 {
    grid-column-start: 19;
  }
  .grid-col-lg-offset-19 {
    grid-column-start: 20;
  }
  .grid-col-lg-offset-20 {
    grid-column-start: 21;
  }
  .grid-col-lg-offset-21 {
    grid-column-start: 22;
  }
  .grid-col-lg-offset-22 {
    grid-column-start: 23;
  }
  .grid-col-lg-offset-23 {
    grid-column-start: 24;
  }

  /* lg push classes */
  .grid-col-lg-push-1 {
    grid-column-start: span 1 / span 1;
  }
  .grid-col-lg-push-2 {
    grid-column-start: span 2 / span 2;
  }
  .grid-col-lg-push-3 {
    grid-column-start: span 3 / span 3;
  }
  .grid-col-lg-push-4 {
    grid-column-start: span 4 / span 4;
  }
  .grid-col-lg-push-5 {
    grid-column-start: span 5 / span 5;
  }
  .grid-col-lg-push-6 {
    grid-column-start: span 6 / span 6;
  }
  .grid-col-lg-push-7 {
    grid-column-start: span 7 / span 7;
  }
  .grid-col-lg-push-8 {
    grid-column-start: span 8 / span 8;
  }
  .grid-col-lg-push-9 {
    grid-column-start: span 9 / span 9;
  }
  .grid-col-lg-push-10 {
    grid-column-start: span 10 / span 10;
  }
  .grid-col-lg-push-11 {
    grid-column-start: span 11 / span 11;
  }
  .grid-col-lg-push-12 {
    grid-column-start: span 12 / span 12;
  }
  .grid-col-lg-push-13 {
    grid-column-start: span 13 / span 13;
  }
  .grid-col-lg-push-14 {
    grid-column-start: span 14 / span 14;
  }
  .grid-col-lg-push-15 {
    grid-column-start: span 15 / span 15;
  }
  .grid-col-lg-push-16 {
    grid-column-start: span 16 / span 16;
  }
  .grid-col-lg-push-17 {
    grid-column-start: span 17 / span 17;
  }
  .grid-col-lg-push-18 {
    grid-column-start: span 18 / span 18;
  }
  .grid-col-lg-push-19 {
    grid-column-start: span 19 / span 19;
  }
  .grid-col-lg-push-20 {
    grid-column-start: span 20 / span 20;
  }
  .grid-col-lg-push-21 {
    grid-column-start: span 21 / span 21;
  }
  .grid-col-lg-push-22 {
    grid-column-start: span 22 / span 22;
  }
  .grid-col-lg-push-23 {
    grid-column-start: span 23 / span 23;
  }

  /* lg pull classes */
  .grid-col-lg-pull-1 {
    order: -1;
  }
  .grid-col-lg-pull-2 {
    order: -2;
  }
  .grid-col-lg-pull-3 {
    order: -3;
  }
  .grid-col-lg-pull-4 {
    order: -4;
  }
  .grid-col-lg-pull-5 {
    order: -5;
  }
  .grid-col-lg-pull-6 {
    order: -6;
  }
  .grid-col-lg-pull-7 {
    order: -7;
  }
  .grid-col-lg-pull-8 {
    order: -8;
  }
  .grid-col-lg-pull-9 {
    order: -9;
  }
  .grid-col-lg-pull-10 {
    order: -10;
  }
  .grid-col-lg-pull-11 {
    order: -11;
  }
  .grid-col-lg-pull-12 {
    order: -12;
  }
  .grid-col-lg-pull-13 {
    order: -13;
  }
  .grid-col-lg-pull-14 {
    order: -14;
  }
  .grid-col-lg-pull-15 {
    order: -15;
  }
  .grid-col-lg-pull-16 {
    order: -16;
  }
  .grid-col-lg-pull-17 {
    order: -17;
  }
  .grid-col-lg-pull-18 {
    order: -18;
  }
  .grid-col-lg-pull-19 {
    order: -19;
  }
  .grid-col-lg-pull-20 {
    order: -20;
  }
  .grid-col-lg-pull-21 {
    order: -21;
  }
  .grid-col-lg-pull-22 {
    order: -22;
  }
  .grid-col-lg-pull-23 {
    order: -23;
  }
}

/* xl: ≥1200px */
@media (min-width: 1200px) {
  /* xl span classes */
  .grid-col-xl-1 {
    grid-column: span 1;
  }
  .grid-col-xl-2 {
    grid-column: span 2;
  }
  .grid-col-xl-3 {
    grid-column: span 3;
  }
  .grid-col-xl-4 {
    grid-column: span 4;
  }
  .grid-col-xl-5 {
    grid-column: span 5;
  }
  .grid-col-xl-6 {
    grid-column: span 6;
  }
  .grid-col-xl-7 {
    grid-column: span 7;
  }
  .grid-col-xl-8 {
    grid-column: span 8;
  }
  .grid-col-xl-9 {
    grid-column: span 9;
  }
  .grid-col-xl-10 {
    grid-column: span 10;
  }
  .grid-col-xl-11 {
    grid-column: span 11;
  }
  .grid-col-xl-12 {
    grid-column: span 12;
  }
  .grid-col-xl-13 {
    grid-column: span 13;
  }
  .grid-col-xl-14 {
    grid-column: span 14;
  }
  .grid-col-xl-15 {
    grid-column: span 15;
  }
  .grid-col-xl-16 {
    grid-column: span 16;
  }
  .grid-col-xl-17 {
    grid-column: span 17;
  }
  .grid-col-xl-18 {
    grid-column: span 18;
  }
  .grid-col-xl-19 {
    grid-column: span 19;
  }
  .grid-col-xl-20 {
    grid-column: span 20;
  }
  .grid-col-xl-21 {
    grid-column: span 21;
  }
  .grid-col-xl-22 {
    grid-column: span 22;
  }
  .grid-col-xl-23 {
    grid-column: span 23;
  }
  .grid-col-xl-24 {
    grid-column: span 24;
  }

  /* xl offset classes */
  .grid-col-xl-offset-1 {
    grid-column-start: 2;
  }
  .grid-col-xl-offset-2 {
    grid-column-start: 3;
  }
  .grid-col-xl-offset-3 {
    grid-column-start: 4;
  }
  .grid-col-xl-offset-4 {
    grid-column-start: 5;
  }
  .grid-col-xl-offset-5 {
    grid-column-start: 6;
  }
  .grid-col-xl-offset-6 {
    grid-column-start: 7;
  }
  .grid-col-xl-offset-7 {
    grid-column-start: 8;
  }
  .grid-col-xl-offset-8 {
    grid-column-start: 9;
  }
  .grid-col-xl-offset-9 {
    grid-column-start: 10;
  }
  .grid-col-xl-offset-10 {
    grid-column-start: 11;
  }
  .grid-col-xl-offset-11 {
    grid-column-start: 12;
  }
  .grid-col-xl-offset-12 {
    grid-column-start: 13;
  }
  .grid-col-xl-offset-13 {
    grid-column-start: 14;
  }
  .grid-col-xl-offset-14 {
    grid-column-start: 15;
  }
  .grid-col-xl-offset-15 {
    grid-column-start: 16;
  }
  .grid-col-xl-offset-16 {
    grid-column-start: 17;
  }
  .grid-col-xl-offset-17 {
    grid-column-start: 18;
  }
  .grid-col-xl-offset-18 {
    grid-column-start: 19;
  }
  .grid-col-xl-offset-19 {
    grid-column-start: 20;
  }
  .grid-col-xl-offset-20 {
    grid-column-start: 21;
  }
  .grid-col-xl-offset-21 {
    grid-column-start: 22;
  }
  .grid-col-xl-offset-22 {
    grid-column-start: 23;
  }
  .grid-col-xl-offset-23 {
    grid-column-start: 24;
  }

  /* xl push classes */
  .grid-col-xl-push-1 {
    grid-column-start: span 1 / span 1;
  }
  .grid-col-xl-push-2 {
    grid-column-start: span 2 / span 2;
  }
  .grid-col-xl-push-3 {
    grid-column-start: span 3 / span 3;
  }
  .grid-col-xl-push-4 {
    grid-column-start: span 4 / span 4;
  }
  .grid-col-xl-push-5 {
    grid-column-start: span 5 / span 5;
  }
  .grid-col-xl-push-6 {
    grid-column-start: span 6 / span 6;
  }
  .grid-col-xl-push-7 {
    grid-column-start: span 7 / span 7;
  }
  .grid-col-xl-push-8 {
    grid-column-start: span 8 / span 8;
  }
  .grid-col-xl-push-9 {
    grid-column-start: span 9 / span 9;
  }
  .grid-col-xl-push-10 {
    grid-column-start: span 10 / span 10;
  }
  .grid-col-xl-push-11 {
    grid-column-start: span 11 / span 11;
  }
  .grid-col-xl-push-12 {
    grid-column-start: span 12 / span 12;
  }
  .grid-col-xl-push-13 {
    grid-column-start: span 13 / span 13;
  }
  .grid-col-xl-push-14 {
    grid-column-start: span 14 / span 14;
  }
  .grid-col-xl-push-15 {
    grid-column-start: span 15 / span 15;
  }
  .grid-col-xl-push-16 {
    grid-column-start: span 16 / span 16;
  }
  .grid-col-xl-push-17 {
    grid-column-start: span 17 / span 17;
  }
  .grid-col-xl-push-18 {
    grid-column-start: span 18 / span 18;
  }
  .grid-col-xl-push-19 {
    grid-column-start: span 19 / span 19;
  }
  .grid-col-xl-push-20 {
    grid-column-start: span 20 / span 20;
  }
  .grid-col-xl-push-21 {
    grid-column-start: span 21 / span 21;
  }
  .grid-col-xl-push-22 {
    grid-column-start: span 22 / span 22;
  }
  .grid-col-xl-push-23 {
    grid-column-start: span 23 / span 23;
  }

  /* xl pull classes */
  .grid-col-xl-pull-1 {
    order: -1;
  }
  .grid-col-xl-pull-2 {
    order: -2;
  }
  .grid-col-xl-pull-3 {
    order: -3;
  }
  .grid-col-xl-pull-4 {
    order: -4;
  }
  .grid-col-xl-pull-5 {
    order: -5;
  }
  .grid-col-xl-pull-6 {
    order: -6;
  }
  .grid-col-xl-pull-7 {
    order: -7;
  }
  .grid-col-xl-pull-8 {
    order: -8;
  }
  .grid-col-xl-pull-9 {
    order: -9;
  }
  .grid-col-xl-pull-10 {
    order: -10;
  }
  .grid-col-xl-pull-11 {
    order: -11;
  }
  .grid-col-xl-pull-12 {
    order: -12;
  }
  .grid-col-xl-pull-13 {
    order: -13;
  }
  .grid-col-xl-pull-14 {
    order: -14;
  }
  .grid-col-xl-pull-15 {
    order: -15;
  }
  .grid-col-xl-pull-16 {
    order: -16;
  }
  .grid-col-xl-pull-17 {
    order: -17;
  }
  .grid-col-xl-pull-18 {
    order: -18;
  }
  .grid-col-xl-pull-19 {
    order: -19;
  }
  .grid-col-xl-pull-20 {
    order: -20;
  }
  .grid-col-xl-pull-21 {
    order: -21;
  }
  .grid-col-xl-pull-22 {
    order: -22;
  }
  .grid-col-xl-pull-23 {
    order: -23;
  }
}

/* xxl: ≥1600px */
@media (min-width: 1600px) {
  /* xxl span classes */
  .grid-col-xxl-1 {
    grid-column: span 1;
  }
  .grid-col-xxl-2 {
    grid-column: span 2;
  }
  .grid-col-xxl-3 {
    grid-column: span 3;
  }
  .grid-col-xxl-4 {
    grid-column: span 4;
  }
  .grid-col-xxl-5 {
    grid-column: span 5;
  }
  .grid-col-xxl-6 {
    grid-column: span 6;
  }
  .grid-col-xxl-7 {
    grid-column: span 7;
  }
  .grid-col-xxl-8 {
    grid-column: span 8;
  }
  .grid-col-xxl-9 {
    grid-column: span 9;
  }
  .grid-col-xxl-10 {
    grid-column: span 10;
  }
  .grid-col-xxl-11 {
    grid-column: span 11;
  }
  .grid-col-xxl-12 {
    grid-column: span 12;
  }
  .grid-col-xxl-13 {
    grid-column: span 13;
  }
  .grid-col-xxl-14 {
    grid-column: span 14;
  }
  .grid-col-xxl-15 {
    grid-column: span 15;
  }
  .grid-col-xxl-16 {
    grid-column: span 16;
  }
  .grid-col-xxl-17 {
    grid-column: span 17;
  }
  .grid-col-xxl-18 {
    grid-column: span 18;
  }
  .grid-col-xxl-19 {
    grid-column: span 19;
  }
  .grid-col-xxl-20 {
    grid-column: span 20;
  }
  .grid-col-xxl-21 {
    grid-column: span 21;
  }
  .grid-col-xxl-22 {
    grid-column: span 22;
  }
  .grid-col-xxl-23 {
    grid-column: span 23;
  }
  .grid-col-xxl-24 {
    grid-column: span 24;
  }

  /* xxl offset classes */
  .grid-col-xxl-offset-1 {
    grid-column-start: 2;
  }
  .grid-col-xxl-offset-2 {
    grid-column-start: 3;
  }
  .grid-col-xxl-offset-3 {
    grid-column-start: 4;
  }
  .grid-col-xxl-offset-4 {
    grid-column-start: 5;
  }
  .grid-col-xxl-offset-5 {
    grid-column-start: 6;
  }
  .grid-col-xxl-offset-6 {
    grid-column-start: 7;
  }
  .grid-col-xxl-offset-7 {
    grid-column-start: 8;
  }
  .grid-col-xxl-offset-8 {
    grid-column-start: 9;
  }
  .grid-col-xxl-offset-9 {
    grid-column-start: 10;
  }
  .grid-col-xxl-offset-10 {
    grid-column-start: 11;
  }
  .grid-col-xxl-offset-11 {
    grid-column-start: 12;
  }
  .grid-col-xxl-offset-12 {
    grid-column-start: 13;
  }
  .grid-col-xxl-offset-13 {
    grid-column-start: 14;
  }
  .grid-col-xxl-offset-14 {
    grid-column-start: 15;
  }
  .grid-col-xxl-offset-15 {
    grid-column-start: 16;
  }
  .grid-col-xxl-offset-16 {
    grid-column-start: 17;
  }
  .grid-col-xxl-offset-17 {
    grid-column-start: 18;
  }
  .grid-col-xxl-offset-18 {
    grid-column-start: 19;
  }
  .grid-col-xxl-offset-19 {
    grid-column-start: 20;
  }
  .grid-col-xxl-offset-20 {
    grid-column-start: 21;
  }
  .grid-col-xxl-offset-21 {
    grid-column-start: 22;
  }
  .grid-col-xxl-offset-22 {
    grid-column-start: 23;
  }
  .grid-col-xxl-offset-23 {
    grid-column-start: 24;
  }

  /* xxl push classes */
  .grid-col-xxl-push-1 {
    grid-column-start: span 1 / span 1;
  }
  .grid-col-xxl-push-2 {
    grid-column-start: span 2 / span 2;
  }
  .grid-col-xxl-push-3 {
    grid-column-start: span 3 / span 3;
  }
  .grid-col-xxl-push-4 {
    grid-column-start: span 4 / span 4;
  }
  .grid-col-xxl-push-5 {
    grid-column-start: span 5 / span 5;
  }
  .grid-col-xxl-push-6 {
    grid-column-start: span 6 / span 6;
  }
  .grid-col-xxl-push-7 {
    grid-column-start: span 7 / span 7;
  }
  .grid-col-xxl-push-8 {
    grid-column-start: span 8 / span 8;
  }
  .grid-col-xxl-push-9 {
    grid-column-start: span 9 / span 9;
  }
  .grid-col-xxl-push-10 {
    grid-column-start: span 10 / span 10;
  }
  .grid-col-xxl-push-11 {
    grid-column-start: span 11 / span 11;
  }
  .grid-col-xxl-push-12 {
    grid-column-start: span 12 / span 12;
  }
  .grid-col-xxl-push-13 {
    grid-column-start: span 13 / span 13;
  }
  .grid-col-xxl-push-14 {
    grid-column-start: span 14 / span 14;
  }
  .grid-col-xxl-push-15 {
    grid-column-start: span 15 / span 15;
  }
  .grid-col-xxl-push-16 {
    grid-column-start: span 16 / span 16;
  }
  .grid-col-xxl-push-17 {
    grid-column-start: span 17 / span 17;
  }
  .grid-col-xxl-push-18 {
    grid-column-start: span 18 / span 18;
  }
  .grid-col-xxl-push-19 {
    grid-column-start: span 19 / span 19;
  }
  .grid-col-xxl-push-20 {
    grid-column-start: span 20 / span 20;
  }
  .grid-col-xxl-push-21 {
    grid-column-start: span 21 / span 21;
  }
  .grid-col-xxl-push-22 {
    grid-column-start: span 22 / span 22;
  }
  .grid-col-xxl-push-23 {
    grid-column-start: span 23 / span 23;
  }

  /* xxl pull classes */
  .grid-col-xxl-pull-1 {
    order: -1;
  }
  .grid-col-xxl-pull-2 {
    order: -2;
  }
  .grid-col-xxl-pull-3 {
    order: -3;
  }
  .grid-col-xxl-pull-4 {
    order: -4;
  }
  .grid-col-xxl-pull-5 {
    order: -5;
  }
  .grid-col-xxl-pull-6 {
    order: -6;
  }
  .grid-col-xxl-pull-7 {
    order: -7;
  }
  .grid-col-xxl-pull-8 {
    order: -8;
  }
  .grid-col-xxl-pull-9 {
    order: -9;
  }
  .grid-col-xxl-pull-10 {
    order: -10;
  }
  .grid-col-xxl-pull-11 {
    order: -11;
  }
  .grid-col-xxl-pull-12 {
    order: -12;
  }
  .grid-col-xxl-pull-13 {
    order: -13;
  }
  .grid-col-xxl-pull-14 {
    order: -14;
  }
  .grid-col-xxl-pull-15 {
    order: -15;
  }
  .grid-col-xxl-pull-16 {
    order: -16;
  }
  .grid-col-xxl-pull-17 {
    order: -17;
  }
  .grid-col-xxl-pull-18 {
    order: -18;
  }
  .grid-col-xxl-pull-19 {
    order: -19;
  }
  .grid-col-xxl-pull-20 {
    order: -20;
  }
  .grid-col-xxl-pull-21 {
    order: -21;
  }
  .grid-col-xxl-pull-22 {
    order: -22;
  }
  .grid-col-xxl-pull-23 {
    order: -23;
  }
}
</style>
