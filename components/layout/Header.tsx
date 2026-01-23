"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { useI18n } from "@/lib/i18n";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { t } = useI18n();

  const navItems = [
    { name: t.nav.home, path: "/" },
    { name: t.nav.about, path: "/about" },
    { name: t.nav.projects, path: "/projects" },
    { name: t.nav.articles, path: "/articles" },
    { name: t.nav.contact, path: "/contact" },
  ];

  return (
    <header className="bg-[#c0c0c0] border-b-2 border-b-black p-4">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-yellow-300 win-inset flex items-center justify-center border-2 border-black animate-pulse">
            <span className="text-2xl text-red-600">👤</span>
          </div>
          <h1 className="text-2xl font-black tracking-tighter uppercase italic drop-shadow-[2px_2px_0_rgba(0,0,0,0.2)]">
            bread · 0210
          </h1>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-2 flex-wrap justify-center">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`win-button px-4 py-1 font-bold no-underline cursor-pointer ${
                pathname === item.path ? "bg-blue-200" : "hover:text-blue-800"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        
        {/* Mobile Burger */}
        <button 
          className="md:hidden win-button px-2 py-1"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="text-xl">☰</span>
        </button>

        <div className="flex gap-2">
          <a
            href="https://github.com/yinhw0210"
            target="_blank"
            rel="noopener noreferrer"
            className="win-button px-2 py-1 flex items-center gap-1 text-xs no-underline cursor-pointer"
          >
            <span>🐙</span> GitHub
          </a>
          <LanguageSwitcher />
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 pt-4 border-t-2 border-gray-400">
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`win-button px-4 py-2 font-bold no-underline cursor-pointer text-center ${
                  pathname === item.path ? "bg-blue-200" : ""
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
