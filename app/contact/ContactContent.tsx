"use client";

import { motion } from "framer-motion";
import { Github, Mail, MessageCircle, Send, Copy, Check } from "lucide-react";
import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const contactMethods = [
  {
    icon: Github,
    title: "GitHub",
    value: "yinhw0210",
    href: "https://github.com/yinhw0210",
    description: "查看我的开源项目和代码",
    color: "from-gray-600 to-gray-800",
  },
  {
    icon: Mail,
    title: "邮箱",
    value: "solivix@163.com",
    href: "mailto:solivix@163.com",
    description: "发送邮件与我联系",
    color: "from-blue-500 to-cyan-500",
    copyable: true,
  },
  {
    icon: MessageCircle,
    title: "微信",
    value: "yhw734058719",
    description: "添加微信好友交流",
    color: "from-green-500 to-emerald-500",
    copyable: true,
  },
];

export function ContactContent() {
  const { toast } = useToast();
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = async (text: string, index: number) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIndex(index);
      toast({
        title: "复制成功",
        description: `${text} 已复制到剪贴板`,
      });
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch {
      toast({
        title: "复制失败",
        description: "请手动复制",
        variant: "destructive",
      });
    }
  };

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
              联系方式
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              与我<span className="text-gradient">取得联系</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              无论是技术探讨、项目合作还是其他事宜，都欢迎与我联系。
              期待与志同道合的朋友交流！
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12 pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {contactMethods.map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group card-elevated rounded-2xl p-6 md:p-8 hover-lift"
                >
                  <div className="flex items-start gap-5">
                    {/* Icon */}
                    <div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${method.color} flex items-center justify-center flex-shrink-0 shadow-lg`}
                    >
                      <method.icon className="w-7 h-7 text-white" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-bold mb-1">{method.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        {method.description}
                      </p>

                      <div className="flex items-center gap-3 flex-wrap">
                        <code className="px-3 py-2 rounded-lg bg-muted font-mono text-sm text-foreground">
                          {method.value}
                        </code>

                        {method.copyable && (
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleCopy(method.value, index)}
                          >
                            {copiedIndex === index ? (
                              <>
                                <Check className="w-4 h-4 text-green-500" />
                                已复制
                              </>
                            ) : (
                              <>
                                <Copy className="w-4 h-4" />
                                复制
                              </>
                            )}
                          </Button>
                        )}

                        {method.href && (
                          <Button variant="outline" size="sm" asChild>
                            <a
                              href={method.href}
                              target={
                                method.href.startsWith("http")
                                  ? "_blank"
                                  : undefined
                              }
                              rel={
                                method.href.startsWith("http")
                                  ? "noopener noreferrer"
                                  : undefined
                              }
                            >
                              <Send className="w-4 h-4" />
                              {method.title === "GitHub" ? "访问" : "发送"}
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 text-center"
            >
              <div className="card-elevated rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-3">期待与您交流</h3>
                <p className="text-muted-foreground max-w-md mx-auto">
                  如果您对我的项目感兴趣，或者有任何技术问题想要探讨，
                  欢迎通过以上方式与我联系。我会尽快回复！
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
