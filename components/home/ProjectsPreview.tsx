"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Star, Eye, GitFork } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";

const projectsData = [
  {
    tags: ["Python", "AI", "图像处理", "深度学习"],
    github: "https://github.com/yinhw0210/dataAnalysis-backend",
    gradient: "from-blue-500 via-cyan-500 to-teal-500",
    icon: "🎬",
    stats: { stars: 12, forks: 3 },
  },
  {
    tags: ["JavaScript", "浏览器插件", "自动化", "Chrome Extension"],
    github: "https://github.com/yinhw0210/doubao-download",
    gradient: "from-purple-500 via-pink-500 to-rose-500",
    icon: "🔧",
    stats: { stars: 8, forks: 2 },
  },
  {
    tags: ["Python", "数据分析", "算法", "统计学"],
    github: "https://github.com/yinhw0210/lottery-pick3",
    gradient: "from-orange-500 via-amber-500 to-yellow-500",
    icon: "🎯",
    stats: { stars: 15, forks: 5 },
  },
  {
    tags: ["Java", "网络", "工具", "REST API"],
    github: "https://github.com/yinhw0210/http-sends",
    gradient: "from-green-500 via-emerald-500 to-teal-500",
    icon: "🌐",
    stats: { stars: 6, forks: 1 },
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
    }
  },
};

export const ProjectsPreview = () => {
  const { t } = useI18n();

  const projects = projectsData.map((project, index) => ({
    ...project,
    title: t.projectsPreview.projects[index]?.title || "",
    description: t.projectsPreview.projects[index]?.description || "",
  }));

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mb-4">
            {t.projectsPreview.tag}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t.projectsPreview.title}<span className="text-gradient">{t.projectsPreview.titleHighlight}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t.projectsPreview.description}
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.article
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10"
                style={{
                  backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))`,
                }}
              />
              
              <div className="card-elevated rounded-2xl p-6 h-full hover-lift overflow-hidden relative">
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${project.gradient} opacity-10 rounded-full blur-2xl transform translate-x-8 -translate-y-8 group-hover:opacity-20 transition-opacity duration-500`} />
                
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center text-2xl shadow-lg`}>
                      {project.icon}
                    </div>
                    <div className={`h-1 w-16 rounded-full bg-gradient-to-r ${project.gradient}`} />
                  </div>
                  
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 text-yellow-500" />
                      {project.stats.stars}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork className="w-3.5 h-3.5" />
                      {project.stats.forks}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-5 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1.5 rounded-lg text-xs font-medium bg-muted/80 text-muted-foreground border border-border/50 hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                  <Button variant="outline" size="sm" asChild className="flex-1">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4" />
                      {t.projectsPreview.viewSource}
                    </a>
                  </Button>
                  <Button variant="ghost" size="sm" asChild>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Eye className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button variant="gradient" size="lg" asChild>
            <Link href="/projects">
              {t.projectsPreview.viewAll}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
