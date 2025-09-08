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
    <div
      class="x-select__wrapper"
      @click="toggleDropdown"
      ref="selectWrapper"
      :style="[{ width }, { height }, $attrs.style]"
    >
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
        v-if="!multiple && !filterable"
        class="x-select__selected"
        :class="{ 'is-placeholder': !selectedLabel }"
      >
        {{ selectedLabel || placeholder }}
      </div>
      <input
        v-if="filterable"
        type="text"
        class="x-select__input"
        :placeholder="inputPlaceholder"
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
      <svg
        v-else
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-chevron-down-icon lucide-chevron-down w-4 h-4 opacity-50 shrink-0"
        aria-hidden="true"
      >
        <path d="m6 9 6 6 6-6"></path>
      </svg>
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
              <!-- 当有搜索查询时，使用过滤后的选项渲染 -->
              <template v-if="searchQuery">
                <template
                  v-for="(option, index) in filteredOptions"
                  :key="option.value"
                >
                  <!-- 显示嵌套分组标签，支持折叠功能 -->
                  <template
                    v-if="option.groupInfo && option.groupInfo.length > 0"
                  >
                    <!-- 检查是否需要显示分组标签（避免重复） -->
                    <template
                      v-for="(groupInfo, pathIndex) in option.groupInfo"
                      :key="`group-${pathIndex}-${groupInfo.label}`"
                    >
                      <div
                        v-if="
                          shouldShowGroupLabel(
                            option,
                            pathIndex,
                            index,
                            filteredOptions
                          )
                        "
                        class="x-option-group__label"
                        :class="[
                          {
                            'is-collapsible': groupInfo.collapsible,
                            'is-collapsed': groupInfo.collapsed,
                            [`icon-position--${
                              groupInfo.iconPosition || 'left'
                            }`]: groupInfo.collapsible,
                          },
                        ]"
                        :style="getGroupLabelStyle(groupInfo)"
                        @click="
                          groupInfo.collapsible &&
                            toggleGroupCollapse(groupInfo)
                        "
                      >
                        <!-- 左侧图标 -->
                        <span
                          class="x-option-group__icon"
                          v-if="
                            groupInfo.collapsible &&
                            (groupInfo.iconPosition || 'left') === 'left'
                          "
                          :class="{ 'is-expanded': !groupInfo.collapsed }"
                        >
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path d="m9 18 6-6-6-6" />
                          </svg>
                        </span>

                        <span class="x-option-group__text">{{
                          groupInfo.label
                        }}</span>

                        <!-- 文字后图标 -->
                        <span
                          class="x-option-group__icon"
                          v-if="
                            groupInfo.collapsible &&
                            (groupInfo.iconPosition || 'left') === 'after-text'
                          "
                          :class="{ 'is-expanded': !groupInfo.collapsed }"
                        >
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path d="m9 18 6-6-6-6" />
                          </svg>
                        </span>

                        <!-- 右侧图标 -->
                        <span
                          class="x-option-group__icon"
                          v-if="
                            groupInfo.collapsible &&
                            (groupInfo.iconPosition || 'left') === 'right'
                          "
                          :class="{ 'is-expanded': !groupInfo.collapsed }"
                        >
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path d="m9 18 6-6-6-6" />
                          </svg>
                        </span>
                      </div>
                    </template>
                  </template>
                  <Option
                    :label="option.label"
                    :value="option.value"
                    :disabled="option.disabled"
                    :icon-position="iconPosition"
                    :style="getOptionStyle(option)"
                  />
                </template>
              </template>
              <!-- 没有搜索时，使用原始 slot 内容 -->
              <template v-else>
                <slot></slot>
              </template>
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
import Option from './Option.vue';
import {
  ref,
  computed,
  nextTick,
  onMounted,
  onUnmounted,
  getCurrentInstance,
  provide,
  watch,
} from 'vue';

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
      value: 'value',
      label: 'label',
      disabled: 'disabled',
    }),
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  valueKey: {
    type: String,
    default: 'value',
  },
  type: {
    type: String,
    default: 'default',
    validator: val =>
      ['default', 'primary', 'success', 'warning', 'danger', 'info'].includes(
        val
      ),
  },
  size: {
    type: String,
    default: 'medium',
    validator: val => ['small', 'medium', 'large'].includes(val),
  },
  width: {
    type: String,
  },
  height: {
    type: String,
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
    default: '',
  },
  name: {
    type: String,
    default: '',
  },
  effect: {
    type: String,
    default: 'light',
    validator: val => ['dark', 'light'].includes(val),
  },
  autocomplete: {
    type: String,
    default: 'off',
  },
  placeholder: {
    type: String,
    default: 'Select',
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
    default: 'Loading...',
  },
  noMatchText: {
    type: String,
    default: 'No matching data',
  },
  noDataText: {
    type: String,
    default: 'No data',
  },
  popperClass: {
    type: String,
    default: '',
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
    default: 'body',
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
    default: '×',
  },
  fitInputWidth: {
    type: Boolean,
    default: false,
  },
  suffixIcon: {
    type: [String, Object],
    default: '▼',
  },
  tagType: {
    type: String,
    default: 'info',
  },
  tagEffect: {
    type: String,
    default: 'light',
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
    default: 'bottom-start',
  },
  fallbackPlacements: {
    type: Array,
    default: () => ['bottom-start', 'top-start', 'right', 'left'],
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
    default: '',
  },
  emptyValues: {
    type: Array,
    default: () => [undefined, null, ''],
  },
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: '',
  },
  suffixTransition: {
    type: Boolean,
    default: true,
  },
  tabindex: {
    type: [String, Number],
    default: '0',
  },
  iconPosition: {
    type: String,
    default: 'left',
    validator: val => ['left', 'right', 'after-text'].includes(val),
  },
});

const emit = defineEmits([
  'update:modelValue',
  'change',
  'visible-change',
  'remove-tag',
  'clear',
  'blur',
  'focus',
  'popup-scroll',
]);

const visible = ref(false);
const searchQuery = ref('');
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
  const selectedLabels = selectedOptions.value.map(value => {
    // 从有效选项中查找对应的label
    const option = effectiveOptions.value.find(opt => getValue(opt) === value);
    return option || { value, label: value };
  });

  if (!props.collapseTags) return selectedLabels;
  return selectedLabels.slice(0, props.maxCollapseTags);
});

// 计算输入框的 placeholder
const inputPlaceholder = computed(() => {
  if (!props.filterable) return '';

  if (props.multiple) {
    return selectedOptions.value.length > 0 ? '' : props.placeholder;
  }

  // 单选模式下，如果有搜索内容或者没有选中值，显示 placeholder
  if (searchQuery.value || !selectedLabel.value) {
    return props.placeholder;
  }

  // 如果没有搜索内容且有选中值，显示选中的标签
  return selectedLabel.value;
});

const slotOptions = computed(() => {
  const options = [];
  const slots = getCurrentInstance()?.slots.default?.() || [];

  console.log('🔍 调试 slots:', slots);

  // 定义递归处理函数，支持嵌套分组和折叠状态
  const processVNode = (
    vnode,
    groupPath = [],
    parentCollapsed = false,
    currentLevel = 0
  ) => {
    if (!vnode) return;

    // 处理数组
    if (Array.isArray(vnode)) {
      vnode.forEach(node =>
        processVNode(node, groupPath, parentCollapsed, currentLevel)
      );
      return;
    }

    // 处理字符串或其他非对象类型
    if (typeof vnode !== 'object' || !vnode.type) {
      return;
    }

    const componentName = vnode.type.name || vnode.type.__name || '';
    console.log(
      `🏷️ 处理组件: ${componentName}`,
      vnode.props,
      '当前分组路径:',
      groupPath,
      '父级折叠状态:',
      parentCollapsed,
      '当前层级:',
      currentLevel
    );

    // 处理 OptionGroup
    if (componentName === 'OptionGroup') {
      const currentGroupLabel = vnode.props?.label;
      const isCollapsible = vnode.props?.collapsible || false;
      const defaultCollapsed = vnode.props?.defaultCollapsed || false;
      const iconPosition = vnode.props?.iconPosition || 'left';
      const groupLevel = currentLevel;
      const newGroupPath = [
        ...groupPath,
        {
          label: currentGroupLabel,
          collapsible: isCollapsible,
          collapsed: defaultCollapsed,
          iconPosition: iconPosition,
          level: groupLevel,
        },
      ];

      console.log(`📁 处理分组: ${currentGroupLabel}，完整路径:`, newGroupPath);
      console.log(
        `📁 分组可折叠: ${isCollapsible}，默认折叠: ${defaultCollapsed}，图标位置: ${iconPosition}，层级: ${groupLevel}`
      );

      // 如果当前分组折叠或父级折叠，则跳过子元素处理
      const isCurrentCollapsed = defaultCollapsed || parentCollapsed;

      // 处理 OptionGroup 的 children
      if (!isCurrentCollapsed && vnode.children && vnode.children.default) {
        console.log('📁 分组有default slot，处理子元素');
        const groupChildren = vnode.children.default();
        processVNode(
          groupChildren,
          newGroupPath,
          isCurrentCollapsed,
          groupLevel + 1
        );
      } else if (!isCurrentCollapsed && vnode.children) {
        console.log('📁 分组有直接children，处理子元素');
        processVNode(
          vnode.children,
          newGroupPath,
          isCurrentCollapsed,
          groupLevel + 1
        );
      } else {
        console.log('📁 分组已折叠或无子元素，跳过处理');
      }
    }
    // 处理 Option
    else if (componentName === 'Option') {
      // 如果父级分组折叠，则不添加此选项
      if (parentCollapsed) {
        console.log('❌ 选项被折叠的分组隐藏，跳过添加');
        return;
      }

      // 使用最后一个分组作为主要分组标签，同时保存完整路径
      const mainGroupLabel =
        groupPath.length > 0 ? groupPath[groupPath.length - 1].label : null;
      const option = {
        value: vnode.props?.value,
        label: vnode.props?.label || vnode.props?.value,
        disabled: vnode.props?.disabled || false,
        groupLabel: mainGroupLabel,
        groupPath: groupPath.map(g => g.label), // 保存标签路径
        groupInfo: [...groupPath], // 保存完整的分组信息（包含折叠状态）
        groupLevel: currentLevel, // 选项所在的层级
      };
      console.log('✅ 添加选项:', option);
      options.push(option);
    }
    // 处理其他有 children 的节点
    else if (vnode.children) {
      if (typeof vnode.children === 'function') {
        processVNode(
          vnode.children(),
          groupPath,
          parentCollapsed,
          currentLevel
        );
      } else {
        processVNode(vnode.children, groupPath, parentCollapsed, currentLevel);
      }
    }
  };

  // 开始处理
  processVNode(slots);

  console.log('🎯 最终选项列表:', options);
  return options;
});

const effectiveOptions = computed(() => {
  const options =
    slotOptions.value.length > 0 ? slotOptions.value : props.options;
  return options;
});

// 判断是否需要显示分组标签（避免重复显示）
const shouldShowGroupLabel = (
  currentOption,
  pathIndex,
  currentIndex,
  allOptions
) => {
  // 如果是第一个选项，显示所有级别的分组标签
  if (currentIndex === 0) {
    return true;
  }

  const prevOption = allOptions[currentIndex - 1];

  // 如果前一个选项不存在或没有分组信息，显示当前所有级别
  if (!prevOption || !prevOption.groupInfo) {
    return true;
  }

  // 比较当前和前一个选项的分组信息
  const currentGroupInfo = currentOption.groupInfo[pathIndex];
  const prevGroupInfo = prevOption.groupInfo && prevOption.groupInfo[pathIndex];

  // 如果分组信息不同或前一个选项没有这个级别的分组，则显示
  if (!currentGroupInfo || !prevGroupInfo) {
    return !!currentGroupInfo;
  }

  return currentGroupInfo.label !== prevGroupInfo.label;
};

// 切换分组折叠状态（在搜索模式下）
const toggleGroupCollapse = groupInfo => {
  // 在搜索模式下，我们需要重新渲染数据
  // 这里可以发出事件或者更新状态
  groupInfo.collapsed = !groupInfo.collapsed;
  console.log(
    `🔄 切换分组折叠状态: ${groupInfo.label} -> ${
      groupInfo.collapsed ? '折叠' : '展开'
    }`
  );

  // 触发重新计算
  // 这里我们需要触发 slotOptions 的重新计算
  // 可以通过修改一个响应式的 key 来实现
};

// 计算搜索模式下分组标签的动态样式
const getGroupLabelStyle = groupInfo => {
  const level = groupInfo.level || 0;
  const baseIndent = level * 6; // 每层缩进6px
  return {
    marginLeft: `${baseIndent}px`,
    fontSize: level > 1 ? '11px' : '12px',
    opacity: Math.max(1 - level * 0.1, 0.6), // 每层递减0.1，最小0.6
    padding: level > 1 ? '6px 12px' : '8px 12px',
  };
};

// 计算选项的动态样式
const getOptionStyle = option => {
  const level = option.groupLevel || 0;
  const baseIndent = level * 8; // 选项每层缩进8px
  return {
    paddingLeft: `${12 + baseIndent}px`, // 基础padding 12px + 层级缩进
  };
};

const filteredOptions = computed(() => {
  if (!searchQuery.value) return effectiveOptions.value;

  if (props.filterMethod) {
    return props.filterMethod(searchQuery.value, effectiveOptions.value);
  }

  if (props.remote) {
    return effectiveOptions.value;
  }

  // 搜索选项，支持分组内的选项
  return effectiveOptions.value.filter(option => {
    const label = getLabel(option);
    const searchText = searchQuery.value.toLowerCase();

    // 搜索选项标签
    const labelMatch = label.toLowerCase().includes(searchText);

    // 搜索分组信息中的任意级别
    const groupMatch =
      option.groupInfo &&
      option.groupInfo.some(
        groupInfo =>
          groupInfo.label && groupInfo.label.toLowerCase().includes(searchText)
      );

    return labelMatch || groupMatch;
  });
});

const getValue = option => {
  return option[props.props.value] || option.value || option;
};

const getLabel = option => {
  if (option) {
    return option[props.props.label] || option.label || getValue(option);
  }
};

const getDisabled = option => {
  return option[props.props.disabled] || option.disabled || false;
};

const isSelected = option => {
  const value = getValue(option);
  return selectedOptions.value.includes(value);
};

const toggleDropdown = () => {
  if (props.disabled) return;

  // 如果是可搜索模式，点击时聚焦到输入框
  if (props.filterable && inputRef.value) {
    inputRef.value.focus();
    return;
  }

  visible.value = !visible.value;
  emit('visible-change', visible.value);
};

const selectOption = option => {
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
    emit('update:modelValue', newValue);
    emit('change', newValue);
  } else {
    selectData.value = option;
    emit('update:modelValue', value);
    emit('change', value);
    visible.value = false;
    emit('visible-change', false);
  }

  if (!props.reserveKeyword) {
    searchQuery.value = '';
  }
};

const removeTag = tag => {
  const newValue = selectedOptions.value.filter(v => v !== tag.value);
  emit('update:modelValue', newValue);
  emit('remove-tag', tag);
  emit('change', newValue);
};

const clear = () => {
  emit('update:modelValue', props.multiple ? [] : '');
  emit('clear');
  emit('change', props.multiple ? [] : '');
  searchQuery.value = '';
};

const handleFilter = () => {
  if (props.remote && props.remoteMethod) {
    props.remoteMethod(searchQuery.value);
  }
};

const handleFocus = () => {
  emit('focus');

  // 在聚焦时，如果是可搜索的单选模式且有选中值，清空搜索框以便输入
  if (props.filterable && !props.multiple && selectedLabel.value) {
    searchQuery.value = '';
  }

  // 可搜索模式下聚焦时自动打开下拉框
  if (props.filterable && !visible.value) {
    visible.value = true;
    emit('visible-change', true);
  } else if (props.automaticDropdown && !visible.value) {
    visible.value = true;
    emit('visible-change', true);
  }
};

const handleBlur = () => {
  emit('blur');

  // 在失去焦点时，如果是可搜索的单选模式且没有选中新值，恢复显示选中的标签
  if (props.filterable && !props.multiple && !props.reserveKeyword) {
    // 延迟清空，给点击选项的时间
    setTimeout(() => {
      if (!visible.value) {
        searchQuery.value = '';
      }
    }, 200);
  }
};

const handleClickOutside = event => {
  if (
    selectWrapper.value &&
    !selectWrapper.value.contains(event.target) &&
    dropdownRef.value &&
    !dropdownRef.value.contains(event.target)
  ) {
    visible.value = false;
    emit('visible-change', false);
  }
};

const dropdownStyle = computed(() => {
  if (!props.fitInputWidth || !selectWrapper.value) return {};
  return {
    width: `${selectWrapper.value.offsetWidth}px`,
  };
});

onMounted(() => {
  if (typeof document !== 'undefined') {
    document.addEventListener('click', handleClickOutside);
  }
});

onUnmounted(() => {
  if (typeof document !== 'undefined') {
    document.removeEventListener('click', handleClickOutside);
  }
});

// Provide context for Option components
provide('selectContext', {
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
  newVal => {
    if (!props.reserveKeyword) {
      searchQuery.value = '';
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
  if (selectedOptions.value.length === 0) return '';

  // 对于单选模式，从有效选项中查找对应的label
  const currentValue = selectedOptions.value[0];

  // 优先检查selectData是否有值（这是用户点击选项时直接传递的完整选项对象）
  if (selectData.value && selectData.value.label) {
    return selectData.value.label;
  }

  // 其次从有效选项中查找
  const option = effectiveOptions.value.find(
    opt => getValue(opt) === currentValue
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
@import './index.css';
</style>
