# 开发规范和规则

- Next.js 15 动态路由修复规范：1) params 类型改为 Promise<{slug: string}>，2) 在 generateMetadata 和组件中使用 await params 获取参数，3) 组件需要声明为 async function，4) 客户端交互功能需要单独抽取为 'use client' 组件
