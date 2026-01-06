import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { I18nProvider } from "@/lib/i18n";

export const metadata: Metadata = {
  title: {
    default: "yinhw0210 - Personal Blog",
    template: "%s | yinhw0210",
  },
  description:
    "缺乏专注的竞选者的个人博客，分享技术文章、开源项目和学习心得。涵盖 React、Vue、Python、Java、机器学习、深度学习等技术栈。",
  keywords: [
    "AI开发",
    "全栈开发",
    "前端开发",
    "后端开发",
    "机器学习",
    "深度学习",
    "React",
    "Vue",
    "Python",
    "Java",
    "开源项目",
  ],
  authors: [{ name: "yinhw0210" }],
  creator: "yinhw0210",
  metadataBase: new URL("https://yinhw.dev"),
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "https://yinhw.dev",
    title: "yinhw0210 - Personal Blog",
    description:
      "缺乏专注的竞选者的个人博客，分享技术文章、开源项目和学习心得。",
    siteName: "yinhw0210",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "yinhw0210",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "yinhw0210 - Personal Blog",
    description:
      "缺乏专注的竞选者的个人博客，分享技术文章、开源项目和学习心得。",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <I18nProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            {children}
          </TooltipProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
