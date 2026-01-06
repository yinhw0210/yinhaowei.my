"use client";

import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { 
  Code2, 
  Rocket,
  Target,
  Heart,
  Lightbulb,
  TrendingUp,
  MapPin,
  User,
  Mail,
  Github
} from "lucide-react";

const timeline = [
  {
    period: "技术起步",
    title: "全栈开发基础",
    description: "系统学习前端与后端开发技术，掌握 Vue、React、Java、Python 等核心技术栈",
    icon: Code2,
  },
  {
    period: "深入探索",
    title: "技术研究",
    description: "深入学习各种前沿技术，探索技术在实际项目中的应用",
    icon: Lightbulb,
  },
  {
    period: "实战积累",
    title: "项目落地实践",
    description: "将所学技术与实际需求结合，开发多个实用工具和开源项目",
    icon: Rocket,
  },
  {
    period: "持续成长",
    title: "技术分享与开源",
    description: "积极参与开源社区，分享技术心得，帮助更多开发者成长",
    icon: TrendingUp,
  },
];

const values = [
  {
    icon: Target,
    title: "结果导向",
    description: "专注于交付有价值的产品，让技术真正解决实际问题",
  },
  {
    icon: Lightbulb,
    title: "持续学习",
    description: "保持对新技术的好奇心，不断拓展技术边界",
  },
  {
    icon: Heart,
    title: "用心创作",
    description: "对代码质量有追求，注重细节和用户体验",
  },
];

export function AboutContent() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mb-6">
              关于我
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">AI全栈开发工程师</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              热爱技术，专注于全栈开发与技术实践。
              相信好的代码不仅能解决问题，更能创造价值。
              始终保持学习的热情，用技术改变生活。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Personal Info Card */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="card-elevated rounded-2xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Avatar */}
                <div className="w-32 h-32 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0 shadow-xl">
                  <User className="w-16 h-16 text-primary-foreground" />
                </div>
                
                {/* Info */}
                <div className="flex-1 text-center md:text-left">
                  <h2 className="text-3xl font-bold mb-4">AI全栈开发工程师</h2>
                  <div className="flex flex-wrap justify-center md:justify-start gap-4 text-muted-foreground">
                    <span className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      山东济南
                    </span>
                    <span className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-primary" />
                      solivix@163.com
                    </span>
                    <a 
                      href="https://github.com/yinhw0210" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 hover:text-primary transition-colors"
                    >
                      <Github className="w-4 h-4 text-primary" />
                      yinhw0210
                    </a>
                  </div>
                  <p className="mt-4 text-muted-foreground">
                    全栈开发工程师，热衷于探索新技术，喜欢将想法转化为实际的产品。
                    业余时间喜欢研究开源项目，分享技术心得。
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="card-elevated rounded-2xl p-8 md:p-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-2">个人理念</h2>
                  <p className="text-muted-foreground">My Philosophy</p>
                </div>
              </div>
              <blockquote className="text-xl md:text-2xl font-medium text-foreground leading-relaxed border-l-4 border-primary pl-6">
                "让技术落地于实际产品，用全栈能力构建完整解决方案。
                不仅要写出能运行的代码，更要写出优雅、高效、可维护的代码。"
              </blockquote>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              成长<span className="text-gradient">历程</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              从技术起步到持续成长的旅程
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative flex gap-6 pb-12 last:pb-0"
              >
                {/* Timeline Line */}
                {index < timeline.length - 1 && (
                  <div className="absolute left-6 top-14 w-0.5 h-full -translate-x-1/2 bg-border" />
                )}

                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0 z-10">
                  <item.icon className="w-6 h-6 text-primary-foreground" />
                </div>

                {/* Content */}
                <div className="flex-1 pt-1">
                  <span className="text-sm text-primary font-medium">
                    {item.period}
                  </span>
                  <h3 className="text-xl font-bold mt-1 mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              核心<span className="text-gradient">价值观</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card-elevated rounded-2xl p-6 text-center hover-lift"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
