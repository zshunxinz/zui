<template>
    <button
      class="btn"
      :class="[`btn--${type}`, `btn--${size}`, { 'is-disabled': disabled, 'btn--text': text, 'btn--border': border, 'btn--shadow': shadow, 'btn--loading': isLoading }]"
      :style="{ borderRadius: `${borderRadius}px`, 'background-color': bgColor,'color':color, 'border-color': borderColor }"
      :disabled="disabled || isLoading" :aria-busy="isLoading"
      @click="handleClick"
      @mouseenter="handleHover"
    >
      <template v-if="!isLoading"><slot /></template>
      <template v-else>
        <span class="spinner"></span>
        <slot name="loadData">
          <span class="loading-text">Loading...</span>        
        </slot>
      </template>
    </button>
  </template>
  
  <script setup>
 
  const props = defineProps({
    type: {
      type: String,
      default: 'default',
      validator: (val) => ['default','primary', 'success', 'warning', 'danger', 'info'].includes(val)
    },
    size: {
      type: String,
      default: 'medium',
      validator: (val) => ['small', 'medium', 'large'].includes(val)
    },
    disabled: {
      type: Boolean,
      default: false
    },
    text: {
      type: Boolean,
      default: false
    },
    border: {
      type: Boolean,
      default: false
    },
    shadow: {
      type: Boolean,
      default: false
    },
    borderRadius: {
      type: Number,
      default: 0
    },
    bgColor: {
      type: String,
      default: undefined
    },
    color: {
      type: String,
      default: undefined
    },
    borderColor: {
      type: String,
      default: undefined
    },
    loading: {
      type: Boolean,
      default: false
    }
  })
  
  import { ref, watch } from 'vue';

  const isLoading = ref(props.loading !== undefined ? props.loading : false);

  watch(() => props.loading,
    (newVal) => {
      if (newVal !== undefined) {
        isLoading.value = newVal;
      }
    }
  );

  const emit = defineEmits(['click', 'hover'])
  
  function handleClick(event) {
    if (props.disabled || isLoading.value) return;
    
    // 只有传入loading参数时才进入加载状态
    if (props.loading) {
    
      isLoading.value = true;
      
      // 自动关闭加载状态并通知外部
      setTimeout(() => {
        isLoading.value = false;
        emit('update:loading', false);
      }, 2000);
      emit('click', event);
    } else {
      // 未传入loading参数，直接触发点击事件
      emit('click', event);
    }
  }

  function handleHover() {
    if (!props.disabled) emit('hover')
  }
  </script>
  
  <style scoped>


  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 1rem;
    font-size: 14px;
    cursor: pointer;
    border: 1px solid transparent;
    transition: all 0.2s ease;
    font-weight: 500;
    /* box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05); */
  }
  

  .btn--default {
    background-color: var(--color-background);
    color: var(--color-text);
  }

  .btn--default:hover:not(.is-disabled) {
    background-color: var(--color-disabled);
  }

  .btn--primary {
    background-color: var(--color-primary);
    color: white;
  }

  .btn--shadow {
    box-shadow: 0 1px 3px rgba(59, 130, 246, 0.3);
  }

  .btn--primary:hover:not(.is-disabled) {
    background-color: var(--color-primary-hover);
    box-shadow: 0 1px 3px rgba(59, 130, 246, 0.3);
  }

  .btn--primary:active:not(.is-disabled) {
    background-color: var(--color-primary-active);
  }
  
  .btn--success {
    background-color: var(--color-success);
    color: white;
  }

  .btn--success:hover:not(.is-disabled) {
    background-color: var(--color-success-hover);
  }

  .btn--success:active:not(.is-disabled) {
    background-color: #047857;
  }
  
  .btn--warning {
    background-color: var(--color-warning);
    color: white;
  }

  .btn--warning:hover:not(.is-disabled) {
    background-color: var(--color-warning-hover);
  }

  .btn--warning:active:not(.is-disabled) {
    background-color: #b45309;
  }
  
  .btn--danger {
    background-color: var(--color-danger);
    color: white;
  }

  .btn--danger:hover:not(.is-disabled) {
    background-color: var(--color-danger-hover);
  }

  .btn--danger:active:not(.is-disabled) {
    background-color: #b91c1c;
  }
  
  .btn--info {
    background-color: var(--color-info);
    color: white;
  }

  .btn--info:hover:not(.is-disabled) {
    background-color: var(--color-info-hover);
  }

  .btn--info:active:not(.is-disabled) {
    background-color: #067f98;
  }
  
  .is-disabled {
    opacity: 0.5;
    cursor: not-allowed;
    background-color: var(--color-disabled) !important;
    color: var(--color-text-muted) !important;
    border-color: var(--color-border) !important;
    box-shadow: none !important;
  }

  .btn--loading {
    opacity: 0.7;
    cursor: wait;
    position: relative;
  }

  .spinner {
    display: inline-block;
    width: 16px;
    height: 16px;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    border-top-color: var(--color-loading-spinner, white);
    animation: spin 1s ease-in-out infinite;
    margin-right: 8px;
  }

  @keyframes spin {
    to { transform: rotate(360deg); }
  }

  .btn--loading .loading-text {
    margin-left: 8px;
  }

  /* Size variations */
  .btn--small {
    padding: 0.25rem 0.5rem;
    font-size: 12px;
  }

  .btn--large {
    padding: 0.75rem 1.5rem;
    font-size: 16px;
  }

  /* Text mode */
  .btn--text {
    background-color: transparent;
    color: var(--color-primary);
    /* border-color: transparent; */
    box-shadow: none;
  }

  .btn--text:hover:not(.is-disabled) {
    background-color: rgba(59, 130, 246, 0.1);
  }

  .btn--default.btn--text {color: var();}
  .btn--primary.btn--text { color: var(--color-primary); }
  .btn--success.btn--text { color: #28a745; }
  .btn--warning.btn--text { color: #ffc107; }
  .btn--danger.btn--text { color: #dc3545; }
  .btn--info.btn--text { color: #17a2b8; }

  /* Border mode */
  .btn--border {
    background-color: transparent;
    border: 1px solid var(--color-primary);
  }

  .btn--border:hover:not(.is-disabled) {
    background-color: rgba(59, 130, 246, 0.1);
  }

  .btn--primary.btn--border { border-color: var(--color-primary); color: var(--color-primary); }
  .btn--success.btn--border { border-color: #28a745; color: #28a745; }
  .btn--warning.btn--border { border-color: #ffc107; color: #ffc107; }
  .btn--danger.btn--border { border-color: #dc3545; color: #dc3545; }
  .btn--info.btn--border { border-color: #17a2b8; color: #17a2b8; }

  </style>
  