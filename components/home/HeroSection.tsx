"use client";

import { useI18n } from "@/lib/i18n";
import Link from "next/link";

export const HeroSection = () => {
  const { t } = useI18n();

  return (
    <section className="p-6 md:p-12 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2RkZCIgb3BhY2l0eT0iMC4zIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] bg-repeat">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        
        {/* Animated Badge */}
        <div className="inline-block">
          <span className="win-outset bg-yellow-300 text-red-600 px-3 py-1 text-xs font-bold animate-blink">
            NEW! WEB 1.0 IS BACK!
          </span>
        </div>

        <div className="space-y-4 relative">
          {/* Decorative floating elements */}
          <div className="absolute -left-10 top-0 hidden md:block opacity-50 rotate-[-15deg] text-6xl">
            {"</>"}
          </div>
          <div className="absolute -right-10 bottom-0 hidden md:block opacity-50 rotate-[15deg] text-6xl">
            {"{ }"}
          </div>

          <h2 className="text-4xl md:text-6xl font-black uppercase text-blue-900 drop-shadow-[3px_3px_0_#fff]" style={{ WebkitTextStroke: "1px black" }}>
            {t.hero.title}
          </h2>
          <p className="text-lg md:text-xl font-bold bg-white inline-block px-2 border border-black shadow-[4px_4px_0_black]">
            Unfocused Candidate
          </p>
          
          <div className="max-w-2xl mx-auto win-outset p-4 text-left">
            <p className="mb-2"><strong>Hello visitor!</strong></p>
            <p className="leading-relaxed">
              {t.hero.subtitle}
              <br />
              {t.hero.subtitle2}
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 justify-center items-center py-4">
          <Link 
            href="/projects"
            className="win-button px-8 py-3 font-bold text-lg bg-blue-800 text-white flex items-center gap-2 hover:bg-blue-700 no-underline"
          >
            <span className="text-xl">📁</span>
            {t.hero.viewProjects}
          </Link>
          <a 
            href="https://github.com/yinhw0210" 
            target="_blank" 
            rel="noopener noreferrer"
            className="win-button px-8 py-3 font-bold text-lg flex items-center gap-2 no-underline"
          >
            <span className="text-xl">🐙</span>
            GitHub Profile
          </a>
        </div>

        {/* Stats Counter Style */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 pt-8">
          <div className="text-center">
            <div className="bg-black text-[#00FF00] font-mono text-2xl px-4 py-1 border-4 border-gray-400 inline-block mb-1">
              004
            </div>
            <div className="text-sm font-bold uppercase">{t.hero.openSource}</div>
          </div>
          <div className="text-center">
            <div className="bg-black text-[#00FF00] font-mono text-2xl px-4 py-1 border-4 border-gray-400 inline-block mb-1">
              010
            </div>
            <div className="text-sm font-bold uppercase">{t.hero.techArticles}</div>
          </div>
          <div className="text-center">
            <div className="bg-black text-[#00FF00] font-mono text-2xl px-4 py-1 border-4 border-gray-400 inline-block mb-1">
              010
            </div>
            <div className="text-sm font-bold uppercase">{t.hero.techStack}</div>
          </div>
        </div>
        
        <div className="pt-8 animate-bounce">
          <div className="text-4xl text-blue-800">↓</div>
        </div>
      </div>
    </section>
  );
};
