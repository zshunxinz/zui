<template>
  <div class="collapsible-test">
    <h2>可折叠分组功能测试</h2>

    <section>
      <h3>基础可折叠分组 - 左侧图标 ⬅️</h3>
      <p style="font-size: 12px; color: #666; margin-bottom: 10px">
        注意：图标在最左侧，然后是文字（默认位置）
      </p>
      <Select v-model="value1" placeholder="选择技术栈">
        <OptionGroup
          label="前端框架"
          :collapsible="true"
          :default-collapsed="false"
          icon-position="left"
        >
          <Option label="Vue 3" value="vue3" />
          <Option label="React" value="react" />
          <Option label="Angular" value="angular" />
        </OptionGroup>
        <OptionGroup
          label="后端技术"
          :collapsible="true"
          :default-collapsed="true"
          icon-position="left"
        >
          <Option label="Node.js" value="nodejs" />
          <Option label="Python" value="python" />
          <Option label="Java" value="java" />
        </OptionGroup>
      </Select>
      <p>当前值: {{ value1 }}</p>
    </section>

    <section>
      <h3>文字后图标位置 ️</h3>
      <p style="font-size: 12px; color: #666; margin-bottom: 10px">
        注意：图标紧贴在文字后面，不占满剩余空间
      </p>
      <Select v-model="value2" placeholder="选择开发工具">
        <OptionGroup
          label="编辑器"
          :collapsible="true"
          :default-collapsed="false"
          icon-position="after-text"
        >
          <Option label="VS Code" value="vscode" />
          <Option label="WebStorm" value="webstorm" />
        </OptionGroup>
        <OptionGroup
          label="测试工具"
          :collapsible="true"
          :default-collapsed="true"
          icon-position="after-text"
        >
          <Option label="Jest" value="jest" />
          <Option label="Cypress" value="cypress" />
        </OptionGroup>
      </Select>
      <p>当前值: {{ value2 }}</p>
    </section>

    <section>
      <h3>右侧图标位置 ➡️</h3>
      <p style="font-size: 12px; color: #666; margin-bottom: 10px">
        注意：图标在最右侧，与文字之间有最大间距
      </p>
      <Select v-model="value3" placeholder="选择数据库">
        <OptionGroup
          label="关系型数据库"
          :collapsible="true"
          :default-collapsed="false"
          icon-position="right"
        >
          <Option label="MySQL" value="mysql" />
          <Option label="PostgreSQL" value="postgresql" />
        </OptionGroup>
        <OptionGroup
          label="NoSQL 数据库"
          :collapsible="true"
          :default-collapsed="false"
          icon-position="right"
        >
          <Option label="MongoDB" value="mongodb" />
          <Option label="Redis" value="redis" />
        </OptionGroup>
      </Select>
      <p>当前值: {{ value3 }}</p>
    </section>

    <section>
      <h3>嵌套混合图标位置 🌳</h3>
      <p style="font-size: 12px; color: #666; margin-bottom: 10px">
        注意：观察嵌套分组的缩进层级效果
      </p>
      <Select v-model="value4" placeholder="选择前端技术">
        <OptionGroup
          label="框架与库"
          :collapsible="true"
          :default-collapsed="false"
          icon-position="left"
        >
          <Option label="Vue.js" value="vue" />
          <Option label="React.js" value="react" />
          <OptionGroup
            label="状态管理"
            :collapsible="true"
            :default-collapsed="false"
            icon-position="after-text"
          >
            <Option label="Vuex" value="vuex" />
            <Option label="Pinia" value="pinia" />
            <OptionGroup
              label="中间件"
              :collapsible="true"
              :default-collapsed="false"
              icon-position="right"
            >
              <Option label="Redux Thunk" value="thunk" />
              <Option label="Redux Saga" value="saga" />
              <OptionGroup
                label="工具库"
                :collapsible="true"
                :default-collapsed="true"
                icon-position="left"
              >
                <Option label="Redux DevTools" value="devtools" />
                <Option label="Reselect" value="reselect" />
              </OptionGroup>
            </OptionGroup>
          </OptionGroup>
        </OptionGroup>
        <OptionGroup
          label="构建工具"
          :collapsible="true"
          :default-collapsed="true"
          icon-position="right"
        >
          <Option label="Vite" value="vite" />
          <Option label="Webpack" value="webpack" />
          <OptionGroup
            label="插件"
            :collapsible="true"
            :default-collapsed="false"
            icon-position="after-text"
          >
            <Option label="Hot Reload" value="hot-reload" />
            <Option label="Code Splitting" value="code-splitting" />
          </OptionGroup>
        </OptionGroup>
      </Select>
      <p>当前值: {{ value4 }}</p>
    </section>

    <section>
      <h3>可搜索 + 可折叠</h3>
      <Select v-model="value5" placeholder="搜索技术" :filterable="true">
        <OptionGroup
          label="前端"
          :collapsible="true"
          :default-collapsed="false"
          icon-position="left"
        >
          <Option label="Vue.js" value="vue" />
          <Option label="React.js" value="react" />
          <OptionGroup
            label="构建工具"
            :collapsible="true"
            :default-collapsed="false"
            icon-position="after-text"
          >
            <Option label="Vite" value="vite" />
            <Option label="Webpack" value="webpack" />
          </OptionGroup>
        </OptionGroup>
        <OptionGroup
          label="后端"
          :collapsible="true"
          :default-collapsed="false"
          icon-position="right"
        >
          <Option label="Express" value="express" />
          <Option label="Koa" value="koa" />
        </OptionGroup>
      </Select>
      <p>当前值: {{ value5 }}</p>
    </section>

    <section>
      <h3>可搜索 + 可折叠</h3>
      <Select v-model="value5" placeholder="搜索技术" :filterable="true">
        <OptionGroup
          label="前端"
          :collapsible="true"
          :default-collapsed="false"
          icon-position="left"
        >
          <Option label="Vue.js" value="vue" />
          <Option label="React.js" value="react" />
          <OptionGroup
            label="构建工具"
            :collapsible="true"
            :default-collapsed="false"
            icon-position="after-text"
          >
            <Option label="Vite" value="vite" />
            <Option label="Webpack" value="webpack" />
          </OptionGroup>
        </OptionGroup>
        <OptionGroup
          label="后端"
          :collapsible="true"
          :default-collapsed="false"
          icon-position="right"
        >
          <Option label="Express" value="express" />
          <Option label="Koa" value="koa" />
        </OptionGroup>
      </Select>
      <p>当前值: {{ value5 }}</p>
    </section>

    <section>
      <h3>🔎 嵌套缩进调试测试</h3>
      <p style="font-size: 12px; color: #666; margin-bottom: 10px">
        打开控制台查看调试信息，验证层级计算是否正确
      </p>
      <Select v-model="debugValue" placeholder="调试嵌套缩进">
        <OptionGroup
          label="第0层"
          :collapsible="true"
          :default-collapsed="false"
        >
          <Option label="0层选项1" value="0-1" />
          <OptionGroup
            label="第1层"
            :collapsible="true"
            :default-collapsed="false"
          >
            <Option label="1层选项1" value="1-1" />
            <Option label="1层选项2" value="1-2" />
            <OptionGroup
              label="第2层"
              :collapsible="true"
              :default-collapsed="false"
            >
              <Option label="2层选项1" value="2-1" />
              <OptionGroup
                label="第3层"
                :collapsible="true"
                :default-collapsed="false"
              >
                <Option label="3层选项1" value="3-1" />
                <Option label="3层选项2" value="3-2" />
                <OptionGroup
                  label="第4层"
                  :collapsible="true"
                  :default-collapsed="false"
                >
                  <Option label="4层选项1" value="4-1" />
                  <Option label="4层选项2" value="4-2" />
                  <OptionGroup
                    label="第5层"
                    :collapsible="true"
                    :default-collapsed="false"
                  >
                    <Option label="5层选项1" value="5-1" />
                    <Option label="5层选项2" value="5-2" />
                  </OptionGroup>
                </OptionGroup>
              </OptionGroup>
            </OptionGroup>
          </OptionGroup>
        </OptionGroup>
      </Select>
      <p>当前值: {{ debugValue }}</p>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Select, Option, OptionGroup } from '../components/Select';

const value1 = ref('');
const value2 = ref('');
const value3 = ref('');
const value4 = ref('');
const value5 = ref('');
const debugValue = ref('');
</script>

<style scoped>
.collapsible-test {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
}

section {
  margin-bottom: 30px;
  padding: 20px;
  border: 1px solid #eee;
  border-radius: 8px;
  background: #f9f9f9;
}

h2 {
  color: var(--color-primary);
  margin-bottom: 20px;
  text-align: center;
}

h3 {
  color: #555;
  margin-bottom: 15px;
  font-size: 16px;
}

p {
  margin-top: 10px;
  color: #666;
  font-weight: bold;
}
</style>
