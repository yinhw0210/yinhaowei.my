"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n";

export const Footer = () => {
  const { t } = useI18n();

  const navLinks = [
    { name: t.nav.home, path: "/" },
    { name: t.nav.about, path: "/about" },
    { name: t.nav.projects, path: "/projects" },
    { name: t.nav.articles, path: "/articles" },
  ];

  return (
    <footer className="bg-gray-800 text-gray-300 p-6 md:p-10 border-t-2 border-white text-sm">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div>
          <div className="flex items-center gap-2 text-yellow-400 font-bold text-lg mb-4">
            <span className="text-xl">👤</span>
            {t.footer.brand}
          </div>
          <p className="font-mono text-xs leading-relaxed max-w-xs text-gray-400">
            {t.footer.brandDescription}
            <br />
            <span className="text-yellow-200">{t.footer.madeWith} ♥ {t.footer.and} lots of code.</span>
          </p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4 uppercase border-b border-gray-600 inline-block">
            {t.footer.quickNav}
          </h4>
          <ul className="space-y-2 font-mono">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link href={link.path} className="hover:text-white hover:underline cursor-pointer">
                  &gt;&gt; {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4 uppercase border-b border-gray-600 inline-block">
            {t.footer.contactInfo}
          </h4>
          <ul className="space-y-2 font-mono text-xs">
            <li className="flex items-center gap-2">
              <span>🐙</span>
              github.com/yinhw0210
            </li>
            <li className="flex items-center gap-2">
              <span>✉️</span>
              solivix@163.com
            </li>
            <li className="flex items-center gap-2">
              <span>📍</span>
              Jinan, China
            </li>
          </ul>
        </div>
      </div>
      
      <div className="text-center border-t border-gray-700 pt-6 font-mono text-xs text-gray-500">
        <p>&copy; {new Date().getFullYear()} {t.footer.brand}. {t.footer.copyright}</p>
        <p className="mt-2">Best viewed with Internet Explorer 4.0 or Netscape Navigator at 800x600 resolution.</p>
      </div>
    </footer>
  );
};
