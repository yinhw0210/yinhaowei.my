import type { Metadata } from "next";
import { ProjectsContent } from "./ProjectsContent";

export const metadata: Metadata = {
  title: "项目作品",
  description: "查看 AI 全栈开发工程师的开源项目作品,包括 AI 应用、工具开发、数据分析等多个领域的实战项目。",
  keywords: ["开源项目", "AI应用", "全栈开发", "Python", "Java", "工具开发"],
  openGraph: {
    title: "项目作品 | AI全栈开发工程师",
    description: "查看 AI 全栈开发工程师的开源项目作品,包括 AI 应用、工具开发、数据分析等多个领域的实战项目。",
  },
};

export default function ProjectsPage() {
  return <ProjectsContent />;
}
