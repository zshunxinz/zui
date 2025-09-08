<template>
  <div style="padding: 20px">
    <h2>远程搜索 Label 显示测试</h2>

    <div style="margin-bottom: 30px">
      <h3>1. 单选远程搜索</h3>
      <Select
        v-model="singleValue"
        placeholder="搜索编程语言..."
        filterable
        remote
        :remote-method="handleSingleSearch"
        :loading="singleLoading"
        :options="singleOptions"
        loading-text="搜索中..."
        no-match-text="无匹配结果"
        style="width: 300px"
      />
      <div style="margin-top: 10px">
        <p><strong>当前 value:</strong> {{ singleValue }}</p>
        <p><strong>当前 label:</strong> {{ getSingleLabel() }}</p>
        <p><strong>搜索结果数量:</strong> {{ singleOptions.length }}</p>
      </div>
      <button @click="clearSingle" style="margin-top: 10px">清空选择</button>
      <button @click="setSingleValue" style="margin-left: 10px">
        设置为 'python'
      </button>
    </div>

    <div style="margin-bottom: 30px">
      <h3>2. 多选远程搜索</h3>
      <Select
        v-model="multipleValue"
        placeholder="选择多个技术..."
        filterable
        remote
        multiple
        :remote-method="handleMultipleSearch"
        :loading="multipleLoading"
        :options="multipleOptions"
        loading-text="搜索中..."
        no-match-text="无匹配结果"
        style="width: 400px"
      />
      <div style="margin-top: 10px">
        <p><strong>当前 value:</strong> {{ multipleValue }}</p>
        <p><strong>搜索结果数量:</strong> {{ multipleOptions.length }}</p>
      </div>
      <button @click="clearMultiple" style="margin-top: 10px">清空选择</button>
      <button @click="setMultipleValue" style="margin-left: 10px">
        设置多个值
      </button>
    </div>

    <div style="margin-bottom: 30px">
      <h3>3. 测试步骤</h3>
      <ol>
        <li>在搜索框中输入关键词（如 "java"）</li>
        <li>从下拉列表中选择一个选项</li>
        <li>观察 Select 组件是否正确显示选中项的 label</li>
        <li>清空搜索框或输入其他关键词</li>
        <li>确认 Select 组件仍然显示正确的 label</li>
      </ol>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Select } from '../../src/components/Select';

// 单选远程搜索
const singleValue = ref('');
const singleOptions = ref([]);
const singleLoading = ref(false);

// 多选远程搜索
const multipleValue = ref([]);
const multipleOptions = ref([]);
const multipleLoading = ref(false);

// 模拟数据
const allLanguages = [
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
  { value: 'php', label: 'PHP' },
  { value: 'ruby', label: 'Ruby' },
  { value: 'scala', label: 'Scala' },
];

const allTech = [
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

// 远程搜索方法
const handleSingleSearch = query => {
  console.log('🔍 单选远程搜索:', query);

  if (query) {
    singleLoading.value = true;
    setTimeout(() => {
      singleOptions.value = allLanguages.filter(item =>
        item.label.toLowerCase().includes(query.toLowerCase())
      );
      singleLoading.value = false;
      console.log('📊 单选搜索结果:', singleOptions.value);
    }, 300);
  } else {
    singleOptions.value = [];
    console.log('🚫 清空单选搜索结果');
  }
};

const handleMultipleSearch = query => {
  console.log('🔍 多选远程搜索:', query);

  if (query) {
    multipleLoading.value = true;
    setTimeout(() => {
      multipleOptions.value = allTech.filter(item =>
        item.label.toLowerCase().includes(query.toLowerCase())
      );
      multipleLoading.value = false;
      console.log('📊 多选搜索结果:', multipleOptions.value);
    }, 250);
  } else {
    multipleOptions.value = [];
    console.log('🚫 清空多选搜索结果');
  }
};

// 辅助方法
const getSingleLabel = () => {
  if (!singleValue.value) return '无选择';
  const option = allLanguages.find(item => item.value === singleValue.value);
  return option ? option.label : singleValue.value;
};

const clearSingle = () => {
  singleValue.value = '';
};

const setSingleValue = () => {
  singleValue.value = 'python';
};

const clearMultiple = () => {
  multipleValue.value = [];
};

const setMultipleValue = () => {
  multipleValue.value = ['vue', 'react', 'nodejs'];
};
</script>

<style scoped>
h2 {
  color: #333;
  margin-bottom: 30px;
}

h3 {
  color: #666;
  margin-bottom: 15px;
  font-size: 16px;
}

p {
  margin: 5px 0;
  color: #666;
  font-size: 14px;
}

strong {
  color: #333;
}

button {
  padding: 5px 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background: #f5f5f5;
  cursor: pointer;
}

button:hover {
  background: #e5e5e5;
}

ol {
  color: #666;
  line-height: 1.6;
}

li {
  margin-bottom: 5px;
}
</style>
