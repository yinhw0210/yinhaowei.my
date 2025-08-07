# 常用模式和最佳实践

- Next.js 项目完整部署方案：1) Vercel 部署 (最简单，支持 Git 集成和 CLI)，2) Docker 容器化 (多阶段构建，支持 standalone 输出)，3) 传统服务器 (PM2 + Nginx)。关键配置：output: 'standalone'，安装 sharp，环境变量配置，性能优化 headers。部署脚本位于 scripts/deploy.sh，详细指南见 DEPLOYMENT.md
