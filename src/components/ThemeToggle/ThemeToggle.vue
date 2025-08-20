<template>
  <button
    class="theme-toggle"
    @click="toggleTheme"
    :aria-label="isDark ? '切换到亮色模式' : '切换到暗色模式'"
  >
    <svg
      v-if="!isDark"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <circle cx="12" cy="12" r="5"></circle>
      <line x1="12" y1="1" x2="12" y2="3"></line>
      <line x1="12" y1="21" x2="12" y2="23"></line>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
      <line x1="1" y1="12" x2="3" y2="12"></line>
      <line x1="21" y1="12" x2="23" y2="12"></line>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
    </svg>
    <svg
      v-else
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
    </svg>
  </button>
</template>

<script setup>
import { ref, watch, onMounted } from "vue";

const isDark = ref(false);

// 初始化主题
onMounted(() => {
  if (typeof window !== "undefined") {
    // 检查本地存储
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      isDark.value = true;
      document.documentElement.classList.add("dark");
    } else if (savedTheme === "light") {
      isDark.value = false;
      document.documentElement.classList.remove("dark");
    } else {
      // 跟随系统
      isDark.value = window.matchMedia("(prefers-color-scheme: dark)").matches;
      if (isDark.value) {
        document.documentElement.classList.add("dark");
      }
    }
  }
});

// 切换主题
const toggleTheme = () => {
  isDark.value = !isDark.value;
  if (typeof document !== "undefined") {
    if (isDark.value) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }
  if (typeof localStorage !== "undefined") {
    localStorage.setItem("theme", isDark.value ? "dark" : "light");
  }
};

// 监听主题变化
watch(isDark, (newValue) => {
  if (newValue) {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
});
</script>

<style scoped>
.theme-toggle {
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  color: var(--color-text);
  background-color: var(--color-background);
  transition: background-color 0.2s;
}

.theme-toggle:hover {
  background-color: var(--color-border);
}

.theme-toggle svg {
  width: 1.5rem;
  height: 1.5rem;
}
</style>
