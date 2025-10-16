## 快速目标

为 AI 编码助手提供在此仓库中能马上上手的、可操作性强的约定与示例。下面内容聚焦于本项目的结构、重要入口、常用命令和组件开发/发布的具体步骤。

## 项目概览

- 技术栈：Vue 3 + Vite（见 `package.json`、`vite.config.js`）。
- 本库是一个组件库（UI library），组件放在 `src/components/`，示例与文档位于 `docs/` 和 `docs-dist/`。
- 主要安装/注册点：`src/install.ts` 使用 `src/components/index.ts` 中的 `install` 方法批量注册组件，并安装 `ToastPlugin`（`src/components/Sonner/ToastPlugin`）。

## 常用命令（来自 `package.json`）

- 本地开发：`npm run dev`（启动 Vite 开发服务器）。
- 打包组件/站点：`npm run build`（Vite build）。
- 本地预览打包：`npm run preview`。
- 文档（VitePress）：`npm run docs:dev`、`npm run docs:build`、`npm run docs:preview`。

在变更组件或样式后，先用 `npm run dev` 本地验证；变更文档用 `npm run docs:dev` 查看 docs 页面。

## 关键文件与惯例（必须检查）

- 组件目录：`src/components/<ComponentName>/`。组件通常在该目录下有实现文件并在 `src/components/index.ts` 中被导出并注册。
- 全局样式：`src/style.css`，以及 `src/styles/theme.css` / `src/styles/variables.css`（`src/install.ts` 中引入）。
- 入口：`src/main.js`（示例 app）演示如何 `app.use(Zui)` 和挂载。
- 别名：`@` 指向 `src`（见 `vite.config.js` 与 `tsconfig.json`），优先使用 `@/...` 导入路径。
- Sonner/Toast：`src/components/Sonner/Sonner.vue` 与 `src/components/Sonner/ToastPlugin`，Toast 插件通过 `ToastPlugin.install(app)` 安装。

## 组件开发/上架步骤（明确到每一步）

1. 在 `src/components/<NewComp>/` 中创建组件实现（`.vue` 或 `.ts` + 样式）。
2. 在 `src/components/index.ts` 中导入并导出组件，同时在 `install` 中注册：
   - app.component('PascalName', Component)
3. 如需在按需引入或打包时暴露，确保在 `src/install.ts`（库顶层导出）中加入导出。
4. 本地验证：
   - 在 `src/App.vue` 或 docs/demo 中引入并运行 `npm run dev`。
5. 更新文档：在 `docs/` 添加或修改对应的 markdown，运行 `npm run docs:dev` 验证。

示例：注册 Sonner 和 ToastPlugin

```
// src/components/index.ts
import Sonner from './Sonner/Sonner.vue'
import ToastPlugin from './Sonner/ToastPlugin'

app.component('Sonner', Sonner)
if (ToastPlugin && ToastPlugin.install) ToastPlugin.install(app)
```

## 代码风格与类型提示

- TypeScript 配置严格（参见 `tsconfig.json`），路径别名 `@/*` 指向 `src/*`。
- 若增加新的 `.vue` 组件，请确保类型声明 `shims-vue.d.ts` 能覆盖（仓库已包含）。

## 文档与 demo 流程

- 文档源文件在 `docs/`，构建产物会输出至 `docs-dist/`。
- 修改组件后同时更新 docs 示例页（`docs/components` 或 `docs/examples`），确保 `npm run docs:dev` 下示例能运行。

## 集成点与注意事项

- 组件库模式：`src/install.ts` 为默认导出 install 对象，库用户通常使用 `app.use(Zui)`。
- ensure 当你重命名导出时，同时更新 `src/components/index.ts` 的导入/注册以及 `src/install.ts` 的再导出。
- 没有集成测试/CI 脚本的显式约定；变更前手动本地验证（dev、docs:dev、build）。

## PR 快检清单（建议）

- 变更组件时：添加/修改 `src/components/<X>`、更新 `src/components/index.ts` 注册、运行 `npm run dev` 验证。
- 文档变更：更新 `docs/`，运行 `npm run docs:dev` 并截图/确认示例。
- 样式变更：检查 `src/style.css`、`src/styles/*` 并验证主题切换。

## 如果不确定，先查看这些文件

- `package.json`（脚本）
- `vite.config.js`（别名与插件）
- `tsconfig.json`（路径、包含规则）
- `src/install.ts`、`src/components/index.ts`（组件注册与导出）
- `src/components/Sonner/`（特殊插件示例）
