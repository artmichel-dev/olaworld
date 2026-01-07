"use client";

import { ClipboardList, Users, Waves } from "lucide-react";
import { useTranslations } from "next-intl";

const TresPulsosSection = () => {
  const t = useTranslations("threePulses");

  return (
    <section className="bg-background px-5 md:px-20 py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-16">
          {/* Left - Title */}
          <div>
            <h2 className="heading-lg text-primary font-serif italic leading-tight">
              {t("title")}
            </h2>
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            <p className="text-foreground/80 text-base md:text-lg leading-relaxed">{t("intro")}</p>
            <p className="text-primary font-semibold text-lg">{t("subtitle")}</p>

            <ul className="space-y-4 text-foreground/80">
              <li>
                <span className="font-semibold text-foreground">{t("pulse1.title")}</span>
                <br />
                <span className="text-sm md:text-base">{t("pulse1.description")}</span>
              </li>
              <li>
                <span className="font-semibold text-foreground">{t("pulse2.title")}</span>
                <br />
                <span className="text-sm md:text-base">{t("pulse2.description")}</span>
              </li>
              <li>
                <span className="font-semibold text-foreground">{t("pulse3.title")}</span>
                <br />
                <span className="text-sm md:text-base">{t("pulse3.description")}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* El pulso comienza */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden">
            <img src="/assets/prayer.jpg" alt={t("imageAlt")} className="w-full h-[300px] md:h-[400px] object-cover" />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-white text-3xl md:text-4xl font-serif italic text-center px-4">
                {t("callout")}
              </h3>
            </div>
          </div>

          {/* Icons */}
          <div className="space-y-8 py-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center">
                <ClipboardList className="w-8 h-8 text-primary" />
              </div>
              <span className="text-primary font-medium">{t("item1")}</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <span className="text-primary font-medium">{t("item2")}</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center">
                <Waves className="w-8 h-8 text-primary" />
              </div>
              <span className="text-primary font-medium">{t("item3")}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TresPulsosSection;
