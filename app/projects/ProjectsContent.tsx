"use client";

import { motion } from "framer-motion";
import { Github, Sparkles } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "短视频去水印 & AI 证件照",
    description:
      "支持多平台短视频去水印、AI 智能证件照生成、图片涂抹消除等功能。基于 Python 后端开发,集成多种 AI 模型实现智能图像处理。",
    longDescription: [
      "支持抖音、快手等主流短视频平台去水印",
      "AI 智能证件照生成,自动裁剪和背景替换",
      "图片涂抹消除功能,精准去除图片水印",
    ],
    tags: ["Python", "AI", "图像处理", "后端开发"],
    github: "https://github.com/yinhw0210/dataAnalysis-backend",
    gradient: "from-blue-500 to-cyan-500",
    featured: true,
  },
  {
    title: "豆包去水印工具",
    description:
      "浏览器插件 + 脚本双模式,一键去除豆包平台水印。支持批量下载,操作简单高效。",
    longDescription: [
      "浏览器插件形式,安装即用",
      "油猴脚本支持,灵活部署",
      "批量下载功能,提升效率",
    ],
    tags: ["JavaScript", "浏览器插件", "油猴脚本", "自动化"],
    github: "https://github.com/yinhw0210/doubao-download",
    gradient: "from-purple-500 to-pink-500",
    featured: true,
  },
  {
    title: "排列三预测系统",
    description:
      "基于数据分析的彩票号码预测系统,运用统计学算法分析历史数据,提供参考预测。",
    longDescription: [
      "历史数据分析与统计",
      "多种预测算法模型",
      "数据可视化展示",
    ],
    tags: ["Python", "数据分析", "统计算法", "可视化"],
    github: "https://github.com/yinhw0210/lottery-pick3",
    gradient: "from-orange-500 to-red-500",
    featured: false,
  },
  {
    title: "HTTP 请求模拟工具",
    description:
      "强大的 HTTP 请求调试工具,支持多种请求方式和参数配置,方便开发者进行接口调试。",
    longDescription: [
      "支持 GET/POST/PUT/DELETE 等请求方式",
      "自定义请求头和参数",
      "响应数据格式化展示",
    ],
    tags: ["Java", "网络编程", "工具开发", "HTTP"],
    github: "https://github.com/yinhw0210/http-sends",
    gradient: "from-green-500 to-teal-500",
    featured: false,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export function ProjectsContent() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mb-6">
              项目作品
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">开源</span>项目展示
            </h1>
            <p className="text-lg text-muted-foreground">
              这些是我的开源项目,涵盖 AI 应用、工具开发、数据分析等多个领域。
              每个项目都是实际需求驱动,解决真实问题。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 mb-8"
          >
            <Sparkles className="w-5 h-5 text-primary" />
            <h2 className="text-2xl font-bold">精选项目</h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          >
            {featuredProjects.map((project, index) => (
              <motion.article
                key={index}
                variants={itemVariants}
                className="group card-elevated rounded-2xl overflow-hidden hover-lift"
              >
                {/* Gradient Header */}
                <div
                  className={`h-2 bg-gradient-to-r ${project.gradient}`}
                />
                <div className="p-6 md:p-8">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2 mb-6">
                    {project.longDescription.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-muted text-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <Button variant="outline" asChild>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4" />
                      查看源码
                    </a>
                  </Button>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Other Projects */}
      <section className="py-12 pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-8"
          >
            更多项目
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {otherProjects.map((project, index) => (
              <motion.article
                key={index}
                variants={itemVariants}
                className="group card-elevated rounded-2xl p-6 hover-lift"
              >
                {/* Gradient Bar */}
                <div
                  className={`w-16 h-1 rounded-full bg-gradient-to-r ${project.gradient} mb-5`}
                />

                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 rounded text-xs font-medium bg-muted text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <Button variant="ghost" size="sm" asChild>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                </Button>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
