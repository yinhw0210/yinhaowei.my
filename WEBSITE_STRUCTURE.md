# 网站完整结构与内容文档

## 项目概述

这是一个个人博客网站，主题为"缺乏专注的竞选者"，展示个人技术项目、文章和联系方式。网站支持中英文双语切换。

## 技术栈建议

- 现代化前端框架（如 Next.js, React, Vue, Nuxt 等）
- TypeScript（可选）
- 响应式设计
- 国际化支持（中英文）

## 页面结构

### 通用布局

#### Header（导航栏）
- Logo/品牌名称："缺乏专注的竞选者"
- 导航菜单：
  - 首页
  - 关于我
  - 项目作品
  - 技术文章
  - 联系方式
- GitHub 链接按钮
- 语言切换器（中文/English）
- 移动端：汉堡菜单

#### Footer（页脚）
**第一列 - 品牌信息：**
- Logo 图标
- 品牌名称："缺乏专注的竞选者"
- 简介：全栈开发工程师，专注于技术实践，用代码创造价值，用技术改变生活。

**第二列 - 快速导航：**
- 首页
- 关于我
- 项目作品
- 技术文章
- 联系方式

**第三列 - 联系方式：**
- GitHub: https://github.com/yinhw0210
- Email: solivix@163.com
- WeChat（微信）

**底部信息：**
- 版权信息：© 2025 缺乏专注的竞选者. All rights reserved.
- 制作信息：Made with ♥ and lots of code

---

### 1. 首页 (/)

#### 区块 1：Hero Section（英雄区）

**装饰元素：**
- 背景中显示代码符号：`</>`, `{ }`, `{}`（可选装饰）

**主要内容：**
- 欢迎标签："欢迎来到我的个人博客"
- 主标题："缺乏专注的竞选者"
- 副标题：
  - "热爱技术，专注于全栈开发与技术实践，"
  - "用代码创造价值，记录成长的点滴。"
- 主要按钮："查看项目作品" → 链接到 /projects
- 次要按钮："GitHub" → 链接到 https://github.com/yinhw0210

**统计数据（三列）：**
1. 开源项目：4+
2. 技术文章：10+
3. 技术栈：10+

**底部：**
- 滚动指示器（向下箭头动画）

---

#### 区块 2：Projects Preview（项目预览）

**区块标题：**
- 小标签："开源项目"
- 大标题："精选项目作品"
- 描述："这些是我的开源项目，涵盖 AI 应用、工具开发、数据分析等多个领域"

**项目列表（2列网格，移动端1列）：**

**项目 1：短视频去水印 & AI 证件照**
- 图标：🎬
- 标题：短视频去水印 & AI 证件照
- 描述：支持多平台短视频去水印、AI智能证件照生成、图片涂抹消除等功能，基于深度学习算法实现高质量图像处理
- 技术标签：Python, AI, 图像处理, 深度学习
- GitHub Stars: 12
- GitHub Forks: 3
- GitHub 链接：https://github.com/yinhw0210/dataAnalysis-backend
- 按钮："查看源码"

**项目 2：豆包去水印工具**
- 图标：🔧
- 标题：豆包去水印工具
- 描述：浏览器插件 + 脚本双模式，一键去除豆包平台水印，支持批量处理，操作简单高效
- 技术标签：JavaScript, 浏览器插件, 自动化, Chrome Extension
- GitHub Stars: 8
- GitHub Forks: 2
- GitHub 链接：https://github.com/yinhw0210/doubao-download
- 按钮："查看源码"

**项目 3：排列三预测系统**
- 图标：🎯
- 标题：排列三预测系统
- 描述：基于数据分析的彩票号码预测系统，运用统计学算法和历史数据建模，提供概率分析
- 技术标签：Python, 数据分析, 算法, 统计学
- GitHub Stars: 15
- GitHub Forks: 5
- GitHub 链接：https://github.com/yinhw0210/lottery-pick3
- 按钮："查看源码"

**项目 4：HTTP 请求模拟工具**
- 图标：🌐
- 标题：HTTP 请求模拟工具
- 描述：强大的 HTTP 请求调试工具，支持多种请求方式和参数配置，方便 API 开发测试
- 技术标签：Java, 网络, 工具, REST API
- GitHub Stars: 6
- GitHub Forks: 1
- GitHub 链接：https://github.com/yinhw0210/http-sends
- 按钮："查看源码"

**底部按钮：**
- "查看全部项目" → 链接到 /projects

---

#### 区块 3：Skills Section（技能区）

**区块标题：**
- 小标签："技术栈"
- 大标题："核心技能"
- 描述："多年积累的技术栈，覆盖前端、后端、AI 和运维全链路"

**技能分类（3列网格，移动端1列）：**

**1. 前端开发**
- 图标：代码图标
- 技能列表：Vue.js, React, TypeScript, Tailwind CSS, 小程序开发

**2. 后端开发**
- 图标：服务器图标
- 技能列表：Java, Python, Spring Boot, Flask, Node.js

**3. AI 技术**
- 图标：大脑图标
- 技能列表：TensorFlow, PyTorch, 机器学习, 深度学习, 模型部署

**4. 数据库**
- 图标：数据库图标
- 技能列表：MySQL, MongoDB, Redis, PostgreSQL

**5. DevOps**
- 图标：层级图标
- 技能列表：Docker, Linux, Git, CI/CD

**6. 其他技能**
- 图标：闪电图标
- 技能列表：API 设计, 微服务, 系统设计, 性能优化

---

#### 区块 4：Contact CTA（联系号召）

**内容：**
- 主标题："想要合作或交流？"
- 描述："无论是技术探讨、项目合作还是工作机会，都欢迎与我联系"
- 主要按钮："联系我" → 链接到 /contact
- 次要按钮："发送邮件" → mailto:solivix@163.com

**社交链接（圆形图标按钮）：**
- GitHub → https://github.com/yinhw0210
- Email → mailto:solivix@163.com
- WeChat → 链接到 /contact

---

### 2. 关于我页面 (/about)

**页面标题：**
- 小标签："关于我"
- 大标题："缺乏专注的竞选者"
- 描述："热爱技术，专注于全栈开发与技术实践。相信好的代码不仅能解决问题，更能创造价值。始终保持学习的热情，用技术改变生活。"

**个人信息：**
- 位置：山东济南
- 简介：全栈开发工程师，热衷于探索新技术，喜欢将想法转化为实际的产品。业余时间喜欢研究开源项目，分享技术心得。

**个人理念：**
- 标签："个人理念"
- 内容："让技术落地于实际产品，用全栈能力构建完整解决方案。不仅要写出能运行的代码，更要写出优雅、高效、可维护的代码。"

---

#### 成长历程

**区块标题：**
- "成长历程"
- 描述："从技术起步到持续成长的旅程"

**时间线（4个阶段）：**

**阶段 1：技术起步**
- 时期：技术起步
- 标题：全栈开发基础
- 描述：系统学习前端与后端开发技术，掌握 Vue、React、Java、Python 等核心技术栈

**阶段 2：深入探索**
- 时期：深入探索
- 标题：技术研究
- 描述：深入学习各种前沿技术，探索技术在实际项目中的应用

**阶段 3：实战积累**
- 时期：实战积累
- 标题：项目落地实践
- 描述：将所学技术与实际需求结合，开发多个实用工具和开源项目

**阶段 4：持续成长**
- 时期：持续成长
- 标题：技术分享与开源
- 描述：积极参与开源社区，分享技术心得，帮助更多开发者成长

---

#### 核心价值观

**区块标题：**
- "核心价值观"

**价值观列表（3个卡片）：**

**1. 结果导向**
- 标题：结果导向
- 描述：专注于交付有价值的产品，让技术真正解决实际问题

**2. 持续学习**
- 标题：持续学习
- 描述：保持对新技术的好奇心，不断拓展技术边界

**3. 用心创作**
- 标题：用心创作
- 描述：对代码质量有追求，注重细节和用户体验

---

### 3. 项目页面 (/projects)

**页面标题：**
- 小标签："项目作品"
- 大标题："开源项目展示"
- 描述："这些是我的开源项目,涵盖 AI 应用、工具开发、数据分析等多个领域。每个项目都是实际需求驱动,解决真实问题。"

---

#### 精选项目

**项目 1：短视频去水印 & AI 证件照**
- 图标：🎬
- 标题：短视频去水印 & AI 证件照
- 描述：支持多平台短视频去水印、AI 智能证件照生成、图片涂抹消除等功能。基于 Python 后端开发,集成多种 AI 模型实现智能图像处理。
- 技术标签：Python, AI, 图像处理, 深度学习
- GitHub Stars: 12
- GitHub Forks: 3
- GitHub 链接：https://github.com/yinhw0210/dataAnalysis-backend
- 功能特性：
  1. 支持抖音、快手等主流短视频平台去水印
  2. AI 智能证件照生成,自动裁剪和背景替换
  3. 图片涂抹消除功能,精准去除图片水印
- 按钮："查看源码"

**项目 2：豆包去水印工具**
- 图标：🔧
- 标题：豆包去水印工具
- 描述：浏览器插件 + 脚本双模式,一键去除豆包平台水印。支持批量下载,操作简单高效。
- 技术标签：JavaScript, 浏览器插件, 自动化, Chrome Extension
- GitHub Stars: 8
- GitHub Forks: 2
- GitHub 链接：https://github.com/yinhw0210/doubao-download
- 功能特性：
  1. 浏览器插件形式,安装即用
  2. 油猴脚本支持,灵活部署
  3. 批量下载功能,提升效率
- 按钮："查看源码"

**项目 3：排列三预测系统**
- 图标：🎯
- 标题：排列三预测系统
- 描述：基于数据分析的彩票号码预测系统,运用统计学算法分析历史数据,提供参考预测。
- 技术标签：Python, 数据分析, 算法, 统计学
- GitHub Stars: 15
- GitHub Forks: 5
- GitHub 链接：https://github.com/yinhw0210/lottery-pick3
- 功能特性：
  1. 历史数据分析与统计
  2. 多种预测算法模型
  3. 数据可视化展示
- 按钮："查看源码"

**项目 4：HTTP 请求模拟工具**
- 图标：🌐
- 标题：HTTP 请求模拟工具
- 描述：强大的 HTTP 请求调试工具,支持多种请求方式和参数配置,方便开发者进行接口调试。
- 技术标签：Java, 网络, 工具, REST API
- GitHub Stars: 6
- GitHub Forks: 1
- GitHub 链接：https://github.com/yinhw0210/http-sends
- 功能特性：
  1. 支持 GET/POST/PUT/DELETE 等请求方式
  2. 自定义请求头和参数
  3. 响应数据格式化展示
- 按钮："查看源码"

---

### 4. 文章页面 (/articles)

**页面标题：**
- 小标签："技术分享"
- 大标题："技术文章"
- 描述："记录技术学习心得，分享开发经验与最佳实践"

---

#### 文章列表

**文章 1：**
- 标题：豆包生图有水印？开源插件 + Python 脚本帮你一键搞定
- 描述：通过逆向分析豆包 API 响应，实现一键获取 AI 生成图片的 2048x2048 无水印高清原图。提供浏览器插件和 Python 脚本两种方案，满足不同使用场景。
- 阅读时间：8 分钟
- 按钮："阅读全文"

**文章 2：**
- 标题：如何用 Monaco 和 Babel 打造高性能 React-Playground
- 描述：分享如何实现一个 React 在线编辑器，使用 Monaco Editor 作为代码编辑器，Babel 进行 JSX 实时编译，支持本地文件引入和沙箱化预览。
- 阅读时间：10 分钟
- 按钮："阅读全文"

**文章 3：**
- 标题：MasterGo AI 生成设计图及代码
- 描述：介绍蓝湖 MasterGo 的 AI 生成设计图和代码工具，通过手绘图和文字描述快速生成页面设计和前端代码，解决无原型、无设计图的开发需求。
- 阅读时间：5 分钟
- 按钮："阅读全文"

**文章 4：**
- 标题：Three.js 中使用着色器绘制飞线
- 描述：详细讲解 Three.js 实现飞线效果的最佳实践，包括底线（轨道线）和飞线（动态线）的绘制，使用贝塞尔曲线和着色器实现流畅的飞线动画。
- 阅读时间：12 分钟
- 按钮："阅读全文"

**空状态提示：**
- 如果没有文章：显示 "暂无文章，敬请期待..."

---

### 5. 联系页面 (/contact)

**页面标题：**
- 小标签："联系方式"
- 大标题："与我取得联系"
- 描述："无论是技术探讨、项目合作还是其他事宜，都欢迎与我联系。期待与志同道合的朋友交流！"

---

#### 联系方式卡片（3个）

**卡片 1：GitHub**
- 图标：GitHub 图标
- 标题：GitHub
- 描述：查看我的开源项目和代码
- 链接：https://github.com/yinhw0210
- 按钮："访问"

**卡片 2：邮箱**
- 图标：邮件图标
- 标题：邮箱
- 描述：发送邮件与我联系
- 邮箱地址：solivix@163.com
- 按钮："发送" 或 "复制"
- 复制成功提示："已复制到剪贴板"

**卡片 3：微信**
- 图标：消息图标
- 标题：微信
- 描述：添加微信好友交流
- 按钮："复制"（复制微信号）
- 复制成功提示："已复制到剪贴板"

---

#### 期待交流区

**内容：**
- 标题：期待与您交流
- 描述：如果您对我的项目感兴趣，或者有任何技术问题想要探讨，欢迎通过以上方式与我联系。我会尽快回复！

---

## 国际化内容

### 语言支持
- 中文 (zh) - 默认语言
- 英文 (en)

### 英文翻译对照

**导航菜单：**
- 首页 → Home
- 关于我 → About
- 项目作品 → Projects
- 技术文章 → Articles
- 联系方式 → Contact

**首页 Hero 区：**
- 欢迎来到我的个人博客 → Welcome to my personal blog
- 缺乏专注的竞选者 → Unfocused Candidate
- 热爱技术，专注于全栈开发与技术实践 → Passionate about technology, focused on full-stack development and technical practice
- 用代码创造价值，记录成长的点滴 → creating value with code, recording every step of growth
- 查看项目作品 → View Projects
- 开源项目 → Open Source
- 技术文章 → Tech Articles
- 技术栈 → Tech Stack

**项目预览区：**
- 开源项目 → Open Source
- 精选项目作品 → Featured Projects
- 这些是我的开源项目，涵盖 AI 应用、工具开发、数据分析等多个领域 → These are my open source projects, covering AI applications, tool development, data analysis and more
- 查看源码 → View Source
- 查看全部项目 → View All Projects

**技能区：**
- 技术栈 → Tech Stack
- 核心技能 → Core Skills
- 多年积累的技术栈，覆盖前端、后端、AI 和运维全链路 → Years of accumulated tech stack, covering frontend, backend, AI and DevOps
- 前端开发 → Frontend
- 后端开发 → Backend
- AI 技术 → AI Tech
- 数据库 → Database
- 其他技能 → Other Skills

**联系号召区：**
- 想要合作或交流？ → Want to collaborate or chat?
- 无论是技术探讨、项目合作还是工作机会，都欢迎与我联系 → Whether it's technical discussion, project collaboration, or job opportunities, feel free to contact me
- 联系我 → Contact Me
- 发送邮件 → Send Email

**页脚：**
- 快速导航 → Quick Navigation
- 联系方式 → Contact
- 版权所有 → All rights reserved
- 全栈开发工程师，专注于技术实践，用代码创造价值，用技术改变生活 → Full-stack developer, focused on technical practice, creating value with code, changing life with technology

**关于页面：**
- 关于我 → About Me
- 个人理念 → My Philosophy
- 成长历程 → Growth Journey
- 从技术起步到持续成长的旅程 → From technical beginnings to continuous growth
- 核心价值观 → Core Values
- 结果导向 → Result-Oriented
- 持续学习 → Continuous Learning
- 用心创作 → Crafted with Care

**联系页面：**
- 联系方式 → Contact
- 与我取得联系 → Get in Touch
- 查看我的开源项目和代码 → Check out my open source projects and code
- 发送邮件与我联系 → Send me an email
- 添加微信好友交流 → Add WeChat to chat
- 复制 → Copy
- 已复制 → Copied
- 复制成功 → Copy Success
- 已复制到剪贴板 → has been copied to clipboard
- 访问 → Visit
- 发送 → Send
- 期待与您交流 → Looking Forward to Connecting

---

## SEO 信息

### 网站元数据
- **网站标题**: yinhw0210 - Personal Blog
- **网站描述**: 缺乏专注的竞选者的个人博客，分享技术文章、开源项目和学习心得。涵盖 React、Vue、Python、Java、机器学习、深度学习等技术栈。
- **关键词**: AI开发, 全栈开发, 前端开发, 后端开发, 机器学习, 深度学习, React, Vue, Python, Java, 开源项目
- **作者**: yinhw0210
- **网站域名**: https://yinhw.dev

### Open Graph 信息
- **类型**: website
- **语言**: zh_CN
- **图片**: /og-image.png (1200x630)

### Robots 配置
- 允许搜索引擎索引
- 允许搜索引擎跟踪链接

---

## 响应式设计要求

### 布局适配
- **桌面端**: 导航栏水平布局，项目/技能使用多列网格
- **移动端**: 汉堡菜单，单列布局
- **平板端**: 2列网格布局

### 触摸目标
- 所有可点击元素至少 44x44px（移动端）

### 图片
- 使用响应式图片
- 提供适当的 alt 文本

---

## 无障碍性要求

- 使用语义化 HTML 标签
- 提供适当的 ARIA 标签
- 支持键盘导航
- 确保文字与背景有足够对比度
- 为图标提供文字说明

---

## 性能优化建议

- 图片懒加载
- 代码分割
- 压缩静态资源
- 使用 CDN
- 缓存策略

---

**文档版本**: 2.0（纯内容版）  
**最后更新**: 2025-01-23  
**作者**: yinhw0210
