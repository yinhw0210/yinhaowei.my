export const translations = {
  en: {
    // Navigation
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      articles: "Articles",
      contact: "Contact",
    },
    // Hero Section
    hero: {
      welcome: "Welcome to my personal blog",
      title: "Unfocused Candidate",
      subtitle: "Passionate about technology, focused on full-stack development and technical practice,",
      subtitle2: "creating value with code, recording every step of growth.",
      viewProjects: "View Projects",
      openSource: "Open Source",
      techArticles: "Tech Articles",
      techStack: "Tech Stack",
    },
    // Skills Section
    skills: {
      tag: "Tech Stack",
      title: "Core",
      titleHighlight: "Skills",
      description: "Years of accumulated tech stack, covering frontend, backend, AI and DevOps",
      frontend: "Frontend",
      backend: "Backend",
      ai: "AI Tech",
      database: "Database",
      devops: "DevOps",
      other: "Other Skills",
      frontendSkills: ["Vue.js", "React", "TypeScript", "Tailwind CSS", "Mini Programs"],
      backendSkills: ["Java", "Python", "Spring Boot", "Flask", "Node.js"],
      aiSkills: ["TensorFlow", "PyTorch", "Machine Learning", "Deep Learning", "Model Deployment"],
      databaseSkills: ["MySQL", "MongoDB", "Redis", "PostgreSQL"],
      devopsSkills: ["Docker", "Linux", "Git", "CI/CD"],
      otherSkills: ["API Design", "Microservices", "System Design", "Performance Optimization"],
    },
    // Projects Preview
    projectsPreview: {
      tag: "Open Source",
      title: "Featured",
      titleHighlight: "Projects",
      description: "These are my open source projects, covering AI applications, tool development, data analysis and more",
      viewSource: "View Source",
      viewAll: "View All Projects",
      projects: [
        {
          title: "Video Watermark Remover & AI ID Photo",
          description: "Multi-platform video watermark removal, AI smart ID photo generation, image inpainting and more, based on deep learning algorithms",
        },
        // {
        //   title: "Doubao Watermark Remover",
        //   description: "Browser extension + script dual mode, one-click watermark removal for Doubao platform, supports batch processing",
        // },
        {
          title: "Lottery Pick3 Prediction",
          description: "Data analysis based lottery prediction system, using statistical algorithms and historical data modeling",
        },
        {
          title: "HTTP Request Simulator",
          description: "Powerful HTTP request debugging tool, supports multiple request methods and parameter configurations",
        },
      ],
    },
    // Contact CTA
    contactCTA: {
      title: "Want to",
      titleHighlight: "collaborate",
      titleEnd: "or chat?",
      description: "Whether it's technical discussion, project collaboration, or job opportunities, feel free to contact me",
      contactMe: "Contact Me",
      sendEmail: "Send Email",
    },
    // Footer
    footer: {
      brand: "Unfocused Candidate",
      brandDescription: "Full-stack developer, focused on technical practice, creating value with code, changing life with technology.",
      quickNav: "Quick Navigation",
      contactInfo: "Contact",
      copyright: "All rights reserved.",
      madeWith: "Made with",
      and: "and lots of",
    },
    // About Page
    about: {
      tag: "About Me",
      title: "Unfocused Candidate",
      description: "Passionate about technology, focused on full-stack development and technical practice. Believe that good code not only solves problems but also creates value. Always maintain enthusiasm for learning, changing life with technology.",
      location: "Jinan, Shandong",
      personalInfo: "Full-stack developer, passionate about exploring new technologies, love turning ideas into real products. In spare time, enjoy researching open source projects and sharing technical insights.",
      philosophyTag: "My Philosophy",
      philosophy: '"Let technology land in real products, build complete solutions with full-stack capabilities. Not only write code that runs, but write elegant, efficient, and maintainable code."',
      journeyTitle: "Growth",
      journeyHighlight: "Journey",
      journeyDescription: "From technical beginnings to continuous growth",
      valuesTitle: "Core",
      valuesHighlight: "Values",
      timeline: [
        { period: "Getting Started", title: "Full-Stack Foundation", description: "Systematically learned frontend and backend development, mastered Vue, React, Java, Python and other core tech stacks" },
        { period: "Deep Exploration", title: "Technical Research", description: "In-depth study of various cutting-edge technologies, exploring their applications in real projects" },
        { period: "Practical Experience", title: "Project Implementation", description: "Combined learned technologies with real needs, developed multiple practical tools and open source projects" },
        { period: "Continuous Growth", title: "Tech Sharing & Open Source", description: "Actively participate in open source community, share technical insights, help more developers grow" },
      ],
      values: [
        { title: "Result-Oriented", description: "Focus on delivering valuable products, let technology truly solve real problems" },
        { title: "Continuous Learning", description: "Maintain curiosity for new technologies, constantly expand technical boundaries" },
        { title: "Crafted with Care", description: "Pursue code quality, focus on details and user experience" },
      ],
    },
    // Projects Page
    projects: {
      tag: "Projects",
      title: "Open Source",
      titleHighlight: "Projects",
      description: "These are my open source projects, covering AI applications, tool development, data analysis and more. Each project is driven by real needs, solving real problems.",
      featured: "Featured Projects",
      more: "More Projects",
      viewSource: "View Source",
      projectsList: [
        {
          title: "Video Watermark Remover & AI ID Photo",
          description: "Multi-platform video watermark removal, AI smart ID photo generation, image inpainting and more. Python backend development, integrated multiple AI models for intelligent image processing.",
          features: ["Support Douyin, Kuaishou and other mainstream platforms", "AI smart ID photo generation with auto crop and background replacement", "Image inpainting function for precise watermark removal"],
        },
        // {
        //   title: "Doubao Watermark Remover",
        //   description: "Browser extension + script dual mode, one-click watermark removal for Doubao platform. Supports batch download, simple and efficient.",
        //   features: ["Browser extension, install and use", "Tampermonkey script support, flexible deployment", "Batch download function, improve efficiency"],
        // },
        {
          title: "Lottery Pick3 Prediction",
          description: "Data analysis based lottery prediction system, using statistical algorithms to analyze historical data and provide probability analysis.",
          features: ["Historical data analysis and statistics", "Multiple prediction algorithm models", "Data visualization display"],
        },
        {
          title: "HTTP Request Simulator",
          description: "Powerful HTTP request debugging tool, supports multiple request methods and parameter configurations for API development testing.",
          features: ["Support GET/POST/PUT/DELETE requests", "Custom headers and parameters", "Response data formatting"],
        },
      ],
    },
    // Articles Page
    articles: {
      tag: "Tech Sharing",
      title: "Tech",
      titleHighlight: "Articles",
      description: "Recording technical learning insights, sharing development experience and best practices",
      readMore: "Read More",
      noArticles: "No articles yet, stay tuned...",
      articlesList: [
        // { title: "Remove Doubao AI Image Watermarks with Open Source Plugin + Python Script", description: "Reverse engineer Doubao API to get 2048x2048 watermark-free HD images. Two solutions: browser extension and Python script for different use cases.", readTime: "8 min" },
        { title: "Build High-Performance React-Playground with Monaco and Babel", description: "Share how to build a React online editor using Monaco Editor for code editing, Babel for real-time JSX compilation, with local file imports and sandboxed preview.", readTime: "10 min" },
        { title: "MasterGo AI Generate Design and Code", description: "Introduce MasterGo's AI design and code generation tool. Quickly generate page designs and frontend code from sketches and text descriptions.", readTime: "5 min" },
        { title: "Drawing Flying Lines with Shaders in Three.js", description: "Detailed guide on implementing flying line effects in Three.js, including track lines and dynamic lines using Bezier curves and shaders for smooth animations.", readTime: "12 min" },
      ],
    },
    // Contact Page
    contact: {
      tag: "Contact",
      title: "Get in",
      titleHighlight: "Touch",
      description: "Whether it's technical discussion, project collaboration or other matters, feel free to contact me. Looking forward to connecting with like-minded friends!",
      github: { title: "GitHub", description: "Check out my open source projects and code" },
      email: { title: "Email", description: "Send me an email" },
      wechat: { title: "WeChat", description: "Add WeChat to chat" },
      copy: "Copy",
      copied: "Copied",
      copySuccess: "Copy Success",
      copySuccessDesc: "has been copied to clipboard",
      copyFailed: "Copy Failed",
      copyFailedDesc: "Please copy manually",
      visit: "Visit",
      send: "Send",
      expectTitle: "Looking Forward to Connecting",
      expectDesc: "If you're interested in my projects, or have any technical questions to discuss, feel free to contact me through the above methods. I'll reply as soon as possible!",
    },
    // Common
    common: {
      language: "Language",
    },
  },
  zh: {
    // Navigation
    nav: {
      home: "首页",
      about: "关于我",
      projects: "项目作品",
      articles: "技术文章",
      contact: "联系方式",
    },
    // Hero Section
    hero: {
      welcome: "欢迎来到我的个人博客",
      title: "bread · 0210",
      subtitle: "热爱技术，专注于全栈开发与技术实践，",
      subtitle2: "用代码创造价值，记录成长的点滴。",
      viewProjects: "查看项目作品",
      openSource: "开源项目",
      techArticles: "技术文章",
      techStack: "技术栈",
    },
    // Skills Section
    skills: {
      tag: "技术栈",
      title: "核心",
      titleHighlight: "技能",
      description: "多年积累的技术栈，覆盖前端、后端、AI 和运维全链路",
      frontend: "前端开发",
      backend: "后端开发",
      ai: "AI 技术",
      database: "数据库",
      devops: "DevOps",
      other: "其他技能",
      frontendSkills: ["Vue.js", "React", "TypeScript", "Tailwind CSS", "小程序开发"],
      backendSkills: ["Java", "Python", "Spring Boot", "Flask", "Node.js"],
      aiSkills: ["TensorFlow", "PyTorch", "机器学习", "深度学习", "模型部署"],
      databaseSkills: ["MySQL", "MongoDB", "Redis", "PostgreSQL"],
      devopsSkills: ["Docker", "Linux", "Git", "CI/CD"],
      otherSkills: ["API 设计", "微服务", "系统设计", "性能优化"],
    },
    // Projects Preview
    projectsPreview: {
      tag: "开源项目",
      title: "精选",
      titleHighlight: "项目作品",
      description: "这些是我的开源项目，涵盖 AI 应用、工具开发、数据分析等多个领域",
      viewSource: "查看源码",
      viewAll: "查看全部项目",
      projects: [
        {
          title: "短视频去水印 & AI 证件照",
          description: "支持多平台短视频去水印、AI智能证件照生成、图片涂抹消除等功能，基于深度学习算法实现高质量图像处理",
        },
        // {
        //   title: "豆包去水印工具",
        //   description: "浏览器插件 + 脚本双模式，一键去除豆包平台水印，支持批量处理，操作简单高效",
        // },
        {
          title: "排列三预测系统",
          description: "基于数据分析的彩票号码预测系统，运用统计学算法和历史数据建模，提供概率分析",
        },
        {
          title: "HTTP 请求模拟工具",
          description: "强大的 HTTP 请求调试工具，支持多种请求方式和参数配置，方便 API 开发测试",
        },
      ],
    },
    // Contact CTA
    contactCTA: {
      title: "想要",
      titleHighlight: "合作",
      titleEnd: "或交流？",
      description: "无论是技术探讨、项目合作还是工作机会，都欢迎与我联系",
      contactMe: "联系我",
      sendEmail: "发送邮件",
    },
    // Footer
    footer: {
      brand: "bread · 0210",
      brandDescription: "全栈开发工程师，专注于技术实践，用代码创造价值，用技术改变生活。",
      quickNav: "快速导航",
      contactInfo: "联系方式",
      copyright: "All rights reserved.",
      madeWith: "Made with",
      and: "and lots of",
    },
    // About Page
    about: {
      tag: "关于我",
      title: "bread · 0210",
      description: "热爱技术，专注于全栈开发与技术实践。相信好的代码不仅能解决问题，更能创造价值。始终保持学习的热情，用技术改变生活。",
      location: "山东济南",
      personalInfo: "全栈开发工程师，热衷于探索新技术，喜欢将想法转化为实际的产品。业余时间喜欢研究开源项目，分享技术心得。",
      philosophyTag: "个人理念",
      philosophy: '"让技术落地于实际产品，用全栈能力构建完整解决方案。不仅要写出能运行的代码，更要写出优雅、高效、可维护的代码。"',
      journeyTitle: "成长",
      journeyHighlight: "历程",
      journeyDescription: "从技术起步到持续成长的旅程",
      valuesTitle: "核心",
      valuesHighlight: "价值观",
      timeline: [
        { period: "技术起步", title: "全栈开发基础", description: "系统学习前端与后端开发技术，掌握 Vue、React、Java、Python 等核心技术栈" },
        { period: "深入探索", title: "技术研究", description: "深入学习各种前沿技术，探索技术在实际项目中的应用" },
        { period: "实战积累", title: "项目落地实践", description: "将所学技术与实际需求结合，开发多个实用工具和开源项目" },
        { period: "持续成长", title: "技术分享与开源", description: "积极参与开源社区，分享技术心得，帮助更多开发者成长" },
      ],
      values: [
        { title: "结果导向", description: "专注于交付有价值的产品，让技术真正解决实际问题" },
        { title: "持续学习", description: "保持对新技术的好奇心，不断拓展技术边界" },
        { title: "用心创作", description: "对代码质量有追求，注重细节和用户体验" },
      ],
    },
    // Projects Page
    projects: {
      tag: "项目作品",
      title: "开源",
      titleHighlight: "项目展示",
      description: "这些是我的开源项目,涵盖 AI 应用、工具开发、数据分析等多个领域。每个项目都是实际需求驱动,解决真实问题。",
      featured: "精选项目",
      more: "更多项目",
      viewSource: "查看源码",
      projectsList: [
        {
          title: "短视频去水印 & AI 证件照",
          description: "支持多平台短视频去水印、AI 智能证件照生成、图片涂抹消除等功能。基于 Python 后端开发,集成多种 AI 模型实现智能图像处理。",
          features: ["支持抖音、快手等主流短视频平台去水印", "AI 智能证件照生成,自动裁剪和背景替换", "图片涂抹消除功能,精准去除图片水印"],
        },
        // {
        //   title: "豆包去水印工具",
        //   description: "浏览器插件 + 脚本双模式,一键去除豆包平台水印。支持批量下载,操作简单高效。",
        //   features: ["浏览器插件形式,安装即用", "油猴脚本支持,灵活部署", "批量下载功能,提升效率"],
        // },
        {
          title: "排列三预测系统",
          description: "基于数据分析的彩票号码预测系统,运用统计学算法分析历史数据,提供参考预测。",
          features: ["历史数据分析与统计", "多种预测算法模型", "数据可视化展示"],
        },
        {
          title: "HTTP 请求模拟工具",
          description: "强大的 HTTP 请求调试工具,支持多种请求方式和参数配置,方便开发者进行接口调试。",
          features: ["支持 GET/POST/PUT/DELETE 等请求方式", "自定义请求头和参数", "响应数据格式化展示"],
        },
      ],
    },
    // Articles Page
    articles: {
      tag: "技术分享",
      title: "技术",
      titleHighlight: "文章",
      description: "记录技术学习心得，分享开发经验与最佳实践",
      readMore: "阅读全文",
      noArticles: "暂无文章，敬请期待...",
      articlesList: [
        // { title: "豆包生图有水印？开源插件 + Python 脚本帮你一键搞定", description: "通过逆向分析豆包 API 响应，实现一键获取 AI 生成图片的 2048x2048 无水印高清原图。提供浏览器插件和 Python 脚本两种方案，满足不同使用场景。", readTime: "8 分钟" },
        { title: "如何用 Monaco 和 Babel 打造高性能 React-Playground", description: "分享如何实现一个 React 在线编辑器，使用 Monaco Editor 作为代码编辑器，Babel 进行 JSX 实时编译，支持本地文件引入和沙箱化预览。", readTime: "10 分钟" },
        { title: "MasterGo AI 生成设计图及代码", description: "介绍蓝湖 MasterGo 的 AI 生成设计图和代码工具，通过手绘图和文字描述快速生成页面设计和前端代码，解决无原型、无设计图的开发需求。", readTime: "5 分钟" },
        { title: "Three.js 中使用着色器绘制飞线", description: "详细讲解 Three.js 实现飞线效果的最佳实践，包括底线（轨道线）和飞线（动态线）的绘制，使用贝塞尔曲线和着色器实现流畅的飞线动画。", readTime: "12 分钟" },
      ],
    },
    // Contact Page
    contact: {
      tag: "联系方式",
      title: "与我",
      titleHighlight: "取得联系",
      description: "无论是技术探讨、项目合作还是其他事宜，都欢迎与我联系。期待与志同道合的朋友交流！",
      github: { title: "GitHub", description: "查看我的开源项目和代码" },
      email: { title: "邮箱", description: "发送邮件与我联系" },
      wechat: { title: "微信", description: "添加微信好友交流" },
      copy: "复制",
      copied: "已复制",
      copySuccess: "复制成功",
      copySuccessDesc: "已复制到剪贴板",
      copyFailed: "复制失败",
      copyFailedDesc: "请手动复制",
      visit: "访问",
      send: "发送",
      expectTitle: "期待与您交流",
      expectDesc: "如果您对我的项目感兴趣，或者有任何技术问题想要探讨，欢迎通过以上方式与我联系。我会尽快回复！",
    },
    // Common
    common: {
      language: "语言",
    },
  },
};

export type Language = keyof typeof translations;
export type Translations = (typeof translations)[Language];
