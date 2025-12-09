<template>
  <div class="drawer-demo">
    <div class="demo-section">
      <h3>无头部抽屉</h3>
      <button class="btn btn--primary" @click="noHeaderDrawerVisible = true">
        打开无头部抽屉
      </button>
      <Drawer
        v-model:open="noHeaderDrawerVisible"
        :header="false"
        title="无头部抽屉"
        :closable="false"
      >
        <div class="demo-content">
          <p>这是一个没有头部区域的抽屉。</p>
          <p>
            通过设置
            <code>header="false"</code> 可以完全隐藏头部，包括标题和关闭按钮。
          </p>
          <button
            class="btn btn--primary"
            @click="noHeaderDrawerVisible = false"
          >
            关闭抽屉
          </button>
        </div>
      </Drawer>
    </div>

    <div class="demo-section">
      <h3>无头部无底部抽屉</h3>
      <button
        class="btn btn--primary"
        @click="noHeaderFooterDrawerVisible = true"
      >
        打开无头部无底部抽屉
      </button>
      <Drawer
        v-model:open="noHeaderFooterDrawerVisible"
        :header="false"
        :footer="false"
        :closable="false"
      >
        <div class="demo-content">
          <p>这是一个既没有头部也没有底部的抽屉。</p>
          <p>
            通过设置 <code>header="false"</code> 和
            <code>footer="false"</code> 可以完全隐藏这两个区域。
          </p>
          <button
            class="btn btn--primary"
            @click="noHeaderFooterDrawerVisible = false"
          >
            关闭抽屉
          </button>
        </div>
      </Drawer>
    </div>

    <div class="demo-section">
      <h3>仅关闭按钮的抽屉</h3>
      <button
        class="btn btn--primary"
        @click="onlyCloseBtnDrawerVisible = true"
      >
        打开仅关闭按钮的抽屉
      </button>
      <Drawer v-model:open="onlyCloseBtnDrawerVisible" title="">
        <div class="demo-content">
          <p>这是一个只有关闭按钮的抽屉。</p>
          <p>通过设置 <code>title=""</code> 可以只显示关闭按钮而不显示标题。</p>
        </div>
      </Drawer>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const noHeaderDrawerVisible = ref(false);
const noHeaderFooterDrawerVisible = ref(false);
const onlyCloseBtnDrawerVisible = ref(false);
</script>

<style scoped>
.drawer-demo {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.demo-section {
  margin-bottom: 24px;
}

.demo-content {
  padding: 16px;
  line-height: 1.6;
}

code {
  background-color: var(--color-bg-soft);
  padding: 2px 6px;
  border-radius: 3px;
  font-family: monospace;
}
</style>
