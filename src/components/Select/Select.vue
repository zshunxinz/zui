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
      <div class="x-select__tags" v-if="multiple && displayTags.length > 0">
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
        v-model="inputValue"
        @input="handleFilter"
        @focus="handleFocus"
        @blur="handleBlur"
        :disabled="disabled"
        :readonly="!filterable"
        ref="inputRef"
      />

      <span
        v-if="clearable && selectedOptions.length > 0"
        class="x-select__clear"
        @click.stop="clear"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
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
        :stroke="`var(--color-${type})`"
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
            <slot name="empty">
              <!-- 远程搜索模式下显示无匹配结果 -->
              <template v-if="props.remote && searchQuery">
                {{ noMatchText }}
              </template>
              <!-- 非远程模式或无搜索查询时显示无数据 -->
              <template v-else>
                {{ noDataText }}
              </template>
            </slot>
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
  'search',
]);

const visible = ref(false);
const searchQuery = ref('');
const hoverIndex = ref(-1);
const inputRef = ref(null);
const selectWrapper = ref(null);
const dropdownRef = ref(null);
const selectData = ref();
const selectDataList = ref([]);

// 远程搜索模式下的已选中选项缓存
const remoteSelectedOptionsCache = ref(new Map());

// 用户是否正在主动输入（而不是自动清空）
const isUserTyping = ref(false);

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
    // 远程搜索模式下优先使用缓存的选项信息
    if (props.remote && remoteSelectedOptionsCache.value.has(value)) {
      const cachedOption = remoteSelectedOptionsCache.value.get(value);
      return cachedOption;
    }

    // 从有效选项中查找对应的label
    const option = effectiveOptions.value.find(opt => getValue(opt) === value);
    if (option) {
      return option;
    }

    // fallback 到值作为标签
    return { value, label: value };
  });

  if (!props.collapseTags) return selectedLabels;
  return selectedLabels.slice(0, props.maxCollapseTags);
});

// 计算输入框应该显示的值——优化远程搜索模式下的状态管理
const inputValue = computed({
  get() {
    // 根据经验教训，必须优先处理 isUserTyping 状态
    // 如果用户正在主动输入（包括删除到空），优先显示搜索内容
    if (isUserTyping.value) {
      return searchQuery.value;
    }

    // 在可搜索的单选模式下，优化远程搜索的处理逻辑
    if (
      props.filterable &&
      !props.multiple &&
      selectedOptions.value.length > 0 &&
      !isUserTyping.value
    ) {
      const currentValue = selectedOptions.value[0];

      // 远程搜索模式下的优化处理：按优先级顺序检查
      if (props.remote) {
        // 1. 首先检查缓存，这是最可靠的数据源
        if (remoteSelectedOptionsCache.value.has(currentValue)) {
          const cachedOption =
            remoteSelectedOptionsCache.value.get(currentValue);
          return cachedOption.label;
        }

        // 2. 检查当前直接设置的 selectData
        if (selectData.value && selectData.value.label) {
          return selectData.value.label;
        }
      } else {
        // 非远程模式下优先检查 selectData
        if (selectData.value && selectData.value.label) {
          return selectData.value.label;
        }
      }

      // 3. 从有效选项中查找
      const option = effectiveOptions.value.find(
        opt => getValue(opt) === currentValue
      );

      if (option) {
        const label = getLabel(option);
        return label;
      }

      // 4. fallback 到当前值
      return currentValue;
    }

    // 多选模式下，输入框应该始终显示空字符串或搜索内容，不显示选中的标签
    if (props.multiple) {
      return '';
    }

    // 其他情况显示空字符串（让 placeholder 显示）
    return '';
  },
  set(value) {
    // 用户开始输入，标记为正在输入状态
    isUserTyping.value = true;
    searchQuery.value = value;
  },
});

// 计算输入框的 placeholder
const inputPlaceholder = computed(() => {
  if (!props.filterable) return '';

  if (props.multiple) {
    return selectedOptions.value.length > 0 ? '' : props.placeholder;
  }

  // 单选模式下，如果有选中值且没有搜索内容，不显示placeholder（因为会显示选中的值）
  if (!searchQuery.value && selectedLabel.value) {
    return '';
  }

  // 其他情况显示默认 placeholder
  return props.placeholder;
});

// 用于强制更新 slot 解析的响应式 key
const slotUpdateKey = ref(0);

// 缓存解析后的选项以优化性能
const parsedOptionsCache = ref(new Map());
const cacheKey = computed(() => {
  // 修复缓存键生成逻辑，避免在组件未完全渲染时缓存空结果
  // 只有在有实际 slot 内容时才进行缓存
  const instance = getCurrentInstance();
  const hasSlots = instance?.slots.default ? 'has-slots' : 'no-slots';
  return `${slotUpdateKey.value}-${hasSlots}-${searchQuery.value}`;
});

const slotOptions = computed(() => {
  // 获取当前缓存键
  const currentCacheKey = cacheKey.value;

  // 先获取 slots，如果没有 slot 内容则直接返回空数组
  const instance = getCurrentInstance();
  const slots = instance?.slots.default?.() || [];

  // 如果没有 slot 内容，直接返回空数组，不进行缓存
  if (!slots || slots.length === 0) {
    return [];
  }

  // 检查缓存，只有在有实际 slot 内容时才使用缓存
  if (parsedOptionsCache.value.has(currentCacheKey)) {
    return parsedOptionsCache.value.get(currentCacheKey);
  }

  const options = [];

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

      // 在开发环境下才输出调试日志
      if (process.env.NODE_ENV === 'development') {
        console.log(
          `📁 处理分组: ${currentGroupLabel}，完整路径:`,
          newGroupPath
        );
      }

      // 如果当前分组折叠或父级折叠，则跳过子元素处理
      const isCurrentCollapsed = defaultCollapsed || parentCollapsed;

      // 处理 OptionGroup 的 children
      if (!isCurrentCollapsed && vnode.children && vnode.children.default) {
        const groupChildren = vnode.children.default();
        processVNode(
          groupChildren,
          newGroupPath,
          isCurrentCollapsed,
          groupLevel + 1
        );
      } else if (!isCurrentCollapsed && vnode.children) {
        processVNode(
          vnode.children,
          newGroupPath,
          isCurrentCollapsed,
          groupLevel + 1
        );
      }
    }
    // 处理 Option
    else if (componentName === 'Option') {
      // 如果父级分组折叠，则不添加此选项
      if (parentCollapsed) {
        return;
      }

      // 使用最后一个分组作为主要分组标签，同时保存完整路径
      const mainGroupLabel =
        groupPath.length > 0 ? groupPath[groupPath.length - 1].label : null;
      // 选项的层级应该等于当前分组的深度
      const optionLevel = groupPath.length;
      const option = {
        value: vnode.props?.value,
        label: vnode.props?.label || vnode.props?.value,
        disabled: vnode.props?.disabled || false,
        groupLabel: mainGroupLabel,
        groupPath: groupPath.map(g => g.label), // 保存标签路径
        groupInfo: [...groupPath], // 保存完整的分组信息（包含折叠状态）
        groupLevel: optionLevel, // 选项所在的层级 = 分组深度
      };
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

  // 只有在有实际解析结果时才缓存
  if (options.length > 0) {
    parsedOptionsCache.value.set(currentCacheKey, options);

    // 清理过期缓存（保持最近的10个结果）
    if (parsedOptionsCache.value.size > 10) {
      const firstKey = parsedOptionsCache.value.keys().next().value;
      parsedOptionsCache.value.delete(firstKey);
    }
  }

  return options;
});

const effectiveOptions = computed(() => {
  // 远程搜索模式下的逻辑调整：优先考虑 slot 内容，然后是 props.options
  if (props.remote) {
    // 如果有 slot 内容（如分组远程搜索），优先使用 slot
    if (slotOptions.value.length > 0) {
      return slotOptions.value;
    }
    // 没有 slot 内容时使用 props.options（如普通远程搜索）
    return props.options;
  }

  // 非远程模式下优先使用 slot 解析的选项
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
  // 在开发环境下才输出调试日志
  if (process.env.NODE_ENV === 'development') {
    console.log(
      `🔄 切换分组折叠状态: ${groupInfo.label} -> ${
        groupInfo.collapsed ? '折叠' : '展开'
      }`
    );
  }

  // 触发重新计算
  // 这里我们需要触发 slotOptions 的重新计算
  // 可以通过修改一个响应式的 key 来实现
};

// 计算搜索模式下分组标签的动态样式
const getGroupLabelStyle = groupInfo => {
  const level = groupInfo.level || 0;
  const baseIndent = level * 6; // 每层缩进6px
  return {
    marginLeft: `${baseIndent}px !important`,
    fontSize: `${level > 1 ? '11px' : '12px'} !important`,
    opacity: `${Math.max(1 - level * 0.1, 0.6)} !important`, // 每层递减0.1，最小0.6
    padding: `${level > 1 ? '6px 12px' : '8px 12px'} !important`,
  };
};

// 计算选项的动态样式
const getOptionStyle = option => {
  const level = option.groupLevel || 0;
  const baseIndent = level * 6; // 选项每层缩进6px，与分组保持一致
  const style = {
    paddingLeft: `${12 + baseIndent}px !important`, // 基础padding 12px + 层级缩进，使用!important确保优先级
  };

  return style;
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

  const value = getValue(option);
  const label = getLabel(option);

  // 根据项目规范，在远程搜索模式下优先处理状态更新
  // 1. 首先立即缓存选中的选项信息
  if (props.remote) {
    const cachedOption = {
      value: value,
      label: label,
      disabled: getDisabled(option),
      ...option,
    };
    remoteSelectedOptionsCache.value.set(value, cachedOption);
  }

  // 2. 立即更新 selectData，确保 inputValue 计算能获取到最新数据
  selectData.value = option;

  // 3. 根据规范立即清空搜索状态，防止闪现
  if (!props.reserveKeyword) {
    searchQuery.value = '';
    isUserTyping.value = false;
  }

  // 4. 然后处理值的更新
  if (props.multiple) {
    const newValue = [...selectedOptions.value];
    const index = newValue.indexOf(value);
    if (index > -1) {
      newValue.splice(index, 1);
      // 移除多选时也移除缓存
      if (props.remote) {
        remoteSelectedOptionsCache.value.delete(value);
      }
    } else if (
      props.multipleLimit === 0 ||
      newValue.length < props.multipleLimit
    ) {
      newValue.push(value);
    }
    emit('update:modelValue', newValue);
    emit('change', newValue);
  } else {
    emit('update:modelValue', value);
    emit('change', value);
    visible.value = false;
    emit('visible-change', false);
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
  isUserTyping.value = false; // 重置输入状态

  // 清空远程搜索缓存
  if (props.remote) {
    remoteSelectedOptionsCache.value.clear();
  }
};

// 远程搜索防抖定时器
const remoteSearchTimer = ref(null);

// 优化的防抖处理函数
const debouncedRemoteSearch = computed(() => {
  let timer = null;
  return query => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      props.remoteMethod(query);
    }, 300);
  };
});

const handleFilter = () => {
  // 触发搜索事件
  emit('search', searchQuery.value);

  if (props.remote && props.remoteMethod) {
    // 清除之前的定时器
    if (remoteSearchTimer.value) {
      clearTimeout(remoteSearchTimer.value);
    }

    // 如果搜索查询为空，直接调用远程方法
    if (!searchQuery.value.trim()) {
      props.remoteMethod('');
      return;
    }

    // 使用优化的防抖函数
    debouncedRemoteSearch.value(searchQuery.value);
  }
};

const handleFocus = () => {
  emit('focus');

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

  // 在失去焦点时，检查用户是否正在输入且输入框为空
  if (isUserTyping.value && !searchQuery.value.trim()) {
    // 如果用户手动清空了输入框，在失去焦点时重置输入状态
    // 但保持空内容，不自动还原到选中的标签
    setTimeout(() => {
      if (!visible.value && !searchQuery.value.trim()) {
        isUserTyping.value = false;
      }
    }, 100);
  } else {
    // 其他情况下正常重置输入状态
    isUserTyping.value = false;
  }

  // 在失去焦点时，如果是可搜索的单选模式且没有选中新值，恢复显示选中的标签
  if (props.filterable && !props.multiple && !props.reserveKeyword) {
    // 延迟清空，给点击选项的时间
    setTimeout(() => {
      if (!visible.value && searchQuery.value.trim() && !isUserTyping.value) {
        // 只有在不是用户主动清空的情况下才清空搜索内容
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

  // 清理远程搜索定时器
  if (remoteSearchTimer.value) {
    clearTimeout(remoteSearchTimer.value);
    remoteSearchTimer.value = null;
  }

  // 清理缓存
  parsedOptionsCache.value.clear();
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
  (newVal, oldVal) => {
    // 根据经验教训，需要区分用户操作和外部更新
    // 在用户选择操作时，selectOption 已经处理了所有状态，这里不需要重复处理

    // 只有在非保留关键字模式下且值确实发生变化时才处理
    if (!props.reserveKeyword && newVal !== oldVal) {
      // 延迟重置，确保在非用户输入状态下才清空
      nextTick(() => {
        // 只有在不是用户正在输入时才清空搜索
        if (!isUserTyping.value) {
          searchQuery.value = '';
        }
      });
    }

    // 在远程搜索模式下，如果值被外部清空，也清理缓存
    if (
      props.remote &&
      (!newVal || (Array.isArray(newVal) && newVal.length === 0))
    ) {
      remoteSelectedOptionsCache.value.clear();
    }

    // 如果是远程搜索模式且有新值，尝试从当前选项中寻找并缓存
    if (props.remote && newVal && !Array.isArray(newVal)) {
      // 单选模式下，如果缓存中没有这个值，尝试从当前可用选项中找到并缓存
      if (!remoteSelectedOptionsCache.value.has(newVal)) {
        const option = effectiveOptions.value.find(
          opt => getValue(opt) === newVal
        );
        if (option) {
          const cachedOption = {
            value: newVal,
            label: getLabel(option),
            disabled: getDisabled(option),
            ...option,
          };
          remoteSelectedOptionsCache.value.set(newVal, cachedOption);
        }
      }
    }
  },
  { immediate: false } // 不立即执行，避免初始化时的不必要操作
);

// 监听搜索查询变化，在远程搜索模式下强制更新 slot 解析
watch(
  () => searchQuery.value,
  (newQuery, oldQuery) => {
    // 在远程搜索模式下，当搜索查询变化时，强制更新 slotOptions
    if (props.remote && newQuery !== oldQuery) {
      slotUpdateKey.value++;
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

  // 远程搜索模式下优先使用缓存的选项信息
  if (props.remote && remoteSelectedOptionsCache.value.has(currentValue)) {
    const cachedOption = remoteSelectedOptionsCache.value.get(currentValue);
    return cachedOption.label;
  }

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
