"use client";

import Button from "./Button";
import Link from "next/link";
import { useTranslations } from "next-intl";

const HeroSection = () => {
  const t = useTranslations("hero");

  return (
    <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden" aria-label="Sección principal de OLA World">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src="/assets/hero-child.jpg" alt={t("imageAlt")} className="w-full h-full object-cover" loading="eager" fetchPriority="high" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-5 py-20">
        <img src="/assets/ola-logo-white.svg" alt={t("logoAlt")} className="w-48 md:w-64 lg:w-80 mx-auto mb-6" width="320" height="120" />
        <p className="text-lg md:text-xl font-bold uppercase tracking-wide mb-8">{t("tagline")}</p>
        <Link href="https://thefellowshiptc.churchcenter.com/people/forms/1116260" target="_blank" rel="noopener noreferrer" aria-label={t("applyAriaLabel")}>
          <Button variant="filled" className="text-base px-10 py-4 mx-auto">
            {t("cta")}
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
