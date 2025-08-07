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
cat > ecosystem.config.js << EOF
module.exports = {
  apps: [
    {
      name: '${PM2_APP_NAME}',
      script: 'npm',
      args: 'start',
      cwd: '${SERVER_PATH}',
      instances: 'max',
      exec_mode: 'cluster',
      env: {
        NODE_ENV: '${ENVIRONMENT}',
        PORT: 3000
      },
      error_file: '${SERVER_PATH}/logs/err.log',
      out_file: '${SERVER_PATH}/logs/out.log',
      log_file: '${SERVER_PATH}/logs/combined.log',
      time: true,
      max_memory_restart: '1G',
      node_args: '--max-old-space-size=1024'
    }
  ]
};
EOF

# 创建日志目录
mkdir -p logs

# 停止现有应用
if pm2 describe "$PM2_APP_NAME" > /dev/null 2>&1; then
    echo -e "${YELLOW}停止现有应用...${NC}"
    pm2 stop "$PM2_APP_NAME"
    pm2 delete "$PM2_APP_NAME"
fi

# 启动应用
pm2 start ecosystem.config.js
pm2 save
echo -e "${GREEN}✅ PM2 配置完成${NC}"

# 配置 Nginx
print_step "配置 Nginx"
if [ -f "../my.conf" ]; then
    sudo cp "../my.conf" "$NGINX_CONFIG_PATH"
    echo -e "${GREEN}✅ Nginx 配置文件已复制${NC}"
else
    echo -e "${YELLOW}⚠️  Nginx 配置文件不存在，请手动配置${NC}"
fi

# 创建缓存目录
sudo mkdir -p /var/cache/nginx/nextjs
sudo chown -R www-data:www-data /var/cache/nginx/nextjs

# 启用网站
if [ ! -L "/etc/nginx/sites-enabled/${PROJECT_NAME}" ]; then
    sudo ln -s "$NGINX_CONFIG_PATH" "/etc/nginx/sites-enabled/${PROJECT_NAME}"
    echo -e "${GREEN}✅ Nginx 网站已启用${NC}"
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