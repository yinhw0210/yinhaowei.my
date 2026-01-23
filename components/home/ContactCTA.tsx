"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n";

export const ContactCTA = () => {
  const { t } = useI18n();

  return (
    <section className="p-6 md:p-12 bg-[#c0c0c0]">
      <div className="max-w-3xl mx-auto text-center border-4 border-double border-gray-600 p-8">
        <h2 className="text-3xl font-black mb-4 rainbow-text drop-shadow-md">
          {t.contactCTA.title}{t.contactCTA.titleHighlight}{t.contactCTA.titleEnd}
        </h2>
        <p className="mb-8 text-lg">{t.contactCTA.description}</p>
        
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <Link 
            href="/contact"
            className="win-button px-6 py-3 font-bold text-lg flex items-center justify-center gap-2 hover:bg-gray-200 no-underline cursor-pointer"
          >
            <span className="text-xl">✉️</span>
            {t.contactCTA.contactMe}
          </Link>
          <a 
            href="mailto:solivix@163.com"
            className="win-button px-6 py-3 font-bold text-lg flex items-center justify-center gap-2 hover:bg-gray-200 no-underline cursor-pointer"
          >
            <span className="text-xl">📧</span>
            {t.contactCTA.sendEmail}
          </a>
        </div>
        
        <div className="mt-8 flex justify-center gap-4">
          <a 
            href="https://github.com/yinhw0210" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-blue-700 text-3xl cursor-pointer"
          >
            🐙
          </a>
          <a 
            href="mailto:solivix@163.com"
            className="text-black hover:text-blue-700 text-3xl cursor-pointer"
          >
            @
          </a>
          <Link 
            href="/contact"
            className="text-black hover:text-blue-700 text-3xl cursor-pointer"
          >
            💬
          </Link>
        </div>
      </div>
    </section>
  );
};
