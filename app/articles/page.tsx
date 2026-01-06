import type { Metadata } from "next";
import { ArticlesContent } from "./ArticlesContent";

export const metadata: Metadata = {
  title: "技术文章",
  description: "AI全栈开发工程师的技术博客，分享前端开发、后端开发、AI 应用等技术文章和心得。",
  openGraph: {
    title: "技术文章 | AI全栈开发工程师",
    description: "AI全栈开发工程师的技术博客，分享前端开发、后端开发、AI 应用等技术文章和心得。",
  },
};

export default function ArticlesPage() {
  return <ArticlesContent />;
}
