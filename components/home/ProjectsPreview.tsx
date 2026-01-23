"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n";

const projectsData = [
  {
    tags: ["Python", "AI", "DL"],
    github: "https://github.com/yinhw0210/dataAnalysis-backend",
    icon: "🎬",
    stats: { stars: 12, forks: 3 },
    filename: "video_watermark.exe",
  },
  {
    tags: ["JS", "Chrome", "Plugin"],
    github: "https://github.com/yinhw0210/doubao-download",
    icon: "🔧",
    stats: { stars: 8, forks: 2 },
    filename: "doubao_tool.js",
  },
  {
    tags: ["Python", "Data", "Math"],
    github: "https://github.com/yinhw0210/lottery-pick3",
    icon: "🎯",
    stats: { stars: 15, forks: 5 },
    filename: "lottery_predict.py",
  },
  {
    tags: ["Java", "Network", "REST"],
    github: "https://github.com/yinhw0210/http-sends",
    icon: "🌐",
    stats: { stars: 6, forks: 1 },
    filename: "http_tool.java",
  },
];

export const ProjectsPreview = () => {
  const { t } = useI18n();

  const projects = projectsData.map((project, index) => ({
    ...project,
    title: t.projectsPreview.projects[index]?.title || "",
    description: t.projectsPreview.projects[index]?.description || "",
  }));

  return (
    <section className="p-6 md:p-12 bg-[#c0c0c0]">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-8 h-8 md:w-12 md:h-12 border border-black bg-white flex items-center justify-center text-2xl">
          💾
        </div>
        <h3 className="text-2xl md:text-3xl font-black uppercase">
          {t.projectsPreview.title} <span className="text-sm font-normal normal-case italic ml-2">(Featured Works)</span>
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="win-window win-outset shadow-[8px_8px_0_rgba(0,0,0,0.5)]">
            <div className="win-titlebar flex justify-between items-center mb-2">
              <span className="truncate">{project.filename}</span>
              <button className="win-button w-4 h-4 flex items-center justify-center pb-1 leading-none text-xs">
                x
              </button>
            </div>
            <div className="bg-white win-inset p-4 h-[calc(100%-32px)] flex flex-col">
              <div className="flex items-start gap-4 mb-3">
                <div className="text-4xl min-w-[40px]">{project.icon}</div>
                <div>
                  <h4 className="font-bold text-lg leading-tight mb-1">{project.title}</h4>
                  <div className="flex gap-1 flex-wrap text-xs mb-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="bg-gray-200 border border-gray-400 px-1">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-800 mb-4 flex-grow border border-dotted border-gray-400 p-2 bg-yellow-50">
                {project.description}
              </p>
              <div className="flex justify-between items-end">
                <div className="text-xs font-mono space-y-1">
                  <div>STARS: {project.stats.stars}</div>
                  <div>FORKS: {project.stats.forks}</div>
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="win-button px-3 py-1 text-sm font-bold active:translate-y-px no-underline cursor-pointer"
                >
                  {t.projectsPreview.viewSource} &gt;&gt;
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 text-center">
        <Link 
          href="/projects" 
          className="inline-block font-bold text-blue-900 hover:text-red-600 hover:bg-yellow-200 px-2 no-underline cursor-pointer"
        >
          [{t.projectsPreview.viewAll} / VIEW ALL PROJECTS]
        </Link>
      </div>
    </section>
  );
};
