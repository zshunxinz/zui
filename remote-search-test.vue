<template>
  <div style="padding: 20px">
    <h2>远程搜索功能测试</h2>

    <div style="margin-bottom: 30px">
      <h3>1. 基础远程搜索（使用 options 属性）</h3>
      <Select
        v-model="value1"
        placeholder="搜索编程语言..."
        filterable
        remote
        :remote-method="handleSearch1"
        :loading="loading1"
        :options="options1"
        loading-text="搜索中..."
        no-match-text="无匹配结果"
        style="width: 300px"
      />
      <p><strong>当前值:</strong> {{ value1 }}</p>
      <p><strong>搜索结果数量:</strong> {{ options1.length }}</p>
    </div>

    <div style="margin-bottom: 30px">
      <h3>2. 分组远程搜索（使用 slot）</h3>
      <Select
        v-model="value2"
        placeholder="搜索工具和框架..."
        filterable
        remote
        :remote-method="handleSearch2"
        :loading="loading2"
        loading-text="搜索中..."
        no-match-text="无匹配结果"
        style="width: 300px"
      >
        <template v-for="group in groupedResults" :key="group.label">
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
      <p><strong>当前值:</strong> {{ value2 }}</p>
      <p><strong>分组数量:</strong> {{ groupedResults.length }}</p>
    </div>

    <div style="margin-bottom: 30px">
      <h3>3. 多选远程搜索</h3>
      <Select
        v-model="value3"
        placeholder="选择多个技术..."
        filterable
        remote
        multiple
        :remote-method="handleSearch3"
        :loading="loading3"
        :options="options3"
        loading-text="搜索中..."
        no-match-text="无匹配结果"
        style="width: 400px"
      />
      <p><strong>当前值:</strong> {{ value3 }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Select, Option, OptionGroup } from '../../src/components/Select';

// 基础远程搜索
const value1 = ref('');
const options1 = ref([]);
const loading1 = ref(false);

// 分组远程搜索
const value2 = ref('');
const groupedResults = ref([]);
const loading2 = ref(false);

// 多选远程搜索
const value3 = ref([]);
const options3 = ref([]);
const loading3 = ref(false);

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

const techData = {
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
};

const allTech = Object.values(techData).flat();

// 远程搜索方法
const handleSearch1 = query => {
  console.log('🔍 基础远程搜索:', query);

  if (query) {
    loading1.value = true;
    setTimeout(() => {
      options1.value = languages.filter(item =>
        item.label.toLowerCase().includes(query.toLowerCase())
      );
      loading1.value = false;
      console.log('📊 基础搜索结果:', options1.value);
    }, 300);
  } else {
    options1.value = [];
    console.log('🚫 清空基础搜索结果');
  }
};

const handleSearch2 = query => {
  console.log('🔍 分组远程搜索:', query);

  if (query) {
    loading2.value = true;
    setTimeout(() => {
      const results = [];
      const searchTerm = query.toLowerCase();

      Object.keys(techData).forEach(groupName => {
        const filteredOptions = techData[groupName].filter(item =>
          item.label.toLowerCase().includes(searchTerm)
        );

        if (filteredOptions.length > 0) {
          results.push({
            label: groupName,
            options: filteredOptions,
          });
        }
      });

      groupedResults.value = results;
      loading2.value = false;
      console.log('📊 分组搜索结果:', groupedResults.value);
    }, 400);
  } else {
    groupedResults.value = [];
    console.log('🚫 清空分组搜索结果');
  }
};

const handleSearch3 = query => {
  console.log('🔍 多选远程搜索:', query);

  if (query) {
    loading3.value = true;
    setTimeout(() => {
      options3.value = allTech.filter(item =>
        item.label.toLowerCase().includes(query.toLowerCase())
      );
      loading3.value = false;
      console.log('📊 多选搜索结果:', options3.value);
    }, 250);
  } else {
    options3.value = [];
    console.log('🚫 清空多选搜索结果');
  }
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
  margin: 8px 0;
  color: #666;
  font-size: 14px;
}

strong {
  color: #333;
}
</style>
