#!/bin/bash

echo "🚀 开始部署 yinhaowei.my..."
echo "================================"

# 拉取最新代码
echo ""
echo "📥 拉取最新代码..."
git pull origin main

# 检查是否有更新
if [ $? -ne 0 ]; then
  echo "❌ 代码拉取失败，请检查 Git 配置"
  exit 1
fi

echo "✓ 代码更新成功"

# 安装依赖
echo ""
echo "📦 安装依赖..."
pnpm install

if [ $? -ne 0 ]; then
  echo "❌ 依赖安装失败"
  exit 1
fi

echo "✓ 依赖安装成功"

# 构建项目
echo ""
echo "🔨 构建项目..."
pnpm run build

if [ $? -ne 0 ]; then
  echo "❌ 构建失败，请检查构建日志"
  exit 1
fi

echo "✓ 构建成功"

# 重启 PM2
echo ""
echo "🔄 重启应用..."
pm2 reload ecosystem.config.js --update-env

if [ $? -ne 0 ]; then
  echo "⚠️  重载失败，尝试重启..."
  pm2 restart ecosystem.config.js
fi

# 显示状态
echo ""
echo "================================"
echo "✅ 部署完成！"
echo "================================"
echo ""
pm2 status
echo ""
echo "📋 最近日志："
pm2 logs yinhaowei.my --lines 20 --nostream
