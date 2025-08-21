<template>
    <label class="x-switch" :class="[
        sizeClass,
        colorClass,
        {
            'is-checked': isChecked,
            'is-disabled': disabled,
            'is-loading': loading
        }
    ]" :style="switchStyle">
        <input type="checkbox" class="x-switch__input" :checked="isChecked" :disabled="disabled || loading"
            @change="handleChange" />
        <span class="x-switch__core">
            <span class="x-switch__button"></span>
        </span>
        <span v-if="$slots.default || inactiveText || activeText" class="x-switch__label">
            <slot>
                <span>{{ isChecked ? activeText : inactiveText }}</span>
            </slot>
        </span>
    </label>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
    modelValue?: boolean | string | number
    activeValue?: boolean | string | number
    inactiveValue?: boolean | string | number
    disabled?: boolean
    loading?: boolean
    size?: 'small' | 'default' | 'large'
    color?: string
    activeText?: string
    inactiveText?: string
    activeColor?: string
    inactiveColor?: string
}

interface Emits {
    (e: 'update:modelValue', value: boolean | string | number): void
    (e: 'change', value: boolean | string | number): void
}

const props = withDefaults(defineProps<Props>(), {
    modelValue: false,
    activeValue: true,
    inactiveValue: false,
    disabled: false,
    loading: false,
    size: 'default',
    color: 'primary'
})

const emit = defineEmits<Emits>()

const isChecked = computed(() => props.modelValue === props.activeValue)

const sizeClass = computed(() => `x-switch--${props.size}`)

const colorClass = computed(() => `x-switch--${props.color}`)

const switchStyle = computed(() => {
    const style: Record<string, string> = {}

    if (props.activeColor && isChecked.value) {
        style['--switch-active-color'] = props.activeColor
    }

    if (props.inactiveColor && !isChecked.value) {
        style['--switch-inactive-color'] = props.inactiveColor
    }

    return style
})

const handleChange = (event: Event) => {
    const target = event.target as HTMLInputElement
    const value = target.checked ? props.activeValue : props.inactiveValue

    emit('update:modelValue', value)
    emit('change', value)
}
</script>

<style scoped>
.x-switch {
    display: inline-flex;
    align-items: center;
    position: relative;
    cursor: pointer;
    user-select: none;
    transition: all 0.3s ease;
}

.x-switch.is-disabled {
    cursor: not-allowed;
    opacity: 0.6;
}

.x-switch.is-loading {
    cursor: not-allowed;
    opacity: 0.8;
}

.x-switch__input {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
}

.x-switch__core {
    position: relative;
    display: inline-block;
    width: 44px;
    height: 22px;
    border-radius: 11px;
    background-color: var(--switch-inactive-color, var(--x-color-text-disabled));
    transition: all 0.3s ease;
    box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.1);
}

.x-switch--small .x-switch__core {
    width: 36px;
    height: 18px;
    border-radius: 9px;
}

.x-switch--large .x-switch__core {
    width: 52px;
    height: 26px;
    border-radius: 13px;
}

.x-switch.is-checked .x-switch__core {
    background-color: var(--switch-active-color, var(--x-color-primary));
}

.x-switch__button {
    position: absolute;
    top: 2px;
    left: 2px;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background-color: white;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease;
}

.x-switch--small .x-switch__button {
    width: 14px;
    height: 14px;
}

.x-switch--large .x-switch__button {
    width: 22px;
    height: 22px;
}

.x-switch.is-checked .x-switch__button {
    transform: translateX(22px);
}

.x-switch--small.is-checked .x-switch__button {
    transform: translateX(18px);
}

.x-switch--large.is-checked .x-switch__button {
    transform: translateX(26px);
}

.x-switch__label {
    margin-left: 8px;
    font-size: var(--x-font-size-base);
    color: var(--x-color-text);
}

.x-switch--small .x-switch__label {
    font-size: var(--x-font-size-small);
}

.x-switch--large .x-switch__label {
    font-size: var(--x-font-size-large);
}

/* 颜色主题 */
.x-switch--primary.is-checked .x-switch__core {
    background-color: var(--x-color-primary);
}

.x-switch--success.is-checked .x-switch__core {
    background-color: var(--x-color-success);
}

.x-switch--warning.is-checked .x-switch__core {
    background-color: var(--x-color-warning);
}

.x-switch--danger.is-checked .x-switch__core {
    background-color: var(--x-color-danger);
}

.x-switch--info.is-checked .x-switch__core {
    background-color: var(--x-color-info);
}
</style>