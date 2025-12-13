<template>
  <div class="fix-test">
    <h2>分组功能修复验证</h2>

    <section>
      <h3>最简单的分组测试</h3>
      <Select
        v-model="value"
        placeholder="测试可折叠分组"
        @visible-change="onVisibleChange"
      >
        <OptionGroup
          label="测试分组1"
          :collapsible="true"
          :default-collapsed="false"
        >
          <Option label="选项1" value="1" />
          <Option label="选项2" value="2" />
          <OptionGroup
            label="测试分组2"
            :collapsible="true"
            :default-collapsed="true"
          >
            <Option label="选项03" value="3" />
            <Option label="选项04" value="4" />
            <OptionGroup
              label="测试分组3"
              :collapsible="true"
              :default-collapsed="false"
            >
              <Option label="选项05" value="5" />
              <Option label="选项06" value="6" />
            </OptionGroup>
          </OptionGroup>
        </OptionGroup>
        <OptionGroup
          label="独立分组"
          :collapsible="true"
          :default-collapsed="false"
        >
          <Option label="独立选项1" value="independent1" />
          <Option label="独立选项2" value="independent2" />
        </OptionGroup>
      </Select>
      <p>当前值: {{ value }}</p>
      <p>下拉框状态: {{ dropdownVisible ? '打开' : '关闭' }}</p>
    </section>

    <section>
      <h3>无分组测试（对比）</h3>
      <Select v-model="value2" placeholder="无分组选项">
        <Option label="选项A" value="a" />
        <Option label="选项B" value="b" />
      </Select>
      <p>当前值: {{ value2 }}</p>
    </section>

    <section>
      <h3>使用options属性（对比）</h3>
      <Select
        v-model="value3"
        :options="testOptions"
        placeholder="options属性"
      />
      <p>当前值: {{ value3 }}</p>
    </section>
    <section>
      <h3>可搜索 + 可折叠分组测试</h3>
      <Select v-model="value4" placeholder="搜索可折叠分组" :filterable="true">
        <OptionGroup
          label="前端技术"
          :collapsible="true"
          :default-collapsed="false"
        >
          <Option label="Vue.js" value="vue" />
          <Option label="React" value="react" />
          <OptionGroup
            label="构建工具"
            :collapsible="true"
            :default-collapsed="true"
          >
            <Option label="Vite" value="vite" />
            <Option label="Webpack" value="webpack" />
          </OptionGroup>
        </OptionGroup>
        <OptionGroup
          label="后端技术"
          :collapsible="true"
          :default-collapsed="false"
        >
          <Option label="Node.js" value="nodejs" />
          <Option label="Python" value="python" />
        </OptionGroup>
      </Select>
      <p>当前值: {{ value4 }}</p>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Select, Option, OptionGroup } from '../components/Select';

const value = ref('');
const value2 = ref('');
const value3 = ref('');
const value4 = ref('');
const dropdownVisible = ref(false);

const testOptions = [
  { value: 'opt1', label: '选项1' },
  { value: 'opt2', label: '选项2' },
  { value: 'opt3', label: '选项3' },
];

const onVisibleChange = visible => {
  dropdownVisible.value = visible;
  console.log('🔍 下拉框状态变化:', visible);
};
</script>

<style scoped>
.fix-test {
  padding: 20px;
  max-width: 600px;
  border: 2px solid var(--color-primary);
  border-radius: 8px;
  margin: 20px 0;
}

section {
  margin-bottom: 20px;
  padding: 15px;
  border: 1px solid #eee;
  border-radius: 6px;
  background: #f9f9f9;
}

h2 {
  color: var(--color-primary);
  margin-bottom: 20px;
}

h3 {
  color: #555;
  margin-bottom: 10px;
  font-size: 14px;
}

p {
  margin-top: 8px;
  color: #666;
  font-size: 13px;
  font-weight: bold;
}
</style>
