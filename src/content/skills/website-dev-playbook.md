---
title: website-dev-playbook
repo: https://github.com/xuan7-7/website-dev-playbook
summary: 面向静态内容站（个人博客 / 作品集 / 落地页）的建站技能：把需求确认、技术栈选型、工程骨架、设计系统、页面实现、性能与上线验证拆成可执行流程。
tags:
  - DSH Skill
  - 静态站
  - GitHub Pages
  - MIT
order: 1
---

## 能做什么

- 先探测本机环境，再按类别（框架 / 样式 / 字体 / 图标 / 交互 / 部署）给技术栈候选
- 暗色模式、响应式与移动端适配流程
- 图片压缩、字体子集与性能预算
- 上线前检查清单与部署步骤
- 真实踩坑案例：子路径 404、图片裁切、暗色选中态

## 怎么用

```bash
# DSH：技能库粘贴仓库地址，或复制到技能目录
cp -r website-dev-playbook ~/.dsh/skills/website-dev-playbook
```

```bash
# 其他 agent（Claude Code / TRAE / Qwen Code 等）
npx skills add xuan7-7/website-dev-playbook -a claude-code
```

触发方式：说「做一个静态博客」。

## 项目目录

```text
website-dev-playbook/
├── SKILL.md            # 总纲：原则、阶段、路由
├── flows/              # 9 条内部流程
│   ├── dark-mode/
│   ├── responsive-navigation/
│   ├── mobile-adaptation/
│   ├── media-assets/
│   ├── performance/
│   ├── qa-launch/
│   ├── deployment/
│   ├── troubleshooting/
│   └── decision-options/
├── references/         # 骨架、内容模型、评测、案例
└── scripts/            # 可选脚本
```
