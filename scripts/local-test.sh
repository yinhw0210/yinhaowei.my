#!/bin/bash

# Next.js + Nginx 本地测试脚本
# 使用方法: ./scripts/local-test.sh

set -e

# 颜色配置
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# 配置变量
PROJECT_NAME="yinhaowei.my"
NGINX_TEST_CONFIG="./nginx-test.conf"
PM2_APP_NAME="nextjs-${PROJECT_NAME}"

echo -e "${GREEN}🧪 开始 Next.js + Nginx 本地测试...${NC}"

# 函数: 打印步骤
print_step() {
    echo -e "\n${GREEN}▶ $1${NC}"
}

# 函数: 检查命令是否存在
check_command() {
    if ! command -v $1 &> /dev/null; then
        echo -e "${RED}❌ $1 未安装，请先安装${NC}"
        return 1
    fi
    echo -e "${GREEN}✅ $1 已安装${NC}"
    return 0
}

# 函数: 清理资源
cleanup() {
    echo -e "\n${YELLOW}🧹 清理测试资源...${NC}"
    
    # 停止 PM2 应用
    if pm2 describe "$PM2_APP_NAME" > /dev/null 2>&1; then
        pm2 stop "$PM2_APP_NAME" > /dev/null 2>&1
        pm2 delete "$PM2_APP_NAME" > /dev/null 2>&1
        echo -e "${GREEN}✅ PM2 应用已停止${NC}"
    fi
    
    # 删除测试配置文件
    if [ -f "$NGINX_TEST_CONFIG" ]; then
        rm "$NGINX_TEST_CONFIG"
        echo -e "${GREEN}✅ 测试配置文件已删除${NC}"
    fi
    
    # 创建日志目录
    mkdir -p logs
}

# 捕获退出信号进行清理
trap cleanup EXIT

# 检查系统依赖
print_step "检查系统依赖"
check_command node || exit 1
check_command npm || exit 1
check_command pm2 || { echo -e "${YELLOW}安装 PM2: npm install -g pm2${NC}"; exit 1; }

# macOS 上检查 nginx
if [[ "$OSTYPE" == "darwin"* ]]; then
    check_command nginx || { echo -e "${YELLOW}macOS 安装 Nginx: brew install nginx${NC}"; exit 1; }
else
    check_command nginx || { echo -e "${YELLOW}Ubuntu 安装 Nginx: sudo apt-get install nginx${NC}"; exit 1; }
fi

# 检查项目构建
print_step "检查项目构建"
if [ ! -d ".next" ]; then
    echo -e "${YELLOW}项目未构建，正在构建...${NC}"
    npm run build
fi
echo -e "${GREEN}✅ 项目构建检查完成${NC}"

# 创建本地测试 Nginx 配置
print_step "创建测试 Nginx 配置"
cat > "$NGINX_TEST_CONFIG" << 'EOF'
# 测试用的 Nginx 配置
worker_processes 1;

events {
    worker_connections 1024;
}

http {
    include       /usr/local/etc/nginx/mime.types;
    default_type  application/octet-stream;
    
    # 日志配置
    access_log /usr/local/var/log/nginx/access.log;
    error_log /usr/local/var/log/nginx/error.log;
    
    # 基础配置
    sendfile on;
    keepalive_timeout 65;
    
    # 定义上游服务器
    upstream nextjs_backend {
        server 127.0.0.1:3000;
        keepalive 32;
    }
    
    server {
        listen 8080;
        server_name localhost;
        
        # 基础安全配置
        server_tokens off;
        
        # 启用 gzip 压缩
        gzip on;
        gzip_vary on;
        gzip_min_length 1024;
        gzip_proxied any;
        gzip_comp_level 6;
        gzip_types
            text/plain
            text/css
            text/xml
            text/javascript
            application/json
            application/javascript
            application/xml+rss
            application/atom+xml
            image/svg+xml;
        
        # Next.js 静态资源
        location /_next/static/ {
            proxy_pass http://nextjs_backend;
            proxy_http_version 1.1;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;
            
            # 缓存配置
            expires 1y;
            add_header Cache-Control "public, immutable";
        }
        
        # 公共静态资源
        location ~* \.(ico|css|js|gif|jpe?g|png|svg|woff2?|ttf|eot)$ {
            proxy_pass http://nextjs_backend;
            proxy_http_version 1.1;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;
            
            expires 30d;
            add_header Cache-Control "public, no-transform";
        }
        
        # API 路由
        location /api/ {
            proxy_pass http://nextjs_backend;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection 'upgrade';
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;
            proxy_cache_bypass $http_upgrade;
            proxy_redirect off;
            
            # API 不缓存
            add_header Cache-Control "no-cache, no-store, must-revalidate";
            expires 0;
        }
        
        # 主应用路由
        location / {
            proxy_pass http://nextjs_backend;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection 'upgrade';
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;
            proxy_cache_bypass $http_upgrade;
            proxy_redirect off;
        }
    }
}
EOF

echo -e "${GREEN}✅ Nginx 测试配置已创建${NC}"

# 测试 Nginx 配置
print_step "测试 Nginx 配置"
if nginx -t -c "$(pwd)/$NGINX_TEST_CONFIG"; then
    echo -e "${GREEN}✅ Nginx 配置语法正确${NC}"
else
    echo -e "${RED}❌ Nginx 配置有误${NC}"
    exit 1
fi

# 启动 Next.js 应用
print_step "启动 Next.js 应用"
PORT=3000 pm2 start ecosystem.config.js --env development
sleep 3

# 检查应用状态
if pm2 describe "$PM2_APP_NAME" | grep -q "online"; then
    echo -e "${GREEN}✅ Next.js 应用启动成功${NC}"
else
    echo -e "${RED}❌ Next.js 应用启动失败${NC}"
    pm2 logs "$PM2_APP_NAME" --lines 10
    exit 1
fi

# 启动测试 Nginx
print_step "启动测试 Nginx (端口 8080)"
nginx -c "$(pwd)/$NGINX_TEST_CONFIG"
sleep 2

# 执行连接测试
print_step "执行连接测试"

echo -e "${YELLOW}测试直连 Next.js (端口 3000)...${NC}"
if curl -s http://localhost:3000 > /dev/null; then
    echo -e "${GREEN}✅ Next.js 直连测试成功${NC}"
else
    echo -e "${RED}❌ Next.js 直连测试失败${NC}"
fi

echo -e "${YELLOW}测试 Nginx 代理 (端口 8080)...${NC}"
if curl -s http://localhost:8080 > /dev/null; then
    echo -e "${GREEN}✅ Nginx 代理测试成功${NC}"
else
    echo -e "${RED}❌ Nginx 代理测试失败${NC}"
    echo -e "${YELLOW}检查 Nginx 错误日志：${NC}"
    tail -n 5 /usr/local/var/log/nginx/error.log 2>/dev/null || echo "无法读取错误日志"
fi

# 性能测试
print_step "执行性能测试"
echo -e "${YELLOW}测试静态资源缓存...${NC}"
RESPONSE=$(curl -s -I http://localhost:8080/_next/static/css/app.css 2>/dev/null || echo "")
if echo "$RESPONSE" | grep -q "Cache-Control"; then
    echo -e "${GREEN}✅ 静态资源缓存配置正确${NC}"
else
    echo -e "${YELLOW}⚠️  静态资源缓存可能未配置${NC}"
fi

echo -e "${YELLOW}测试 gzip 压缩...${NC}"
GZIP_RESPONSE=$(curl -s -H "Accept-Encoding: gzip" -I http://localhost:8080 2>/dev/null || echo "")
if echo "$GZIP_RESPONSE" | grep -q "Content-Encoding: gzip"; then
    echo -e "${GREEN}✅ Gzip 压缩配置正确${NC}"
else
    echo -e "${YELLOW}⚠️  Gzip 压缩可能未启用${NC}"
fi

# 停止测试 Nginx
nginx -s stop

# 显示测试结果
print_step "测试完成"
echo -e "${GREEN}🎉 Next.js + Nginx 本地测试完成!${NC}"
echo -e "\n${YELLOW}测试结果总结:${NC}"
echo -e "Next.js 应用: ${GREEN}http://localhost:3000${NC}"
echo -e "Nginx 代理: ${GREEN}http://localhost:8080${NC} (测试期间)"
echo -e "\n${YELLOW}常用命令:${NC}"
echo -e "查看应用状态: ${GREEN}pm2 status${NC}"
echo -e "查看应用日志: ${GREEN}pm2 logs ${PM2_APP_NAME}${NC}"
echo -e "停止应用: ${GREEN}pm2 stop ${PM2_APP_NAME}${NC}"
echo -e "\n${YELLOW}下一步:${NC}"
echo -e "1. 将 Nginx 配置部署到服务器: ${GREEN}/etc/nginx/sites-available/${PROJECT_NAME}${NC}"
echo -e "2. 使用部署脚本: ${GREEN}./scripts/server-deploy.sh${NC}"
echo -e "3. 配置域名和 SSL 证书"

echo -e "\n${GREEN}�� 准备部署到生产环境!${NC}" 