<template>
  <div class="test-group">
    <h2>分组测试</h2>

    <section>
      <h3>基础分组测试</h3>
      <Select
        v-model="testValue"
        placeholder="选择一个选项..."
        style="width: 250px"
      >
        <OptionGroup label="分组1">
          <Option value="a1" label="选项A1" />
          <Option value="a2" label="选项A2" />
        </OptionGroup>
        <OptionGroup label="分组2">
          <Option value="b1" label="选项B1" />
          <Option value="b2" label="选项B2" />
        </OptionGroup>
      </Select>
      <p>当前值: {{ testValue }}</p>
    </section>

    <section>
      <h3>搜索分组测试</h3>
      <Select
        v-model="searchTestValue"
        filterable
        placeholder="搜索分组选项..."
        style="width: 250px"
      >
        <OptionGroup label="前端框架">
          <Option value="vue" label="Vue.js" />
          <Option value="react" label="React" />
          <Option value="angular" label="Angular" />
        </OptionGroup>
        <OptionGroup label="后端技术">
          <Option value="nodejs" label="Node.js" />
          <Option value="python" label="Python" />
          <Option value="java" label="Java" />
        </OptionGroup>
      </Select>
      <p>当前值: {{ searchTestValue }}</p>
    </section>

    <section>
      <h3>禁用分组测试</h3>
      <Select
        v-model="disabledTestValue"
        placeholder="测试禁用分组..."
        style="width: 250px"
      >
        <OptionGroup label="可用选项">
          <Option value="enabled1" label="可用选项1" />
          <Option value="enabled2" label="可用选项2" />
        </OptionGroup>
        <OptionGroup label="禁用分组" :disabled="true">
          <Option value="disabled1" label="禁用选项1" />
          <Option value="disabled2" label="禁用选项2" />
        </OptionGroup>
      </Select>
      <p>当前值: {{ disabledTestValue }}</p>
    </section>

    <section>
      <h3>调试信息</h3>
      <p>检查控制台输出分组解析结果</p>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Select, Option, OptionGroup } from '../components/Select';

const testValue = ref('');
const searchTestValue = ref('');
const disabledTestValue = ref('');
</script>

<style scoped>
.test-group {
  padding: 20px;
  max-width: 600px;
}

section {
  margin-bottom: 25px;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 6px;
  background: #fafafa;
}

h2 {
  color: #333;
  margin-bottom: 20px;
}

h3 {
  color: #666;
  margin-bottom: 10px;
  font-size: 14px;
}

p {
  margin-top: 8px;
  color: #888;
  font-size: 13px;
}
</style>
