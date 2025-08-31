<template>
    <form class="x-form" :class="{ 'x-form--disabled': disabled }" @submit.prevent="handleSubmit">
        <slot></slot>
    </form>
</template>

<script setup lang="ts">
import { ref, watch, provide, computed } from 'vue';

const props = defineProps({
    modelValue: {
        type: Object,
        required: true
    },
    rules: {
        type: Object,
        default: () => ({})
    },
    disabled: {
        type: Boolean,
        default: false
    },
    labelWidth: {
        type: String,
        default: '100px'
    },
    labelPosition: {
        type: String,
        default: 'left'
    },
    labelAlign: {
        type: String,
        default: 'right'
    }
});

const emit = defineEmits(['update:modelValue', 'submit', 'validate']);

// 表单数据响应式对象
const formData = ref({ ...props.modelValue });
// 验证错误信息
const errors = ref({});

// 提供表单上下文
provide('formContext', {
    formData,
    errors,
    disabled: computed(() => props.disabled),
    labelWidth: computed(() => props.labelWidth),
    validateField: (field) => validateField(field),
    labelPosition: computed(() => props.labelPosition),
    labelAlign: computed(() => props.labelAlign),
});

// 监听表单数据变化，同步到modelValue
watch(formData,
    (newVal) => {
        emit('update:modelValue', newVal);
    },
    { deep: true }
);

// 监听外部modelValue变化，同步到内部formData
watch(
    () => props.modelValue,
    (newVal) => {
        formData.value = { ...newVal };
    },
    { immediate: true, deep: true }
);

// 验证单个字段
const validateField = (field) => {
    const rule = props.rules[field];
    if (!rule) return true;

    const value = formData.value[field];
    let errorMessage = '';

    if (rule.required && (value === undefined || value === null || value === '')) {
        errorMessage = rule.message || `${field} is required`;
    } else if (rule.validator && typeof rule.validator === 'function') {
        const result = rule.validator(value);
        if (result !== true) {
            errorMessage = result || `${field} validation failed`;
        }
    }

    errors.value[field] = errorMessage;
    return !errorMessage;
};

// 验证整个表单
const validate = () => {
    const valid = true;
    errors.value = {};

    Object.keys(props.rules).forEach(field => {
        const fieldValid = validateField(field);
        if (!fieldValid) valid = false;
    });

    emit('validate', valid);
    return valid;
};

// 处理表单提交
const handleSubmit = () => {
    if (validate()) {
        emit('submit', formData.value);
    }
};

// 暴露方法
defineExpose({
    validate,
    validateField,
    resetFields: () => {
        formData.value = { ...props.modelValue };
        errors.value = {};
    }
});
</script>

<style scoped>
.x-form {
    width: 100%;
    font-family: var(--font-family);
}

.x-form--disabled {
    opacity: 0.7;
    pointer-events: none;
}
</style>
