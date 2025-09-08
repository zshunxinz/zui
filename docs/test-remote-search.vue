<template>
  <div style="padding: 20px">
    <h3>远程搜索功能测试</h3>

    <div style="margin-bottom: 20px">
      <h4>基础远程搜索</h4>
      <Select
        v-model="value"
        placeholder="输入搜索内容..."
        filterable
        remote
        :remote-method="handleRemoteSearch"
        :loading="loading"
        loading-text="搜索中..."
        no-match-text="无匹配结果"
        style="width: 300px"
      >
        <Option
          v-for="option in options"
          :key="option.value"
          :label="option.label"
          :value="option.value"
        />
      </Select>
      <p>当前值: {{ value }}</p>
      <p>搜索查询: {{ searchQuery }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Select, Option } from '../../src/components/Select';

const value = ref('');
const options = ref([]);
const loading = ref(false);
const searchQuery = ref('');

// 模拟数据
const mockData = [
  { value: 'apple', label: '苹果' },
  { value: 'banana', label: '香蕉' },
  { value: 'orange', label: '橙子' },
  { value: 'grape', label: '葡萄' },
  { value: 'strawberry', label: '草莓' },
  { value: 'watermelon', label: '西瓜' },
  { value: 'pineapple', label: '菠萝' },
  { value: 'mango', label: '芒果' },
  { value: 'peach', label: '桃子' },
  { value: 'cherry', label: '樱桃' },
];

const handleRemoteSearch = query => {
  searchQuery.value = query;
  console.log('远程搜索:', query);

  if (query) {
    loading.value = true;
    // 模拟网络延迟
    setTimeout(() => {
      options.value = mockData.filter(
        item => item.label.includes(query) || item.value.includes(query)
      );
      loading.value = false;
      console.log('搜索结果:', options.value);
    }, 500);
  } else {
    options.value = [];
  }
};
</script>
