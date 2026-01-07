"use client";

import { useTranslations } from "next-intl";

const VisionMisionSection = () => {
  const t = useTranslations("vision");
  const tMission = useTranslations("mission");

  return (
    <section id="vision" className="bg-background scroll-mt-20" aria-labelledby="vision-heading">
      {/* Vision */}
      <div className="px-5 md:px-20 py-16 md:py-24">
        <h2 id="vision-heading" className="heading-lg text-center text-primary mb-12 font-serif italic">
          {t("title")}
        </h2>

        <p className="text-center text-foreground/70 text-sm md:text-base uppercase tracking-wide mb-6">{t("subtitle")}</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="section-card">
            <p className="text-sm text-foreground/60 mb-2">{t("outreach.label")}</p>
            <h3 className="text-primary font-semibold text-lg">{t("outreach.title")}</h3>
          </div>
          <div className="section-card">
            <p className="text-sm text-foreground/60 mb-2">{t("leadership.label")}</p>
            <h3 className="text-primary font-semibold text-lg">{t("leadership.title")}</h3>
          </div>
          <div className="section-card">
            <p className="text-sm text-foreground/60 mb-2">{t("activation.label")}</p>
            <h3 className="text-primary font-semibold text-lg">{t("activation.title")}</h3>
          </div>
        </div>
      </div>

      {/* Mision */}
      <div className="px-5 md:px-20 pb-8">
        <h2 id="mision-heading" className="heading-lg text-center text-primary mb-12 font-serif italic">
          {tMission("title")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          <div className="section-card bg-card-cream">
            <p className="text-sm text-foreground font-medium uppercase leading-relaxed">{tMission("card1")}</p>
          </div>
          <div className="section-card bg-card-cream">
            <p className="text-sm text-foreground font-medium uppercase leading-relaxed">{tMission("card2")}</p>
          </div>
          <div className="section-card bg-card-cream">
            <p className="text-sm text-foreground font-medium uppercase leading-relaxed">{tMission("card3")}</p>
          </div>
        </div>
      </div>

      {/* Mission Image with Quote */}
      <div className="relative">
        <img src="/assets/mission-image.jpg" alt={tMission("imageAlt")} className="w-full h-[60vh] md:h-[120vh] object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[90%] max-w-3xl">
          <div className="bg-white/90 backdrop-blur-sm rounded-full py-4 px-8 text-center">
            <p className="text-foreground font-serif italic text-sm md:text-base">
              {tMission("verse")}
              <span className="font-semibold"> {tMission("reference")}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMisionSection;
