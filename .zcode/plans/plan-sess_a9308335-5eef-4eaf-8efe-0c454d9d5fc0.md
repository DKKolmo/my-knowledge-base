## 目标

伸长导航栏:**整条横向铺满内容区宽度,按钮均匀等分占满整条**。不改位置(仍留在当前 hero 下方)。

## 方案:纯 CSS(仅改 `src/components/HomeTabs.astro` 一个文件)

在 `<style>` 里:
1. `.kb-tabbar` 的 `width: fit-content` 改为 `width: 100%`(铺满父容器宽度)。
2. `.kb-tab-btn` 增加 `flex: 1 1 0`(三个按钮等分整条宽度)。

其余样式(`margin: 0 auto`、毛玻璃、圆角、间距等)全部保持不变。

## 不改动清单
- 位置不动(仍在 hero 下方)
- `astro.config.mjs`、`home-background.css`、`index.mdx` 不动
- JS 不动

## 验证
- `astro dev` 确认导航栏铺满内容区宽度,三个按钮均匀等分。
