export interface Article {
  id: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  externalUrl: string;
  readTime: string;
}

export const articles: Article[] = [
  {
    id: "1",
    title: "如何使用 Python 进行图像处理",
    description: "本文介绍了使用 Python 进行图像处理的基础知识，包括 PIL/Pillow 库的使用、常见图像操作以及实际应用案例。",
    date: "2024-01-15",
    tags: ["Python", "图像处理", "教程"],
    externalUrl: "https://github.com/yinhw0210/dataAnalysis-backend",
    readTime: "5 分钟",
  },
  {
    id: "2",
    title: "浏览器插件开发入门指南",
    description: "从零开始学习 Chrome 浏览器插件开发，包括 manifest.json 配置、content scripts、background scripts 等核心概念。",
    date: "2024-01-10",
    tags: ["JavaScript", "浏览器插件", "Chrome"],
    externalUrl: "https://github.com/yinhw0210/doubao-download",
    readTime: "8 分钟",
  },
  {
    id: "3",
    title: "数据分析与统计学算法实践",
    description: "探讨如何使用 Python 进行数据分析，介绍常用的统计学算法和数据可视化技术。",
    date: "2024-01-05",
    tags: ["Python", "数据分析", "统计学"],
    externalUrl: "https://github.com/yinhw0210/lottery-pick3",
    readTime: "10 分钟",
  },
  {
    id: "4",
    title: "Java HTTP 客户端开发实战",
    description: "详细介绍 Java 中 HTTP 请求的实现方式，包括 HttpURLConnection、HttpClient 以及第三方库的使用。",
    date: "2023-12-28",
    tags: ["Java", "HTTP", "网络编程"],
    externalUrl: "https://github.com/yinhw0210/http-sends",
    readTime: "7 分钟",
  },
];
