"use client";

import { Instagram } from "lucide-react";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";

const Footer = () => {
  const t = useTranslations("footer");

  return (
    <footer className="bg-primary text-white px-5 md:px-20 py-12 md:py-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Social */}
          <div>
            <p className="text-xs uppercase tracking-wide text-white/70 mb-3">{t("social")}</p>
            <a href="https://www.instagram.com/olaworld_/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white hover:opacity-70 transition-opacity">
              <Instagram className="w-5 h-5" />
              <span>{t("instagram")}</span>
            </a>
          </div>

          {/* Logo */}
          <div>
            <img src="/assets/ola-logo-white.svg" alt={t("logoAlt")} className="h-16 md:h-20" />
          </div>

          {/* Language Switcher */}
          <div>
            <LanguageSwitcher />
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/20 text-center">
          <p className="text-white/80 text-sm">{t("tagline")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
