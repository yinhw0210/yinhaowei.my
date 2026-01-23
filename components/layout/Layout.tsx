"use client";

import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start p-2 md:p-6 pb-20 scanlines bg-[#008080]">
      {/* Main Container Window */}
      <div className="w-full max-w-[1200px] win-outset bg-[#c0c0c0] flex flex-col">
        
        {/* Top Window Title Bar */}
        <div className="win-titlebar flex justify-between items-center select-none">
          <div className="flex items-center gap-2">
            <span className="text-lg">🖥️</span>
            <span>Microsoft Internet Explorer - [bread · 0210]</span>
          </div>
          <div className="flex gap-1">
            <div className="w-4 h-4 bg-[#c0c0c0] win-outset flex items-center justify-center text-[10px] text-black font-bold leading-none pb-1">_</div>
            <div className="w-4 h-4 bg-[#c0c0c0] win-outset flex items-center justify-center text-[10px] text-black font-bold leading-none pb-1">□</div>
            <div className="w-4 h-4 bg-[#c0c0c0] win-outset flex items-center justify-center text-[10px] text-black font-bold leading-none pb-1">×</div>
          </div>
        </div>

        {/* Menu Bar */}
        <div className="flex gap-4 px-2 py-1 text-sm border-b border-gray-400 shadow-[0_1px_0_white]">
          <span className="cursor-pointer"><u>F</u>ile</span>
          <span className="cursor-pointer"><u>E</u>dit</span>
          <span className="cursor-pointer"><u>V</u>iew</span>
          <span className="cursor-pointer"><u>G</u>o</span>
          <span className="cursor-pointer"><u>F</u>avorites</span>
          <span className="cursor-pointer"><u>H</u>elp</span>
        </div>

        {/* Address Bar */}
        <div className="flex items-center gap-2 px-2 py-2 border-b border-gray-400 shadow-[0_1px_0_white] mb-1">
          <span className="text-sm text-gray-500">Address</span>
          <div className="flex-1 win-inset bg-white px-2 py-1 text-sm font-mono flex items-center">
            <span className="mr-2 text-gray-500">🌐</span>
            http://www.yinhw.dev/home.html
          </div>
          <div className="flex items-center gap-1">
            <a href="https://github.com/yinhw0210" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm no-underline cursor-pointer">
              Go →
            </a>
          </div>
        </div>

        {/* Content Area */}
        <div className="win-inset bg-white h-full overflow-y-auto flex-1">
          <Header />
          
          {/* Marquee Alert */}
          <div className="bg-black text-[#00FF00] font-mono py-1 overflow-hidden border-b-2 border-gray-400">
            <div className="animate-marquee">
              *** WELCOME TO MY HOMEPAGE *** UPDATED FEB 2025 *** UNDER CONSTRUCTION *** 欢迎访问我的个人博客 *** HELLO WORLD ***
            </div>
          </div>

          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        
        {/* Bottom Status Bar */}
        <div className="win-inset bg-[#c0c0c0] h-6 flex items-center px-2 text-xs gap-4 mt-1">
          <div className="flex-1">Done</div>
          <div className="win-outset-thin px-2 min-w-[100px] flex items-center gap-1">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div> Online
          </div>
          <div className="win-outset-thin px-2 min-w-[50px]">My Computer</div>
        </div>

      </div>
    </div>
  );
};
