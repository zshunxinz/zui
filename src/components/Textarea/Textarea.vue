<template>
  <div
    :class="[
      'x-textarea',
      size ? `x-textarea--${size}` : '',
      labelPosition ? `x-textarea--label-${labelPosition}` : '',
      $attrs.class,
    ]"
  >
    <label v-if="label" class="x-textarea__label" :for="id">{{ label }}</label>
    <div
      class="x-textarea__wrapper"
      :class="[{ 'is-disabled': disabled }, $attrs.class]"
      :style="[{ width }, $attrs.style]"
    >
      <textarea
        ref="textareaRef"
        :id="id"
        :value="inputValue"
        :placeholder="placeholder"
        :disabled="disabled"
        :maxlength="maxlength"
        :minlength="minlength"
        :autocomplete="autocomplete"
        :name="name"
        :readonly="readonly"
        :rows="rows"
        :style="[autosizeStyle, { resize: resize }]"
        class="x-textarea__inner"
        @input="handleInput"
        @mouseenter="handleMouseEnter"
        @mouseleave="handleMouseLeave"
        @click="handleClick"
        @keydown.enter="handleEnter"
        @focus="handleFocus"
        @blur="handleBlur"
      />
    </div>
    <div v-if="showWordLimit" class="x-textarea__word-limit">
      {{ modelValue.length }}/{{ maxlength }}
    </div>
  </div>
</template>

<script setup>
import { ref, watch, computed, onMounted, onUnmounted, nextTick } from 'vue';

const props = defineProps({
  rows: { type: Number, default: 2 },
  autosize: { type: [Boolean, Object], default: false },
  autocomplete: { type: String, default: 'off' },
  'auto-complete': { type: String, default: 'off' },
  name: String,
  readonly: { type: Boolean, default: false },
  resize: {
    type: String,
    validator: value =>
      ['none', 'both', 'horizontal', 'vertical'].includes(value),
    default: 'vertical',
  },
  autofocus: { type: Boolean, default: false },
  form: String,
  tabindex: String,
  'validate-event': { type: Boolean, default: true },
  modelValue: {
    type: [String, Number],
    default: '',
  },
  label: {
    type: String,
    default: '',
  },
  labelPosition: {
    type: String,
    default: 'top',
    validator: value => ['top', 'left', 'center', 'right'].includes(value),
  },
  maxlength: Number,
  minlength: Number,
  showWordLimit: {
    type: Boolean,
    default: false,
  },
  placeholder: String,
  disabled: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    validator: value => ['small', 'medium', 'large'].includes(value),
    default: 'medium',
  },
  width: {
    type: String,
    default: '100%',
  },
  debounce: {
    type: Number,
    default: 0,
  },
});

const emit = defineEmits([
  'update:modelValue',
  'input',
  'mouse-enter',
  'mouse-leave',
  'click',
  'enter',
  'debounce-input',
  'focus',
  'blur',
]);

let debounceTimer = null;
const debounceInput = value => {
  if (debounceTimer) clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    emit('debounce-input', value);
  }, props.debounce);
};

const id = `x-textarea-${Math.random().toString(36).slice(-8)}`;
const inputValue = ref(props.modelValue);
const textareaRef = ref(null);

const autosizeStyle = computed(() => {
  if (typeof props.autosize === 'object') {
    return {
      minHeight:
        typeof props.autosize.minRows === 'number'
          ? `${props.autosize.minRows * 20}px`
          : undefined,
      maxHeight:
        typeof props.autosize.maxRows === 'number'
          ? `${props.autosize.maxRows * 20}px`
          : undefined,
    };
  }
  return {};
});

watch(
  () => props.modelValue,
  val => {
    inputValue.value = val;
  },
  { immediate: true }
);

const adjustTextareaHeight = () => {
  if (textareaRef.value && props.autosize) {
    const textarea = textareaRef.value;

    // 重置高度为auto以获取正确的scrollHeight
    textarea.style.height = 'auto';

    // 获取实际内容高度
    const scrollHeight = textarea.scrollHeight;

    // 计算行高
    const lineHeight = parseInt(getComputedStyle(textarea).lineHeight) || 20;

    // 计算最小和最大高度
    let minHeight = 0;
    let maxHeight = Infinity;

    if (typeof props.autosize === 'object') {
      // 对象形式的autosize
      minHeight = (props.autosize.minRows || props.rows || 2) * lineHeight;
      maxHeight = props.autosize.maxRows
        ? props.autosize.maxRows * lineHeight
        : Infinity;
    } else {
      // 布尔形式的autosize，使用rows作为最小高度
      minHeight = props.rows * lineHeight;
    }

    // 计算最终高度：以rows为基准，内容超过时自动拓展
    // 如果内容为空，使用minHeight（基于rows）
    let newHeight =
      textarea.value.trim() === ''
        ? minHeight
        : Math.max(scrollHeight, minHeight);
    if (maxHeight !== Infinity) {
      newHeight = Math.min(newHeight, maxHeight);
    }

    // 应用新高度
    textarea.style.height = `${newHeight}px`;
  }
};

const handleInput = e => {
  inputValue.value = e.target.value;
  emit('update:modelValue', e.target.value);
  emit('input', e.target.value);
  if (props['validate-event']) {
    emit('validate-event', e.target.value);
  }
  if (props.debounce > 0) {
    debounceInput(e.target.value);
  }
  if (props.autosize) {
    adjustTextareaHeight();
  }
};

onMounted(() => {
  nextTick(() => {
    if (textareaRef.value) {
      const textarea = textareaRef.value;

      // 获取计算后的样式
      const computedStyle = getComputedStyle(textarea);
      const lineHeight =
        parseInt(computedStyle.lineHeight) ||
        parseInt(computedStyle.fontSize) * 1.5 ||
        24;

      // 计算期望高度（包括padding）
      const paddingTop = parseInt(computedStyle.paddingTop) || 8;
      const paddingBottom = parseInt(computedStyle.paddingBottom) || 8;
      const expectedHeight =
        props.rows * lineHeight + paddingTop + paddingBottom;

      // 设置初始高度
      textarea.style.height = `${expectedHeight}px`;

      // 如果启用了autosize，在设置初始高度后再调整
      if (props.autosize) {
        setTimeout(() => {
          adjustTextareaHeight();
        }, 0);
      } else {
        // 不启用autosize时，确保rows属性生效
        textarea.setAttribute('rows', props.rows);
      }
    }
  });
});

onUnmounted(() => {
  if (debounceTimer) {
    clearTimeout(debounceTimer);
    debounceTimer = null;
  }
});

const handleMouseEnter = () => {
  emit('mouse-enter');
};

const handleMouseLeave = () => {
  emit('mouse-leave');
};

const handleClick = () => {
  emit('click');
};

const handleEnter = () => {
  emit('enter', inputValue.value);
};

const handleFocus = e => {
  emit('focus', e);
};

const handleBlur = e => {
  emit('blur', e);
};
</script>

<style scoped>
.z-textarea {
  all: unset;
  display: inline-flex;
  flex-direction: column;
  width: var(--width-1);
  min-width: var(--min-width-1);
  font-family: var(--font-family);
}

.z-textarea--small {
  font-size: var(--font-size-0);
  min-height: var(--height-0);
}

.z-textarea--medium {
  font-size: var(--font-size-1);
  min-height: var(--height-1);
}

.z-textarea--large {
  font-size: var(--font-size-2);
  min-height: var(--height-2);
}

.z-textarea--label-left {
  flex-direction: row;
  align-items: flex-start;
}

.z-textarea--label-left .z-textarea__label {
  margin-bottom: 0;
  margin-right: 8px;
  line-height: 100%;
  white-space: nowrap;
  margin-top: 8px;
}

.z-textarea--label-center {
  flex-direction: column;
  align-items: center;
}

.z-textarea--label-center .z-textarea__label {
  text-align: center;
  margin-bottom: 4px;
}

.z-textarea--label-right {
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
}

.z-textarea--label-right .z-textarea__label {
  order: 1;
  margin-bottom: 0;
  margin-left: 12px;
  white-space: nowrap;
  margin-top: 8px;
}

.z-textarea--label-right .z-textarea__wrapper {
  order: 0;
}

.z-textarea__label {
  display: block;
  margin-bottom: 4px;
  font-size: var(--font-size-1);
  color: var(--color-text-primary);
}

.z-textarea__wrapper {
  /* position: relative; */
  display: flex;
  width: 100%;
  /* min-height: var(--height-3); */
}

.z-textarea__inner {
  flex: 1;
  min-width: 0;
  /* padding: var(--padding-1); */
  border: 1px solid var(--color-border-1);
  box-sizing: border-box;
  border-radius: var(--border-radius-0);
  font-size: var(--font-size-1);
  color: var(--color-text-primary);
  background-color: var(--color-bg);
  transition: border-color 0.2s;
  font-family: var(--font-family);
  line-height: 100%;
  resize: vertical;
  min-height: auto; /* 移除最小高度限制，让rows属性生效 */
}

.z-textarea__inner:focus {
  outline: none;
  outline: 1px solid var(--color-default);
}

.z-textarea__inner:disabled {
  background-color: var(--color-disabled-text);
  cursor: not-allowed;
}

.z-textarea--small .z-textarea__inner {
  padding: var(--padding-1);
  font-size: var(--font-size-0);
  min-height: var(--height-1);
}

.z-textarea--medium .z-textarea__inner {
  padding: var(--padding-2);
  font-size: var(--font-size-1);
  min-height: var(--height-2);
}

.z-textarea--large .z-textarea__inner {
  padding: var(--padding-3);
  font-size: var(--font-size-2);
  min-height: var(--height-3);
}

.z-textarea__word-limit {
  margin-top: 4px;
  font-size: 12px;
  color: var(--color-text-1);
  text-align: right;
}
</style>
