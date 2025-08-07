import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: {
    default: "殷浩玮的个人博客",
    template: "%s | 殷浩玮的个人博客"
  },
  description: "欢迎来到殷浩玮的个人博客，分享技术见解、生活感悟和学习笔记",
  keywords: ["殷浩玮", "个人博客", "技术博客", "前端开发", "Next.js", "React"],
  authors: [{ name: "殷浩玮" }],
  creator: "殷浩玮",
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "https://yinhw0210.vercel.app",
    title: "殷浩玮的个人博客",
    description: "欢迎来到殷浩玮的个人博客，分享技术见解、生活感悟和学习笔记",
    siteName: "殷浩玮的个人博客",
  },
  twitter: {
    card: "summary_large_image",
    title: "殷浩玮的个人博客",
    description: "欢迎来到殷浩玮的个人博客，分享技术见解、生活感悟和学习笔记",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="antialiased bg-gray-50 dark:bg-gray-900 transition-colors duration-200 font-sans">
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-1 container mx-auto px-4 py-8">
            {children}
          </main>
          <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-8">
            <div className="container mx-auto px-4 text-center text-gray-600 dark:text-gray-400">
              <p>&copy; 2024 殷浩玮. All rights reserved.</p>
              <p className="text-sm mt-2">Built with Next.js 15 & TypeScript</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
