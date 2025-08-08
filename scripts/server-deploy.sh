#!/bin/bash

# Next.js 服务器部署脚本
# 使用方法: ./scripts/server-deploy.sh [production|staging]

set -e

# 颜色配置
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# 配置变量
ENVIRONMENT=${1:-production}
PROJECT_NAME="yinhaowei.my"
SERVER_PATH="/var/www/yinhaowei.my"
NGINX_CONFIG_PATH="/etc/nginx/sites-available/${PROJECT_NAME}"
PM2_APP_NAME="nextjs-${PROJECT_NAME}"
NODE_VERSION="18"

echo -e "${GREEN}🚀 开始部署 Next.js 项目到服务器...${NC}"
echo -e "${YELLOW}环境: ${ENVIRONMENT}${NC}"
echo -e "${YELLOW}项目路径: ${SERVER_PATH}${NC}"

# 检查是否在服务器上运行
if [ ! -d "/var/www" ]; then
    echo -e "${RED}❌ 错误: 此脚本需要在服务器上运行${NC}"
    echo -e "${YELLOW}请将此脚本上传到服务器后执行${NC}"
    exit 1
fi

# 函数: 打印步骤
print_step() {
    echo -e "\n${GREEN}▶ $1${NC}"
}

# 函数: 检查命令是否存在
check_command() {
    if ! command -v $1 &> /dev/null; then
        echo -e "${RED}❌ $1 未安装${NC}"
        return 1
    fi
    echo -e "${GREEN}✅ $1 已安装${NC}"
    return 0
}

# 检查系统依赖
print_step "检查系统依赖"
MISSING_DEPS=0

if ! check_command node; then
    echo -e "${YELLOW}正在安装 Node.js ${NODE_VERSION}...${NC}"
    curl -fsSL https://deb.nodesource.com/setup_${NODE_VERSION}.x | sudo -E bash -
    sudo apt-get install -y nodejs
    MISSING_DEPS=1
fi

if ! check_command pm2; then
    echo -e "${YELLOW}正在安装 PM2...${NC}"
    sudo npm install -g pm2
    MISSING_DEPS=1
fi

if ! check_command nginx; then
    echo -e "${YELLOW}正在安装 Nginx...${NC}"
    sudo apt-get update
    sudo apt-get install -y nginx
    MISSING_DEPS=1
fi

if [ $MISSING_DEPS -eq 1 ]; then
    echo -e "${GREEN}✅ 系统依赖安装完成${NC}"
fi

# 创建项目目录
print_step "准备项目目录"
if [ ! -d "$SERVER_PATH" ]; then
    sudo mkdir -p "$SERVER_PATH"
    echo -e "${GREEN}✅ 创建项目目录: $SERVER_PATH${NC}"
fi

# 设置目录权限
sudo chown -R $USER:$USER "$SERVER_PATH"
echo -e "${GREEN}✅ 设置目录权限${NC}"

# 检查是否是 Git 仓库
if [ ! -d ".git" ]; then
    echo -e "${RED}❌ 错误: 当前目录不是 Git 仓库${NC}"
    echo -e "${YELLOW}请在项目根目录执行此脚本${NC}"
    exit 1
fi

# 复制项目文件
print_step "复制项目文件"
rsync -av --exclude='node_modules' --exclude='.next' --exclude='.git' ./ "$SERVER_PATH/"
echo -e "${GREEN}✅ 项目文件复制完成${NC}"

# 进入项目目录
cd "$SERVER_PATH"

# 安装依赖
print_step "安装项目依赖"
npm ci --only=production
echo -e "${GREEN}✅ 依赖安装完成${NC}"

# 安装 Sharp (图片优化)
print_step "安装 Sharp"
npm install sharp
echo -e "${GREEN}✅ Sharp 安装完成${NC}"

# 构建项目
print_step "构建 Next.js 项目"
if [ "$ENVIRONMENT" = "production" ]; then
    NODE_ENV=production npm run build
else
    npm run build
fi
echo -e "${GREEN}✅ 项目构建完成${NC}"

# 配置 PM2
print_step "配置 PM2 进程管理"

# 完全停止并清理现有应用
if pm2 describe "$PM2_APP_NAME" > /dev/null 2>&1; then
    echo -e "${YELLOW}停止并清理现有应用...${NC}"
    pm2 stop "$PM2_APP_NAME" 2>/dev/null || true
    pm2 delete "$PM2_APP_NAME" 2>/dev/null || true
fi

# 等待进程完全停止
sleep 3

# 检查是否使用 standalone 模式
if [ -f ".next/standalone/server.js" ]; then
    echo -e "${YELLOW}检测到 standalone 模式，使用 server.js${NC}"
    SERVER_SCRIPT=".next/standalone/server.js"
    SERVER_ARGS=""
else
    echo -e "${YELLOW}使用标准模式，使用 npm start${NC}"
    SERVER_SCRIPT="npm"
    SERVER_ARGS="start"
fi

# 创建优化的 PM2 配置（单实例模式，避免端口冲突）
cat > ecosystem.config.js << EOF
module.exports = {
  apps: [
    {
      name: '${PM2_APP_NAME}',
      script: '${SERVER_SCRIPT}',
      args: '${SERVER_ARGS}',
      cwd: '${SERVER_PATH}',
      instances: 1,
      exec_mode: 'fork',
      env: {
        NODE_ENV: '${ENVIRONMENT}',
        PORT: 3000,
        HOSTNAME: '0.0.0.0'
      },
      error_file: '${SERVER_PATH}/logs/err.log',
      out_file: '${SERVER_PATH}/logs/out.log',
      log_file: '${SERVER_PATH}/logs/combined.log',
      time: true,
      max_memory_restart: '800M',
      node_args: '--max-old-space-size=1024',
      autorestart: true,
      watch: false,
      max_restarts: 10,
      min_uptime: '10s'
    }
  ]
};
EOF

# 创建日志目录
mkdir -p logs

# 启动应用
echo -e "${YELLOW}启动 Next.js 应用...${NC}"
pm2 start ecosystem.config.js
pm2 save

# 等待应用启动
sleep 5

# 检查应用状态
if pm2 describe "$PM2_APP_NAME" | grep -q "online"; then
    echo -e "${GREEN}✅ PM2 应用启动成功${NC}"
else
    echo -e "${RED}❌ PM2 应用启动失败，查看日志...${NC}"
    pm2 logs "$PM2_APP_NAME" --lines 10
    exit 1
fi

echo -e "${GREEN}✅ PM2 配置完成${NC}"

# 配置 Nginx
print_step "配置 Nginx"

# 检测操作系统类型
if [ -f /etc/redhat-release ]; then
    NGINX_USER="nginx"
    NGINX_SITES_PATH="/etc/nginx/conf.d"
    NGINX_CONFIG_FILE="${NGINX_SITES_PATH}/${PROJECT_NAME}.conf"
elif [ -f /etc/debian_version ]; then
    NGINX_USER="www-data"
    NGINX_SITES_PATH="/etc/nginx/sites-available"
    NGINX_CONFIG_FILE="${NGINX_SITES_PATH}/${PROJECT_NAME}"
else
    NGINX_USER="nginx"
    NGINX_SITES_PATH="/etc/nginx/conf.d"
    NGINX_CONFIG_FILE="${NGINX_SITES_PATH}/${PROJECT_NAME}.conf"
fi

echo -e "${YELLOW}检测到系统类型，使用用户: ${NGINX_USER}${NC}"

# 清理可能冲突的旧配置文件
echo -e "${YELLOW}清理旧的 Nginx 配置文件...${NC}"
sudo find /etc/nginx -name "*yinhaowei*" -type f 2>/dev/null | while read file; do
    echo "删除旧配置: $file"
    sudo rm -f "$file"
done

# 确保删除所有可能的旧配置文件
sudo rm -f /etc/nginx/conf.d/yinhaowei.my.conf
sudo rm -f /etc/nginx/conf.d/yinhaowei-my.conf
sudo rm -f /etc/nginx/sites-available/yinhaowei.my
sudo rm -f /etc/nginx/sites-enabled/yinhaowei.my

# 检查是否还有引用旧 upstream 的文件
if sudo grep -r "nextjs_backend" /etc/nginx/ 2>/dev/null; then
    echo -e "${RED}警告: 发现旧的 upstream 引用，正在清理...${NC}"
    sudo grep -rl "nextjs_backend" /etc/nginx/ 2>/dev/null | while read file; do
        echo "清理文件中的旧引用: $file"
        sudo sed -i 's/nextjs_backend/nextjs_app_backend/g' "$file"
    done
fi

# 查找配置文件
NGINX_SOURCE_CONFIG=""
if [ -f "my.conf" ]; then
    NGINX_SOURCE_CONFIG="my.conf"
elif [ -f "../my.conf" ]; then
    NGINX_SOURCE_CONFIG="../my.conf"
elif [ -f "/Users/yinhaowei/Library/Containers/com.termius.mac/Data/tmp/tmp-70555-1ps38jjxlP2h/my.conf" ]; then
    NGINX_SOURCE_CONFIG="/Users/yinhaowei/Library/Containers/com.termius.mac/Data/tmp/tmp-70555-1ps38jjxlP2h/my.conf"
fi

if [ -n "$NGINX_SOURCE_CONFIG" ]; then
    sudo cp "$NGINX_SOURCE_CONFIG" "$NGINX_CONFIG_FILE"
    echo -e "${GREEN}✅ Nginx 配置文件已复制到: $NGINX_CONFIG_FILE${NC}"
else
    echo -e "${YELLOW}⚠️  Nginx 配置文件不存在，创建默认配置...${NC}"
    # 创建默认的 Nginx 配置
    sudo tee "$NGINX_CONFIG_FILE" > /dev/null << 'EOF'
# Next.js 应用反向代理配置
upstream nextjs_app_backend {
    server 127.0.0.1:3000;
    keepalive 32;
}

# 静态资源缓存配置
proxy_cache_path /var/cache/nginx/nextjs_app levels=1:2 keys_zone=nextjs_app_cache:10m inactive=60m use_temp_path=off;

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
        proxy_cache nextjs_app_cache;
        proxy_cache_valid 200 302 60m;
        proxy_cache_valid 404 1m;
        
        proxy_pass http://nextjs_app_backend;
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
    }

    # 公共静态资源
    location ~* \.(ico|css|js|gif|jpe?g|png|svg|woff2?|ttf|eot)$ {
        proxy_pass http://nextjs_app_backend;
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
        proxy_pass http://nextjs_app_backend;
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
        proxy_pass http://nextjs_app_backend;
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
        proxy_pass http://nextjs_app_backend;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        access_log off;
    }
}
EOF
    echo -e "${GREEN}✅ 默认 Nginx 配置已创建${NC}"
fi

# 创建缓存目录
sudo mkdir -p /var/cache/nginx/nextjs_app
sudo chown -R ${NGINX_USER}:${NGINX_USER} /var/cache/nginx/nextjs_app

# 启用网站 (仅适用于 Debian/Ubuntu)
if [ -f /etc/debian_version ] && [ ! -L "/etc/nginx/sites-enabled/${PROJECT_NAME}" ]; then
    sudo ln -s "$NGINX_CONFIG_FILE" "/etc/nginx/sites-enabled/${PROJECT_NAME}"
    echo -e "${GREEN}✅ Nginx 网站已启用${NC}"
elif [ -f /etc/redhat-release ]; then
    echo -e "${GREEN}✅ CentOS/RHEL 系统，配置文件已直接放置在 conf.d 目录${NC}"
fi

# 测试 Nginx 配置
if sudo nginx -t; then
    echo -e "${GREEN}✅ Nginx 配置测试通过${NC}"
    sudo systemctl reload nginx
    echo -e "${GREEN}✅ Nginx 已重载${NC}"
else
    echo -e "${RED}❌ Nginx 配置有误${NC}"
    exit 1
fi

# 设置开机自启
print_step "设置开机自启"
pm2 startup
sudo systemctl enable nginx
echo -e "${GREEN}✅ 开机自启设置完成${NC}"

# 显示部署信息
print_step "部署完成"
echo -e "${GREEN}🎉 Next.js 项目部署成功!${NC}"
echo -e "\n${YELLOW}部署信息:${NC}"
echo -e "项目路径: ${SERVER_PATH}"
echo -e "PM2 应用名: ${PM2_APP_NAME}"
echo -e "应用端口: 3000"
echo -e "域名: www.yinhaowei.my"
echo -e "\n${YELLOW}常用命令:${NC}"
echo -e "查看应用状态: ${GREEN}pm2 status${NC}"
echo -e "查看应用日志: ${GREEN}pm2 logs ${PM2_APP_NAME}${NC}"
echo -e "重启应用: ${GREEN}pm2 restart ${PM2_APP_NAME}${NC}"
echo -e "查看 Nginx 状态: ${GREEN}sudo systemctl status nginx${NC}"
echo -e "测试网站: ${GREEN}curl http://www.yinhaowei.my${NC}"

# 健康检查
print_step "执行健康检查"
sleep 5
if pm2 describe "$PM2_APP_NAME" | grep -q "online"; then
    echo -e "${GREEN}✅ 应用运行正常${NC}"
else
    echo -e "${RED}❌ 应用可能存在问题，请检查日志${NC}"
    pm2 logs "$PM2_APP_NAME" --lines 10
fi

echo -e "\n${GREEN}🚀 部署完成! 您可以访问 http://www.yinhaowei.my 查看您的网站${NC}" 