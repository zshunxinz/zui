<template>
  <div style="display: flex; flex-direction: column; gap: 20px">
    <!-- 基础远程搜索 -->
    <div>
      <h4>基础远程搜索</h4>
      <Select
        v-model="singleValue"
        placeholder="输入搜索编程语言"
        filterable
        remote
        :remote-method="searchLanguages"
        :loading="singleLoading"
        :options="singleOptions"
        loading-text="搜索中..."
        no-match-text="无匹配结果"
        clearable
      />
      <p>当前值: {{ singleValue }}</p>
    </div>

    <!-- 多选远程搜索 -->
    <div>
      <h4>多选远程搜索</h4>
      <Select
        ref="multipleSelectRef"
        v-model="multipleValue"
        placeholder="选择多个技术栈"
        filterable
        remote
        multiple
        :remote-method="searchTechStack"
        :loading="multipleLoading"
        :options="multipleOptions"
        loading-text="搜索中..."
        no-match-text="无匹配结果"
        clearable
        @change="handleMultipleChange"
        @search="handleMultipleSearch"
      />
      <div
        style="
          margin-top: 10px;
          padding: 10px;

          border-radius: 4px;
          font-size: 14px;
        "
      ></div>
    </div>

    <!-- 带分组的远程搜索 -->
    <div>
      <h4>分组远程搜索</h4>
      <Select
        v-model="groupValue"
        placeholder="搜索工具和框架"
        filterable
        remote
        :remote-method="searchGroupedItems"
        :loading="groupLoading"
        loading-text="搜索中..."
        no-match-text="无匹配结果"
      >
        <template v-for="group in groupedOptions" :key="group.label">
          <OptionGroup :label="group.label">
            <Option
              v-for="option in group.options"
              :key="option.value"
              :label="option.label"
              :value="option.value"
            />
          </OptionGroup>
        </template>
      </Select>
      <p>当前值: {{ groupValue }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Select, Option, OptionGroup } from '../../../src/components/Select';

// 单选远程搜索
const singleValue = ref('');
const singleOptions = ref([]);
const singleLoading = ref(false);

// 多选远程搜索
const multipleValue = ref([]);
const multipleOptions = ref([]);
const multipleLoading = ref(false);
const multipleSelectRef = ref(null);
const multipleStatus = ref(null);

// 分组远程搜索
const groupValue = ref('');
const groupedOptions = ref([]);
const groupLoading = ref(false);

// 模拟数据
const languages = [
  { value: 'javascript', label: 'JavaScript' },
  { value: 'typescript', label: 'TypeScript' },
  { value: 'python', label: 'Python' },
  { value: 'java', label: 'Java' },
  { value: 'csharp', label: 'C#' },
  { value: 'golang', label: 'Go' },
  { value: 'rust', label: 'Rust' },
  { value: 'swift', label: 'Swift' },
  { value: 'kotlin', label: 'Kotlin' },
  { value: 'dart', label: 'Dart' },
];

const techStack = [
  { value: 'vue', label: 'Vue.js' },
  { value: 'react', label: 'React' },
  { value: 'angular', label: 'Angular' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'nodejs', label: 'Node.js' },
  { value: 'express', label: 'Express' },
  { value: 'nestjs', label: 'NestJS' },
  { value: 'spring', label: 'Spring Boot' },
  { value: 'django', label: 'Django' },
  { value: 'flask', label: 'Flask' },
];

const groupedData = {
  前端框架: [
    { value: 'vue', label: 'Vue.js' },
    { value: 'react', label: 'React' },
    { value: 'angular', label: 'Angular' },
    { value: 'svelte', label: 'Svelte' },
  ],
  后端框架: [
    { value: 'express', label: 'Express' },
    { value: 'nestjs', label: 'NestJS' },
    { value: 'spring', label: 'Spring Boot' },
    { value: 'django', label: 'Django' },
    { value: 'flask', label: 'Flask' },
  ],
  构建工具: [
    { value: 'webpack', label: 'Webpack' },
    { value: 'vite', label: 'Vite' },
    { value: 'rollup', label: 'Rollup' },
    { value: 'parcel', label: 'Parcel' },
  ],
  数据库: [
    { value: 'mysql', label: 'MySQL' },
    { value: 'postgresql', label: 'PostgreSQL' },
    { value: 'mongodb', label: 'MongoDB' },
    { value: 'redis', label: 'Redis' },
  ],
};

// 远程搜索方法
const searchLanguages = query => {
  console.log('🔍 单选远程搜索:', query);

  if (query) {
    singleLoading.value = true;
    setTimeout(() => {
      singleOptions.value = languages.filter(item =>
        item.label.toLowerCase().includes(query.toLowerCase())
      );
      singleLoading.value = false;
      console.log('📊 单选搜索结果:', singleOptions.value);
    }, 200);
  } else {
    singleOptions.value = [];
    console.log('🚫 清空单选搜索结果');
  }
};

const searchTechStack = query => {
  console.log('🔍 多选远程搜索:', query);
  console.log('🔍 搜索前状态:', {
    currentValue: multipleValue.value,
    currentOptions: multipleOptions.value.length,
    loading: multipleLoading.value,
  });

  if (query) {
    multipleLoading.value = true;
    setTimeout(() => {
      const filteredResults = techStack.filter(item =>
        item.label.toLowerCase().includes(query.toLowerCase())
      );

      multipleOptions.value = filteredResults;
      multipleLoading.value = false;

      console.log('📊 多选搜索结果:', {
        query: query,
        resultsCount: filteredResults.length,
        results: filteredResults.map(item => `${item.value}:${item.label}`),
        loading: multipleLoading.value,
      });
    }, 250);
  } else {
    multipleOptions.value = [];
    console.log('🚫 清空多选搜索结果');
  }
};

// 多选远程搜索调试方法
const handleMultipleChange = newValue => {
  console.log('📝 多选值变化:', multipleValue.value, '->', newValue);

  // 延迟检查标签显示状态
  setTimeout(() => {
    diagnoseMultipleTags();
  }, 100);
};

const handleMultipleSearch = query => {
  console.log('🔍 多选搜索事件:', query);
};

// 获取期望的标签
const getExpectedLabel = value => {
  const option = techStack.find(item => item.value === value);
  return option ? option.label : value;
};

// 测试多选远程搜索
const testMultipleRemoteSearch = async () => {
  console.log('🧪 =================  开始多选远程搜索测试 =================');

  // 1. 清空当前状态
  multipleValue.value = [];
  multipleOptions.value = [];
  await new Promise(resolve => setTimeout(resolve, 100));

  // 2. 模拟搜索 "react"
  console.log('🔍 模拟搜索: react');
  searchTechStack('react');

  // 3. 等待搜索结果
  await new Promise(resolve => setTimeout(resolve, 300));

  // 4. 模拟选择 React
  if (multipleOptions.value.some(opt => opt.value === 'react')) {
    console.log('🎯 选择 React');
    multipleValue.value = ['react'];
    await new Promise(resolve => setTimeout(resolve, 100));
  }

  // 5. 模拟搜索 "vue"
  console.log('🔍 模拟搜索: vue');
  searchTechStack('vue');

  // 6. 等待搜索结果
  await new Promise(resolve => setTimeout(resolve, 300));

  // 7. 模拟添加 Vue.js
  if (multipleOptions.value.some(opt => opt.value === 'vue')) {
    console.log('🎯 添加 Vue.js');
    multipleValue.value = [...multipleValue.value, 'vue'];
    await new Promise(resolve => setTimeout(resolve, 100));
  }

  // 8. 检查结果
  diagnoseMultipleTags();

  console.log('🧪 ================= 多选远程搜索测试完成 =================');
};

// 测试多选输入功能
const testMultipleInput = async () => {
  console.log('⌨️ =================  开始测试多选输入功能 =================');

  if (!multipleSelectRef.value) {
    console.error('❌ 无法获取多选 Select 组件引用');
    return;
  }

  const inputElement =
    multipleSelectRef.value.$el?.querySelector('.x-select__input');

  if (!inputElement) {
    console.error('❌ 找不到输入框元素');
    multipleStatus.value = {
      color: '#f8d7da',
      title: '❌ 找不到输入框',
      message: '无法找到输入框元素，请检查组件是否正确配置 filterable 属性',
    };
    return;
  }

  console.log('⌨️ 1. 输入框基本信息:');
  console.log('  - 是否禁用:', inputElement.disabled);
  console.log('  - 是否只读:', inputElement.readOnly);
  console.log('  - placeholder:', inputElement.placeholder);
  console.log('  - 当前值:', `"${inputElement.value}"`);

  // 测试输入功能
  try {
    console.log('⌨️ 2. 测试输入功能:');

    // 聚焦输入框
    inputElement.focus();
    await new Promise(resolve => setTimeout(resolve, 100));

    // 模拟输入 "re"
    console.log('  - 模拟输入 "re"');
    inputElement.value = 're';
    inputElement.dispatchEvent(new Event('input', { bubbles: true }));
    await new Promise(resolve => setTimeout(resolve, 100));

    // 检查输入结果
    console.log('  - 输入后的值:', `"${inputElement.value}"`);

    // 继续输入 "act"
    console.log('  - 模拟输入 "act"');
    inputElement.value = 'react';
    inputElement.dispatchEvent(new Event('input', { bubbles: true }));
    await new Promise(resolve => setTimeout(resolve, 300));

    console.log('  - 最终输入值:', `"${inputElement.value}"`);

    // 检查是否有搜索结果
    if (multipleOptions.value.length > 0) {
      console.log(
        '✅ 输入测试成功: 已触发远程搜索，获得',
        multipleOptions.value.length,
        '个结果'
      );
      multipleStatus.value = {
        color: '#d1ecf1',
        title: '✅ 输入测试成功',
        message: `多选远程搜索输入功能正常，获得${multipleOptions.value.length}个搜索结果`,
      };
    } else {
      console.log('⚠️ 输入测试部分成功: 可以输入，但没有搜索结果');
      multipleStatus.value = {
        color: '#fff3cd',
        title: '⚠️ 部分成功',
        message: '可以输入内容，但没有触发远程搜索或没有结果',
      };
    }
  } catch (error) {
    console.error('❌ 输入测试失败:', error.message);
    multipleStatus.value = {
      color: '#f8d7da',
      title: '❌ 输入测试失败',
      message: `输入测试过程中发生错误: ${error.message}`,
    };
  }

  console.log('⌨️ ================= 多选输入测试完成 =================');
};

// 诊断多选标签显示
const diagnoseMultipleTags = () => {
  console.log('🔍 =================  诊断多选标签显示 =================');

  if (!multipleSelectRef.value) {
    console.error('❌ 无法获取多选 Select 组件引用');
    return;
  }

  const selectEl = multipleSelectRef.value.$el;
  const tagElements = selectEl?.querySelectorAll('.x-select__tag');

  console.log('🔍 1. 基本信息:');
  console.log('  - 选中值:', multipleValue.value);
  console.log('  - 期望标签:', multipleValue.value.map(getExpectedLabel));
  console.log('  - DOM 中的标签数量:', tagElements ? tagElements.length : 0);

  if (tagElements && tagElements.length > 0) {
    console.log('🔍 2. DOM 标签内容:');
    Array.from(tagElements).forEach((tag, index) => {
      const textElement = tag.querySelector('.x-select__tag-text');
      const displayText = textElement ? textElement.textContent : '未知';
      console.log(`  ${index}: "${displayText}"`);
    });
  }

  // 检查是否有问题
  const hasIssues = multipleValue.value.some((value, index) => {
    const expectedLabel = getExpectedLabel(value);
    const tagElement = tagElements?.[index];
    const actualLabel = tagElement?.querySelector(
      '.x-select__tag-text'
    )?.textContent;
    return actualLabel !== expectedLabel;
  });

  if (hasIssues) {
    multipleStatus.value = {
      color: '#f8d7da',
      title: '❌ 发现问题',
      message: '有些标签显示与期望不一致，请检查控制台日志',
    };
    console.error('❌ 多选标签显示存在问题');

    // 详细分析可能的原因
    console.log('🔍 可能的原因分析:');

    if (multipleOptions.value.length === 0) {
      console.log('  → 原因可能: 当前没有可用选项，组件无法查找到对应的标签');
    }

    multipleValue.value.forEach(value => {
      const existsInOptions = multipleOptions.value.some(
        opt => opt.value === value
      );
      if (!existsInOptions) {
        console.log(
          `  → 原因可能: 选中值 "${value}" 在当前选项列表中不存在（远程搜索缓存问题）`
        );
      }
    });
  } else if (multipleValue.value.length === 0) {
    multipleStatus.value = {
      color: '#d1ecf1',
      title: 'ℹ️ 信息',
      message: '当前没有选中任何选项',
    };
  } else {
    multipleStatus.value = {
      color: '#d1ecf1',
      title: '✅ 显示正常',
      message: '所有标签显示都与期望一致',
    };
    console.log('✅ 多选标签显示正常');
  }

  console.log('🔍 ================= 诊断完成 =================');
};

const searchGroupedItems = query => {
  console.log('🔍 分组远程搜索:', query);

  if (query) {
    groupLoading.value = true;
    setTimeout(() => {
      const results = [];
      const searchTerm = query.toLowerCase();

      Object.keys(groupedData).forEach(groupName => {
        const filteredOptions = groupedData[groupName].filter(item =>
          item.label.toLowerCase().includes(searchTerm)
        );

        if (filteredOptions.length > 0) {
          results.push({
            label: groupName,
            options: filteredOptions,
          });
        }
      });

      groupedOptions.value = results;
      groupLoading.value = false;
      console.log('📊 分组搜索结果:', groupedOptions.value);
    }, 300);
  } else {
    groupedOptions.value = [];
    console.log('🚫 清空分组搜索结果');
  }
};
</script>
