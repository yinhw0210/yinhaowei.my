"use client";

import { motion } from "framer-motion";
import { 
  Code2, 
  Server, 
  Brain, 
  Database,
  Layers,
  Zap
} from "lucide-react";

const skillCategories = [
  {
    title: "前端开发",
    icon: Code2,
    skills: ["Vue.js", "React", "TypeScript", "Tailwind CSS", "小程序开发"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "后端开发",
    icon: Server,
    skills: ["Java", "Python", "Spring Boot", "Flask", "Node.js"],
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "AI 技术",
    icon: Brain,
    skills: ["TensorFlow", "PyTorch", "机器学习", "深度学习", "模型部署"],
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "数据库",
    icon: Database,
    skills: ["MySQL", "MongoDB", "Redis", "PostgreSQL"],
    color: "from-orange-500 to-red-500",
  },
  {
    title: "DevOps",
    icon: Layers,
    skills: ["Docker", "Linux", "Git", "CI/CD"],
    color: "from-indigo-500 to-violet-500",
  },
  {
    title: "其他技能",
    icon: Zap,
    skills: ["API 设计", "微服务", "系统设计", "性能优化"],
    color: "from-teal-500 to-cyan-500",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

export const SkillsSection = () => {
  return (
    <section className="py-24 relative bg-card/30">
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
            技术栈
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            核心<span className="text-gradient">技能</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            多年积累的技术栈，覆盖前端、后端、AI 和运维全链路
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group card-elevated rounded-2xl p-6 hover-lift"
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-5 shadow-lg`}
              >
                <category.icon className="w-7 h-7 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold mb-4 group-hover:text-primary transition-colors">
                {category.title}
              </h3>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium bg-muted text-foreground border border-border/50"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
