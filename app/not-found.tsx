"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";

export default function NotFound() {
  return (
    <Layout>
      <section className="min-h-[70vh] flex items-center justify-center">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-md mx-auto text-center"
          >
            <div className="text-8xl font-bold text-gradient mb-6">404</div>
            <h1 className="text-2xl font-bold mb-4">页面未找到</h1>
            <p className="text-muted-foreground mb-8">
              抱歉，您访问的页面不存在或已被移除。
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="gradient" asChild>
                <Link href="/">
                  <Home className="w-4 h-4" />
                  返回首页
                </Link>
              </Button>
              <Button variant="outline" onClick={() => window.history.back()}>
                <ArrowLeft className="w-4 h-4" />
                返回上一页
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
