---
title: 优化
description: 结构优化主题概览——拓扑优化、加劲肋优化、优化求解器与算例测试。
sidebar:
  label: 概览
  order: 0
---

import { Card, CardGrid, Aside } from '@astrojs/starlight/components';

本主题汇总本人当前阶段在**结构优化**方向的学习内容，围绕四个模块展开：

- **拓扑优化**与**加劲肋优化**：梳理各类主流优化方法及其代表性文献；
- **优化求解器**：讲解梯度类与非梯度类求解器的原理与适用场景；
- **算例测试**：以 JavaScript 复现结构化网格上的经典优化算例，配合可视化交互。

<Aside type="note" title="持续更新中">
  本主题处于框架搭建阶段，各模块的章节结构已就位，具体方法讲解与文献将逐步补充。
</Aside>

## 模块导航

<CardGrid stagger>
	<Card title="拓扑优化" icon="set" href="/guides/优化/拓扑优化/">
		介绍 SIMP、水平集、ESO/BESO、MMC/MMV、相场法、拓扑导数等主流方法及代表文献。
	</Card>
	<Card title="加劲肋优化" icon="rocket" href="/guides/优化/加劲肋优化/">
		按尺寸、位置、形状、拓扑四个层次梳理加劲肋优化方法与代表性文献。
	</Card>
	<Card title="优化求解器" icon="setting" href="/guides/优化/优化求解器/">
		讲解 OC、MMA、SQP、内点法等梯度求解器，以及 GA、PSO、SA 等非梯度求解器。
	</Card>
	<Card title="算例测试" icon="code" href="/guides/优化/算例测试/">
		用 JavaScript 在结构化网格上复现 MBB 梁、悬臂梁等经典优化算例，并配交互演示。
	</Card>
</CardGrid>
