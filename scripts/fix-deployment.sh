#!/bin/bash

# Next.js 部署问题修复脚本
# 使用方法: ./scripts/fix-deployment.sh

set -e

# 颜色配置
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

PROJECT_NAME="yinhaowei.my"

echo -e "${GREEN}🔧 修复 Next.js 部署问题...${NC}"

# 函数: 打印步骤
print_step() {
    echo -e "\n${GREEN}▶ $1${NC}"
}

# 检测操作系统类型
print_step "检测操作系统类型"
if [ -f /etc/redhat-release ]; then
    OS_TYPE="redhat"
    NGINX_USER="nginx"
    NGINX_CONFIG_PATH="/etc/nginx/conf.d"
    NGINX_CONFIG_FILE="${NGINX_CONFIG_PATH}/${PROJECT_NAME}.conf"
    echo -e "${YELLOW}检测到 CentOS/RHEL 系统${NC}"
elif [ -f /etc/debian_version ]; then
    OS_TYPE="debian"
    NGINX_USER="www-data"
    NGINX_CONFIG_PATH="/etc/nginx/sites-available"
    NGINX_CONFIG_FILE="${NGINX_CONFIG_PATH}/${PROJECT_NAME}"
    echo -e "${YELLOW}检测到 Ubuntu/Debian 系统${NC}"
else
    OS_TYPE="unknown"
    NGINX_USER="nginx"
    NGINX_CONFIG_PATH="/etc/nginx/conf.d"
    NGINX_CONFIG_FILE="${NGINX_CONFIG_PATH}/${PROJECT_NAME}.conf"
    echo -e "${YELLOW}未知系统，使用默认配置${NC}"
fi

echo -e "${GREEN}✅ 系统类型: ${OS_TYPE}, Nginx 用户: ${NGINX_USER}${NC}"

# 创建 Nginx 配置文件
print_step "创建/修复 Nginx 配置"
sudo mkdir -p "$NGINX_CONFIG_PATH"

sudo tee "$NGINX_CONFIG_FILE" > /dev/null << 'EOF'
# Next.js 应用反向代理配置
upstream nextjs_backend {
    server 127.0.0.1:3000;
    keepalive 32;
}

# 静态资源缓存配置
proxy_cache_path /var/cache/nginx/nextjs levels=1:2 keys_zone=nextjs_static:10m inactive=60m use_temp_path=off;

server {
    listen 80;
    server_name www.yinhaowei.my;

    # 基础安全配置
    server_tokens off;
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;

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

    # Next.js 静态资源缓存
    location /_next/static/ {
        proxy_cache nextjs_static;
        proxy_cache_valid 200 302 60m;
        proxy_cache_valid 404 1m;
        proxy_cache_use_stale error timeout invalid_header updating http_500 http_502 http_503 http_504;
        proxy_cache_lock on;
        
        proxy_pass http://nextjs_backend;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;

        expires 1y;
        add_header Cache-Control "public, immutable";
        add_header X-Cache-Status $upstream_cache_status;
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

    # API 路由和动态内容
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
        
        proxy_connect_timeout 60s;
        proxy_send_timeout 60s;
        proxy_read_timeout 60s;
    }

    # 安全配置：禁止访问隐藏文件
    location ~ /\. {
        deny all;
        access_log off;
        log_not_found off;
    }

    # 健康检查端点
    location /health {
        proxy_pass http://nextjs_backend;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        access_log off;
    }
}
EOF

echo -e "${GREEN}✅ Nginx 配置文件已创建: ${NGINX_CONFIG_FILE}${NC}"

# 创建缓存目录并设置权限
print_step "设置缓存目录权限"
sudo mkdir -p /var/cache/nginx/nextjs
sudo chown -R ${NGINX_USER}:${NGINX_USER} /var/cache/nginx/nextjs
echo -e "${GREEN}✅ 缓存目录权限已设置${NC}"

# 启用网站配置
print_step "启用网站配置"
if [ "$OS_TYPE" = "debian" ]; then
    # Ubuntu/Debian 系统需要创建软链接
    if [ ! -L "/etc/nginx/sites-enabled/${PROJECT_NAME}" ]; then
        sudo ln -s "$NGINX_CONFIG_FILE" "/etc/nginx/sites-enabled/${PROJECT_NAME}"
        echo -e "${GREEN}✅ 网站配置已启用 (sites-enabled)${NC}"
    else
        echo -e "${YELLOW}网站配置已存在${NC}"
    fi
elif [ "$OS_TYPE" = "redhat" ]; then
    # CentOS/RHEL 系统配置文件直接在 conf.d 目录
    echo -e "${GREEN}✅ CentOS/RHEL 系统，配置文件已放置在 conf.d 目录${NC}"
fi

# 测试 Nginx 配置
print_step "测试 Nginx 配置"
if sudo nginx -t; then
    echo -e "${GREEN}✅ Nginx 配置测试通过${NC}"
else
    echo -e "${RED}❌ Nginx 配置有误，请检查${NC}"
    exit 1
fi

# 重载 Nginx
print_step "重载 Nginx 配置"
if sudo systemctl reload nginx; then
    echo -e "${GREEN}✅ Nginx 配置已重载${NC}"
else
    echo -e "${YELLOW}⚠️  Nginx 重载失败，尝试重启${NC}"
    sudo systemctl restart nginx
    if sudo systemctl is-active nginx > /dev/null; then
        echo -e "${GREEN}✅ Nginx 重启成功${NC}"
    else
        echo -e "${RED}❌ Nginx 启动失败${NC}"
        sudo systemctl status nginx
        exit 1
    fi
fi

# 检查 PM2 应用状态
print_step "检查应用状态"
if pm2 describe "nextjs-yinhaowei.my" > /dev/null 2>&1; then
    echo -e "${GREEN}✅ PM2 应用运行正常${NC}"
    pm2 status
else
    echo -e "${RED}❌ PM2 应用未运行${NC}"
    exit 1
fi

# 执行连接测试
print_step "执行连接测试"
sleep 2

echo -e "${YELLOW}测试 Next.js 应用 (端口 3000)...${NC}"
if curl -s -o /dev/null -w "%{http_code}" http://localhost:3000 | grep -q "200"; then
    echo -e "${GREEN}✅ Next.js 应用响应正常${NC}"
else
    echo -e "${RED}❌ Next.js 应用无响应${NC}"
    pm2 logs nextjs-yinhaowei.my --lines 5
fi

echo -e "${YELLOW}测试 Nginx 代理 (端口 80)...${NC}"
if curl -s -o /dev/null -w "%{http_code}" http://localhost | grep -q "200"; then
    echo -e "${GREEN}✅ Nginx 代理响应正常${NC}"
else
    echo -e "${RED}❌ Nginx 代理无响应${NC}"
    sudo tail -n 5 /var/log/nginx/error.log
fi

# 显示部署状态
print_step "部署状态总结"
echo -e "${GREEN}🎉 部署问题修复完成!${NC}"
echo -e "\n${YELLOW}配置信息:${NC}"
echo -e "操作系统: ${OS_TYPE}"
echo -e "Nginx 用户: ${NGINX_USER}"
echo -e "配置文件: ${NGINX_CONFIG_FILE}"
echo -e "缓存目录: /var/cache/nginx/nextjs"
echo -e "\n${YELLOW}测试命令:${NC}"
echo -e "直接访问应用: ${GREEN}curl http://localhost:3000${NC}"
echo -e "通过 Nginx 访问: ${GREEN}curl http://localhost${NC}"
echo -e "如果有域名: ${GREEN}curl http://www.yinhaowei.my${NC}"
echo -e "\n${YELLOW}管理命令:${NC}"
echo -e "查看 PM2 状态: ${GREEN}pm2 status${NC}"
echo -e "查看 PM2 日志: ${GREEN}pm2 logs nextjs-yinhaowei.my${NC}"
echo -e "查看 Nginx 状态: ${GREEN}sudo systemctl status nginx${NC}"
echo -e "测试 Nginx 配置: ${GREEN}sudo nginx -t${NC}"

echo -e "\n${GREEN}🚀 现在可以通过域名访问您的网站了!${NC}" 