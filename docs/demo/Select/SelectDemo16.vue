<template>
  <div>
    <Select
      ref="selectRef"
      v-model="value"
      placeholder="搜索编程语言"
      filterable
      remote
      :remote-method="remoteMethod"
      :loading="loading"
      :options="options"
      loading-text="搜索中..."
      no-match-text="无匹配结果"
    />
  </div>
</template>

<script setup>
import { ref, watch, nextTick } from 'vue';
import { Select } from '../../../src/components/Select';

const value = ref('');
const options = ref([
  { value: 'javascript', label: 'JavaScript' },
  { value: 'typescript', label: 'TypeScript' },
]);
const loading = ref(false);
const selectRef = ref(null);

// 模拟远程数据源
const allOptions = [
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
  { value: 'clojure', label: 'Clojure' },
  { value: 'haskell', label: 'Haskell' },
];

const remoteMethod = query => {
  if (query) {
    loading.value = true;
    // 模拟网络延迟
    setTimeout(() => {
      const filteredResults = allOptions.filter(item =>
        item.label.toLowerCase().includes(query.toLowerCase())
      );
      options.value = filteredResults;
      loading.value = false;
    }, 300);
  } else {
    options.value = [];
  }
};
</script>
