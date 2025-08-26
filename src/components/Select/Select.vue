<template>
  <div
    class="x-select"
    :class="[
      `x-select--${type}`,
      size ? `x-select--${size}` : '',
      {
        'is-disabled': disabled,
        'is-multiple': multiple,
        'is-clearable': clearable,
        'is-filterable': filterable,
        'is-loading': loading,
      },
      $attrs.class,
    ]"
    :style="$attrs.style"
  >
    <div class="x-select__wrapper" @click="toggleDropdown" ref="selectWrapper">
      <div class="x-select__tags" v-if="multiple">
        <div
          v-for="(tag, index) in displayTags"
          :key="index"
          :class="['x-select__tag', 'x-tag--info']"
        >
          <div class="x-select__tag-text">
            {{ getLabel(tag) }}
          </div>
          <span class="x-select__tag-close" @click.stop="removeTag(tag)">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              :stroke="`var(--color-${type}-text-1)`"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-x-icon lucide-x"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </span>
        </div>
        <div
          v-if="multiple && displayTags.length == 0"
          class="x-select__selected"
          :class="{ 'is-placeholder': !selectedLabel }"
        >
          {{ selectedLabel || placeholder }}
        </div>
        <span
          v-if="collapseTags && selectedOptions.length > maxCollapseTags"
          class="x-select__tag x-tag--info"
        >
          <span class="x-select__tag-text"
            >+{{ selectedOptions.length - maxCollapseTags }}</span
          >
        </span>
      </div>
      <div
        v-if="!multiple"
        class="x-select__selected"
        :class="{ 'is-placeholder': !selectedLabel }"
      >
        {{ selectedLabel || placeholder }}
      </div>
      <input
        v-if="filterable"
        type="text"
        class="x-select__input"
        :placeholder="currentPlaceholder"
        v-model="searchQuery"
        @input="handleFilter"
        @focus="handleFocus"
        @blur="handleBlur"
        :disabled="disabled"
        :readonly="!filterable || (multiple && !allowCreate)"
        ref="inputRef"
      />

      <span
        v-if="clearable && selectedOptions.length > 0"
        class="x-select__clear"
        @click.stop="clear"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          :stroke="`var(--color-${type})`"
          stroke-width="1"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-x-icon lucide-x"
        >
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </svg>
      </span>

      <!-- <div class="x-select__suffix"> -->
      <!-- <i class="x-select__arrow" :class="{ 'is-reverse': visible }"> -->
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          :stroke="`var(--color-${type})`"
          stroke-width="0.8"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-chevron-down-icon lucide-chevron-down"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </div>

      <!-- </i> -->
      <!-- </div> -->
    </div>

    <!-- <teleport to="body" v-if="teleported"> -->
    <transition name="x-select-dropdown">
      <div
        v-show="visible"
        class="x-select-dropdown"
        :class="[popperClass, `x-select-dropdown--${effect}`]"
        :style="dropdownStyle"
        ref="dropdownRef"
      >
        <div class="x-select-dropdown__content">
          <slot name="header" />

          <div v-if="loading" class="x-select-dropdown__loading">
            <slot name="loading">{{ loadingText }}</slot>
          </div>

          <div
            v-else-if="filteredOptions.length > 0"
            class="x-select-dropdown__list"
          >
            <template v-if="$slots.default">
              <slot></slot>
            </template>
            <template v-else>
              <Option
                v-for="option in filteredOptions"
                :key="option.value"
                :label="option.label"
                :value="option.value"
                :disabled="option.disabled"
                :icon-position="iconPosition"
              ></Option>
              <!-- <div
                v-for="(option, index) in filteredOptions"
                :key="getValue(option) + '-' + index"
                class="x-select-dropdown__item"
                :class="{
                  'is-selected': isSelected(option),
                  'is-disabled': getDisabled(option),
                  'is-hover': hoverIndex === index,
                }"
                @click="selectOption(option)"
                @mouseenter="hoverIndex = index"
              >
                <slot
                  name="default"
                  :option="option"
                  :selected="isSelected(option)"
                  :disabled="getDisabled(option)"
                >
                  {{ getLabel(option) }}
                </slot>
              </div> -->
            </template>
          </div>
          <div
            v-else-if="filteredOptions.length === 0"
            class="x-select-dropdown__empty"
          >
            <slot name="empty">{{ noDataText }}</slot>
          </div>
          <slot name="footer" />
        </div>
      </div>
    </transition>
    <!-- </teleport> -->
  </div>
</template>

<script setup>
import Option from "./Option.vue";
import {
  ref,
  computed,
  nextTick,
  onMounted,
  onUnmounted,
  getCurrentInstance,
  provide,
  watch,
} from "vue";

const props = defineProps({
  modelValue: {
    type: [String, Number, Boolean, Object, Array],
    default: undefined,
  },
  multiple: {
    type: Boolean,
    default: false,
  },
  options: {
    type: Array,
    default: () => [],
  },
  props: {
    type: Object,
    default: () => ({
      value: "value",
      label: "label",
      disabled: "disabled",
    }),
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  valueKey: {
    type: String,
    default: "value",
  },
  type: {
    type: String,
    default: "default",
    validator: (val) =>
      ["default", "primary", "success", "warning", "danger", "info"].includes(
        val
      ),
  },
  size: {
    type: String,
    validator: (val) => ["small", "medium", "large"].includes(val),
  },
  clearable: {
    type: Boolean,
    default: false,
  },
  collapseTags: {
    type: Boolean,
    default: false,
  },
  collapseTagsTooltip: {
    type: Boolean,
    default: false,
  },
  multipleLimit: {
    type: Number,
    default: 0,
  },
  id: {
    type: String,
    default: "",
  },
  name: {
    type: String,
    default: "",
  },
  effect: {
    type: String,
    default: "light",
    validator: (val) => ["dark", "light"].includes(val),
  },
  autocomplete: {
    type: String,
    default: "off",
  },
  placeholder: {
    type: String,
    default: "Select",
  },
  filterable: {
    type: Boolean,
    default: false,
  },
  allowCreate: {
    type: Boolean,
    default: false,
  },
  filterMethod: {
    type: Function,
    default: null,
  },
  remote: {
    type: Boolean,
    default: false,
  },
  remoteMethod: {
    type: Function,
    default: null,
  },
  remoteShowSuffix: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  loadingText: {
    type: String,
    default: "Loading...",
  },
  noMatchText: {
    type: String,
    default: "No matching data",
  },
  noDataText: {
    type: String,
    default: "No data",
  },
  popperClass: {
    type: String,
    default: "",
  },
  reserveKeyword: {
    type: Boolean,
    default: true,
  },
  defaultFirstOption: {
    type: Boolean,
    default: false,
  },
  teleported: {
    type: Boolean,
    default: true,
  },
  appendTo: {
    type: String,
    default: "body",
  },
  persistent: {
    type: Boolean,
    default: true,
  },
  automaticDropdown: {
    type: Boolean,
    default: false,
  },
  clearIcon: {
    type: [String, Object],
    default: "×",
  },
  fitInputWidth: {
    type: Boolean,
    default: false,
  },
  suffixIcon: {
    type: [String, Object],
    default: "▼",
  },
  tagType: {
    type: String,
    default: "info",
  },
  tagEffect: {
    type: String,
    default: "light",
  },
  validateEvent: {
    type: Boolean,
    default: true,
  },
  offset: {
    type: Number,
    default: 12,
  },
  showArrow: {
    type: Boolean,
    default: true,
  },
  placement: {
    type: String,
    default: "bottom-start",
  },
  fallbackPlacements: {
    type: Array,
    default: () => ["bottom-start", "top-start", "right", "left"],
  },
  maxCollapseTags: {
    type: Number,
    default: 1,
  },
  popperOptions: {
    type: Object,
    default: () => ({}),
  },
  ariaLabel: {
    type: String,
    default: "",
  },
  emptyValues: {
    type: Array,
    default: () => [undefined, null, ""],
  },
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: "",
  },
  suffixTransition: {
    type: Boolean,
    default: true,
  },
  tabindex: {
    type: [String, Number],
    default: "0",
  },
  iconPosition: {
    type: String,
    default: "left",
    validator: (val) => ["left", "right"].includes(val),
  },
});

const emit = defineEmits([
  "update:modelValue",
  "change",
  "visible-change",
  "remove-tag",
  "clear",
  "blur",
  "focus",
  "popup-scroll",
]);

const visible = ref(false);
const searchQuery = ref("");
const hoverIndex = ref(-1);
const inputRef = ref(null);
const selectWrapper = ref(null);
const dropdownRef = ref(null);
const selectData = ref();
const selectDataList = ref([]);

const selectedOptions = computed(() => {
  if (!props.modelValue) return [];
  if (props.multiple) {
    return Array.isArray(props.modelValue)
      ? props.modelValue
      : [props.modelValue];
  }
  return [props.modelValue];
});

const displayTags = computed(() => {
  const selectedLabels = selectedOptions.value.map((value) => {
    // 从有效选项中查找对应的label
    const option = effectiveOptions.value.find(
      (opt) => getValue(opt) === value
    );
    return option || { value, label: value };
  });

  if (!props.collapseTags) return selectedLabels;
  return selectedLabels.slice(0, props.maxCollapseTags);
});

const currentPlaceholder = computed(() => {
  if (props.multiple && selectedOptions.value.length > 0) return "";
  return props.placeholder;
});

const slotOptions = computed(() => {
  const options = [];
  const slots = getCurrentInstance()?.slots.default?.() || [];

  // 提取插槽内容作为标签
  const getSlotLabel = (slot) => {
    if (slot.children && typeof slot.children === "function") {
      const slotContent = slot.children();
      if (Array.isArray(slotContent) && slotContent.length > 0) {
        // 尝试获取第一个子节点的文本内容
        if (typeof slotContent[0] === "string") {
          return slotContent[0].trim();
        }
        // 处理嵌套结构
        if (
          slotContent[0].children &&
          typeof slotContent[0].children === "string"
        ) {
          return slotContent[0].children.trim();
        }
      }
    }
    return null;
  };

  for (const slot of slots) {
    if (
      slot.type?.name === "XOption" ||
      slot.type?.__name === "XOption" ||
      slot.type?.__name === "Option"
    ) {
      const slotLabel = getSlotLabel(slot);
      options.push({
        value: slot.props?.value,
        label: slot.props?.label || slotLabel || slot.props?.value,
        disabled: slot.props?.disabled || false,
      });
    } else if (slot.type === "template" && slot.children) {
      // Handle OptionGroup
      const children = Array.isArray(slot.children)
        ? slot.children
        : [slot.children];
      for (const child of children) {
        if (Array.isArray(child)) {
          for (const c of child) {
            if (c.type?.name === "XOption" || c.type?.__name === "XOption") {
              const slotLabel = getSlotLabel(c);
              options.push({
                value: c.props?.value,
                label: c.props?.label || slotLabel || c.props?.value,
                disabled: c.props?.disabled || false,
              });
            }
          }
        }
      }
    }
  }

  return options;
});

const effectiveOptions = computed(() => {
  const options =
    slotOptions.value.length > 0 ? slotOptions.value : props.options;
  return options;
});

const filteredOptions = computed(() => {
  if (!searchQuery.value) return effectiveOptions.value;

  if (props.filterMethod) {
    return props.filterMethod(searchQuery.value, effectiveOptions.value);
  }

  if (props.remote) {
    return effectiveOptions.value;
  }

  return effectiveOptions.value.filter((option) => {
    const label = getLabel(option);
    return label.toLowerCase().includes(searchQuery.value.toLowerCase());
  });
});

const getValue = (option) => {
  return option[props.props.value] || option.value || option;
};

const getLabel = (option) => {
  if (option) {
    return option[props.props.label] || option.label || getValue(option);
  }
};

const getDisabled = (option) => {
  return option[props.props.disabled] || option.disabled || false;
};

const isSelected = (option) => {
  const value = getValue(option);
  return selectedOptions.value.includes(value);
};

const toggleDropdown = () => {
  if (props.disabled) return;
  visible.value = !visible.value;
  emit("visible-change", visible.value);
};

const selectOption = (option) => {
  if (getDisabled(option)) return;

  console.log(option);

  const value = getValue(option);

  if (props.multiple) {
    const newValue = [...selectedOptions.value];
    const index = newValue.indexOf(value);
    if (index > -1) {
      newValue.splice(index, 1);
    } else if (
      props.multipleLimit === 0 ||
      newValue.length < props.multipleLimit
    ) {
      newValue.push(value);
    }
    emit("update:modelValue", newValue);
    emit("change", newValue);
  } else {
    selectData.value = option;
    emit("update:modelValue", value);
    emit("change", value);
    visible.value = false;
    emit("visible-change", false);
  }

  if (!props.reserveKeyword) {
    searchQuery.value = "";
  }
};

const removeTag = (tag) => {
  const newValue = selectedOptions.value.filter((v) => v !== tag.value);
  emit("update:modelValue", newValue);
  emit("remove-tag", tag);
  emit("change", newValue);
};

const clear = () => {
  emit("update:modelValue", props.multiple ? [] : "");
  emit("clear");
  emit("change", props.multiple ? [] : "");
  searchQuery.value = "";
};

const handleFilter = () => {
  if (props.remote && props.remoteMethod) {
    props.remoteMethod(searchQuery.value);
  }
};

const handleFocus = () => {
  emit("focus");
  if (props.automaticDropdown && !visible.value) {
    visible.value = true;
    emit("visible-change", true);
  }
};

const handleBlur = () => {
  emit("blur");
};

const handleClickOutside = (event) => {
  if (
    selectWrapper.value &&
    !selectWrapper.value.contains(event.target) &&
    dropdownRef.value &&
    !dropdownRef.value.contains(event.target)
  ) {
    visible.value = false;
    emit("visible-change", false);
  }
};

const dropdownStyle = computed(() => {
  if (!props.fitInputWidth || !selectWrapper.value) return {};
  return {
    width: `${selectWrapper.value.offsetWidth}px`,
  };
});

onMounted(() => {
  if (typeof document !== "undefined") {
    document.addEventListener("click", handleClickOutside);
  }
});

onUnmounted(() => {
  if (typeof document !== "undefined") {
    document.removeEventListener("click", handleClickOutside);
  }
});

// Provide context for Option components
provide("selectContext", {
  modelValue: computed(() => props.modelValue),
  multiple: computed(() => props.multiple),
  type: computed(() => props.type),
  iconPosition: computed(() => props.iconPosition),
  selectOption,
  getValue,
  getLabel,
  getDisabled,
  isSelected,
});

watch(
  () => props.modelValue,
  (newVal) => {
    if (!props.reserveKeyword) {
      searchQuery.value = "";
    }
  }
);

// Expose methods
const focus = () => {
  inputRef.value?.focus();
};

const blur = () => {
  inputRef.value?.blur();
};

let selectedLabel = computed(() => {
  if (selectedOptions.value.length === 0) return "";

  // 对于单选模式，从有效选项中查找对应的label
  const currentValue = selectedOptions.value[0];

  // 优先检查selectData是否有值（这是用户点击选项时直接传递的完整选项对象）
  if (selectData.value && selectData.value.label) {
    return selectData.value.label;
  }

  // 其次从有效选项中查找
  const option = effectiveOptions.value.find(
    (opt) => getValue(opt) === currentValue
  );

  if (option) {
    return getLabel(option);
  }

  // 如果找不到对应的选项，返回当前值作为fallback
  return currentValue;
});

defineExpose({
  focus,
  blur,
  selectedLabel,
});
</script>

<style scoped>
@import url("./index.css");
</style>
