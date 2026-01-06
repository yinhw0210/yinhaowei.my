import Link from "next/link";
import { Github, Mail, MessageCircle, Terminal } from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/yinhw0210",
    icon: Github,
  },
  {
    name: "Email",
    href: "mailto:solivix@163.com",
    icon: Mail,
  },
  {
    name: "WeChat",
    href: "/contact",
    icon: MessageCircle,
  },
];

const navLinks = [
  { name: "首页", path: "/" },
  { name: "关于我", path: "/about" },
  { name: "项目作品", path: "/projects" },
  { name: "技术文章", path: "/articles" },
  { name: "联系方式", path: "/contact" },
];

export const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-card/30">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                <Terminal className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">
                AI全栈开发
              </span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              全栈开发工程师，专注于技术实践，用代码创造价值，用技术改变生活。
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">快速导航</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">联系方式</h4>
            <ul className="space-y-3">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  {link.href.startsWith("http") || link.href.startsWith("mailto") ? (
                    <a
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <link.icon className="w-4 h-4" />
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <link.icon className="w-4 h-4" />
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} AI全栈开发. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Made with <span className="text-primary">♥</span> and lots of{" "}
            <span className="font-mono text-primary">code</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
