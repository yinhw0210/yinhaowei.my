"use client";

import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { ArrowUpRight, Calendar, Clock, Tag } from "lucide-react";
import { articles as articlesData } from "@/data/articles";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";

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
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function ArticlesContent() {
  const { t } = useI18n();

  const articles = articlesData.map((article, index) => ({
    ...article,
    title: t.articles.articlesList[index]?.title || article.title,
    description: t.articles.articlesList[index]?.description || article.description,
    readTime: t.articles.articlesList[index]?.readTime || article.readTime,
  }));

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
              {t.articles.tag}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t.articles.title}<span className="text-gradient">{t.articles.titleHighlight}</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              {t.articles.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Articles List */}
      <section className="py-12 pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto space-y-6"
          >
            {articles.map((article) => (
              <motion.article
                key={article.id}
                variants={itemVariants}
                className="group card-elevated rounded-2xl p-6 md:p-8 hover-lift"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Content */}
                  <div className="flex-1">
                    {/* Meta */}
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-3">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" />
                        {article.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4" />
                        {article.readTime}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {article.title}
                    </h2>

                    {/* Description */}
                    <p className="text-muted-foreground mb-4 line-clamp-2">
                      {article.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {article.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center gap-1 px-3 py-1 rounded-lg text-xs font-medium bg-muted text-muted-foreground"
                        >
                          <Tag className="w-3 h-3" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action */}
                  <div className="flex-shrink-0">
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={article.externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        {t.articles.readMore}
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>

          {/* Empty State (if no articles) */}
          {articles.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-muted-foreground text-lg">
                {t.articles.noArticles}
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </Layout>
  );
}
