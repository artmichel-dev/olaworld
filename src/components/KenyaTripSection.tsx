"use client";

import Button from "./Button";
import Link from "next/link";
import { useTranslations } from "next-intl";

const KenyaTripSection = () => {
  const t = useTranslations("kenya");

  return (
    <section className="bg-card-cream">
      {/* Header */}
      <div className="px-5 md:px-20 py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-primary font-serif italic text-xl md:text-2xl mb-2">{t("subtitle")}</h2>
          <h3 className="heading-md text-primary font-serif italic mb-4">{t("title")}</h3>
          <p className="text-foreground font-medium">
            <span className="font-semibold">{t("dates")}</span> {t("datesValue")}
          </p>
          <p className="text-foreground font-medium">
            <span className="font-semibold">{t("locations")}</span> {t("locationsValue")}
          </p>
        </div>
      </div>

      {/* Content Grid */}
      <div className="px-5 md:px-20 pb-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image */}
          <div className="rounded-2xl overflow-hidden">
            <img src="/assets/kenya-group.jpg" alt={t("imageAlt")} className="w-full h-[300px] md:h-[350px] object-cover" />
          </div>

          {/* Description */}
          <div className="space-y-4 text-foreground/80 text-sm md:text-base leading-relaxed">
            <p>{t("description1")}</p>
            <p>{t("description2")}</p>
          </div>
        </div>
      </div>

      {/* Details Sections */}
      <div className="px-5 md:px-20 pb-16">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Con quién serviremos */}
          <div>
            <h4 className="text-primary font-semibold mb-3 underline">{t("withWhom.title")}</h4>
            <p className="text-foreground/80 text-sm md:text-base leading-relaxed">{t("withWhom.content")}</p>
          </div>

          {/* Lo que estaremos haciendo */}
          <div>
            <h4 className="text-primary font-semibold mb-3 underline">{t("activities.title")}</h4>
            <ul className="text-foreground/80 text-sm md:text-base space-y-2">
              <li>{t("activities.item1")}</li>
              <li>{t("activities.item2")}</li>
              <li>{t("activities.item3")}</li>
              <li>{t("activities.item4")}</li>
              <li>{t("activities.item5")}</li>
              <li>{t("activities.item6")}</li>
            </ul>
          </div>

          {/* Preparación del equipo */}
          <div>
            <h4 className="text-primary font-semibold mb-3 underline">{t("preparation.title")}</h4>
            <p className="text-foreground/80 text-sm md:text-base leading-relaxed">{t("preparation.content")}</p>
          </div>

          {/* Cierre del viaje */}
          <div>
            <h4 className="text-primary font-semibold mb-3 underline">{t("closing.title")}</h4>
            <p className="text-foreground/80 text-sm md:text-base leading-relaxed">{t("closing.content")}</p>
          </div>

          {/* Quién puede aplicar */}
          <div>
            <h4 className="text-primary font-semibold mb-3 underline">{t("whoCanApply.title")}</h4>
            <p className="text-foreground/80 text-sm md:text-base leading-relaxed">{t("whoCanApply.content")}</p>
          </div>

          {/* Costo del viaje */}
          <div>
            <h4 className="text-primary font-semibold mb-3 underline">{t("cost.title")}</h4>
            <p className="text-foreground/80 text-sm md:text-base leading-relaxed mb-4">{t("cost.intro")}</p>
            <p className="text-foreground/80 text-sm md:text-base leading-relaxed mb-4">
              <strong>{t("cost.fromUS.text")}</strong> {t("cost.fromUS.amount")}. {t("cost.fromUS.details")}
            </p>
            <p className="text-foreground/80 text-sm md:text-base leading-relaxed mb-4">
              <strong>{t("cost.fromLatinAmerica.text")}</strong> {t("cost.fromLatinAmerica.amount")}. {t("cost.fromLatinAmerica.details")}
            </p>
            <p className="text-foreground/80 text-sm md:text-base leading-relaxed">{t("cost.contribution")}</p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="px-5 md:px-20 pb-20 text-center">
        <h3 className="heading-lg text-primary font-serif italic mb-8">{t("ctaTitle")}</h3>
        <Link href="https://thefellowshiptc.churchcenter.com/people/forms/1116260" target="_blank" rel="noopener noreferrer">
          <Button variant="filled" className="text-base px-10 py-4 mx-auto">
            {t("ctaButton")}
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default KenyaTripSection;
