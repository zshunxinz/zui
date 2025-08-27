<template>
  <div
    :class="[
      'x-input',
      size ? `x-input--${size}` : '',
      labelPosition ? `x-input--label-${labelPosition}` : '',
      $attrs.class,
    ]"
    :style="[{ width }, { height }, $attrs.style]"
  >
    <label v-if="label" class="x-input__label" :for="id">{{ label }}</label>
    <div
      class="x-input__wrapper"
      :class="{ 'is-disabled': disabled, 'is-clearable': clearable }"
    >
      <span v-if="prefixIcon" class="x-input__prefix x-input__icon">{{
        prefixIcon
      }}</span>
      <textarea
        v-if="type === 'textarea'"
        :id="id"
        :value="inputValue"
        :placeholder="placeholder"
        :disabled="disabled"
        :maxlength="maxlength"
        :minlength="minlength"
        :rows="autosize ? undefined : rows"
        :style="autosizeStyle"
        :resize="resize"
        :autocomplete="autocomplete"
        :name="name"
        :readonly="readonly"
        :max="max"
        :min="min"
        :step="step"
        :autofocus="autofocus"
        :form="form"
        :tabindex="tabindex"
        class="x-input__inner"
        @input="handleInput"
        @mouseenter="handleMouseEnter"
        @mouseleave="handleMouseLeave"
        @click="handleClick"
        @keydown.enter="handleEnter"
        @focus="handleFocus"
        @blur="handleBlur"
        ref="textareaRef"
      ></textarea>
      <input
        v-else
        :id="id"
        :value="inputValue"
        :type="showPassword && type === 'password' ? 'text' : type"
        :placeholder="placeholder"
        :disabled="disabled"
        :maxlength="maxlength"
        :minlength="minlength"
        :autocomplete="autocomplete"
        :name="name"
        :readonly="readonly"
        :max="max"
        :min="min"
        :step="step"
        :autofocus="autofocus"
        :form="form"
        :tabindex="tabindex"
        class="x-input__inner"
        @input="handleInput"
        @mouseenter="handleMouseEnter"
        @mouseleave="handleMouseLeave"
        @click="handleClick"
        @keydown.enter="handleEnter"
        @focus="handleFocus"
        @blur="handleBlur"
      />
      <span v-if="suffixIcon" class="x-input__suffix x-input__icon">{{
        suffixIcon
      }}</span>
      <button
        v-if="showPassword && type === 'password'"
        class="x-input__suffix x-input__password"
        @click="showPassword = !showPassword"
      >
        {{ showPassword ? "Hide" : "Show" }}
      </button>
      <button
        v-if="clearable && modelValue && !disabled"
        class="x-input__suffix x-input__clear"
        @click="clear"
      >
        ×
      </button>
    </div>
    <div
      v-if="showWordLimit && (type === 'text' || type === 'textarea')"
      class="x-input__word-limit"
    >
      {{ modelValue.length }}/{{ maxlength }}
    </div>
  </div>
</template>

<script setup>
import { ref, watch, computed, onMounted, onUnmounted } from "vue";

const props = defineProps({
  prefixIcon: String,
  suffixIcon: String,
  rows: { type: Number, default: 2 },
  autosize: { type: [Boolean, Object], default: false },
  autocomplete: { type: String, default: "off" },
  "auto-complete": { type: String, default: "off" },
  name: String,
  readonly: { type: Boolean, default: false },
  max: [String, Number],
  min: [String, Number],
  step: [String, Number],
  resize: String,
  autofocus: { type: Boolean, default: false },
  form: String,
  tabindex: String,
  "validate-event": { type: Boolean, default: true },
  type: {
    type: String,
    default: "text",
    validator: (value) =>
      [
        "text",
        "textarea",
        "password",
        "number",
        "email",
        "tel",
        "url",
      ].includes(value),
  },
  modelValue: {
    type: [String, Number],
    default: "",
  },
  label: {
    type: String,
    default: "",
  },
  labelPosition: {
    type: String,
    default: "top",
    validator: (value) => ["top", "left", "center", "right"].includes(value),
  },
  maxlength: Number,
  minlength: Number,
  showWordLimit: {
    type: Boolean,
    default: false,
  },
  placeholder: String,
  clearable: {
    type: Boolean,
    default: false,
  },
  showPassword: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    validator: (value) => ["medium", "small", "mini"].includes(value),
  },
  width: {
    type: String,
    default: "300px",
  },
  height: {
    type: String,
    default: "30px",
  },
  debounce: {
    type: Number,
    default: 0,
  },
});

const emit = defineEmits([
  "update:modelValue",
  "input",
  "clear",
  "mouse-enter",
  "mouse-leave",
  "click",
  "enter",
  "debounce-input",
  "focus",
  "blur",
]);

let debounceTimer = null;
const debounceInput = (value) => {
  if (debounceTimer) clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    emit("debounce-input", value);
  }, props.debounce);
};
const showPassword = ref(props.showPassword);
const id = `x-input-${Math.random().toString(36).slice(-8)}`;
const inputValue = ref(props.modelValue);
const autosizeStyle = computed(() => {
  if (typeof props.autosize === "object") {
    return {
      minHeight: `${props.autosize.minRows || 2}em`,
      maxHeight: `${props.autosize.maxRows || 6}em`,
    };
  } else if (props.autosize) {
    return { minHeight: "2em", maxHeight: "6em" };
  }
  return {};
});

watch(
  () => props.showPassword,
  (val) => {
    showPassword.value = val;
  }
);

watch(
  () => props.modelValue,
  (val) => {
    inputValue.value = val;
  },
  { immediate: true }
);

const textareaRef = ref(null);

const adjustTextareaHeight = () => {
  if (textareaRef.value && props.autosize) {
    // 保存当前内容
    const currentValue = textareaRef.value.value;
    // 重置高度并强制重绘
    textareaRef.value.style.height = "auto";
    textareaRef.value.value = "";
    textareaRef.value.value = currentValue;
    // 设置最小高度
    const minHeight = `${props.rows || 2}em`;
    // 获取计算后的高度
    const computedHeight = `${textareaRef.value.scrollHeight}px`;
    // 应用样式
    textareaRef.value.style.minHeight = minHeight;
    textareaRef.value.style.height = computedHeight;
  }
};

const handleInput = (e) => {
  inputValue.value = e.target.value;
  emit("update:modelValue", e.target.value);
  emit("input", e.target.value);
  if (props["validate-event"]) {
    emit("validate-event", e.target.value);
  }
  if (props.debounce > 0) {
    debounceInput(e.target.value);
  }
  if (props.autosize && e.target.tagName === "TEXTAREA") {
    adjustTextareaHeight();
  }
};

onMounted(() => {
  adjustTextareaHeight();
});

onUnmounted(() => {
  if (debounceTimer) {
    clearTimeout(debounceTimer);
    debounceTimer = null;
  }
});

const clear = () => {
  emit("update:modelValue", "");
  emit("clear");
};

const handleMouseEnter = () => {
  emit("mouse-enter");
};

const handleMouseLeave = () => {
  emit("mouse-leave");
};

const handleClick = () => {
  emit("click");
};

const handleEnter = () => {
  emit("enter", inputValue.value);
};

const handleFocus = (e) => {
  emit("focus", e);
};

const handleBlur = (e) => {
  emit("blur", e);
};
</script>

<style scoped>
.x-input {
  display: inline-flex;
  flex-direction: column;
  width: 100%;
}

.x-input--label-left {
  flex-direction: row;
  align-items: center;
}

.x-input--label-left .x-input__label {
  margin-bottom: 0;
  margin-right: 8px;
  line-height: 100%;
  white-space: nowrap;
}

.x-input--label-center {
  flex-direction: column;
  align-items: center;
}

.x-input--label-center .x-input__label {
  text-align: center;
  margin-bottom: 4px;
}

.x-input--label-right {
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
}

.x-input--label-right .x-input__label {
  order: 1;
  margin-bottom: 0;
  margin-left: 12px;
  white-space: nowrap;
}

.x-input--label-right .x-input__wrapper {
  order: 0;
}

.x-input__label {
  display: block;
  margin-bottom: 4px;
  font-size: 14px;
  color: var(--color-text-primary);
}

.x-input__wrapper {
  position: relative;
  display: inline-flex;
  width: 100%;
  height: v-bind("type === 'textarea' && autosize ? 'auto' : height");
  align-items: flex-start;
}

.x-input__inner {
  flex: 1;
  min-width: 0;
  padding: 0.25rem 1rem;
  padding-left: v-bind('prefixIcon ? "36px" : "12px"');
  padding-right: v-bind(
    'suffixIcon || showPassword || clearable ? "36px" : "12px"'
  );
  border: 1px solid var(--color-border-1);
  border-radius: var(--border-radius-0);
  font-size: 14px;
  line-height: 1.5;
  color: var(--color-text-primary);
  background-color: var(--color-bg);
  transition: border-color 0.2s;
}

.x-input__prefix {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--color-text-1);
}

.x-input__icon {
  font-size: 16px;
  width: 20px;
  text-align: center;
}

.x-input__inner:focus {
  outline: none;
  border-color: var(--color-default);
}

.x-input__inner:disabled {
  background-color: var(--color-bg-disabled);
  cursor: not-allowed;
}

.x-input__suffix {
  position: absolute;
  right: 5px;
  top: 50%;
  transform: translateY(-50%);
  padding: 0 5px;
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 14px;
  color: var(--color-text-1);
}

.x-input__suffix:hover {
  color: var(--color-text-primary);
}

.x-input__word-limit {
  margin-top: 0px;
  font-size: 12px;
  color: var(--color-text-1);
  text-align: right;
}

.x-input--small .x-input__inner {
  padding: 5px 10px;
  font-size: 12px;
}

.x-input--mini .x-input__inner {
  padding: 3px 8px;
  font-size: 12px;
}

.is-disabled .x-input__inner {
  border-color: var(--color-border-disabled);
  color: var(--color-text-disabled);
}
</style>
