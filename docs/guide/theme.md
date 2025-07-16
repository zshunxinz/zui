# 主题配置
<script>
// 颜色复制功能 - 仅在浏览器环境执行
if (typeof window !== 'undefined') {
  function setupColorCopy() {
    document.querySelectorAll('.color-swatch').forEach(swatch => {
      swatch.addEventListener('click', function() {
        const color = this.style.backgroundColor;
        navigator.clipboard.writeText(color).then(() => {
          const originalText = this.textContent;
          this.textContent = '✓ 已复制';
          this.style.opacity = '0.5';
          setTimeout(() => {
            this.textContent = originalText;
            this.style.opacity = '1';
          }, 1500);
        });
      });
    });
  }
  // 页面加载完成后初始化
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupColorCopy);
  } else {
    setupColorCopy();
  }
}
</script>


<style>
.color-swatch {
  width: 60px;
  height: 60px;
  aspect-ratio: 1 / 1;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 10px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
}


.color-swatch:hover {
  transform: scale(1.05);
}
.color-group {
  margin: 10px 0 0px;
  display: flex;
  gap:5px;
}

@media (max-width: 767px) {
  .color-group {
    flex-direction: column;
    gap: 3px;
    margin: 5px 0;
  }

  .color-swatch {
  width: 100%;
  height: 60px;
  aspect-ratio: 10/1;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 10px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
}
}
</style>

本文档详细介绍了项目中使用的主题配置，包括颜色系统、排版和其他设计令牌。所有主题变量都定义在 `src/styles/theme.css` 文件中，可以直接在项目中通过 CSS 变量引用。

## 颜色系统

主题提供了完整的颜色系统，每个颜色系列包含从 50（最浅）到 950（最深）的 11 个色阶，遵循 `--color-{name}-{shade}` 的命名规范,如`--color-neutral-50`

### 中性色 neutral

<div class="color-group">
  <div class="color-swatch" style="background-color: var(--color-neutral-50); color: #333;">50</div>
  <div class="color-swatch" style="background-color: var(--color-neutral-100); color: #333;">100</div>
  <div class="color-swatch" style="background-color: var(--color-neutral-200); color: #333;">200</div>
  <div class="color-swatch" style="background-color: var(--color-neutral-300); color: #333;">300</div>
  <div class="color-swatch" style="background-color: var(--color-neutral-400); color: #333;">400</div>
  <div class="color-swatch" style="background-color: var(--color-neutral-500); color: white;">500</div>
  <div class="color-swatch" style="background-color: var(--color-neutral-600); color: white;">600</div>
  <div class="color-swatch" style="background-color: var(--color-neutral-700); color: white;">700</div>
  <div class="color-swatch" style="background-color: var(--color-neutral-800); color: white;">800</div>
  <div class="color-swatch" style="background-color: var(--color-neutral-900); color: white;">900</div>
  <div class="color-swatch" style="background-color: var(--color-neutral-950); color: white;">950</div>
</div>

### 石色系列 stone

<div class="color-group">
  <div class="color-swatch" style="background-color: var(--color-stone-50); color: #333;">50</div>
  <div class="color-swatch" style="background-color: var(--color-stone-100); color: #333;">100</div>
  <div class="color-swatch" style="background-color: var(--color-stone-200); color: #333;">200</div>
  <div class="color-swatch" style="background-color: var(--color-stone-300); color: #333;">300</div>
  <div class="color-swatch" style="background-color: var(--color-stone-400); color: #333;">400</div>
  <div class="color-swatch" style="background-color: var(--color-stone-500); color: white;">500</div>
  <div class="color-swatch" style="background-color: var(--color-stone-600); color: white;">600</div>
  <div class="color-swatch" style="background-color: var(--color-stone-700); color: white;">700</div>
  <div class="color-swatch" style="background-color: var(--color-stone-800); color: white;">800</div>
  <div class="color-swatch" style="background-color: var(--color-stone-900); color: white;">900</div>
  <div class="color-swatch" style="background-color: var(--color-stone-950); color: white;">950</div>
</div>

### 锌色系列 zinc

<div class="color-group">
  <div class="color-swatch" style="background-color: var(--color-zinc-50); color: #333;">50</div>
  <div class="color-swatch" style="background-color: var(--color-zinc-100); color: #333;">100</div>
  <div class="color-swatch" style="background-color: var(--color-zinc-200); color: #333;">200</div>
  <div class="color-swatch" style="background-color: var(--color-zinc-300); color: #333;">300</div>
  <div class="color-swatch" style="background-color: var(--color-zinc-400); color: #333;">400</div>
  <div class="color-swatch" style="background-color: var(--color-zinc-500); color: white;">500</div>
  <div class="color-swatch" style="background-color: var(--color-zinc-600); color: white;">600</div>
  <div class="color-swatch" style="background-color: var(--color-zinc-700); color: white;">700</div>
  <div class="color-swatch" style="background-color: var(--color-zinc-800); color: white;">800</div>
  <div class="color-swatch" style="background-color: var(--color-zinc-900); color: white;">900</div>
  <div class="color-swatch" style="background-color: var(--color-zinc-950); color: white;">950</div>
</div>

### 青灰色系列 slate

<div class="color-group">
  <div class="color-swatch" style="background-color: var(--color-slate-50); color: #333;">50</div>
  <div class="color-swatch" style="background-color: var(--color-slate-100); color: #333;">100</div>
  <div class="color-swatch" style="background-color: var(--color-slate-200); color: #333;">200</div>
  <div class="color-swatch" style="background-color: var(--color-slate-300); color: #333;">300</div>
  <div class="color-swatch" style="background-color: var(--color-slate-400); color: #333;">400</div>
  <div class="color-swatch" style="background-color: var(--color-slate-500); color: white;">500</div>
  <div class="color-swatch" style="background-color: var(--color-slate-600); color: white;">600</div>
  <div class="color-swatch" style="background-color: var(--color-slate-700); color: white;">700</div>
  <div class="color-swatch" style="background-color: var(--color-slate-800); color: white;">800</div>
  <div class="color-swatch" style="background-color: var(--color-slate-900); color: white;">900</div>
  <div class="color-swatch" style="background-color: var(--color-slate-950); color: white;">950</div>
</div>

### 灰色系列 gray

<div class="color-group">
  <div class="color-swatch" style="background-color: var(--color-gray-50); color: #333;">50</div>
  <div class="color-swatch" style="background-color: var(--color-gray-100); color: #333;">100</div> 
  <div class="color-swatch" style="background-color: var(--color-gray-200); color: #333;">200</div>
  <div class="color-swatch" style="background-color: var(--color-gray-300); color: #333;">300</div>
  <div class="color-swatch" style="background-color: var(--color-gray-400); color: #333;">400</div>
  <div class="color-swatch" style="background-color: var(--color-gray-500); color: white;">500</div>
  <div class="color-swatch" style="background-color: var(--color-gray-600); color: white;">600</div>
  <div class="color-swatch" style="background-color: var(--color-gray-700); color: white;">700</div>
  <div class="color-swatch" style="background-color: var(--color-gray-800); color: white;">800</div>
  <div class="color-swatch" style="background-color: var(--color-gray-900); color: white;">900</div>
  <div class="color-swatch" style="background-color: var(--color-gray-950); color: white;">950</div>    
</div>

### 红色系列 red

<div class="color-group">
  <div class="color-swatch" style="background-color: var(--color-red-50); color: #333;">50</div>
  <div class="color-swatch" style="background-color: var(--color-red-100); color: #333;">100</div>
  <div class="color-swatch" style="background-color: var(--color-red-200); color: #333;">200</div>
  <div class="color-swatch" style="background-color: var(--color-red-300); color: #333;">300</div>
  <div class="color-swatch" style="background-color: var(--color-red-400); color: #333;">400</div>
  <div class="color-swatch" style="background-color: var(--color-red-500); color: white;">500</div>
  <div class="color-swatch" style="background-color: var(--color-red-600); color: white;">600</div>
  <div class="color-swatch" style="background-color: var(--color-red-700); color: white;">700</div>
  <div class="color-swatch" style="background-color: var(--color-red-800); color: white;">800</div>
  <div class="color-swatch" style="background-color: var(--color-red-900); color: white;">900</div>
  <div class="color-swatch" style="background-color: var(--color-red-950); color: white;">950</div>
</div>

### 橙色系列 orange

<div class="color-group">
  <div class="color-swatch" style="background-color: var(--color-orange-50); color: #333;">50</div>
  <div class="color-swatch" style="background-color: var(--color-orange-100); color: #333;">100</div>
  <div class="color-swatch" style="background-color: var(--color-orange-200); color: #333;">200</div>
  <div class="color-swatch" style="background-color: var(--color-orange-300); color: #333;">300</div>
  <div class="color-swatch" style="background-color: var(--color-orange-400); color: #333;">400</div>
  <div class="color-swatch" style="background-color: var(--color-orange-500); color: white;">500</div>
  <div class="color-swatch" style="background-color: var(--color-orange-600); color: white;">600</div>
  <div class="color-swatch" style="background-color: var(--color-orange-700); color: white;">700</div>
  <div class="color-swatch" style="background-color: var(--color-orange-800); color: white;">800</div>
  <div class="color-swatch" style="background-color: var(--color-orange-900); color: white;">900</div>
  <div class="color-swatch" style="background-color: var(--color-orange-950); color: white;">950</div>
</div>

### 琥珀色系列 amber

<div class="color-group">
  <div class="color-swatch" style="background-color: var(--color-amber-50); color: #333;">50</div>
  <div class="color-swatch" style="background-color: var(--color-amber-100); color: #333;">100</div>
  <div class="color-swatch" style="background-color: var(--color-amber-200); color: #333;">200</div>
  <div class="color-swatch" style="background-color: var(--color-amber-300); color: #333;">300</div>
  <div class="color-swatch" style="background-color: var(--color-amber-400); color: #333;">400</div>
  <div class="color-swatch" style="background-color: var(--color-amber-500); color: white;">500</div>
  <div class="color-swatch" style="background-color: var(--color-amber-600); color: white;">600</div>
  <div class="color-swatch" style="background-color: var(--color-amber-700); color: white;">700</div>
  <div class="color-swatch" style="background-color: var(--color-amber-800); color: white;">800</div>
  <div class="color-swatch" style="background-color: var(--color-amber-900); color: white;">900</div>
  <div class="color-swatch" style="background-color: var(--color-amber-950); color: white;">950</div>
</div>

### 黄色系列 yellow

<div class="color-group">
  <div class="color-swatch" style="background-color: var(--color-yellow-50); color: #333;">50</div>
  <div class="color-swatch" style="background-color: var(--color-yellow-100); color: #333;">100</div>
  <div class="color-swatch" style="background-color: var(--color-yellow-200); color: #333;">200</div>
  <div class="color-swatch" style="background-color: var(--color-yellow-300); color: #333;">300</div>
  <div class="color-swatch" style="background-color: var(--color-yellow-400); color: #333;">400</div>
  <div class="color-swatch" style="background-color: var(--color-yellow-500); color: white;">500</div>
  <div class="color-swatch" style="background-color: var(--color-yellow-600); color: white;">600</div>
  <div class="color-swatch" style="background-color: var(--color-yellow-700); color: white;">700</div>
  <div class="color-swatch" style="background-color: var(--color-yellow-800); color: white;">800</div>
  <div class="color-swatch" style="background-color: var(--color-yellow-900); color: white;">900</div>
  <div class="color-swatch" style="background-color: var(--color-yellow-950); color: white;">950</div>
</div>

### 石灰绿系列 lime

<div class="color-group">
  <div class="color-swatch" style="background-color: var(--color-lime-50); color: #333;">50</div>
  <div class="color-swatch" style="background-color: var(--color-lime-100); color: #333;">100</div>
  <div class="color-swatch" style="background-color: var(--color-lime-200); color: #333;">200</div>
  <div class="color-swatch" style="background-color: var(--color-lime-300); color: #333;">300</div>
  <div class="color-swatch" style="background-color: var(--color-lime-400); color: #333;">400</div>
  <div class="color-swatch" style="background-color: var(--color-lime-500);color: white;">500</div>
  <div class="color-swatch" style="background-color: var(--color-lime-600); color: white;">600</div>
  <div class="color-swatch" style="background-color: var(--color-lime-700); color: white;">700</div>
  <div class="color-swatch" style="background-color: var(--color-lime-800); color: white;">800</div>
  <div class="color-swatch" style="background-color: var(--color-lime-900); color: white;">900</div>
  <div class="color-swatch" style="background-color: var(--color-lime-950); color: white;">950</div>
</div>

### 绿色系列 green

<div class="color-group">
  <div class="color-swatch" style="background-color: var(--color-green-50); color: #333;">50</div>
  <div class="color-swatch" style="background-color: var(--color-green-100); color: #333;">100</div>
  <div class="color-swatch" style="background-color: var(--color-green-200); color: #333;">200</div>
  <div class="color-swatch" style="background-color: var(--color-green-300); color: #333;">300</div>
  <div class="color-swatch" style="background-color: var(--color-green-400); color: #333;">400</div>
  <div class="color-swatch" style="background-color: var(--color-green-500); color: white;">500</div>
  <div class="color-swatch" style="background-color: var(--color-green-600); color: white;">600</div>
  <div class="color-swatch" style="background-color: var(--color-green-700); color: white;">700</div>
  <div class="color-swatch" style="background-color: var(--color-green-800); color: white;">800</div>
  <div class="color-swatch" style="background-color: var(--color-green-900); color: white;">900</div>
  <div class="color-swatch" style="background-color: var(--color-green-950); color: white;">950</div>
</div>

### 天青色系列 teal

  <div class="color-group">
  <div class="color-swatch" style="background-color: var(--color-teal-50); color: #333;">50</div>
  <div class="color-swatch" style="background-color: var(--color-teal-100); color: #333;">100</div>
  <div class="color-swatch" style="background-color: var(--color-teal-200); color: #333;">200</div>
  <div class="color-swatch" style="background-color: var(--color-teal-300); color: #333;">300</div>
  <div class="color-swatch" style="background-color: var(--color-teal-400); color: #333;">400</div>
  <div class="color-swatch" style="background-color: var(--color-teal-500); color: white;">500</div>
  <div class="color-swatch" style="background-color: var(--color-teal-600); color: white;">600</div>
  <div class="color-swatch" style="background-color: var(--color-teal-700); color: white;">700</div>
  <div class="color-swatch" style="background-color: var(--color-teal-800); color: white;">800</div>
  <div class="color-swatch" style="background-color: var(--color-teal-900); color: white;">900</div>
  <div class="color-swatch" style="background-color: var(--color-teal-950); color: white;">950</div>
</div>

### 青色系列 cyan

<div class="color-group">
  <div class="color-swatch" style="background-color: var(--color-cyan-50); color: #333;">50</div>
  <div class="color-swatch" style="background-color: var(--color-cyan-100); color: #333;">100</div>
  <div class="color-swatch" style="background-color: var(--color-cyan-200); color: #333;">200</div>
  <div class="color-swatch" style="background-color: var(--color-cyan-300); color: #333;">300</div>
  <div class="color-swatch" style="background-color: var(--color-cyan-400); color: #333;">400</div>
  <div class="color-swatch" style="background-color: var(--color-cyan-500);  color: white;">500</div>
  <div class="color-swatch" style="background-color: var(--color-cyan-600); color: white;">600</div>
  <div class="color-swatch" style="background-color: var(--color-cyan-700); color: white;">700</div>
  <div class="color-swatch" style="background-color: var(--color-cyan-800); color: white;">800</div>
  <div class="color-swatch" style="background-color: var(--color-cyan-900); color: white;">900</div>
  <div class="color-swatch" style="background-color: var(--color-cyan-950); color: white;">950</div>
</div>

### 天蓝色系列 sky

<div class="color-group">
  <div class="color-swatch" style="background-color: var(--color-sky-50); color: #333;">50</div>
  <div class="color-swatch" style="background-color: var(--color-sky-100); color: #333;">100</div>
  <div class="color-swatch" style="background-color: var(--color-sky-200); color: #333;">200</div>
  <div class="color-swatch" style="background-color: var(--color-sky-300); color: #333;">300</div>
  <div class="color-swatch" style="background-color: var(--color-sky-400); color: #333;">400</div>
  <div class="color-swatch" style="background-color: var(--color-sky-500); color: white;">500</div>
  <div class="color-swatch" style="background-color: var(--color-sky-600); color: white;">600</div>
  <div class="color-swatch" style="background-color: var(--color-sky-700); color: white;">700</div>
  <div class="color-swatch" style="background-color: var(--color-sky-800); color: white;">800</div>
  <div class="color-swatch" style="background-color: var(--color-sky-900); color: white;">900</div>
  <div class="color-swatch" style="background-color: var(--color-sky-950); color: white;">950</div>
</div>

### 蓝色系列 blue

<div class="color-group">
  <div class="color-swatch" style="background-color: var(--color-blue-50); color: #333;">50</div>
  <div class="color-swatch" style="background-color: var(--color-blue-100); color: #333;">100</div>
  <div class="color-swatch" style="background-color: var(--color-blue-200); color: #333;">200</div>
  <div class="color-swatch" style="background-color: var(--color-blue-300); color: #333;">300</div>
  <div class="color-swatch" style="background-color: var(--color-blue-400); color: #333;">400</div> 
  <div class="color-swatch" style="background-color: var(--color-blue-500); color: white;">500</div>
  <div class="color-swatch" style="background-color: var(--color-blue-600); color: white;">600</div>
  <div class="color-swatch" style="background-color: var(--color-blue-700); color: white;">700</div>
  <div class="color-swatch" style="background-color: var(--color-blue-800); color: white;">800</div>
  <div class="color-swatch" style="background-color: var(--color-blue-900); color: white;">900</div>
  <div class="color-swatch" style="background-color: var(--color-blue-950); color: white;">950</div>
</div>

### 靛蓝色系列 indigo

<div class="color-group">
  <div class="color-swatch" style="background-color: var(--color-indigo-50); color: #333;">50</div>
  <div class="color-swatch" style="background-color: var(--color-indigo-100); color: #333;">100</div>
  <div class="color-swatch" style="background-color: var(--color-indigo-200); color: #333;">200</div>
  <div class="color-swatch" style="background-color: var(--color-indigo-300); color: #333;">300</div>
  <div class="color-swatch" style="background-color: var(--color-indigo-400); color: #333;">400</div>
  <div class="color-swatch" style="background-color: var(--color-indigo-500); color: white;">500</div>
  <div class="color-swatch" style="background-color: var(--color-indigo-600); color: white;">600</div>
  <div class="color-swatch" style="background-color: var(--color-indigo-700); color: white;">700</div>  
  <div class="color-swatch" style="background-color: var(--color-indigo-800); color: white;">800</div>
  <div class="color-swatch" style="background-color: var(--color-indigo-900); color: white;">900</div>
  <div class="color-swatch" style="background-color: var(--color-indigo-950); color: white;">950</div>
</div>

### 紫罗兰色 violet

<div class="color-group">
  <div class="color-swatch" style="background-color: var(--color-violet-50); color: #333;">50</div>
  <div class="color-swatch" style="background-color: var(--color-violet-100); color: #333;">100</div>
  <div class="color-swatch" style="background-color: var(--color-violet-200); color: #333;">200</div>
  <div class="color-swatch" style="background-color: var(--color-violet-300); color: #333;">300</div>
  <div class="color-swatch" style="background-color: var(--color-violet-400); color: #333;">400</div>
  <div class="color-swatch" style="background-color: var(--color-violet-500); color: white;">500</div>
  <div class="color-swatch" style="background-color: var(--color-violet-600); color: white;">600</div>
  <div class="color-swatch" style="background-color: var(--color-violet-700); color: white;">700</div>
  <div class="color-swatch" style="background-color: var(--color-violet-800); color: white;">800</div>
  <div class="color-swatch" style="background-color: var(--color-violet-900); color: white;">900</div>
  <div class="color-swatch" style="background-color: var(--color-violet-950); color: white;">950</div>
</div>

### 紫色系列 purple

<div class="color-group">
  <div class="color-swatch" style="background-color: var(--color-purple-50); color: #333;">50</div>
  <div class="color-swatch" style="background-color: var(--color-purple-100); color: #333;">100</div>
  <div class="color-swatch" style="background-color: var(--color-purple-200); color: #333;">200</div>
  <div class="color-swatch" style="background-color: var(--color-purple-300); color: #333;">300</div>
  <div class="color-swatch" style="background-color: var(--color-purple-400); color: #333;">400</div>
  <div class="color-swatch" style="background-color: var(--color-purple-500); color: white;">500</div>
  <div class="color-swatch" style="background-color: var(--color-purple-600); color: white;">600</div>
  <div class="color-swatch" style="background-color: var(--color-purple-700); color: white;">700</div>
  <div class="color-swatch" style="background-color: var(--color-purple-800); color: white;">800</div>
  <div class="color-swatch" style="background-color: var(--color-purple-900); color: white;">900</div>
  <div class="color-swatch" style="background-color: var(--color-purple-950); color: white;">950</div>
</div>

### 紫红色系列 fuchsia

<div class="color-group">
  <div class="color-swatch" style="background-color: var(--color-fuchsia-50); color: #333;">50</div>
  <div class="color-swatch" style="background-color: var(--color-fuchsia-100); color: #333;">100</div>
  <div class="color-swatch" style="background-color: var(--color-fuchsia-200); color: #333;">200</div>
  <div class="color-swatch" style="background-color: var(--color-fuchsia-300); color: #333;">300</div>
  <div class="color-swatch" style="background-color: var(--color-fuchsia-400); color: #333;">400</div>
  <div class="color-swatch" style="background-color: var(--color-fuchsia-500); color: white;">500</div>
  <div class="color-swatch" style="background-color: var(--color-fuchsia-600); color: white;">600</div>
  <div class="color-swatch" style="background-color: var(--color-fuchsia-700); color: white;">700</div>
  <div class="color-swatch" style="background-color: var(--color-fuchsia-800); color: white;">800</div>
  <div class="color-swatch" style="background-color: var(--color-fuchsia-900); color: white;">900</div>
  <div class="color-swatch" style="background-color: var(--color-fuchsia-950); color: white;">950</div>
</div>

### 粉色系列 pink

<div class="color-group">
  <div class="color-swatch" style="background-color: var(--color-pink-50); color: #333;">50</div>
  <div class="color-swatch" style="background-color: var(--color-pink-100); color: #333;">100</div>
  <div class="color-swatch" style="background-color: var(--color-pink-200); color: #333;">200</div>
  <div class="color-swatch" style="background-color: var(--color-pink-300); color: #333;">300</div>
  <div class="color-swatch" style="background-color: var(--color-pink-400); color: #333;">400</div>
  <div class="color-swatch" style="background-color: var(--color-pink-500); color: white;">500</div>
  <div class="color-swatch" style="background-color: var(--color-pink-600); color: white;">600</div>
  <div class="color-swatch" style="background-color: var(--color-pink-700); color: white;">700</div>
  <div class="color-swatch" style="background-color: var(--color-pink-800); color: white;">800</div>
  <div class="color-swatch" style="background-color: var(--color-pink-900); color: white;">900</div>
  <div class="color-swatch" style="background-color: var(--color-pink-950); color: white;">950</div>
</div>

### 玫瑰红系列 rose

<div class="color-group">
  <div class="color-swatch" style="background-color: var(--color-rose-50); color: #333;">50</div>
  <div class="color-swatch" style="background-color: var(--color-rose-100); color: #333;">100</div>
  <div class="color-swatch" style="background-color: var(--color-rose-200); color: #333;">200</div>
  <div class="color-swatch" style="background-color: var(--color-rose-300); color: #333;">300</div>
  <div class="color-swatch" style="background-color: var(--color-rose-400); color: #333;">400</div>
  <div class="color-swatch" style="background-color: var(--color-rose-500); color: white;">500</div>
  <div class="color-swatch" style="background-color: var(--color-rose-600); color: white;">600</div>
  <div class="color-swatch" style="background-color: var(--color-rose-700); color: white;">700</div>
  <div class="color-swatch" style="background-color: var(--color-rose-800); color: white;">800</div>
  <div class="color-swatch" style="background-color: var(--color-rose-900); color: white;">900</div>
  <div class="color-swatch" style="background-color: var(--color-rose-950); color: white;">950</div>
</div>

## 使用示例

在 CSS 中引用颜色变量：

```css
.button-primary {
  background-color: var(--color-blue-500);
  color: var(--color-white);
  border: 1px solid var(--color-blue-300);
}

.card {
  background-color: var(--color-neutral-50);
  border: 1px solid var(--color-neutral-200);
  color: var(--color-neutral-800);
}
```

在 Vue 单文件组件中使用：

```vue
<template>
  <div :style="{ backgroundColor: 'var(--color-green-50)' }"></div>
</template>

<style scoped>
.text {
  color: var(--color-purple-600);
}
</style>
```
