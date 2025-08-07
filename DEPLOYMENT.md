# Next.js 项目部署指南

## 📋 目录
- [快速开始](#快速开始)
- [部署方案对比](#部署方案对比)
- [Vercel 部署](#vercel-部署)
- [Docker 容器化部署](#docker-容器化部署)
- [传统服务器部署](#传统服务器部署)
- [环境变量配置](#环境变量配置)
- [性能优化](#性能优化)
- [故障排除](#故障排除)

## 🚀 快速开始

### 使用部署脚本 (推荐)

```bash
# Vercel 部署
./scripts/deploy.sh vercel production

# Docker 部署
./scripts/deploy.sh docker production

# 传统服务器部署
./scripts/deploy.sh server production
```

## 📊 部署方案对比

| 特性 | Vercel | Docker | 传统服务器 |
|------|--------|---------|------------|
| 配置难度 | ⭐ 极简 | ⭐⭐ 简单 | ⭐⭐⭐ 中等 |
| 部署速度 | ⭐⭐⭐ 快 | ⭐⭐ 中等 | ⭐⭐ 中等 |
| 扩展性 | ⭐⭐⭐ 自动 | ⭐⭐⭐ 灵活 | ⭐⭐ 手动 |
| 成本 | 免费/付费 | 服务器费用 | 服务器费用 |
| 控制度 | ⭐ 有限 | ⭐⭐⭐ 完全 | ⭐⭐⭐ 完全 |

## 🌐 Vercel 部署

### 方法一：Git 集成 (推荐)

1. **推送代码到 Git 仓库**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **连接 Vercel**
   - 访问 [vercel.com](https://vercel.com)
   - 使用 GitHub/GitLab/Bitbucket 登录
   - 点击 "New Project" 导入仓库

3. **配置环境变量**
   - 在项目设置中添加必要的环境变量
   - 参考 `.env.example` 文件

### 方法二：CLI 部署

1. **安装 Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **登录并部署**
   ```bash
   vercel login
   vercel --prod
   ```

### Vercel 配置文件 (可选)

创建 `vercel.json`:
```json
{
  "version": 2,
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/next"
    }
  ],
  "routes": [
    {
      "src": "/blog/([^/]+)",
      "dest": "/blog/$1"
    }
  ],
  "env": {
    "NODE_ENV": "production"
  }
}
```

## 🐳 Docker 容器化部署

### 本地 Docker 部署

1. **构建镜像**
   ```bash
   docker build -t nextjs-blog .
   ```

2. **运行容器**
   ```bash
   docker run -d \
     --name nextjs-blog-container \
     -p 3000:3000 \
     --restart unless-stopped \
     nextjs-blog
   ```

### Docker Compose 部署

1. **开发环境**
   ```bash
   docker-compose --profile dev up
   ```

2. **生产环境**
   ```bash
   docker-compose --profile prod up -d
   ```

3. **带 Nginx 反向代理**
   ```bash
   docker-compose --profile prod --profile nginx up -d
   ```

### 云服务器 Docker 部署

#### 阿里云 ECS
```bash
# 安装 Docker
curl -fsSL https://get.docker.com | bash -s docker

# 启动 Docker 服务
sudo systemctl start docker
sudo systemctl enable docker

# 部署应用
./scripts/deploy.sh docker production
```

#### 腾讯云 CVM
```bash
# 同阿里云 ECS 步骤
```

## 🖥️ 传统服务器部署

### Ubuntu/Debian 服务器

1. **安装 Node.js**
   ```bash
   # 使用 NodeSource 仓库
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   ```

2. **安装 PM2**
   ```bash
   sudo npm install -g pm2
   ```

3. **部署应用**
   ```bash
   # 克隆代码
   git clone <your-repo-url>
   cd <your-project>
   
   # 安装依赖和构建
   npm ci
   npm run build
   
   # 安装 Sharp (图片优化)
   npm install sharp
   
   # 启动应用
   pm2 start npm --name "nextjs-blog" -- start
   pm2 save
   pm2 startup
   ```

### CentOS/RHEL 服务器

1. **安装 Node.js**
   ```bash
   curl -fsSL https://rpm.nodesource.com/setup_18.x | sudo bash -
   sudo yum install -y nodejs
   ```

2. **其他步骤与 Ubuntu 相同**

### Nginx 反向代理配置

创建 `/etc/nginx/sites-available/nextjs-blog`:
```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }

    # 静态资源缓存
    location /_next/static {
        alias /path/to/your/app/.next/static;
        expires 365d;
        add_header Cache-Control "public, immutable";
    }
}
```

启用配置:
```bash
sudo ln -s /etc/nginx/sites-available/nextjs-blog /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

## 🔧 环境变量配置

### 必需的环境变量

```bash
# 生产环境 URL
NEXT_PUBLIC_APP_URL=https://your-domain.com

# 禁用遥测
NEXT_TELEMETRY_DISABLED=1
```

### 可选的环境变量

```bash
# Google Analytics
NEXT_PUBLIC_GA_ID=GA_MEASUREMENT_ID

# 数据库 (如果使用)
DATABASE_URL=your_database_connection_string

# 邮件服务 (联系表单)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASSWORD=your_app_password
```

## ⚡ 性能优化

### 1. 图片优化
```bash
# 安装 Sharp (生产环境必须)
npm install sharp
```

### 2. 包分析
```bash
# 分析包大小
ANALYZE=true npm run build
```

### 3. CDN 配置
```javascript
// next.config.ts
const nextConfig = {
  assetPrefix: process.env.NODE_ENV === 'production' 
    ? 'https://cdn.your-domain.com' 
    : '',
}
```

### 4. 缓存策略
```javascript
// next.config.ts
async headers() {
  return [
    {
      source: '/_next/static/(.*)',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=31536000, immutable',
        },
      ],
    },
  ];
}
```

## 🔍 故障排除

### 常见问题

1. **构建失败**
   ```bash
   # 清除缓存重新构建
   rm -rf .next
   npm ci
   npm run build
   ```

2. **Sharp 缺失错误**
   ```bash
   npm install sharp
   # 重启应用
   ```

3. **内存不足**
   ```bash
   # 增加 Node.js 内存限制
   NODE_OPTIONS="--max-old-space-size=4096" npm run build
   ```

4. **端口冲突**
   ```bash
   # 更改端口
   PORT=3001 npm start
   ```

### 日志查看

#### Vercel
- 在 Vercel 控制台查看 Functions 日志

#### Docker
```bash
# 查看容器日志
docker logs nextjs-blog-container

# 实时查看日志
docker logs -f nextjs-blog-container
```

#### PM2
```bash
# 查看应用日志
pm2 logs nextjs-blog

# 查看错误日志
pm2 logs nextjs-blog --err

# 重启应用
pm2 restart nextjs-blog
```

### 健康检查

创建健康检查端点 `pages/api/health.ts`:
```typescript
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  })
}
```

## 📝 部署检查清单

- [ ] 代码已推送到 Git 仓库
- [ ] 环境变量已配置
- [ ] 构建成功无错误
- [ ] 依赖项已安装 (特别是 Sharp)
- [ ] 域名已配置 (如果需要)
- [ ] SSL 证书已配置 (如果需要)
- [ ] 健康检查端点正常
- [ ] 日志监控已设置
- [ ] 备份策略已制定

## 🔗 相关链接

- [Next.js 官方部署文档](https://nextjs.org/docs/deployment)
- [Vercel 部署指南](https://vercel.com/docs)
- [Docker 官方文档](https://docs.docker.com/)
- [PM2 进程管理](https://pm2.keymetrics.io/)
- [Nginx 配置指南](https://nginx.org/en/docs/) 