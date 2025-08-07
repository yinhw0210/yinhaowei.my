#!/bin/bash

# Next.js 项目部署脚本
# 使用方法: ./scripts/deploy.sh [vercel|docker|server] [environment]

set -e  # 遇到错误时退出

DEPLOY_TYPE=${1:-"vercel"}
ENVIRONMENT=${2:-"production"}

echo "🚀 开始部署 Next.js 项目..."
echo "📋 部署类型: $DEPLOY_TYPE"
echo "🌍 环境: $ENVIRONMENT"

# 预检查
echo "🔍 执行预检查..."

# 检查 Node.js 版本
if ! command -v node &> /dev/null; then
    echo "❌ 未找到 Node.js，请先安装 Node.js"
    exit 1
fi

NODE_VERSION=$(node -v)
echo "✅ Node.js 版本: $NODE_VERSION"

# 安装依赖
echo "📦 安装依赖..."
npm ci

# 运行构建
echo "🔨 构建项目..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ 构建失败"
    exit 1
fi

echo "✅ 构建成功"

# 根据部署类型执行相应操作
case $DEPLOY_TYPE in
    "vercel")
        echo "🌐 部署到 Vercel..."
        if ! command -v vercel &> /dev/null; then
            echo "📦 安装 Vercel CLI..."
            npm install -g vercel
        fi
        
        if [ "$ENVIRONMENT" = "production" ]; then
            vercel --prod
        else
            vercel
        fi
        ;;
        
    "docker")
        echo "🐳 Docker 部署..."
        
        # 构建 Docker 镜像
        docker build -t nextjs-blog:latest .
        
        # 停止现有容器
        docker stop nextjs-blog-container 2>/dev/null || true
        docker rm nextjs-blog-container 2>/dev/null || true
        
        # 运行新容器
        docker run -d \
            --name nextjs-blog-container \
            -p 3000:3000 \
            --restart unless-stopped \
            nextjs-blog:latest
        
        echo "✅ Docker 容器启动成功"
        echo "🌍 应用访问地址: http://localhost:3000"
        ;;
        
    "server")
        echo "🖥️  传统服务器部署..."
        
        # 安装 PM2 (如果未安装)
        if ! command -v pm2 &> /dev/null; then
            echo "📦 安装 PM2..."
            npm install -g pm2
        fi
        
        # 安装生产依赖 sharp
        npm install sharp
        
        # 停止现有进程
        pm2 delete nextjs-blog 2>/dev/null || true
        
        # 启动应用
        pm2 start npm --name "nextjs-blog" -- start
        pm2 save
        pm2 startup
        
        echo "✅ PM2 进程启动成功"
        echo "🌍 应用访问地址: http://localhost:3000"
        ;;
        
    *)
        echo "❌ 未知的部署类型: $DEPLOY_TYPE"
        echo "💡 支持的部署类型: vercel, docker, server"
        exit 1
        ;;
esac

echo ""
echo "🎉 部署完成!"
echo "📊 部署信息:"
echo "   类型: $DEPLOY_TYPE"
echo "   环境: $ENVIRONMENT"
echo "   时间: $(date)"

# 显示部署后的检查建议
echo ""
echo "🔍 部署后检查清单:"
echo "   □ 访问应用 URL 确认页面正常加载"
echo "   □ 检查所有路由是否工作正常"
echo "   □ 验证静态资源加载"
echo "   □ 测试博客文章页面"
echo "   □ 检查深色模式切换" 