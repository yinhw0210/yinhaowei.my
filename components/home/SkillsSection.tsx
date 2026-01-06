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
import { useI18n } from "@/lib/i18n";

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
  const { t } = useI18n();

  const skillCategories = [
    {
      title: t.skills.frontend,
      icon: Code2,
      skills: t.skills.frontendSkills,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: t.skills.backend,
      icon: Server,
      skills: t.skills.backendSkills,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: t.skills.ai,
      icon: Brain,
      skills: t.skills.aiSkills,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: t.skills.database,
      icon: Database,
      skills: t.skills.databaseSkills,
      color: "from-orange-500 to-red-500",
    },
    {
      title: t.skills.devops,
      icon: Layers,
      skills: t.skills.devopsSkills,
      color: "from-indigo-500 to-violet-500",
    },
    {
      title: t.skills.other,
      icon: Zap,
      skills: t.skills.otherSkills,
      color: "from-teal-500 to-cyan-500",
    },
  ];

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
            {t.skills.tag}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t.skills.title}<span className="text-gradient">{t.skills.titleHighlight}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t.skills.description}
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
