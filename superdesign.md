# Design Reference

## Original Prompt
创建一个90年代复古风格的个人博客首页，主题为"bread · 0210"。

设计要素：
- 顶部导航栏：Logo、导航菜单（首页、关于我、项目作品、技术文章、联系方式）、GitHub按钮、语言切换器（中/English）
- Hero区域：欢迎标签、主标题"bread · 0210"、副标题、"查看项目作品"和"GitHub"按钮、滚动指示器。使用复古的beveled 3D按钮、系统字体、高对比度颜色。
- 统计数据区：三列数据展示（开源项目4+、技术文章10+、技术栈10+）
- 项目预览区：2列网格展示4个精选项目卡片（短视频去水印&AI证件照、豆包去水印工具、排列三预测系统、HTTP请求模拟工具），每个项目包含图标、标题、描述、技术标签、Stars/Forks数、"查看源码"按钮
- 技能区：3列网格展示6个技能分类（前端、后端、AI、数据库、DevOps、其他）
- 联系号召区：大标题、描述、"联系我"按钮、邮件按钮、社交链接
- 页脚：品牌信息、快速导航、联系方式、版权信息

风格指导：
- 使用语义化CSS变量（bg-background, text-foreground, primary, accent等）
- 严格执行90年代风格：beveled borders、系统字体、高对比度、无圆角、无soft shadows
- 重点装饰元素：Marquee滚动文本、"New!"脉冲徽章、hit counter风格统计数据、animated down arrow
- 移动端响应式：汉堡菜单、单列布局

## HTML Implementation

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>bread · 0210 | Unfocused Candidate</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"></script>
  <style>
    /* 90s Retro CSS Variables */
    :root {
      --win-gray: #c0c0c0;
      --win-blue: #000080;
      --win-teal: #008080;
      --win-text: #000000;
      --win-link: #0000FF;
      --win-white: #ffffff;
      --win-shadow-dark: #404040;
      --win-shadow-light: #dfdfdf;
    }

    body {
      background-color: var(--win-teal);
      font-family: "MS Sans Serif", "Microsoft Sans Serif", Tahoma, Arial, sans-serif;
      /* Cursor: classic arrow */
      cursor: default;
      image-rendering: pixelated;
    }

    /* Scrollbar Styling */
    ::-webkit-scrollbar {
      width: 16px;
      background: var(--win-gray);
    }
    ::-webkit-scrollbar-thumb {
      background: var(--win-gray);
      border-top: 2px solid var(--win-white);
      border-left: 2px solid var(--win-white);
      border-right: 2px solid #000;
      border-bottom: 2px solid #000;
    }
    ::-webkit-scrollbar-track {
      background: repeating-linear-gradient(45deg, #ccc, #ccc 2px, #fff 2px, #fff 4px);
    }

    /* Utility: 3D Borders */
    .win-outset {
      background-color: var(--win-gray);
      border-top: 2px solid var(--win-white);
      border-left: 2px solid var(--win-white);
      border-right: 2px solid #000;
      border-bottom: 2px solid #000;
      box-shadow: 1px 1px 0px 0px #000;
    }
    
    .win-outset-thin {
      background-color: var(--win-gray);
      border-top: 1px solid var(--win-white);
      border-left: 1px solid var(--win-white);
      border-right: 1px solid #404040;
      border-bottom: 1px solid #404040;
    }

    .win-inset {
      background-color: var(--win-white);
      border-top: 2px solid #404040;
      border-left: 2px solid #404040;
      border-right: 2px solid var(--win-white);
      border-bottom: 2px solid var(--win-white);
      box-shadow: inset 1px 1px 0px 0px #000;
    }

    .win-button {
      background-color: var(--win-gray);
      border-top: 2px solid var(--win-white);
      border-left: 2px solid var(--win-white);
      border-right: 2px solid #000;
      border-bottom: 2px solid #000;
      color: black;
      active: translate-y-px;
    }
    
    .win-button:active {
      border-top: 2px solid #000;
      border-left: 2px solid #000;
      border-right: 2px solid var(--win-white);
      border-bottom: 2px solid var(--win-white);
      padding-top: 2px;
      padding-left: 2px;
      padding-right: 0;
      padding-bottom: 0;
    }

    .win-button:focus {
      outline: 1px dotted #000;
      outline-offset: -4px;
    }

    .win-window {
      background: var(--win-gray);
      padding: 3px;
    }

    .win-titlebar {
      background: linear-gradient(90deg, var(--win-blue), #1084d0);
      color: white;
      padding: 2px 4px;
      font-weight: bold;
      letter-spacing: 0.5px;
    }

    /* Marquee Animation */
    @keyframes marquee {
      0% { transform: translateX(100%); }
      100% { transform: translateX(-100%); }
    }
    .animate-marquee {
      display: inline-block;
      white-space: nowrap;
      animation: marquee 15s linear infinite;
    }

    /* CRT / Scanline Effect Overlay (Optional, subtle) */
    .scanlines::before {
      content: " ";
      display: block;
      position: absolute;
      top: 0; left: 0; bottom: 0; right: 0;
      background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.05) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.03), rgba(0, 255, 0, 0.01), rgba(0, 0, 255, 0.03));
      z-index: 9999;
      background-size: 100% 2px, 3px 100%;
      pointer-events: none;
    }

    /* Blink Animation */
    @keyframes blink {
      0%, 100% { opacity: 1; }
      50% { opacity: 0; }
    }
    .animate-blink {
      animation: blink 1s step-end infinite;
    }

    /* Rainbow Text */
    @keyframes rainbow {
      0% { color: red; }
      20% { color: yellow; }
      40% { color: lime; }
      60% { color: cyan; }
      80% { color: blue; }
      100% { color: magenta; }
    }
    .rainbow-text {
      animation: rainbow 4s linear infinite;
    }
  </style>
</head>
<body>
  <div class="min-h-screen flex flex-col items-center justify-start p-2 md:p-6 pb-20 scanlines">
    
    <!-- Main Container Window -->
    <div class="w-full max-w-[1200px] win-outset bg-[#c0c0c0] flex flex-col">
      
      <!-- Top Window Title Bar -->
      <div class="win-titlebar flex justify-between items-center select-none">
        <div class="flex items-center gap-2">
          <iconify-icon icon="pixelarticons:monitor" class="text-lg"></iconify-icon>
          <span>Microsoft Internet Explorer - [bread · 0210]</span>
        </div>
        <div class="flex gap-1">
          <div class="w-4 h-4 bg-[#c0c0c0] win-outset flex items-center justify-center text-[10px] text-black font-bold leading-none pb-1">_</div>
          <div class="w-4 h-4 bg-[#c0c0c0] win-outset flex items-center justify-center text-[10px] text-black font-bold leading-none pb-1">□</div>
          <div class="w-4 h-4 bg-[#c0c0c0] win-outset flex items-center justify-center text-[10px] text-black font-bold leading-none pb-1">×</div>
        </div>
      </div>

      <!-- Menu Bar -->
      <div class="flex gap-4 px-2 py-1 text-sm border-b border-gray-400 border-b shadow-[0_1px_0_white]">
        <span class="underline cursor-pointer">F</span>ile
        <span class="underline cursor-pointer">E</span>dit
        <span class="underline cursor-pointer">V</span>iew
        <span class="underline cursor-pointer">G</span>o
        <span class="underline cursor-pointer">F</span>avorites
        <span class="underline cursor-pointer">H</span>elp
      </div>

      <!-- Address Bar (Fake) -->
      <div class="flex items-center gap-2 px-2 py-2 border-b border-gray-400 shadow-[0_1px_0_white] mb-1">
        <span class="text-sm text-gray-500">Address</span>
        <div class="flex-1 win-inset bg-white px-2 py-1 text-sm font-mono flex items-center">
          <iconify-icon icon="pixelarticons:earth" class="mr-2 text-gray-500"></iconify-icon>
          http://www.yinhw.dev/home.html
        </div>
        <div class="flex items-center gap-1">
           <a href="https://github.com/yinhw0210" target="_blank" class="flex items-center gap-1 text-sm no-underline">
             Go <iconify-icon icon="pixelarticons:arrow-right"></iconify-icon>
           </a>
        </div>
      </div>

      <!-- Content Area -->
      <div class="win-inset bg-white h-full overflow-y-auto flex-1">
        
        <!-- True Header/Nav -->
        <header class="bg-[#c0c0c0] border-b-2 border-b-black p-4">
          <div class="flex flex-col md:flex-row justify-between items-center gap-4">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 bg-yellow-300 win-inset flex items-center justify-center border-2 border-black animate-pulse">
                 <iconify-icon icon="pixelarticons:user" class="text-2xl text-red-600"></iconify-icon>
              </div>
              <h1 class="text-2xl font-black tracking-tighter uppercase italic drop-shadow-[2px_2px_0_rgba(0,0,0,0.2)]">
                bread · 0210
              </h1>
            </div>

            <!-- Desktop Nav -->
            <nav class="hidden md:flex gap-2 flex-wrap justify-center">
              <a href="#" id="nav-home" class="win-button px-4 py-1 font-bold no-underline hover:text-blue-800">首页</a>
              <a href="#" id="nav-about" class="win-button px-4 py-1 font-bold no-underline hover:text-blue-800">关于我</a>
              <a href="#" id="nav-projects" class="win-button px-4 py-1 font-bold no-underline hover:text-blue-800">项目作品</a>
              <a href="#" id="nav-articles" class="win-button px-4 py-1 font-bold no-underline hover:text-blue-800">技术文章</a>
              <a href="#" id="nav-contact" class="win-button px-4 py-1 font-bold no-underline hover:text-blue-800">联系方式</a>
            </nav>
            
            <!-- Mobile Burger -->
            <button class="md:hidden win-button px-2 py-1">
               <iconify-icon icon="pixelarticons:menu" class="text-xl"></iconify-icon>
            </button>

            <div class="flex gap-2">
               <button class="win-button px-2 py-1 flex items-center gap-1 text-xs">
                 <iconify-icon icon="pixelarticons:github"></iconify-icon> GitHub
               </button>
               <button class="win-button px-2 py-1 text-xs font-bold bg-blue-100">EN/中</button>
            </div>
          </div>
        </header>

        <!-- Marquee Alert -->
        <div class="bg-black text-[#00FF00] font-mono py-1 overflow-hidden border-b-2 border-gray-400">
          <div class="animate-marquee">
            *** WELCOME TO MY HOMEPAGE *** UPDATED FEB 2025 *** UNDER CONSTRUCTION *** 欢迎访问我的个人博客 *** HELLO WORLD ***
          </div>
        </div>

        <!-- Hero Section -->
        <section class="p-6 md:p-12 bg-[url('https://www.transparenttextures.com/patterns/notebook-dark.png')] bg-repeat">
          <div class="max-w-4xl mx-auto text-center space-y-8">
            
            <!-- Animated Badge -->
            <div class="inline-block">
               <span class="win-outset bg-yellow-300 text-red-600 px-3 py-1 text-xs font-bold animate-blink">NEW! WEB 1.0 IS BACK!</span>
            </div>

            <div class="space-y-4 relative">
              <!-- Decorative floating elements -->
              <div class="absolute -left-10 top-0 hidden md:block opacity-50 rotate-[-15deg]">
                 <iconify-icon icon="pixelarticons:code" class="text-6xl text-gray-400"></iconify-icon>
              </div>
              <div class="absolute -right-10 bottom-0 hidden md:block opacity-50 rotate-[15deg]">
                 <iconify-icon icon="pixelarticons:bug" class="text-6xl text-gray-400"></iconify-icon>
              </div>

              <h2 class="text-4xl md:text-6xl font-black uppercase text-blue-900 drop-shadow-[3px_3px_0_#fff]" style="-webkit-text-stroke: 1px black;">
                bread · 0210
              </h2>
              <p class="text-lg md:text-xl font-bold bg-white inline-block px-2 border border-black shadow-[4px_4px_0_black]">
                Unfocused Candidate
              </p>
              
              <div class="max-w-2xl mx-auto bg-[#c0c0c0] win-outset p-4 text-left font-serif">
                <p class="mb-2"><strong>Hello visitor!</strong></p>
                <p class="leading-relaxed">
                  热爱技术，专注于全栈开发与技术实践。<br>
                  用代码创造价值，记录成长的点滴。
                </p>
              </div>
            </div>

            <div class="flex flex-col md:flex-row gap-6 justify-center items-center py-4">
              <a href="#" id="hero-projects-btn" class="win-button px-8 py-3 font-bold text-lg bg-blue-800 text-white flex items-center gap-2 hover:bg-blue-700 no-underline">
                <iconify-icon icon="pixelarticons:folder"></iconify-icon>
                查看项目作品
              </a>
              <a href="https://github.com/yinhw0210" target="_blank" id="hero-github-btn" class="win-button px-8 py-3 font-bold text-lg flex items-center gap-2 no-underline">
                <iconify-icon icon="pixelarticons:github"></iconify-icon>
                GitHub Profile
              </a>
            </div>

            <!-- Stats Counter Style -->
            <div class="flex flex-wrap justify-center gap-8 md:gap-16 pt-8">
              <div class="text-center">
                <div class="bg-black text-[#00FF00] font-mono text-2xl px-4 py-1 border-4 border-gray-400 border-inset inline-block mb-1">004</div>
                <div class="text-sm font-bold uppercase">Open Source</div>
              </div>
              <div class="text-center">
                <div class="bg-black text-[#00FF00] font-mono text-2xl px-4 py-1 border-4 border-gray-400 border-inset inline-block mb-1">010</div>
                <div class="text-sm font-bold uppercase">Articles</div>
              </div>
              <div class="text-center">
                <div class="bg-black text-[#00FF00] font-mono text-2xl px-4 py-1 border-4 border-gray-400 border-inset inline-block mb-1">010</div>
                <div class="text-sm font-bold uppercase">Tech Stack</div>
              </div>
            </div>
            
            <div class="pt-8 animate-bounce">
              <iconify-icon icon="pixelarticons:arrow-down" class="text-4xl text-blue-800"></iconify-icon>
            </div>
          </div>
        </section>

        <hr class="border-t-2 border-white border-b-2 border-black mx-4" />

        <!-- Projects Section -->
        <section class="p-6 md:p-12 bg-[#c0c0c0]">
          <div class="flex items-center gap-4 mb-8">
             <img src="https://media.giphy.com/media/du3J3cXyzhj75IOgvA/giphy.gif" alt="animated icon" class="w-8 h-8 md:w-12 md:h-12 border border-black bg-white object-cover">
             <h3 class="text-2xl md:text-3xl font-black uppercase text-shadow-sm">
               精选项目 <span class="text-sm font-normal normal-case italic ml-2">(Featured Works)</span>
             </h3>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <!-- Project Card 1 -->
            <div class="win-window win-outset shadow-[8px_8px_0_rgba(0,0,0,0.5)]">
              <div class="win-titlebar flex justify-between items-center mb-2">
                <span class="truncate">video_watermark.exe</span>
                <button class="win-button w-4 h-4 flex items-center justify-center pb-1 leading-none text-xs">x</button>
              </div>
              <div class="bg-white win-inset p-4 h-[calc(100%-32px)] flex flex-col">
                <div class="flex items-start gap-4 mb-3">
                  <iconify-icon icon="pixelarticons:movie" class="text-4xl text-purple-700 min-w-[40px]"></iconify-icon>
                  <div>
                    <h4 class="font-bold text-lg leading-tight mb-1">短视频去水印 & AI 证件照</h4>
                    <div class="flex gap-1 flex-wrap text-xs mb-2">
                       <span class="bg-gray-200 border border-gray-400 px-1">Python</span>
                       <span class="bg-gray-200 border border-gray-400 px-1">AI</span>
                       <span class="bg-gray-200 border border-gray-400 px-1">DL</span>
                    </div>
                  </div>
                </div>
                <p class="text-sm text-gray-800 mb-4 flex-grow border border-dotted border-gray-400 p-2 bg-yellow-50">
                  支持多平台短视频去水印、AI智能证件照生成。基于深度学习算法实现高质量图像处理。
                </p>
                <div class="flex justify-between items-end">
                  <div class="text-xs font-mono space-y-1">
                    <div>STARS: 12</div>
                    <div>FORKS: 3</div>
                  </div>
                  <button class="win-button px-3 py-1 text-sm font-bold active:translate-y-px">
                    查看源码 >>
                  </button>
                </div>
              </div>
            </div>

            <!-- Project Card 2 -->
            <div class="win-window win-outset shadow-[8px_8px_0_rgba(0,0,0,0.5)]">
              <div class="win-titlebar flex justify-between items-center mb-2">
                <span class="truncate">doubao_tool.js</span>
                <button class="win-button w-4 h-4 flex items-center justify-center pb-1 leading-none text-xs">x</button>
              </div>
              <div class="bg-white win-inset p-4 h-[calc(100%-32px)] flex flex-col">
                <div class="flex items-start gap-4 mb-3">
                  <iconify-icon icon="pixelarticons:script" class="text-4xl text-yellow-600 min-w-[40px]"></iconify-icon>
                  <div>
                    <h4 class="font-bold text-lg leading-tight mb-1">豆包去水印工具</h4>
                    <div class="flex gap-1 flex-wrap text-xs mb-2">
                       <span class="bg-gray-200 border border-gray-400 px-1">JS</span>
                       <span class="bg-gray-200 border border-gray-400 px-1">Chrome</span>
                       <span class="bg-gray-200 border border-gray-400 px-1">Plugin</span>
                    </div>
                  </div>
                </div>
                <p class="text-sm text-gray-800 mb-4 flex-grow border border-dotted border-gray-400 p-2 bg-yellow-50">
                  浏览器插件 + 脚本双模式，一键去除豆包平台水印，支持批量处理，操作简单高效。
                </p>
                <div class="flex justify-between items-end">
                  <div class="text-xs font-mono space-y-1">
                    <div>STARS: 8</div>
                    <div>FORKS: 2</div>
                  </div>
                  <button class="win-button px-3 py-1 text-sm font-bold active:translate-y-px">
                    查看源码 >>
                  </button>
                </div>
              </div>
            </div>

            <!-- Project Card 3 -->
            <div class="win-window win-outset shadow-[8px_8px_0_rgba(0,0,0,0.5)]">
              <div class="win-titlebar flex justify-between items-center mb-2">
                <span class="truncate">lottery_predict.py</span>
                <button class="win-button w-4 h-4 flex items-center justify-center pb-1 leading-none text-xs">x</button>
              </div>
              <div class="bg-white win-inset p-4 h-[calc(100%-32px)] flex flex-col">
                <div class="flex items-start gap-4 mb-3">
                  <iconify-icon icon="pixelarticons:chart-bar" class="text-4xl text-green-700 min-w-[40px]"></iconify-icon>
                  <div>
                    <h4 class="font-bold text-lg leading-tight mb-1">排列三预测系统</h4>
                    <div class="flex gap-1 flex-wrap text-xs mb-2">
                       <span class="bg-gray-200 border border-gray-400 px-1">Python</span>
                       <span class="bg-gray-200 border border-gray-400 px-1">Data</span>
                       <span class="bg-gray-200 border border-gray-400 px-1">Math</span>
                    </div>
                  </div>
                </div>
                <p class="text-sm text-gray-800 mb-4 flex-grow border border-dotted border-gray-400 p-2 bg-yellow-50">
                  基于数据分析的彩票号码预测系统，运用统计学算法和历史数据建模，提供概率分析。
                </p>
                <div class="flex justify-between items-end">
                  <div class="text-xs font-mono space-y-1">
                    <div>STARS: 15</div>
                    <div>FORKS: 5</div>
                  </div>
                  <button class="win-button px-3 py-1 text-sm font-bold active:translate-y-px">
                    查看源码 >>
                  </button>
                </div>
              </div>
            </div>

            <!-- Project Card 4 -->
            <div class="win-window win-outset shadow-[8px_8px_0_rgba(0,0,0,0.5)]">
              <div class="win-titlebar flex justify-between items-center mb-2">
                <span class="truncate">http_tool.java</span>
                <button class="win-button w-4 h-4 flex items-center justify-center pb-1 leading-none text-xs">x</button>
              </div>
              <div class="bg-white win-inset p-4 h-[calc(100%-32px)] flex flex-col">
                <div class="flex items-start gap-4 mb-3">
                  <iconify-icon icon="pixelarticons:cloud" class="text-4xl text-blue-700 min-w-[40px]"></iconify-icon>
                  <div>
                    <h4 class="font-bold text-lg leading-tight mb-1">HTTP 请求模拟工具</h4>
                    <div class="flex gap-1 flex-wrap text-xs mb-2">
                       <span class="bg-gray-200 border border-gray-400 px-1">Java</span>
                       <span class="bg-gray-200 border border-gray-400 px-1">Network</span>
                       <span class="bg-gray-200 border border-gray-400 px-1">REST</span>
                    </div>
                  </div>
                </div>
                <p class="text-sm text-gray-800 mb-4 flex-grow border border-dotted border-gray-400 p-2 bg-yellow-50">
                  强大的 HTTP 请求调试工具，支持多种请求方式和参数配置，方便 API 开发测试。
                </p>
                <div class="flex justify-between items-end">
                  <div class="text-xs font-mono space-y-1">
                    <div>STARS: 6</div>
                    <div>FORKS: 1</div>
                  </div>
                  <button class="win-button px-3 py-1 text-sm font-bold active:translate-y-px">
                    查看源码 >>
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div class="mt-8 text-center">
             <a href="#" class="inline-block font-bold text-blue-900 hover:text-red-600 hover:bg-yellow-200 px-2">
               [查看全部项目 / VIEW ALL PROJECTS]
             </a>
          </div>
        </section>

        <!-- Divider -->
        <div class="bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] h-4 border-t border-b border-black"></div>

        <!-- Skills Section -->
        <section class="p-6 md:p-12 bg-[#008080] text-white">
          <div class="win-window win-outset bg-[#c0c0c0] text-black">
            <div class="p-4">
              <h3 class="text-2xl font-black mb-6 uppercase border-b-2 border-gray-500 pb-2 flex items-center gap-2">
                <iconify-icon icon="pixelarticons:sliders"></iconify-icon>
                核心技能 (Core Skills)
              </h3>
              
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <!-- Skill Group 1 -->
                <div class="flex flex-col gap-2">
                  <div class="font-bold flex items-center gap-2">
                    <iconify-icon icon="pixelarticons:device-laptop"></iconify-icon>
                    <span>前端开发</span>
                  </div>
                  <ul class="win-inset bg-white p-2 h-full list-disc list-inside text-sm font-mono">
                    <li>Vue.js</li>
                    <li>React</li>
                    <li>TypeScript</li>
                    <li>Tailwind CSS</li>
                    <li>小程序</li>
                  </ul>
                </div>
                
                <!-- Skill Group 2 -->
                <div class="flex flex-col gap-2">
                  <div class="font-bold flex items-center gap-2">
                    <iconify-icon icon="pixelarticons:server"></iconify-icon>
                    <span>后端开发</span>
                  </div>
                  <ul class="win-inset bg-white p-2 h-full list-disc list-inside text-sm font-mono">
                    <li>Java</li>
                    <li>Python</li>
                    <li>Spring Boot</li>
                    <li>Flask</li>
                    <li>Node.js</li>
                  </ul>
                </div>

                <!-- Skill Group 3 -->
                <div class="flex flex-col gap-2">
                  <div class="font-bold flex items-center gap-2">
                    <iconify-icon icon="pixelarticons:zap"></iconify-icon>
                    <span>AI 技术</span>
                  </div>
                  <ul class="win-inset bg-white p-2 h-full list-disc list-inside text-sm font-mono">
                    <li>TensorFlow</li>
                    <li>PyTorch</li>
                    <li>Machine Learning</li>
                    <li>Deep Learning</li>
                    <li>Deployment</li>
                  </ul>
                </div>

                <!-- Skill Group 4 -->
                <div class="flex flex-col gap-2">
                  <div class="font-bold flex items-center gap-2">
                    <iconify-icon icon="pixelarticons:database"></iconify-icon>
                    <span>数据库</span>
                  </div>
                  <ul class="win-inset bg-white p-2 h-full list-disc list-inside text-sm font-mono">
                    <li>MySQL</li>
                    <li>MongoDB</li>
                    <li>Redis</li>
                    <li>PostgreSQL</li>
                  </ul>
                </div>
                
                <!-- Skill Group 5 -->
                <div class="flex flex-col gap-2">
                  <div class="font-bold flex items-center gap-2">
                    <iconify-icon icon="pixelarticons:briefcase"></iconify-icon>
                    <span>DevOps</span>
                  </div>
                  <ul class="win-inset bg-white p-2 h-full list-disc list-inside text-sm font-mono">
                    <li>Docker</li>
                    <li>Linux</li>
                    <li>Git</li>
                    <li>CI/CD</li>
                  </ul>
                </div>

                <!-- Skill Group 6 -->
                <div class="flex flex-col gap-2">
                  <div class="font-bold flex items-center gap-2">
                    <iconify-icon icon="pixelarticons:plus"></iconify-icon>
                    <span>其他技能</span>
                  </div>
                  <ul class="win-inset bg-white p-2 h-full list-disc list-inside text-sm font-mono">
                    <li>API Design</li>
                    <li>Microservices</li>
                    <li>System Design</li>
                    <li>Performance</li>
                  </ul>
                </div>

              </div>
            </div>
          </div>
        </section>

        <!-- Contact CTA -->
        <section class="p-6 md:p-12 bg-[#c0c0c0]">
          <div class="max-w-3xl mx-auto text-center border-4 border-double border-gray-600 p-8 bg-[url('https://www.transparenttextures.com/patterns/grid.png')]">
             <h2 class="text-3xl font-black mb-4 rainbow-text drop-shadow-md">想要合作或交流？</h2>
             <p class="mb-8 text-lg">无论是技术探讨、项目合作还是工作机会，都欢迎与我联系</p>
             
             <div class="flex flex-col md:flex-row justify-center gap-6">
                <a href="#" id="cta-contact-btn" class="win-button px-6 py-3 font-bold text-lg flex items-center justify-center gap-2 hover:bg-gray-200">
                  <iconify-icon icon="pixelarticons:mail"></iconify-icon>
                  联系我 (Contact)
                </a>
                <a href="mailto:solivix@163.com" id="cta-email-btn" class="win-button px-6 py-3 font-bold text-lg flex items-center justify-center gap-2 hover:bg-gray-200">
                  <iconify-icon icon="pixelarticons:message"></iconify-icon>
                  发送邮件 (Email)
                </a>
             </div>
             
             <div class="mt-8 flex justify-center gap-4">
                <a href="https://github.com/yinhw0210" class="text-black hover:text-blue-700">
                   <iconify-icon icon="pixelarticons:github" width="32"></iconify-icon>
                </a>
                <a href="mailto:solivix@163.com" class="text-black hover:text-blue-700">
                   <iconify-icon icon="pixelarticons:at" width="32"></iconify-icon>
                </a>
                <a href="#" class="text-black hover:text-blue-700">
                   <iconify-icon icon="pixelarticons:comment" width="32"></iconify-icon>
                </a>
             </div>
          </div>
        </section>

        <!-- Footer -->
        <footer class="bg-gray-800 text-gray-300 p-6 md:p-10 border-t-2 border-white text-sm">
           <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                 <div class="flex items-center gap-2 text-yellow-400 font-bold text-lg mb-4">
                    <iconify-icon icon="pixelarticons:user"></iconify-icon>
                    bread · 0210
                 </div>
                 <p class="font-mono text-xs leading-relaxed max-w-xs text-gray-400">
                    全栈开发工程师，专注于技术实践，用代码创造价值，用技术改变生活。<br>
                    <span class="text-yellow-200">Made with ♥ and lots of code.</span>
                 </p>
              </div>
              <div>
                 <h4 class="text-white font-bold mb-4 uppercase border-b border-gray-600 inline-block">快速导航</h4>
                 <ul class="space-y-2 font-mono">
                    <li><a href="#" class="hover:text-white hover:underline">>> 首页</a></li>
                    <li><a href="#" class="hover:text-white hover:underline">>> 关于我</a></li>
                    <li><a href="#" class="hover:text-white hover:underline">>> 项目作品</a></li>
                    <li><a href="#" class="hover:text-white hover:underline">>> 技术文章</a></li>
                 </ul>
              </div>
              <div>
                 <h4 class="text-white font-bold mb-4 uppercase border-b border-gray-600 inline-block">联系方式</h4>
                 <ul class="space-y-2 font-mono text-xs">
                    <li class="flex items-center gap-2">
                      <iconify-icon icon="pixelarticons:github"></iconify-icon>
                      github.com/yinhw0210
                    </li>
                    <li class="flex items-center gap-2">
                      <iconify-icon icon="pixelarticons:mail"></iconify-icon>
                      solivix@163.com
                    </li>
                    <li class="flex items-center gap-2">
                      <iconify-icon icon="pixelarticons:map"></iconify-icon>
                      Jinan, China
                    </li>
                 </ul>
              </div>
           </div>
           
           <div class="text-center border-t border-gray-700 pt-6 font-mono text-xs text-gray-500">
              <p>&copy; 2025 bread · 0210. All rights reserved.</p>
              <p class="mt-2">Best viewed with Internet Explorer 4.0 or Netscape Navigator at 800x600 resolution.</p>
           </div>
        </footer>

      </div>
      
      <!-- Bottom Status Bar -->
      <div class="win-inset bg-[#c0c0c0] h-6 flex items-center px-2 text-xs gap-4 mt-1 mb-1 mx-1">
        <div class="flex-1">Done</div>
        <div class="win-outset-thin px-2 min-w-[100px] flex items-center gap-1">
          <div class="w-2 h-2 bg-green-500 rounded-full"></div> Online
        </div>
        <div class="win-outset-thin px-2 min-w-[50px]">My Computer</div>
      </div>

    </div>
  </div>
</body>
</html>
```

---
Please reference this design when implementing the component.
