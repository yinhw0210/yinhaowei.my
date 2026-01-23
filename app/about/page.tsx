import type { Metadata } from "next";
import { AboutContent } from "./AboutContent";

export const metadata: Metadata = {
  title: "关于我",
  description: "了解bread · 0210的技术成长之路、核心理念和个人价值观。",
  openGraph: {
    title: "关于我 | yinhw0210",
    description: "了解bread · 0210的技术成长之路、核心理念和个人价值观。",
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
