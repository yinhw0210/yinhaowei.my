"use client";

import { useI18n, Language } from "@/lib/i18n";
import { Globe } from "lucide-react";
import { Button } from "./button";

export function LanguageSwitcher() {
  const { language, setLanguage } = useI18n();

  const toggleLanguage = () => {
    const newLang: Language = language === "en" ? "zh" : "en";
    setLanguage(newLang);
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="gap-1.5"
    >
      <Globe className="w-4 h-4" />
      <span className="text-xs font-medium">{language === "en" ? "中文" : "EN"}</span>
    </Button>
  );
}
