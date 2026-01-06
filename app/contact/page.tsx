import type { Metadata } from "next";
import { ContactContent } from "./ContactContent";

export const metadata: Metadata = {
  title: "联系方式",
  description: "与 AI 全栈开发工程师取得联系。通过 GitHub、邮箱或微信与我交流技术、探讨项目合作。",
  keywords: ["联系方式", "GitHub", "邮箱", "微信", "技术交流", "项目合作"],
  openGraph: {
    title: "联系方式 | AI全栈开发工程师",
    description: "与 AI 全栈开发工程师取得联系。通过 GitHub、邮箱或微信与我交流技术、探讨项目合作。",
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
