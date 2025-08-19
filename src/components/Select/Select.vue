<template>
  <div
    class="x-select"
    :class="[
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
      <div class="x-select__tags" v-if="multiple && selectedOptions.length > 0">
        <span
          v-for="(tag, index) in displayTags"
          :key="index"
          class="x-select__tag"
          :class="`x-tag--${tagType}`"
        >
          <span class="x-select__tag-text">{{ getLabel(tag) }}</span>
          <span class="x-select__tag-close" @click.stop="removeTag(tag)"
            >×</span
          >
        </span>
        <span
          v-if="collapseTags && selectedOptions.length > maxCollapseTags"
          class="x-select__tag x-tag--info"
        >
          <span class="x-select__tag-text"
            >+{{ selectedOptions.length - maxCollapseTags }}</span
          >
        </span>
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
        v-else-if="!multiple"
        class="x-select__selected"
        :class="{ 'is-placeholder': !selectedLabel }"
      >
        {{ selectedLabel || selectedOptions || placeholder }}
      </span>

      <span
        v-if="clearable && selectedOptions.length > 0"
        class="x-select__clear"
        @click.stop="clear"
        >×</span
      >

      <!-- <span class="x-select__suffix"> -->
      <!-- <i class="x-select__arrow" :class="{ 'is-reverse': visible }"> -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="rgb(100, 100, 100)"
        stroke-width="1.25"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-chevron-down-icon lucide-chevron-down"
      >
        <path d="m6 9 6 6 6-6" />
      </svg>
      <!-- </i> -->
      <!-- </span> -->
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

          <!-- <div v-else-if="filteredOptions.length === 0" class="x-select-dropdown__empty">
              <slot name="empty">{{ noDataText }}</slot>
            </div> -->

          <div v-else class="x-select-dropdown__list">
            <template v-if="$slots.default">
              <slot></slot>
            </template>
            <template v-else>
              <div
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
              </div>
            </template>
          </div>

          <slot name="footer" />
        </div>
      </div>
    </transition>
    <!-- </teleport> -->
  </div>
</template>

<script setup>
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
    type: [String, HTMLElement],
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
  if (!props.collapseTags) return selectedOptions.value;
  return selectedOptions.value.slice(0, props.maxCollapseTags);
});

const currentPlaceholder = computed(() => {
  if (props.multiple && selectedOptions.value.length > 0) return "";
  return props.placeholder;
});

const slotOptions = computed(() => {
  const options = [];
  const slots = getCurrentInstance()?.slots.default?.() || [];

  for (const slot of slots) {
    if (slot.type?.name === "XOption" || slot.type?.__name === "XOption") {
      options.push({
        value: slot.props?.value,
        label: slot.props?.label || slot.props?.value,
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
              options.push({
                value: c.props?.value,
                label: c.props?.label || c.props?.value,
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
  return option[props.props.label] || option.label || getValue(option);
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
  console.log("selectOption", option);

  const value = getValue(option);
  console.log("value", value);

  console.log("selectedOptions.value", selectedOptions.value);

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
    console.log("selectedOptions.value", selectedOptions.value);

    emit("update:modelValue", newValue);
    emit("change", newValue);
  } else {
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
  const newValue = selectedOptions.value.filter((v) => v !== tag);
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
  document.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
});

// Provide context for Option components
provide("selectContext", {
  modelValue: computed(() => props.modelValue),
  selectOption,
});

watch(
  () => props.modelValue,
  (newVal) => {
    console.log("newVal", newVal);
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
  const option = props.options.find(
    (opt) => getValue(opt) === selectedOptions.value[0]
  );
  return option ? getLabel(option) : "";
});

defineExpose({
  focus,
  blur,
  selectedLabel,
});
</script>

<style scoped>
.x-select {
  position: relative;
  display: inline-block;
  width: 100%;
  width: 300px;
}

.x-select__wrapper {
  position: relative;
  display: flex;
  align-items: center;
  min-height: 32px;
  padding: 0 8px;
  border: 1px solid var(--color-border);
  border-radius: 4px;
  background-color: var(--color-bg);
  cursor: pointer;
  transition: border-color 0.2s;
}

.x-select__wrapper:hover {
  border-color: var(--color-primary);
}

.x-select__wrapper.is-disabled {
  background-color: var(--color-bg-disabled);
  cursor: not-allowed;
  opacity: 0.6;
}

.x-select__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  align-items: center;
}

.x-select__tag {
  display: inline-flex;
  align-items: center;
  padding: 2px 6px;
  border-radius: 2px;
  font-size: 12px;
  line-height: 1.2;
}

.x-tag--info {
  background-color: var(--color-info);
  color: var(--color-info-text);
}

.x-select__tag-close {
  margin-left: 4px;
  cursor: pointer;
  font-weight: bold;
}

.x-select__input {
  flex: 1;
  min-width: 50px;
  border: none;
  outline: none;
  background: transparent;
  font-size: 14px;
  color: var(--color-text-primary);
}

.x-select__input:disabled {
  cursor: not-allowed;
  background: transparent;
}

.x-select__selected {
  flex: 1;
  font-size: 14px;
  color: var(--color-text-primary);
}

.x-select__selected.is-placeholder {
  color: var(--color-text-placeholder);
}

.x-select__clear {
  margin-left: 8px;
  cursor: pointer;
  color: var(--color-text-secondary);
  font-size: 16px;
  line-height: 1;
}

.x-select__clear:hover {
  color: var(--color-text-primary);
}

.x-select__suffix {
  /* margin-left: 8px; */
  color: var(--color-text-secondary);
}

.x-select__arrow {
  height: 50%;
  width: 50%;

  transition: transform 0.2s;
}

.x-select__arrow.is-reverse {
  transform: rotate(180deg);
}

.x-select-dropdown {
  position: absolute;
  top: 36px;
  left: 0;
  min-width: 100%;
  margin-top: 4px;
  border: 1px solid var(--color-border);
  border-radius: 4px;
  z-index: 1000;
  background-color: #fff;

  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}

.x-select-dropdown__content {
  max-height: 274px;
  overflow-y: auto;
}

.x-select-dropdown__list {
  padding: 4px 0;
}

.x-select-dropdown__item {
  padding: 8px 12px;
  cursor: pointer;
  font-size: 14px;
  color: var(--color-text-primary);
  transition: background-color 0.2s;
}

.x-select-dropdown__item:hover,
.x-select-dropdown__item.is-hover {
  background-color: var(--color-hover);
}

.x-select-dropdown__item.is-selected {
  background-color: var(--color-primary);
  color: var(--color-primary-text);
}

.x-select-dropdown__item.is-disabled {
  cursor: not-allowed;
  color: var(--color-text-disabled);
}

.x-select-dropdown__loading,
.x-select-dropdown__empty {
  padding: 20px;
  text-align: center;
  color: var(--color-text-secondary);
  font-size: 14px;
}

.x-select--small .x-select__wrapper {
  min-height: 28px;
  font-size: 12px;
}

.x-select--large .x-select__wrapper {
  min-height: 36px;
  font-size: 16px;
}

.x-select-dropdown-enter-active,
.x-select-dropdown-leave-active {
  transition: opacity 0.2s, transform 0.2s;
}

.x-select-dropdown-enter-from,
.x-select-dropdown-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.opacity-50 {
  opacity: 0.5;
}
</style>
