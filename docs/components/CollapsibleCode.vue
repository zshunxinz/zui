<template>
    <div class="collapsible-code">
        <div class="code-header" @click="isOpen = !isOpen">
            <span class="code-title">{{ title || '示例代码' }}</span>
            <span class="code-toggle">{{ isOpen ? '收起' : '展开' }}</span>
        </div>
        <div class="code-content" v-show="isOpen" v-transition:expand>
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">

import { ref } from 'vue';

const props = defineProps({
    title: {
        type: String,
        default: '示例代码'
    },
    defaultOpen: {
        type: Boolean,
        default: true
    }
});

const isOpen: any = ref(props.defaultOpen);
</script>

<style scoped>
.collapsible-code {
    margin: 1rem 0;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.code-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.75rem 1rem;
    background-color: #f5f5f5;
    cursor: pointer;
    font-weight: 500;
}

.code-toggle {
    color: #666;
    font-size: 0.875rem;
    transition: transform 0.2s;
}

.code-content {
    border-top: 1px solid #eee;
}

/* 展开收起动画 */
.expand-enter-from,
.expand-leave-to {
    max-height: 0;
    opacity: 0;
}

.expand-enter-active,
.expand-leave-active {
    transition: max-height 0.3s ease, opacity 0.3s ease;
    max-height: 2000px;
}
</style>