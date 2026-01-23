"use client";

import { useI18n, Language } from "@/lib/i18n";

export function LanguageSwitcher() {
  const { language, setLanguage } = useI18n();

  const toggleLanguage = () => {
    const newLang: Language = language === "en" ? "zh" : "en";
    setLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="win-button px-2 py-1 text-xs font-bold bg-blue-100 cursor-pointer"
    >
      {language === "en" ? "中文" : "EN"}
    </button>
  );
}
