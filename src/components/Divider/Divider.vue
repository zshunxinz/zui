<template>
    <div class="x-divider" :class="[
        `x-divider--${direction}`,
        `x-divider--${orientation}`,
        `x-divider--${ctype}`,
        { 'x-divider--with-text': hasText }
    ]" :style="dividerStyle">
        <template v-if="hasText">
            <div class="x-divider__line x-divider__line--left"
                :style="{ borderTopWidth: size + 'px', borderColor: color }"></div>
            <div class="x-divider__text" :style="{ color: textColor }">{{ text }}</div>
            <div class="x-divider__line x-divider__line--right"
                :style="{ borderTopWidth: size + 'px', borderColor: color }"></div>
        </template>
        <template v-else>
            <div class="x-divider__line" :style="{ borderTopWidth: size + 'px', borderColor: color }"></div>
        </template>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
    /** 分割线方向 */
    direction?: 'horizontal' | 'vertical';
    /** 分割线文字位置 */
    orientation?: 'left' | 'center' | 'right';
    /** 分割线样式类型 */
    ctype?: 'solid' | 'dashed' | 'dotted' | 'double';
    /** 分割线宽度/高度 */
    size?: number;
    /** 分割线上下 margin (垂直方向时为左右 margin) */
    margin?: number | string;
    /** 分割线文字内容 */
    text?: string;
    /** 文字颜色 */
    textColor?: string;
    /** 分割线颜色 */
    color?: string;
}

const props = withDefaults(defineProps<Props>(), {
    direction: 'horizontal',
    orientation: 'center',
    ctype: 'solid',
    size: 1,
    margin: 16,
    text: '',
    textColor: '',
    color: '',
});

const hasText = computed(() => !!props.text);

const dividerStyle = computed(() => {
    const style: Record<string, string | number> = {};

    // 处理边距
    if (props.margin) {
        if (props.direction === 'horizontal') {
            style.margin = `${typeof props.margin === 'number' ? `${props.margin}px` : props.margin} 0`;
        } else {
            style.margin = `0 ${typeof props.margin === 'number' ? `${props.margin}px` : props.margin}`;
        }
    }

    return style;
});
</script>

<style scoped>
.x-divider {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    color: var(--color-text-muted);
    font-size: var(--font-size-0);
}

/* 方向变体 */
.x-divider--horizontal {
    width: 100%;
    flex-direction: row;
}

.x-divider--vertical {
    height: 1em;
    flex-direction: column;
}

/* 文字位置变体 */
.x-divider--left {
    justify-content: flex-start;
}

.x-divider--center {
    justify-content: center;
}

.x-divider--right {
    justify-content: flex-end;
}

/* 线条样式 */
.x-divider__line {
    border-color: var(--color-border-1);
    border-style: solid;
    border-width: 0;
    flex: 1;
}

.x-divider--horizontal .x-divider__line {
    border-top-width: 1px;
}

.x-divider--vertical .x-divider__line {
    border-left-width: 1px;
    height: 100%;
}

/* 样式类型变体 */
.x-divider--solid .x-divider__line {
    border-style: solid;
}

.x-divider--dashed .x-divider__line {
    border-style: dashed;
}

.x-divider--dotted .x-divider__line {
    border-style: dotted;
}

.x-divider--double .x-divider__line {
    border-style: double;
}

/* 带文字样式 */
.x-divider--with-text .x-divider__line--left {
    margin-right: var(--space-2);
}

.x-divider--with-text .x-divider__line--right {
    margin-left: var(--space-2);
}

.x-divider--left.x-divider--with-text .x-divider__line--right {
    display: none;
}

.x-divider--right.x-divider--with-text .x-divider__line--left {
    display: none;
}

.x-divider__text {
    padding: 0 var(--space-2);
    white-space: nowrap;
    color: var(--color-text);
}
</style>