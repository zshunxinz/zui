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
import './index.css'
 
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


  
  </style>
  