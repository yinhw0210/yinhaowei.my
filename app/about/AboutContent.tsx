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
import { useI18n } from "@/lib/i18n";

const timelineIcons = [Code2, Lightbulb, Rocket, TrendingUp];
const valueIcons = [Target, Lightbulb, Heart];

export function AboutContent() {
  const { t } = useI18n();

  const timeline = t.about.timeline.map((item, index) => ({
    ...item,
    icon: timelineIcons[index],
  }));

  const values = t.about.values.map((item, index) => ({
    ...item,
    icon: valueIcons[index],
  }));

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
              {t.about.tag}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">{t.about.title}</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t.about.description}
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
                  <h2 className="text-3xl font-bold mb-4">{t.about.title}</h2>
                  <div className="flex flex-wrap justify-center md:justify-start gap-4 text-muted-foreground">
                    <span className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      {t.about.location}
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
                    {t.about.personalInfo}
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
                  <h2 className="text-2xl font-bold mb-2">{t.about.philosophyTag}</h2>
                  <p className="text-muted-foreground">My Philosophy</p>
                </div>
              </div>
              <blockquote className="text-xl md:text-2xl font-medium text-foreground leading-relaxed border-l-4 border-primary pl-6">
                {t.about.philosophy}
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
              {t.about.journeyTitle}<span className="text-gradient">{t.about.journeyHighlight}</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t.about.journeyDescription}
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
              {t.about.valuesTitle}<span className="text-gradient">{t.about.valuesHighlight}</span>
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
