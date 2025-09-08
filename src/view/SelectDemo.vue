<template>
  <div class="select-demo">
    <h2>Select 组件测试</h2>

    <!-- 基础选择器 -->
    <section>
      <h3>1. 基础选择器（使用 options 属性）</h3>
      <Select
        v-model="basicValue"
        :options="basicOptions"
        placeholder="请选择..."
        style="width: 200px"
      />
      <p>当前值: {{ basicValue }}</p>
    </section>

    <!-- 可搜索选择器 -->
    <section>
      <h3>2. 可搜索选择器</h3>
      <Select
        v-model="searchValue"
        :options="searchOptions"
        filterable
        placeholder="请输入搜索内容..."
        style="width: 200px"
      />
      <p>当前值: {{ searchValue }}</p>
    </section>

    <!-- 分组选择器（使用 slot） -->
    <section>
      <h3>3. 分组选择器</h3>
      <Select
        v-model="groupValue"
        placeholder="请选择城市..."
        style="width: 200px"
      >
        <OptionGroup label="热门城市">
          <Option value="beijing" label="北京" />
          <Option value="shanghai" label="上海" />
          <Option value="guangzhou" label="广州" />
          <Option value="shenzhen" label="深圳" />
        </OptionGroup>
        <OptionGroup label="江苏省">
          <Option value="nanjing" label="南京" />
          <Option value="suzhou" label="苏州" />
          <Option value="wuxi" label="无锡" />
        </OptionGroup>
        <OptionGroup label="浙江省" :disabled="true">
          <Option value="hangzhou" label="杭州" />
          <Option value="ningbo" label="宁波" />
        </OptionGroup>
      </Select>
      <p>当前值: {{ groupValue }}</p>
    </section>

    <!-- 可搜索的分组选择器 -->
    <section>
      <h3>4. 可搜索的分组选择器</h3>
      <Select
        v-model="searchGroupValue"
        filterable
        placeholder="请搜索城市..."
        style="width: 200px"
      >
        <OptionGroup label="直辖市">
          <Option value="beijing2" label="北京市" />
          <Option value="shanghai2" label="上海市" />
          <Option value="tianjin" label="天津市" />
          <Option value="chongqing" label="重庆市" />
        </OptionGroup>
        <OptionGroup label="省会城市">
          <Option value="nanjing2" label="南京市" />
          <Option value="hangzhou2" label="杭州市" />
          <Option value="jinan" label="济南市" />
          <Option value="zhengzhou" label="郑州市" />
          <Option value="wuhan" label="武汉市" />
        </OptionGroup>
        <OptionGroup label="其他城市">
          <Option value="suzhou2" label="苏州市" />
          <Option value="ningbo2" label="宁波市" />
          <Option value="qingdao" label="青岛市" />
        </OptionGroup>
      </Select>
      <p>当前值: {{ searchGroupValue }}</p>
    </section>

    <!-- 多选 -->
    <section>
      <h3>5. 多选选择器</h3>
      <Select
        v-model="multipleValue"
        multiple
        placeholder="请选择多个选项..."
        style="width: 300px"
      >
        <OptionGroup label="前端技术">
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
      <p>当前值: {{ multipleValue }}</p>
    </section>

    <!-- 可搜索多选 -->
    <section>
      <h3>6. 可搜索多选选择器</h3>
      <Select
        v-model="searchMultipleValue"
        multiple
        filterable
        placeholder="请搜索并选择..."
        style="width: 300px"
      >
        <OptionGroup label="编程语言">
          <Option value="javascript" label="JavaScript" />
          <Option value="typescript" label="TypeScript" />
          <Option value="python2" label="Python" />
          <Option value="java2" label="Java" />
          <Option value="csharp" label="C#" />
          <Option value="golang" label="Go" />
        </OptionGroup>
        <OptionGroup label="数据库">
          <Option value="mysql" label="MySQL" />
          <Option value="postgresql" label="PostgreSQL" />
          <Option value="mongodb" label="MongoDB" />
          <Option value="redis" label="Redis" />
        </OptionGroup>
      </Select>
      <p>当前值: {{ searchMultipleValue }}</p>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Select, Option, OptionGroup } from '../components/Select';

// 响应式数据
const basicValue = ref('');
const searchValue = ref('');
const groupValue = ref('');
const searchGroupValue = ref('');
const multipleValue = ref([]);
const searchMultipleValue = ref([]);

// 基础选项
const basicOptions = [
  { value: 'option1', label: '选项1' },
  { value: 'option2', label: '选项2' },
  { value: 'option3', label: '选项3' },
];

// 搜索选项
const searchOptions = [
  { value: 'apple', label: '苹果' },
  { value: 'banana', label: '香蕉' },
  { value: 'orange', label: '橙子' },
  { value: 'grape', label: '葡萄' },
  { value: 'watermelon', label: '西瓜' },
  { value: 'strawberry', label: '草莓' },
  { value: 'blueberry', label: '蓝莓' },
];
</script>

<style scoped>
.select-demo {
  padding: 20px;
  max-width: 800px;
}

section {
  margin-bottom: 30px;
  padding: 20px;
  border: 1px solid #eee;
  border-radius: 8px;
}

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
  margin-top: 10px;
  color: #888;
  font-size: 14px;
}
</style>
