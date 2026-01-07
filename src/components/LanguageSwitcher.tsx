"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/navigation";
import { Globe } from "lucide-react";
import { locales } from "../../i18n";

export default function LanguageSwitcher() {
  const t = useTranslations("languageSwitcher");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div className="flex items-center gap-2">
      <Globe className="w-4 h-4 text-foreground" aria-hidden="true" />
      <div className="flex items-center gap-2">
        {locales.map((loc) => (
          <button key={loc} onClick={() => handleLanguageChange(loc)} className={`text-sm font-medium transition-colors ${locale === loc ? "text-foreground font-bold underline underline-offset-2" : "text-foreground hover:text-foreground"}`} aria-label={`${t("label")} - ${loc === "es" ? t("spanish") : t("english")}`} aria-current={locale === loc ? "true" : undefined}>
            {loc === "es" ? t("spanish") : t("english")}
          </button>
        ))}
      </div>
    </div>
  );
}
