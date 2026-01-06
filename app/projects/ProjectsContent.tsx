"use client";

import { motion } from "framer-motion";
import { Github, Sparkles } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";

const projectsData = [
  {
    tags: ["Python", "AI", "图像处理", "后端开发"],
    github: "https://github.com/yinhw0210/dataAnalysis-backend",
    gradient: "from-blue-500 to-cyan-500",
    featured: true,
  },
  {
    tags: ["JavaScript", "浏览器插件", "油猴脚本", "自动化"],
    github: "https://github.com/yinhw0210/doubao-download",
    gradient: "from-purple-500 to-pink-500",
    featured: true,
  },
  {
    tags: ["Python", "数据分析", "统计算法", "可视化"],
    github: "https://github.com/yinhw0210/lottery-pick3",
    gradient: "from-orange-500 to-red-500",
    featured: false,
  },
  {
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
  const { t } = useI18n();

  const projects = projectsData.map((project, index) => ({
    ...project,
    title: t.projects.projectsList[index]?.title || "",
    description: t.projects.projectsList[index]?.description || "",
    longDescription: t.projects.projectsList[index]?.features || [],
  }));

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
              {t.projects.tag}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">{t.projects.title}</span>{t.projects.titleHighlight}
            </h1>
            <p className="text-lg text-muted-foreground">
              {t.projects.description}
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
            <h2 className="text-2xl font-bold">{t.projects.featured}</h2>
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
                      {t.projects.viewSource}
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
            {t.projects.more}
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
