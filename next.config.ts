import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 启用 standalone 输出用于 Docker 部署
  output: 'standalone',
  
  // 图片优化配置
  images: {
    unoptimized: false,
  },

  // 实验性功能
  experimental: {
    // 启用包导入优化
    optimizePackageImports: ['@heroicons/react'],
  },

  // 压缩配置
  compress: true,

  // 静态文件缓存
  async headers() {
    return [
      {
        source: '/favicon.ico',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/(.*).png',
        headers: [
          {
            key: 'Cache-Control', 
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
