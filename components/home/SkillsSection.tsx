"use client";

import { useI18n } from "@/lib/i18n";

export const SkillsSection = () => {
  const { t } = useI18n();

  const skillCategories = [
    {
      title: t.skills.frontend,
      icon: "💻",
      skills: t.skills.frontendSkills,
    },
    {
      title: t.skills.backend,
      icon: "🖥️",
      skills: t.skills.backendSkills,
    },
    {
      title: t.skills.ai,
      icon: "⚡",
      skills: t.skills.aiSkills,
    },
    {
      title: t.skills.database,
      icon: "💾",
      skills: t.skills.databaseSkills,
    },
    {
      title: t.skills.devops,
      icon: "💼",
      skills: t.skills.devopsSkills,
    },
    {
      title: t.skills.other,
      icon: "➕",
      skills: t.skills.otherSkills,
    },
  ];

  return (
    <section className="p-6 md:p-12 bg-[#008080] text-white">
      <div className="win-window win-outset bg-[#c0c0c0] text-black">
        <div className="p-4">
          <h3 className="text-2xl font-black mb-6 uppercase border-b-2 border-gray-500 pb-2 flex items-center gap-2">
            <span className="text-2xl">⚙️</span>
            {t.skills.title} (Core Skills)
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <div key={index} className="flex flex-col gap-2">
                <div className="font-bold flex items-center gap-2">
                  <span className="text-xl">{category.icon}</span>
                  <span>{category.title}</span>
                </div>
                <ul className="win-inset bg-white p-2 h-full list-disc list-inside text-sm font-mono">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex}>{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
