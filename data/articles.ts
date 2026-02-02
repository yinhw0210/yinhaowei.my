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
  // {
  //   id: "1",
  //   title: "豆包生图有水印？开源插件 + Python 脚本帮你一键搞定",
  //   description: "通过逆向分析豆包 API 响应，实现一键获取 AI 生成图片的 2048x2048 无水印高清原图。提供浏览器插件和 Python 脚本两种方案，满足不同使用场景。",
  //   date: "2025-06-18",
  //   tags: ["开源", "Python", "浏览器插件", "逆向工程"],
  //   externalUrl: "https://juejin.cn/post/7590020026395181110",
  //   readTime: "8 分钟",
  // },
  {
    id: "2",
    title: "如何用 Monaco 和 Babel 打造高性能 React-Playground",
    description: "分享如何实现一个 React 在线编辑器，使用 Monaco Editor 作为代码编辑器，Babel 进行 JSX 实时编译，支持本地文件引入和沙箱化预览。",
    date: "2025-02-20",
    tags: ["React", "Monaco Editor", "Babel", "前端工程化"],
    externalUrl: "https://juejin.cn/post/7483062337886158867",
    readTime: "10 分钟",
  },
  {
    id: "3",
    title: "MasterGo AI 生成设计图及代码",
    description: "介绍蓝湖 MasterGo 的 AI 生成设计图和代码工具，通过手绘图和文字描述快速生成页面设计和前端代码，解决无原型、无设计图的开发需求。",
    date: "2025-02-19",
    tags: ["AI", "设计工具", "MasterGo", "效率提升"],
    externalUrl: "https://juejin.cn/post/7482801903589998633",
    readTime: "5 分钟",
  },
  {
    id: "4",
    title: "Three.js 中使用着色器绘制飞线",
    description: "详细讲解 Three.js 实现飞线效果的最佳实践，包括底线（轨道线）和飞线（动态线）的绘制，使用贝塞尔曲线和着色器实现流畅的飞线动画。",
    date: "2024-07-05",
    tags: ["Three.js", "WebGL", "着色器", "可视化"],
    externalUrl: "https://juejin.cn/post/7388039373201555492",
    readTime: "12 分钟",
  },
];
