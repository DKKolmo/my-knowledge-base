## 目标

重写优化概览页(`/guides/优化/`),把现有的 CardGrid 布局替换为:**纵向单列堆叠的 4 个毛玻璃框**,每个框含模块标题 + 一组**贴纸**;贴纸展示子标题,点击可**展开/收起简介内容**,并提供跳转到对应模块详情页的链接。

## 数据结构(4 个框 × 贴纸)

| 毛玻璃框 | 贴纸(子标题) | 详情页链接 |
|---------|--------------|-----------|
| 拓扑优化 | SIMP变密度法、水平集法、ESO/BESO、MMC/MMV、相场法、拓扑导数 | `/guides/优化/拓扑优化/` |
| 加劲肋优化 | 尺寸优化、位置优化、形状优化、拓扑优化 | `/guides/优化/加劲肋优化/` |
| 优化求解器 | OC、MMA、SQP、内点法、GA、PSO、SA | `/guides/优化/优化求解器/` |
| 算例测试 | MBB梁、悬臂梁、L型梁、交互演示 | `/guides/优化/算例测试/` |

## 实现方式:新建 Astro 组件(规避 MDX 的 oxc 解析坑)

**1. 新建 `src/components/OptimOverview.astro`**
- 组件内用 frontmatter 定义上述数据数组(模块名、贴纸列表、详情链接)。
- 渲染:`.optim-list`(纵向堆叠容器)→ 每个模块一个 `.optim-card`(毛玻璃框)→ 内含 `<h2>` 标题 + `.optim-tags`(贴纸 flex 容器)。
- 每个贴纸 `.optim-tag` 是 `<button>`(可点击展开),内含:贴纸名 + 一个 `<a>` "详情→"(跳转详情页,`stopPropagation` 避免触发展开)。
- 贴纸下方紧跟一个 `.optim-tag-body`(展开区,默认 `hidden`),放占位简介(如"待补充:方法原理、灵敏度推导、代表文献")。
- **交互 JS**:点贴纸 button → toggle 对应 body 的 `hidden`;支持同时展开多个(非互斥手风琴)。
- **样式**:复用首页 `kb-tabbar` 的毛玻璃风格(半透明 + `backdrop-filter: blur` + 圆角 + 柔光边框),保证视觉统一;贴纸用胶囊样式(类似 `kb-tab-btn` 的 hover/active 态)。scoped style。

**2. 修改 `src/content/docs/guides/优化/index.md`**
- import `OptimOverview` 组件。
- 删除现有 `CardGrid`/`Card` 内容,替换为 `<OptimOverview />`。
- 保留 frontmatter(title/description/sidebar)和开头的主题简介文字。

## 贴纸展开内容(初始占位)
每个贴纸展开后显示通用占位:`待补充:原理、灵敏度/特点、代表文献`。后续填实质内容时改组件数据数组即可。

## 不改动清单
- `astro.config.mjs`、`home-background.css` 不动
- 其他 4 个模块详情页(拓扑优化.md 等)不动
- 首页 `index.mdx`、`HomeTabs.astro` 不动

## 验证
- `astro dev` 确认 `/guides/优化/` 页面:4 个毛玻璃框纵向排列,贴纸展示子标题,点击贴纸展开占位内容,"详情→"链接跳转正确,背景图与毛玻璃效果正常。
