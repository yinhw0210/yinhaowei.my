# 常用模式和最佳实践

- Next.js 项目完整部署方案：1) Vercel 部署 (最简单，支持 Git 集成和 CLI)，2) Docker 容器化 (多阶段构建，支持 standalone 输出)，3) 传统服务器 (PM2 + Nginx)。关键配置：output: 'standalone'，安装 sharp，环境变量配置，性能优化 headers。部署脚本位于 scripts/deploy.sh，详细指南见 DEPLOYMENT.md
- Next.js 服务器部署最佳实践方案：1) 使用 Nginx 反向代理配置（支持缓存、压缩、SSL），2) PM2 进程管理（集群模式、自动重启、日志管理），3) 完整部署脚本自动化（依赖检查、构建、配置、启动），4) SSL 证书自动化（Let's Encrypt + 自动更新），5) 性能优化（静态资源缓存、gzip 压缩、安全响应头），6) 监控和健康检查配置。项目路径：/var/www/yinhaowei.my
